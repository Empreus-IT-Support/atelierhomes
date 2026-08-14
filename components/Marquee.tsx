// Slow editorial band. Decorative only — the text is duplicated for a
// seamless loop, so the copy is marked aria-hidden to avoid it being read
// twice by screen readers.
export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <span className="marquee-item" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="marquee-item">
          <span className="display text-[clamp(1.75rem,4.5vw,3.5rem)] whitespace-nowrap">
            {item}
          </span>
          <span
            className="inline-block h-[6px] w-[6px] shrink-0 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </span>
      ))}
    </span>
  );

  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
