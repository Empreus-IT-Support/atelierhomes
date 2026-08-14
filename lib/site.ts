// Single source of truth for business details.
// PLACEHOLDER values are flagged in CONTENT-NOTES.md — confirm with client before launch.
export const site = {
  name: "Atelier Homes",
  legalName: "Rexley Building Pty Ltd",
  abn: "23 607 259 763",
  licence: "ACT Builder Licence 2018829",
  url: "https://atelierhomes.com.au",
  phone: "0478 056 023", // PLACEHOLDER — from previous business listing, confirm
  phoneHref: "tel:+61478056023",
  email: "info@atelierhomes.com.au", // PLACEHOLDER — mailbox does not exist yet
  locality: "Canberra, ACT",
  established: 2015,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;
