import Reveal from "./Reveal";

export default function PageBanner({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-paper-2 pt-[72px]">
      <span
        aria-hidden
        className="watermark absolute -bottom-8 right-0 hidden text-[200px] lg:block"
      >
        {eyebrow}
      </span>
      <div className="container-x relative py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 max-w-3xl text-5xl sm:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-[17px] text-foreground/80">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
