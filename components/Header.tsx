"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-paper/95 backdrop-blur border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Atelier Homes — home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-accent-deep" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="ml-2 rounded-full border border-ink/20 px-5 py-2 text-[13px] font-semibold tracking-wide text-ink transition-colors hover:border-accent-deep hover:text-accent-deep"
          >
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav className="md:hidden border-t hairline bg-paper/98 backdrop-blur">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-semibold uppercase tracking-[0.14em] text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-2 py-3 text-[15px] font-semibold text-accent-deep"
            >
              {site.phone}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
