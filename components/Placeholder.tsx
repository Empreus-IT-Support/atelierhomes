// Elegant stand-in used ONLY on the Projects page, where we have no real
// client work to show. Do not use stock photography here — that would
// fabricate a portfolio. See CONTENT-NOTES.md.
export default function Placeholder({
  label = "Photography to come",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={label}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
