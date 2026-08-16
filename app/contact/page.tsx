import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Atelier Homes, custom home builder in Canberra, ACT. Call, email or send an enquiry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    images: [{ url: "/images/service-outdoor.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        plate="04"
        eyebrow="Contact"
        title="Start the conversation"
        lead="Tell us about your block, your brief, or just the idea. We reply to every enquiry within one business day."
        image="/images/service-outdoor.jpg"
        alt="Timber deck meeting a dry-stone retaining wall and established garden beds"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <span className="label">Direct</span>

            <ul className="mt-8">
              <li className="border-t border-[var(--line)] py-6">
                <span className="label label-muted">Phone</span>
                <a
                  href={site.phoneHref}
                  className="display link-sweep mt-2 block text-3xl"
                >
                  {site.phone}
                </a>
              </li>
              <li className="border-t border-[var(--line)] py-6">
                <span className="label label-muted">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="link-sweep mt-2 block text-lg text-[var(--ink)]"
                >
                  {site.email}
                </a>
              </li>
              <li className="border-y border-[var(--line)] py-6">
                <span className="label label-muted">Based in</span>
                <p className="mt-2 text-lg text-[var(--ink)]">{site.locality}</p>
              </li>
            </ul>

            <p className="mt-10 text-[13.5px] leading-relaxed text-[var(--foreground)]/60">
              {site.legalName} · ABN {site.abn}
              <br />
              {site.licence}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-[var(--paper-2)] p-8 sm:p-12">
              <h2 className="display t-md">Send an enquiry</h2>
              <p className="mt-3 text-[14.5px] text-[var(--foreground)]/70">
                The more you can tell us about the block and the brief, the more
                useful our first reply will be.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
