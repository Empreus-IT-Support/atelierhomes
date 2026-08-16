import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Media from "@/components/Media";
import Marquee from "@/components/Marquee";
import { site } from "@/lib/site";

const services = [
  {
    n: "01",
    title: "Custom new homes",
    text: "One-off homes designed around your block, your brief and the way you actually live.",
    href: "/services",
  },
  {
    n: "02",
    title: "Knockdown rebuilds",
    text: "Love the street but not the house? Demolition through to handover, managed end to end.",
    href: "/services",
  },
  {
    n: "03",
    title: "Extensions & renovations",
    text: "Considered additions that respect what's there and transform how it works.",
    href: "/services",
  },
  {
    n: "04",
    title: "Outdoor & landscape",
    text: "Alfresco living, structural landscaping and the details that tie a home to its site.",
    href: "/services",
  },
];

const steps = [
  {
    n: "01",
    title: "Conversation",
    text: "Your block, budget and brief. Honest advice before any commitment is made.",
  },
  {
    n: "02",
    title: "Design & detail",
    text: "Plans, selections and a transparent proposal. No allowances designed to blow out.",
  },
  {
    n: "03",
    title: "Build",
    text: "One point of contact, a tidy site, and scheduled updates from slab to fit-off.",
  },
  {
    n: "04",
    title: "Handover",
    text: "A walkthrough without surprises, and a builder who still answers the phone after.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="scrim kenburns absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/hero-home.jpg"
            alt="Contemporary Australian home with brick walls, a raked roofline and a hardwood deck"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="container-x w-full pb-14 pt-36">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-14 bg-[rgba(246,243,236,0.45)]" />
              <span className="label label-light">
                Canberra · Custom home builder
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="display t-hero mt-8 max-w-[16ch] !text-[var(--paper)]">
              Homes built like<br />they were <em className="italic !text-[var(--accent-light)]">drawn</em>.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 flex flex-col gap-10 border-t border-[rgba(246,243,236,0.2)] pt-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-md text-[16px] leading-relaxed text-[rgba(246,243,236,0.78)]">
                Architecturally considered new homes, knockdown rebuilds and
                renovations across the ACT, built by a licensed builder with
                trade roots going back to {site.established}.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-light">
                  Start a conversation
                </Link>
                <Link
                  href="/projects"
                  className="label label-light link-sweep !tracking-[0.2em]"
                >
                  View projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="scroll-cue" />
        </div>
      </section>

      {/* ---------- Credentials strip ---------- */}
      <section className="border-b border-[var(--line)] bg-[var(--paper-2)]">
        <div className="container-x grid sm:grid-cols-3">
          {[
            ["Est.", String(site.established), "A decade of trade behind every build"],
            ["Licence", "2018829", "Active ACT builder licence"],
            ["Built in", "Canberra", "Born, based and building here"],
          ].map(([kicker, big, small], i) => (
            <Reveal key={big} delay={i * 110}>
              <div
                className={`py-14 sm:px-10 sm:first:pl-0 ${
                  i > 0 ? "sm:border-l sm:border-[var(--line)]" : ""
                } ${i > 0 ? "border-t border-[var(--line)] sm:border-t-0" : ""}`}
              >
                <span className="label label-muted">{kicker}</span>
                <p className="display mt-4 text-[clamp(2.25rem,4vw,3.25rem)]">
                  {big}
                </p>
                <p className="mt-4 max-w-[24ch] text-[14px] leading-relaxed text-[var(--foreground)]/70">
                  {small}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Marquee band ---------- */}
      <section className="border-b border-[var(--line)] py-10">
        <Marquee
          items={[
            "Custom new homes",
            "Knockdown rebuilds",
            "Extensions",
            "Renovations",
            "Outdoor & landscape",
            "Canberra ACT",
          ]}
        />
      </section>

      {/* ---------- Manifesto ---------- */}
      <section className="py-28 sm:py-36">
        <div className="container-narrow">
          <Reveal>
            <span className="label">Atelier</span>
            <p className="dropcap display t-lg mt-8 !leading-[1.2]">
              A workshop where things are made by hand, with intent.
              <span className="text-[var(--foreground)]/45">
                {" "}That is how we build houses: slowly, deliberately, and
                only a few at a time.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Services index ---------- */}
      <section className="pb-8">
        <div className="container-x">
          <SectionHeading
            plate="I"
            eyebrow="What we do"
            title="Four ways we build"
            lead="Every project gets the same treatment: straight answers, careful detailing, and a schedule we actually keep."
          />

          <div className="mt-16">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-1 items-baseline gap-4 border-t border-[var(--line)] py-9 transition-colors hover:bg-[var(--paper-2)] md:grid-cols-[80px_1fr_1.1fr_40px] md:gap-8 md:px-4"
                >
                  <span className="plate">{s.n}</span>
                  <h3 className="display text-3xl transition-colors group-hover:text-[var(--accent-deep)] sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--foreground)]/72">
                    {s.text}
                  </p>
                  <span className="label hidden justify-self-end transition-transform duration-500 group-hover:translate-x-1 md:block">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        </div>
      </section>

      {/* ---------- Feature split ---------- */}
      <section className="py-28 sm:py-36">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Media
            src="/images/about-craft.jpg"
            alt="Timber-framed interior of a home under construction, light falling down the hallway"
            className="aspect-[4/5] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <Reveal>
            <span className="label">Why us</span>
            <h2 className="display t-lg mt-6">
              The problems get solved on paper, not on site.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-[var(--foreground)]/80">
              <p>
                A builder who has personally formed, poured and finished the
                hard parts of a house reads a set of drawings differently. We
                catch the clashes before they cost you.
              </p>
              <p>
                That means fewer variations, fewer arguments, and a build that
                lands where the budget said it would.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/about" className="btn btn-ghost">
                About the studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process (dark) ---------- */}
      <section className="section-dark py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            plate="II"
            eyebrow="How it works"
            title="A build without the drama"
            light
          />
          <div className="mt-16 grid gap-px md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 110}>
                <div className="border-t border-[rgba(246,243,236,0.2)] pt-8 md:pr-8">
                  <span className="plate !text-[var(--accent-light)]">
                    {step.n}
                  </span>
                  <h3 className="display mt-5 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[rgba(246,243,236,0.68)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-28 sm:py-36">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="plate">III</span>
              <span className="h-px w-12 bg-[var(--line)]" />
              <span className="label">Next step</span>
            </div>
            <h2 className="display t-xl mt-8 max-w-[18ch]">
              Have a block, a plan, or just an idea?
            </h2>
            <div className="mt-12 flex flex-col gap-8 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-[16px] leading-relaxed text-[var(--foreground)]/75">
                Tell us where you&apos;re at. We&apos;ll give you an honest read
                on feasibility, budget and timing. No obligation.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="btn btn-solid">
                  Get in touch
                </Link>
                <a
                  href={site.phoneHref}
                  className="display text-3xl link-sweep"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
