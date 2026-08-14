import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-3 text-4xl sm:text-5xl">{title}</h2>
      {lead ? (
        <p className="mt-5 text-[17px] text-foreground/80">{lead}</p>
      ) : null}
    </Reveal>
  );
}
