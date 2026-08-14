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

## Missing entirely (client must supply)

- **All photography** — every image is a styled `Placeholder` block
  (`components/Placeholder.tsx`). Swap for `next/image` when photos arrive.

  **Already checked — there is no image library to salvage.** The only photos
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
- [ ] Real photography in place of Placeholder blocks
- [ ] Domain email created; `CONTACT_TO` + Resend domain verified
- [ ] Confirm phone number
- [ ] Point atelierhomes.com.au DNS from Netregistry parking to Vercel
