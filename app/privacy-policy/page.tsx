import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Atelier Homes collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "30 September 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <p>
        Atelier Homes is a custom home builder in Canberra, ACT. This policy
        explains how we handle personal information collected through this
        website, in line with the Australian Privacy Principles in the
        Privacy Act 1988 (Cth).
      </p>
    ),
  },
  {
    heading: "What we collect",
    body: (
      <p>
        The only personal information this website collects is what you choose
        to send us through the contact form: your name, email address, phone
        number and message. Our hosting provider also keeps short-lived
        technical logs (such as IP addresses) for security and to keep the
        site running reliably.
      </p>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <p>
        We use your enquiry details for one purpose: to respond to you about
        your project. Form submissions are delivered to our office email and
        are not stored in a database on this website. We do not use your
        details for marketing lists, and we never sell personal information.
      </p>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        This website does not set advertising cookies or run third-party
        trackers. We use our hosting platform&rsquo;s privacy-friendly
        analytics, which counts page visits in aggregate without cookies and
        without identifying or tracking individual visitors across sites.
      </p>
    ),
  },
  {
    heading: "Who else sees it",
    body: (
      <p>
        Your enquiry passes through the service providers that run this
        website: our hosting platform and our transactional email provider,
        which delivers the message to us over an encrypted connection. These
        providers process the data only to provide those services. Beyond
        that, we disclose personal information only where the law requires it.
      </p>
    ),
  },
  {
    heading: "Access, correction and complaints",
    body: (
      <p>
        You can ask us at any time what personal information we hold about
        you, ask us to correct it, or ask us to delete it by emailing{" "}
        <a href={`mailto:${site.email}`} className="link-sweep font-medium">
          {site.email}
        </a>{" "}
        or calling {site.phone}. If you are not satisfied with our response,
        you can complain to the Office of the Australian Information
        Commissioner (oaic.gov.au).
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        plate="05"
        eyebrow="Your information"
        title="Privacy Policy"
        lead={`How we handle the details you send us through this website. Last updated ${LAST_UPDATED}.`}
        image="/images/banner-about.jpg"
        alt=""
      />
      <section className="py-24 sm:py-32">
        <div className="container-x max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.heading}>
              <div className={i === 0 ? "" : "mt-12"}>
                <span className="label">{s.heading}</span>
                <div className="mt-4 leading-relaxed text-[var(--ink)]/75">
                  {s.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
