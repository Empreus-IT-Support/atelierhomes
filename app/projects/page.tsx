import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected custom homes, rebuilds and renovations by Atelier Homes across Canberra and the ACT.",
  alternates: { canonical: "/projects" },
};

// PLACEHOLDER GRID — real projects, photography and captions to come from the
// client. See CONTENT-NOTES.md. Never invent project names, suburbs or dates,
// and never fill these with stock photography.
const placeholders = [
  { n: "01", label: "Custom new home", aspect: "aspect-[4/5]" },
  { n: "02", label: "Knockdown rebuild", aspect: "aspect-[4/3]" },
  { n: "03", label: "Extension & renovation", aspect: "aspect-[4/3]" },
  { n: "04", label: "Custom new home", aspect: "aspect-[4/5]" },
  { n: "05", label: "Outdoor & landscape", aspect: "aspect-[4/5]" },
  { n: "06", label: "Renovation", aspect: "aspect-[4/3]" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        plate="03"
        eyebrow="Projects"
        title="Built work"
        lead="Full project stories and photography are being prepared. In the meantime, we are happy to walk you through completed work in person."
        image="/images/banner-projects.jpg"
        alt="Renovated living room with a slatted timber feature wall and bay window"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[var(--line)] pb-6">
              <span className="label label-muted">
                Index — six projects in preparation
              </span>
              <span className="label label-muted">Canberra, ACT</span>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 90}>
                <figure>
                  <Placeholder className={`${p.aspect} w-full`} />
                  <figcaption className="mt-5 flex items-baseline gap-4 border-t border-[var(--line)] pt-4">
                    <span className="plate">{p.n}</span>
                    <span>
                      <span className="display block text-xl">{p.label}</span>
                      <span className="mt-1 block text-[13px] text-[var(--foreground)]/55">
                        Story coming soon
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 sm:py-32">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="display t-lg">
              The best way to judge a builder is to stand in something they
              built.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[rgba(246,243,236,0.72)]">
              We are happy to arrange a visit to a completed project.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-light">
                Arrange a walkthrough
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
