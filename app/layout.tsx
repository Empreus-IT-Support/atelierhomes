import type { Metadata, Viewport } from "next";
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
    default: "Atelier Homes | Custom Home Builder, Canberra ACT",
    template: "%s | Atelier Homes",
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
    title: "Atelier Homes | Custom Home Builder, Canberra ACT",
    description: DESCRIPTION,
    locale: "en_AU",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Contemporary Australian home built by Atelier Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Homes | Custom Home Builder, Canberra ACT",
    description: DESCRIPTION,
    images: ["/images/hero-home.jpg"],
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: true, address: true, email: true },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#16130f" },
  ],
  colorScheme: "light",
};

// Structured data. Only facts verified from public records are asserted here:
// the ABN/ACN, the active ACT builder licence and the 2015 registration date.
// No review, rating or award markup — inventing those would be fabrication and
// is exactly the sort of thing Google penalises.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      description: DESCRIPTION,
      telephone: "+61478056023",
      email: site.email,
      image: `${site.url}/images/hero-home.jpg`,
      foundingDate: String(site.established),
      slogan: "Homes built like they were drawn.",
      knowsAbout: [
        "Custom home building",
        "Knockdown rebuilds",
        "Home extensions",
        "Home renovations",
        "Structural landscaping",
      ],
      identifier: [
        { "@type": "PropertyValue", name: "ABN", value: site.abn },
        { "@type": "PropertyValue", name: "ACN", value: "607 259 763" },
        {
          "@type": "PropertyValue",
          name: "ACT Builder Licence",
          value: "2018829",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Canberra",
        addressRegion: "ACT",
        postalCode: "2617",
        addressCountry: "AU",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
        { "@type": "City", name: "Canberra" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Building services",
        itemListElement: [
          "Custom new homes",
          "Knockdown rebuilds",
          "Extensions and renovations",
          "Outdoor and landscape works",
        ].map((n) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: n },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-AU",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
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
          <style>{`.reveal{opacity:1!important;transform:none!important}.rule-draw{transform:scaleX(1)!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
