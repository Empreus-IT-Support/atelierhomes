import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-[15px] text-paper/70">
            Architecturally considered custom homes, knockdown rebuilds and
            renovations across Canberra and the ACT.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-accent">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-paper/80 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-accent">Get in touch</p>
          <ul className="mt-5 space-y-3 text-[15px] text-paper/80">
            <li>
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>{site.locality}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.legalName} · ABN{" "}
            {site.abn}
          </p>
          <p>{site.licence}</p>
        </div>
      </div>
    </footer>
  );
}
