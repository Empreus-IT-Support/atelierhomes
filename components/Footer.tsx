import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="container-x pb-14 pt-20 sm:pt-28">
        <div className="grid gap-14 border-b border-[rgba(246,243,236,0.18)] pb-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-[rgba(246,243,236,0.66)]">
              Architecturally considered custom homes, knockdown rebuilds and
              renovations across Canberra and the ACT.
            </p>
          </div>

          <div>
            <span className="label label-light">Explore</span>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-sweep text-[15px] text-[rgba(246,243,236,0.8)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="label label-light">Get in touch</span>
            <ul className="mt-6 space-y-3 text-[15px] text-[rgba(246,243,236,0.8)]">
              <li>
                <a href={site.phoneHref} className="link-sweep">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-sweep">
                  {site.email}
                </a>
              </li>
              <li className="text-[rgba(246,243,236,0.55)]">{site.locality}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-[12px] text-[rgba(246,243,236,0.45)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.legalName} · ABN{" "}
            {site.abn}
          </p>
          <p className="label label-light !text-[10px]">{site.licence}</p>
        </div>
      </div>

      {/* oversized wordmark, cropped at the baseline */}
      <div
        className="container-x -mb-[0.16em] overflow-hidden pt-6"
        aria-hidden
      >
        <p className="wordmark">Atelier Homes</p>
      </div>
    </footer>
  );
}
