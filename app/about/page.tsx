import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Media from "@/components/Media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Atelier Homes is the custom building arm of Rexley Building Pty Ltd — a licensed Canberra builder with trade roots going back to 2015.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    n: "01",
    title: "Craft over volume",
    text: "We take on a small number of projects at a time so every build gets a builder's full attention — not a project number.",
  },
  {
    n: "02",
    title: "Straight talk",
    text: "Real budgets, real timelines, and bad news early if it ever comes. You will never chase us for an answer.",
  },
  {
    n: "03",
    title: "Detail obsession",
    text: "The difference between a good home and a great one lives in junctions, shadow lines and finish schedules. We sweat those.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        plate="01"
        eyebrow="About"
        title="A small studio approach to building"
        lead="Atelier — a workshop where things are made by hand, with intent. That is how we build homes."
        image="/images/banner-about.jpg"
        alt="Detail of a concrete and timber-clad facade seen from below"
      />

      <section className="py-28 sm:py-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Media
            src="/images/about-craft.jpg"
            alt="Timber-framed interior of a home under construction, light falling down the hallway"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <Reveal>
            <span className="label">Our story</span>
            <h2 className="display t-lg mt-6">
              Trade roots, builder&apos;s discipline
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-[var(--foreground)]/80">
              <p>
                Atelier Homes is the custom building arm of {site.legalName}, a
                Canberra company with trade roots going back to{" "}
                {site.established} — from structural concrete and landscaping
                through to complete homes.
              </p>
              <p>
                That ground-up experience matters. A builder who has personally
                formed, poured and finished the hard parts of a house reads a
                set of drawings differently — and catches the problems on paper
                before they become problems on site.
              </p>
              <p>
                Today we build a handful of homes a year across the ACT: custom
                new builds, knockdown rebuilds and serious renovations, each one
                managed directly by the builder, not handed down a chain.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-dark py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            plate="II"
            eyebrow="What we stand for"
            title="Three things we won't compromise"
            light
          />
          <div className="mt-16 grid gap-px md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 110}>
                <div className="border-t border-[rgba(246,243,236,0.2)] pt-8 md:pr-10">
                  <span className="plate !text-[var(--accent-light)]">{v.n}</span>
                  <h3 className="display mt-5 text-2xl">{v.title}</h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[rgba(246,243,236,0.68)]">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-12 border-t border-[var(--line)] pt-12 sm:grid-cols-3">
              <div>
                <span className="label label-muted">Licence</span>
                <p className="mt-3 text-[15px] text-[var(--foreground)]/85">
                  {site.licence}
                </p>
              </div>
              <div>
                <span className="label label-muted">Entity</span>
                <p className="mt-3 text-[15px] text-[var(--foreground)]/85">
                  {site.legalName}
                  <br />
                  ABN {site.abn}
                </p>
              </div>
              <div>
                <span className="label label-muted">Where we build</span>
                <p className="mt-3 text-[15px] text-[var(--foreground)]/85">
                  Canberra and surrounds — all ACT districts.
                </p>
              </div>
            </div>
            <div className="mt-14">
              <Link href="/contact" className="btn btn-solid">
                Talk to the builder
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
