export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-2 select-none">
      <span
        className="font-display text-[22px] leading-none tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: light ? "#faf8f3" : "var(--ink)",
        }}
      >
        Atelier
      </span>
      <span
        className="text-[11px] font-semibold uppercase leading-none"
        style={{ letterSpacing: "0.3em", color: "var(--accent-deep)" }}
      >
        Homes
      </span>
    </span>
  );
}
