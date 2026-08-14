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
};

const services = [
  {
    n: "01",
    title: "Custom new homes",
    text: "A home designed for your block — solar orientation, levels, views and the way your family actually lives. We work alongside your architect or designer, then carry the drawings through to a finished home without value-engineering the soul out of them.",
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
    title: "Knockdown rebuilds",
    text: "The established suburbs of Canberra have the best blocks and the tiredest housing stock. We manage the whole sequence — demolition approvals, site clearing, and a new home built to make the most of land you already own.",
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
    title: "Extensions & renovations",
    text: "Adding to a home is harder than starting fresh — junctions between old and new are where renovations succeed or fail. We bring new-build discipline to extensions, second storeys and whole-home transformations.",
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
    title: "Outdoor & landscape works",
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

      <section className="py-24 sm:py-32">
        <div className="container-x space-y-28 sm:space-y-36">
          {services.map((s, i) => (
            <div
              key={s.title}
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
                </div>
                <h2 className="display t-lg mt-6">{s.title}</h2>
                <p className="mt-6 text-[16px] leading-relaxed text-[var(--foreground)]/80">
                  {s.text}
                </p>
                <ul className="mt-9 space-y-0">
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
              </Reveal>
            </div>
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
