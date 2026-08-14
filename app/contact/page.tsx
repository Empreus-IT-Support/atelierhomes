import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Atelier Homes — custom home builder in Canberra, ACT. Call, email or send an enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Start the conversation"
        lead="Tell us about your block, your brief or just the idea. We reply to every enquiry within one business day."
      />

      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Direct</p>
            <ul className="mt-6 space-y-6">
              <li>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="display mt-1 block text-3xl text-ink hover:text-accent-deep"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-xl text-ink hover:text-accent-deep"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
                  Based in
                </p>
                <p className="mt-1 text-xl text-ink">{site.locality}</p>
              </li>
            </ul>

            <div className="mt-12 rounded-2xl border hairline bg-paper-2 p-7">
              <p className="text-[14px] text-foreground/75">
                {site.legalName} · ABN {site.abn}
                <br />
                {site.licence}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
