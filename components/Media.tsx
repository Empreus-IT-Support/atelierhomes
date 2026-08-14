import Image from "next/image";

// Wrapper for real photography.
//
// IMPORTANT: images are deliberately NEVER hidden behind a scroll animation.
// An earlier version wrapped these in a clip-path reveal, which left every
// photo invisible whenever the IntersectionObserver did not fire. Animation
// may enhance an image, it must never gate whether it is painted.
//
// Sizing comes from `className` (e.g. "aspect-[4/5] w-full").
// NOTE: current images are licensed stock stand-ins, not client work —
// see CONTENT-NOTES.md. Swap the files in /public/images, keep the names.
export default function Media({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  zoom = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  zoom?: boolean;
}) {
  return (
    <div className={className}>
      <div
        className={`relative h-full w-full overflow-hidden bg-[var(--paper-3)] ${
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
    </div>
  );
}
