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

// PLACEHOLDER GRID — real projects, photography and captions to come from client.
// See CONTENT-NOTES.md. Do not invent project names/suburbs before client sign-off.
const placeholders = [
  { label: "Custom new home", aspect: "aspect-[4/5]" },
  { label: "Knockdown rebuild", aspect: "aspect-[4/3]" },
  { label: "Extension & renovation", aspect: "aspect-[4/3]" },
  { label: "Custom new home", aspect: "aspect-[4/5]" },
  { label: "Outdoor & landscape", aspect: "aspect-[4/5]" },
  { label: "Renovation", aspect: "aspect-[4/3]" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Projects"
        title="Built work"
        lead="A selection of recent homes and renovations across Canberra. Full project stories and photography are being prepared — check back soon, or ask us to walk you through completed work in person."
      />

      <section className="py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <figure className="group">
                  <Placeholder
                    className={`${p.aspect} w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]`}
                  />
                  <figcaption className="mt-4">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent-deep">
                      {p.label}
                    </p>
                    <p className="mt-1 text-[14px] text-foreground/60">
                      Canberra, ACT — full story coming soon
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="mx-auto max-w-xl text-[16px] text-foreground/80">
              The best way to judge a builder is to stand in something they&apos;ve
              built. We&apos;re happy to arrange a visit to a completed project.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-paper transition-opacity hover:opacity-85"
              >
                Arrange a walkthrough
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
