import type { Metadata } from "next";
import Link from "next/link";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[78svh] items-center pt-[86px]">
      <div className="container-x">
        <span className="plate">404</span>
        <h1 className="display t-xl mt-6 max-w-[16ch]">
          This page has been demolished.
        </h1>
        <p className="lead mt-6 max-w-lg">
          The page you were after does not exist, or it moved. Everything else
          is still standing.
        </p>

        <div className="mt-12 max-w-xl border-t border-[var(--line)]">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-5 border-b border-[var(--line)] py-4 transition-colors hover:text-[var(--accent-deep)]"
            >
              <span className="plate">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-2xl">{item.label}</span>
              <span className="label ml-auto transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
