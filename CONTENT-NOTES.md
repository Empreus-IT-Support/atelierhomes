# Content notes — everything that needs client input before launch

This is a **greenfield build**: atelierhomes.com.au never had a website and the
business has no online content to draw from (research 2026-08-14). All copy on
this site is drafted from verified public records plus plausible placeholder
text. The client must review everything.

## Verified facts used in the site (safe, from public records)

- Legal entity: Rexley Building Pty Ltd, ABN 23 607 259 763 (active, GST-registered)
- ACT Builder Licence 2018829 (active, per Access Canberra register via TradieVerify)
- Company registered 24 July 2015 (as GC Construction and Landscaping Pty Ltd;
  renamed Oak & Stone Constructions 2023, then Rexley Building Dec 2023)
- Based Giralang / Belconnen, Canberra ACT
- Contact: John Costanzo

## PLACEHOLDER — must confirm with client

| Item | Currently on site | Source / risk |
| --- | --- | --- |
| Phone `0478 056 023` | header, footer, contact | From the old GC Construction Facebook page (dormant since 2016) — may be stale |
| Email `info@atelierhomes.com.au` | footer, contact, form delivery | Mailbox does not exist yet — needs domain email setup |
| Services list (custom homes / knockdown rebuilds / extensions / landscaping) | home, services | Inferred from company history — confirm actual offering |
| "Handful of homes a year", process copy, values copy | about, home | Drafted marketing copy — client to approve or rewrite |
| Established 2015 | home, about | Company registration date — but under a former name; confirm client is happy to claim it |

## Photography — LICENSED STOCK STAND-INS, NOT CLIENT WORK

⚠️ **Every photo on this site is licensed stock, not a Rexley/Atelier build.**
They are mood/atmosphere imagery so the site reads as finished for the pitch.
**Nothing is captioned or implied as a completed Atelier Homes project**, and
the Projects page deliberately still shows `Placeholder` blocks rather than
stock homes — do not "finish" it with stock, that would fabricate a portfolio.

Source: Unsplash (free commercial use, no attribution required). All files in
`/public/images`, rendered via `components/Media.tsx`. To replace, drop the
client's photo in with the same filename — no code change needed.

| File | Unsplash ID | Used on |
| --- | --- | --- |
| `hero-home.jpg` | photo-1666004095305-300183c896ed | Home hero |
| `about-craft.jpg` | photo-1715760374522-a609a0c2f65e | About |
| `service-custom-homes.jpg` | photo-1644123074050-5ac5f8996b79 | Services 01 |
| `service-knockdown-rebuild.jpg` | photo-1676802540678-2dceb1820113 | Services 02 |
| `service-renovations.jpg` | photo-1682888813913-e13f18692019 | Services 03 |
| `service-outdoor.jpg` | photo-1734079692147-c6fc9438a2d0 | Services 04 |

Deliberately avoided CGI/AI architectural renders — Unsplash's "modern house"
results are full of them and a builder would spot them instantly. Every image
above was visually checked and is a real photograph; the hero and Services 01
are identifiably Australian.

## Missing entirely (client must supply)

- **Real project photography** — the six stock images above must be replaced
  with the client's own work before launch, and the Projects page still has
  no real content at all.

  **Already checked — there is no client image library to salvage.** The only photos
  that have ever existed publicly are 9 on the dormant GC Construction
  Facebook page, and none are usable:
  - 8 from 29 Nov 2016 — phone snaps of a slab pour (reo mesh, pump truck,
    wet concrete). Construction-stage, not finished homes. Max ~960px, soft
    and blown out. Two contain **identifiable faces** of workers, and one
    shows a third party's branded truck (Monaro Concrete Pumping).
  - 1 from 23 Aug 2022 — a low-res photo of the **old GC logo**, i.e. the
    previous brand, not Atelier Homes.

  Wrong subject, wrong brand, wrong quality, plus privacy issues. Do not use
  them. Client photography is a hard blocker for launch.
- **Projects** — the projects page is a clearly-labelled placeholder grid.
  No project names, suburbs or dates were invented. Need 4–8 real projects
  with photos and one-paragraph stories.
- **Testimonials** — none included (none exist publicly; do not fabricate).
- **Logo** — current logo is typographic (`components/Logo.tsx`).
- **About/team details** — who is on the team, licence holder bio, photo.

## Before go-live

- [ ] Client reviews all copy
- [ ] **Replace all six stock images with the client's own photography**
- [ ] Real projects + photography on the Projects page
- [ ] Domain email created; `CONTACT_TO` + Resend domain verified
- [ ] Confirm phone number
- [ ] Point atelierhomes.com.au DNS from Netregistry parking to Vercel
