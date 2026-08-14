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
    title: "Craft over volume",
    text: "We take on a small number of projects at a time so every build gets a builder's full attention — not a project number.",
  },
  {
    title: "Straight talk",
    text: "Real budgets, real timelines, and bad news early if it ever comes. You'll never chase us for an answer.",
  },
  {
    title: "Detail obsession",
    text: "The difference between a good home and a great one lives in junctions, shadow lines and finish schedules. We sweat those.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="A small studio approach to building"
        lead="Atelier — a workshop where things are made by hand, with intent. That's how we build homes."
      />

      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Media
              src="/images/about-craft.jpg"
              alt="Timber-framed interior of a home under construction, light falling down the hallway"
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our story</p>
            <h2 className="display mt-3 text-4xl">
              Trade roots, builder&apos;s discipline
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-foreground/80">
              <p>
                Atelier Homes is the custom building arm of {site.legalName},
                a Canberra company with trade roots going back to{" "}
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
                Today we build a handful of homes a year across the ACT:
                custom new builds, knockdown rebuilds and serious renovations,
                each one managed directly by the builder, not handed down a
                chain.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title="Three things we won't compromise" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border hairline bg-paper p-8">
                  <h3 className="text-2xl">{v.title}</h3>
                  <p className="mt-3 text-[15px] text-foreground/75">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border hairline bg-paper p-10 sm:p-14">
              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <p className="eyebrow">Licence</p>
                  <p className="mt-2 text-[15px] text-foreground/80">{site.licence}</p>
                </div>
                <div>
                  <p className="eyebrow">Entity</p>
                  <p className="mt-2 text-[15px] text-foreground/80">
                    {site.legalName}
                    <br />
                    ABN {site.abn}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Where we build</p>
                  <p className="mt-2 text-[15px] text-foreground/80">
                    Canberra and surrounds — all ACT districts.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-paper transition-opacity hover:opacity-85"
                >
                  Talk to the builder
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
