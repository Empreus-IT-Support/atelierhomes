import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Media from "@/components/Media";
import { site } from "@/lib/site";

const services = [
  {
    title: "Custom new homes",
    text: "One-off homes designed around your block, your brief and the way you actually live — built once, built properly.",
  },
  {
    title: "Knockdown rebuilds",
    text: "Love the street but not the house? We manage demolition through to handover so you can stay in the suburb you chose.",
  },
  {
    title: "Extensions & renovations",
    text: "Considered additions and whole-home renovations that respect what's there and transform how it works.",
  },
  {
    title: "Outdoor & landscape works",
    text: "Alfresco living, structural landscaping and the finishing details that tie a home to its site.",
  },
];

const steps = [
  {
    n: "01",
    title: "Conversation",
    text: "We start with your block, budget and brief — honest advice before any commitment.",
  },
  {
    n: "02",
    title: "Design & detail",
    text: "Plans, selections and a transparent fixed proposal. No allowances designed to blow out.",
  },
  {
    n: "03",
    title: "Build",
    text: "One point of contact, a tidy site and scheduled updates from slab to lock-up to fit-off.",
  },
  {
    n: "04",
    title: "Handover & beyond",
    text: "A walkthrough without surprises, and a builder who still answers the phone afterwards.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper-2 pt-[72px]">
        <div className="container-x grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">Canberra custom home builder</p>
            <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Homes built like they were drawn.
            </h1>
            <p className="mt-7 max-w-xl text-[17px] text-foreground/80">
              Atelier Homes crafts architecturally considered new homes,
              knockdown rebuilds and renovations across the ACT — with the
              care of a small team and the discipline of a licensed builder
              who has been at it since {site.established}.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-paper transition-opacity hover:opacity-85"
              >
                Start a conversation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full border border-ink/25 px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-accent-deep hover:text-accent-deep"
              >
                View projects
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <Media
                src="/images/hero-home.jpg"
                alt="Contemporary Australian home with brick walls, raked roofline and a hardwood deck"
                className="aspect-[4/5] w-full rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border hairline bg-paper px-6 py-5 shadow-sm sm:block">
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent-deep">
                  {site.licence}
                </p>
                <p className="mt-1 text-[13px] text-foreground/70">
                  Licensed &amp; insured · {site.locality}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b hairline">
        <div className="container-x grid gap-8 py-14 sm:grid-cols-3">
          {[
            ["Est. " + site.established, "A decade of trade experience behind every build"],
            ["Licensed", site.licence],
            ["Local", "Canberra born, Canberra based, Canberra built"],
          ].map(([big, small], i) => (
            <Reveal key={big} delay={i * 100}>
              <p className="display text-3xl">{big}</p>
              <p className="mt-2 text-[14px] text-foreground/70">{small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Four ways we build"
            lead="Every project gets the same treatment: straight answers, careful detailing and a build schedule we actually keep."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border hairline bg-paper p-8 transition-colors hover:border-accent-deep/50">
                  <span className="display text-[15px] text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-foreground/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/services"
              className="text-[14px] font-semibold uppercase tracking-[0.14em] text-accent-deep hover:underline"
            >
              More about our services →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper-2 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title="A build without the drama"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <p className="display text-5xl text-accent/70">{step.n}</p>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 text-[14px] text-foreground/75">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
              <span
                aria-hidden
                className="watermark absolute -top-6 left-1/2 -translate-x-1/2 text-[180px] !text-paper/5"
              >
                Atelier
              </span>
              <h2 className="display relative text-4xl text-paper sm:text-5xl">
                Have a block, a plan, or just an idea?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-[16px] text-paper/75">
                Tell us where you&apos;re at. We&apos;ll give you an honest read on
                feasibility, budget and timing — no obligation.
              </p>
              <div className="relative mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-paper px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-90"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
