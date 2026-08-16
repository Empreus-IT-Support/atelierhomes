import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO || site.email;
const FROM =
  process.env.CONTACT_FROM || "Atelier Homes Website <onboarding@resend.dev>";

const MAX_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 20_000;

// In-memory limiter. Good enough for a single-instance brochure site; it
// resets on redeploy and is per-instance. Move to Upstash/KV if the site is
// ever scaled out.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Keep header-injection payloads out of the Subject line.
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  // Rate limit first, so the endpoint cannot be hammered even while email
  // is unconfigured.
  if (rateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "Too many enquiries from this connection. Please try later." },
      { status: 429 }
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message too long." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Checked before the
  // config gate so bot traffic is dropped whatever the deployment state.
  if (String(body.company ?? "").trim() !== "") {
    // Look successful so bots do not learn to adapt.
    return NextResponse.json({ ok: true });
  }

  const name = singleLine(String(body.name ?? "")).slice(0, 120);
  const email = singleLine(String(body.email ?? "")).slice(0, 200);
  const phone = singleLine(String(body.phone ?? "")).slice(0, 40);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Config gate last: the input is known good by this point, so a missing key
  // is reported as a service problem rather than masking a user error.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please call us instead." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Website enquiry from ${name}`,
    html: `
      <h2>New enquiry from atelierhomes.com.au</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone) || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${esc(message).replaceAll("\n", "<br/>")}</p>
    `,
    text: [
      "New enquiry from atelierhomes.com.au",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your enquiry right now. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
