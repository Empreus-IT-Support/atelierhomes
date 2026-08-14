import Image from "next/image";

// Wrapper for real photography. Sizing/rounding comes from `className`
// (e.g. "aspect-[4/5] w-full rounded-2xl"), the image fills it.
// NOTE: current images are licensed stock stand-ins, not client work —
// see CONTENT-NOTES.md. Swap the files in /public/images, keep the names.
export default function Media({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-paper-2 ${className}`}>
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
}
