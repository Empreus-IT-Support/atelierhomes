"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-accent-deep";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-accent-deep/30 bg-paper-2 p-8 text-center">
        <h3 className="text-2xl">Thank you</h3>
        <p className="mt-3 text-[15px] text-foreground/80">
          Your enquiry has been received. We&apos;ll be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            placeholder="Your name *"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            maxLength={40}
            placeholder="Phone"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="Email address *"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Tell us about your project — block, suburb, timeline, ideas *"
          className={inputCls}
        />
      </div>

      {status === "error" ? (
        <p className="text-[14px] text-red-700">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
