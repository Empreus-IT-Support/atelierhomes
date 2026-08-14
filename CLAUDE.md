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
  (files in `/public/images`), including on Projects — which therefore carries
  a visible "indicative imagery" line that must stay until real photos land
- **Never wrap `<Media>` in `<Reveal>`.** `Reveal` sets `opacity: 0` until an
  observer fires; doing this twice left every photo invisible. Images must
  paint regardless of JS — animation may enhance, never gate visibility
- **`CONTENT-NOTES.md` is the source of truth for what is placeholder vs verified —
  read it before editing copy, and keep it updated**
- Design language is an **architectural monograph / drawing set**: full-bleed
  dark image banner opening every page, oversized Fraunces serif headlines,
  hairline rules, mono "plate" numbers (01/02, I/II) as the technical voice,
  and dark `.section-dark` bands for rhythm
- Fonts: Fraunces (display serif) + Figtree (body) + IBM Plex Mono (labels).
  Warm paper palette, bronze accent — all tokens in `app/globals.css`
- Use the utility classes (`.display`, `.t-hero/.t-xl/.t-lg/.t-md`, `.label`,
  `.plate`, `.btn`, `.rule`, `.link-sweep`) rather than ad-hoc Tailwind type
- The header is transparent with light text over the banner and inverts to
  solid paper on scroll — every page therefore needs a dark banner up top
- No fabricated testimonials, project names, or awards. Ever.
