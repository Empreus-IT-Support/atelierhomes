import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom new homes, knockdown rebuilds, extensions and renovations, and structural landscaping across Canberra and the ACT.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    images: [{ url: "/images/banner-services.jpg", width: 1200, height: 630 }],
  },
};

const services = [
  {
    n: "01",
    slug: "custom-new-homes",
    title: "Custom new homes",
    short: "Designed for your block, not adapted to it",
    text: "A home designed for your block: solar orientation, levels, views and the way your family actually lives. We work alongside your architect or designer, then carry the drawings through to a finished home without value-engineering the soul out of them.",
    points: [
      "Architect-designed builds",
      "Difficult and sloping blocks",
      "Energy-efficient construction",
    ],
    image: "/images/service-custom-homes.jpg",
    alt: "Entry of a dark brick home with hardwood deck steps and native planting",
  },
  {
    n: "02",
    slug: "knockdown-rebuilds",
    title: "Knockdown rebuilds",
    short: "Keep the street, replace the house",
    text: "The established suburbs of Canberra have the best blocks and the tiredest housing stock. We manage the whole sequence: demolition approvals, site clearing, and a new home built to make the most of land you already own.",
    points: [
      "Demolition to handover",
      "Established suburb specialists",
      "Dual occupancy potential",
    ],
    image: "/images/service-knockdown-rebuild.jpg",
    alt: "New roof trusses standing against a clear blue sky",
  },
  {
    n: "03",
    slug: "extensions-renovations",
    title: "Extensions & renovations",
    short: "Where old meets new, done properly",
    text: "Adding to a home is harder than starting fresh. Junctions between old and new are where renovations succeed or fail, so we bring new-build discipline to extensions, second storeys and whole-home transformations.",
    points: [
      "Second storey additions",
      "Living and kitchen extensions",
      "Whole-home renovations",
    ],
    image: "/images/service-renovations.jpg",
    alt: "Renovated open-plan kitchen with a stone island bench and pendant lighting",
  },
  {
    n: "04",
    slug: "outdoor-landscape",
    title: "Outdoor & landscape works",
    short: "The site finished to the same standard",
    text: "Our roots are in structural landscaping and concrete, and it shows in how we finish a site: alfresco areas, retaining, driveways and hardscaping built with the same care as the house itself.",
    points: [
      "Alfresco and outdoor living",
      "Retaining and structural landscaping",
      "Driveways and hardscape",
    ],
    image: "/images/service-outdoor.jpg",
    alt: "Timber deck meeting a dry-stone retaining wall and established garden beds",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        plate="02"
        eyebrow="Services"
        title="What we build"
        lead="Four services, one standard. Whatever the scale, you deal directly with the builder from first conversation to handover."
        image="/images/banner-services.jpg"
        alt="Timber screen against a curved concrete structure"
      />

      {/* Contents index */}
      <section className="border-b border-[var(--line)]">
        <div className="container-x py-10">
          <Reveal>
            <span className="label label-muted">Contents</span>
          </Reveal>
          <div className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex items-baseline gap-5 border-t border-[var(--line-soft)] py-4 transition-colors hover:text-[var(--accent-deep)]"
              >
                <span className="plate">{s.n}</span>
                <span className="display text-xl">{s.title}</span>
                <span className="label ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ↓
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-28 sm:space-y-40">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="relative scroll-mt-32"
            >
              {/* oversized numeral sitting behind the block */}
              <span
                aria-hidden
                className="watermark absolute -top-14 right-0 hidden text-[13rem] lg:block"
              >
                {s.n}
              </span>

              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Media
                  src={s.image}
                  alt={s.alt}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />

                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="plate">{s.n}</span>
                    <span className="h-px w-12 bg-[var(--line)]" />
                    <span className="label label-muted">{s.short}</span>
                  </div>

                  <h2 className="display t-lg mt-6">{s.title}</h2>

                  <p className="mt-6 text-[16px] leading-relaxed text-[var(--foreground)]/80">
                    {s.text}
                  </p>

                  <ul className="mt-9">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-4 border-t border-[var(--line-soft)] py-3.5 text-[14.5px] text-[var(--foreground)]/85"
                      >
                        <span className="h-[5px] w-[5px] shrink-0 translate-y-[-2px] rounded-full bg-[var(--accent)]" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Link
                      href="/contact"
                      className="label link-sweep !tracking-[0.2em]"
                    >
                      Enquire about {s.title.toLowerCase()} →
                    </Link>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-dark py-24 sm:py-32">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="label label-light">Renovate or rebuild?</span>
            <h2 className="display t-lg mt-7">Not sure which path fits?</h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[rgba(246,243,236,0.72)]">
              It is the most common question we get, and the honest answer
              depends on the block. Ask us before you commit either way.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-light">
                Ask the question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
