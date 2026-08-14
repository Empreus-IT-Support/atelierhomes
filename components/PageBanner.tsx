import Image from "next/image";
import Reveal from "./Reveal";

export default function PageBanner({
  plate,
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  plate: string;
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden">
      <div className="scrim absolute inset-0 -z-10">
        <Image src={image} alt={alt} fill priority className="object-cover" sizes="100vw" />
      </div>

      <div className="container-x w-full pb-16 pt-40 sm:pb-20">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="plate !text-[var(--accent-light)]">{plate}</span>
            <span className="h-px w-12 bg-[rgba(246,243,236,0.4)]" />
            <span className="label label-light">{eyebrow}</span>
          </div>
          <h1 className="display t-xl mt-7 max-w-4xl !text-[var(--paper)]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[rgba(246,243,236,0.8)]">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
