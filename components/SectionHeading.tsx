import Reveal from "./Reveal";

export default function SectionHeading({
  plate,
  eyebrow,
  title,
  lead,
  light = false,
}: {
  plate?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        {plate ? <span className="plate">{plate}</span> : null}
        <span
          className="h-px w-12"
          style={{
            background: light ? "rgba(246,243,236,0.35)" : "var(--line)",
          }}
        />
        <span className={`label ${light ? "label-light" : ""}`}>{eyebrow}</span>
      </div>
      <h2 className="display t-lg mt-6 max-w-3xl">{title}</h2>
      {lead ? <p className="lead mt-6 max-w-2xl">{lead}</p> : null}
    </Reveal>
  );
}
