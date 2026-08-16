"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3.5 text-[15px] text-[var(--ink)] placeholder:text-[var(--foreground)]/45 outline-none transition-colors focus:border-[var(--accent-deep)]";

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
      <div className="border-t border-[var(--accent)] py-10 text-center">
        <span className="label">Received</span>
        <h3 className="display mt-4 text-3xl">Thank you</h3>
        <p className="mt-4 text-[15px] text-[var(--foreground)]/80">
          Your enquiry has been received. We&apos;ll be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4">
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
          placeholder="Tell us about your project: block, suburb, timeline, ideas *"
          className={inputCls}
        />
      </div>

      {/* Honeypot. Hidden from users and skipped by the tab order; the API
          silently discards any submission that fills it. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-[14px] text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-solid mt-2 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
