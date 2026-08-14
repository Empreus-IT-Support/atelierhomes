# Atelier Homes — atelierhomes.com.au

New-build website (no predecessor site) for a Canberra custom home builder.
Owner: Rexley Building Pty Ltd (John Costanzo), ABN 23 607 259 763,
ACT Builder Licence 2018829.

## Stack

- Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Resend for the contact form
- Dev server: port 3000 (`npm run dev`)
- Deploy target: Vercel

## Conventions

- Business details live in `lib/site.ts` — never hardcode phone/email/ABN in pages
- Photos are **licensed stock stand-ins** rendered via `components/Media.tsx`
  (files in `/public/images`). The Projects page intentionally still uses
  `components/Placeholder.tsx` — never fill it with stock, that would fake a portfolio
- **`CONTENT-NOTES.md` is the source of truth for what is placeholder vs verified —
  read it before editing copy, and keep it updated**
- Fonts: Fraunces (display serif) + Figtree (body), warm light palette,
  bronze accent — tokens in `app/globals.css`
- No fabricated testimonials, project names, or awards. Ever.
