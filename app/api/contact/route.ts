import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || site.email;
const FROM =
  process.env.CONTACT_FROM || "Atelier Homes Website <onboarding@resend.dev>";

function esc(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please call us instead." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 40);
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

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Website enquiry — ${name}`,
    html: `
      <h2>New enquiry from atelierhomes.com.au</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone) || "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${esc(message).replaceAll("\n", "<br/>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: "Could not send your enquiry right now. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
