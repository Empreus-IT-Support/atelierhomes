import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected custom homes, rebuilds and renovations by Atelier Homes across Canberra and the ACT.",
  alternates: { canonical: "/projects" },
};

// IMAGERY IS INDICATIVE, NOT CLIENT WORK. These are licensed stock photos
// standing in until Atelier's own project photography arrives — see
// CONTENT-NOTES.md. The page states this plainly below, and captions
// describe the TYPE of work only. Never add invented project names,
// suburbs, dates, values or client quotes.
const projects = [
  {
    n: "01",
    label: "Heritage renovation",
    note: "Brick bungalow, restored and extended",
    image: "/images/project-01.jpg",
    alt: "Australian brick bungalow with a terracotta tile roof, bullnose verandah and white picket fence",
    aspect: "aspect-[4/3]",
  },
  {
    n: "02",
    label: "Custom new home",
    note: "Face brick, considered detailing",
    image: "/images/project-02.jpg",
    alt: "Modern face-brick home with deep window reveals against a blue sky",
    aspect: "aspect-[4/5]",
  },
  {
    n: "03",
    label: "Rear extension",
    note: "Kitchen and living opening to the garden",
    image: "/images/project-03.jpg",
    alt: "Galley kitchen in timber and stone opening through bifold doors to a garden",
    aspect: "aspect-[4/5]",
  },
  {
    n: "04",
    label: "Knockdown rebuild",
    note: "New structure taking shape on site",
    image: "/images/project-04.jpg",
    alt: "Timber roof framing of a new house under construction against a blue sky",
    aspect: "aspect-[4/5]",
  },
  {
    n: "05",
    label: "Outdoor & landscape",
    note: "Paving, screening and planting",
    image: "/images/project-05.jpg",
    alt: "Landscaped courtyard with stone paving, timber screen fencing and clipped planting",
    aspect: "aspect-[4/3]",
  },
  {
    n: "06",
    label: "Kitchen renovation",
    note: "Joinery, stone and fitted appliances",
    image: "/images/project-06.jpg",
    alt: "Renovated kitchen with dark shaker joinery, brass hardware and a stone benchtop",
    aspect: "aspect-[4/3]",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        plate="03"
        eyebrow="Projects"
        title="Built work"
        lead="The kind of work we take on across Canberra and the ACT — from heritage renovations to complete rebuilds."
        image="/images/banner-projects.jpg"
        alt="Renovated living room with a slatted timber feature wall and bay window"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-[var(--line)] pb-6">
              <span className="label label-muted">Index — selected work</span>
              <span className="label label-muted">Canberra, ACT</span>
            </div>
            <p className="mt-5 max-w-2xl text-[13.5px] leading-relaxed text-[var(--foreground)]/55">
              Imagery on this page is indicative of the work we do. Photography
              of our own completed projects is currently being prepared.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {/* Deliberately NOT wrapped in <Reveal>: that sets opacity 0 until
                an observer fires, which is what previously left the grid
                blank. Images always paint. */}
            {projects.map((p) => (
              <figure key={p.n}>
                <Media
                  src={p.image}
                  alt={p.alt}
                  className={`${p.aspect} w-full`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <figcaption className="mt-5 flex items-baseline gap-4 border-t border-[var(--line)] pt-4">
                  <span className="plate">{p.n}</span>
                  <span>
                    <span className="display block text-xl">{p.label}</span>
                    <span className="mt-1 block text-[13px] text-[var(--foreground)]/55">
                      {p.note}
                    </span>
                  </span>
                </figcaption>
              </figure>
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
