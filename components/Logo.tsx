export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none select-none">
      <span
        className="display text-[26px] tracking-[-0.03em]"
        style={{ color: light ? "var(--paper)" : "var(--ink)" }}
      >
        Atelier
      </span>
      <span
        className="mt-[3px] text-[9.5px] font-medium uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.42em",
          color: light ? "rgba(246,243,236,0.6)" : "var(--accent-deep)",
        }}
      >
        Homes
      </span>
    </span>
  );
}
