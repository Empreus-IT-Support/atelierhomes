import Image from "next/image";
import Reveal from "./Reveal";

// Wrapper for real photography. Sizing/rounding comes from `className`
// (e.g. "aspect-[4/5] w-full"), the image fills it.
// NOTE: current images are licensed stock stand-ins, not client work —
// see CONTENT-NOTES.md. Swap the files in /public/images, keep the names.
export default function Media({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  zoom = true,
  reveal = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  zoom?: boolean;
  reveal?: boolean;
}) {
  const inner = (
    <div
      className={`relative h-full w-full overflow-hidden bg-paper-2 ${
        zoom ? "media-zoom" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );

  if (!reveal) return <div className={className}>{inner}</div>;

  return (
    <Reveal variant="img" className={className}>
      {inner}
    </Reveal>
  );
}
