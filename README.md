# Atelier Homes

Website for **Atelier Homes**, the custom building arm of Rexley Building Pty Ltd,
a licensed builder in Canberra, ACT.

Next.js 16 (App Router, Turbopack) with Tailwind CSS 4 and TypeScript.

## Status: pre-launch

This is a greenfield build. `atelierhomes.com.au` has never hosted a site, so
there was nothing to migrate and no existing content to draw on.

> **All photography is licensed stock, not the client's own work.**
> All copy is drafted and awaiting client approval.
> Read [CONTENT-NOTES.md](./CONTENT-NOTES.md) before changing copy or images.
> It records what is verified from public records versus what is placeholder.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment

Copy `.env.example` to `.env.local` and fill it in. Nothing is required to run
the site; without a Resend key the contact form validates normally and returns
a friendly "not configured" message instead of sending.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | To send mail | Resend API key |
| `CONTACT_TO` | Recommended | Inbox that receives enquiries |
| `CONTACT_FROM` | After domain verification | Sender address, must be a Resend-verified domain |

## Routes

`/` `/about` `/services` `/projects` `/contact`, plus `robots.txt`,
`sitemap.xml`, `site.webmanifest` and a custom 404.

## Notes for contributors

- Conventions and design-system rules live in [CLAUDE.md](./CLAUDE.md).
- **Never wrap `<Media>` in `<Reveal>`.** `Reveal` sets `opacity: 0` until an
  IntersectionObserver fires; doing so has twice left every image invisible.
  Animation may enhance an image, it must never gate whether it paints.
- Security headers and CSP are configured in `next.config.ts`.

## Deployment

Vercel, from the `main` branch of this repository. Set the environment
variables above in the Vercel project before going live, and point
`atelierhomes.com.au` at Vercel (it currently sits on Netregistry parking
nameservers).
