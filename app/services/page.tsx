import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom new homes, knockdown rebuilds, extensions and renovations, and structural landscaping across Canberra and the ACT.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Custom new homes",
    text: "A home designed for your block — solar orientation, levels, views and the way your family actually lives. We work alongside your architect or designer (or introduce you to ours), then carry the drawings through to a finished home without value-engineering the soul out of them.",
    points: ["Architect-designed builds", "Difficult and sloping blocks", "Energy-efficient construction"],
  },
  {
    title: "Knockdown rebuilds",
    text: "The established suburbs of Canberra have the best blocks and the tiredest housing stock. We manage the whole sequence — demolition approvals, site clearing, and a new home built to make the most of land you already own.",
    points: ["Demolition to handover", "Established suburb specialists", "Dual occupancy potential"],
  },
  {
    title: "Extensions & renovations",
    text: "Adding to a home is harder than starting fresh — junctions between old and new are where renovations succeed or fail. We bring new-build discipline to extensions, second storeys and whole-home transformations.",
    points: ["Second storey additions", "Living and kitchen extensions", "Whole-home renovations"],
  },
  {
    title: "Outdoor & landscape works",
    text: "Our roots are in structural landscaping and concrete, and it shows in how we finish a site: alfresco areas, retaining, driveways and hardscaping built with the same care as the house itself.",
    points: ["Alfresco and outdoor living", "Retaining and structural landscaping", "Driveways and hardscape"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="What we build"
        lead="Four services, one standard. Whatever the scale, you deal directly with the builder from first conversation to handover."
      />

      <section className="py-24">
        <div className="container-x space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <Placeholder
                  className="aspect-[3/2] w-full rounded-2xl"
                  label={`${s.title} — photography to come`}
                />
              </Reveal>
              <Reveal delay={120}>
                <span className="display text-[15px] text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-3 text-4xl">{s.title}</h2>
                <p className="mt-5 text-[16px] text-foreground/80">{s.text}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-foreground/80">
                      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent-deep" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="display text-4xl">Not sure which path fits?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] text-foreground/80">
              Renovate or rebuild is the most common question we get — and the
              honest answer depends on the block. Ask us before you commit
              either way.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-paper transition-opacity hover:opacity-85"
              >
                Ask the question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
