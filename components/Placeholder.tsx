// Elegant stand-in block used everywhere a client photo will eventually go.
// Swap for <Image> once photography is supplied — see CONTENT-NOTES.md.
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
