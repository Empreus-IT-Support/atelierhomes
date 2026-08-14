import type { Metadata } from "next";
import { Fraunces, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const serif = Fraunces({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
});

const sans = Figtree({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono-label",
  display: "swap",
});

const DESCRIPTION =
  "Atelier Homes is a Canberra custom home builder crafting architecturally considered new homes, knockdown rebuilds and renovations across the ACT. Licensed, local and detail-obsessed since 2015.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Atelier Homes — Custom Home Builder, Canberra ACT",
    template: "%s — Atelier Homes",
  },
  description: DESCRIPTION,
  applicationName: "Atelier Homes",
  authors: [{ name: "Atelier Homes" }],
  creator: "Empreus IT Support",
  keywords: [
    "custom home builder",
    "Canberra builder",
    "knockdown rebuild",
    "home renovations",
    "extensions",
    "new home construction",
    "ACT licensed builder",
    "Belconnen",
    "Canberra",
    "Atelier Homes",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Atelier Homes",
    title: "Atelier Homes — Custom Home Builder, Canberra ACT",
    description: DESCRIPTION,
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: "Atelier Homes — Custom Home Builder, Canberra ACT",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: DESCRIPTION,
  telephone: "+61478056023",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canberra",
    addressRegion: "ACT",
    addressCountry: "AU",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  foundingDate: String(site.established),
  slogan: "Homes built like they were drawn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        {/* Reveal animations hide content until observed. Without JS there is
            no observer, so paint everything immediately rather than blank. */}
        <noscript>
          <style>{`.reveal,.reveal-img{opacity:1!important;transform:none!important;clip-path:none!important}.rule-draw{transform:scaleX(1)!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
