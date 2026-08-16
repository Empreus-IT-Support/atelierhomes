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
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page opens with a dark full-bleed banner, so the bar starts light
  // and only inverts once it sits over paper.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid
          ? "border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[86px] items-center justify-between">
        <Link href="/" aria-label="Atelier Homes, home">
          <Logo light={!solid} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="nav-link text-[11px] font-medium uppercase transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.2em",
                  color: solid
                    ? active
                      ? "var(--accent-deep)"
                      : "var(--ink)"
                    : active
                      ? "var(--paper)"
                      : "rgba(246,243,236,0.78)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className={`btn ${solid ? "btn-ghost" : "btn-light"} !px-6 !py-3`}
          >
            {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-[1.5px] w-7 transition-all duration-300"
              style={{
                background: solid ? "var(--ink)" : "var(--paper)",
                transform:
                  open && i === 0
                    ? "translateY(7.5px) rotate(45deg)"
                    : open && i === 2
                      ? "translateY(-7.5px) rotate(-45deg)"
                      : undefined,
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--line)] bg-[var(--paper)] md:hidden">
          <div className="container-x flex flex-col py-6">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-[var(--line-soft)] py-4"
              >
                <span className="plate">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-3xl">{item.label}</span>
              </Link>
            ))}
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="label mt-6"
            >
              {site.phone}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
