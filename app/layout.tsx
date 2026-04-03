import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { COMPANY, SITE } from "@/lib/company";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.LMarkLLC.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — Color label printers & on-demand systems`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "L Mark LLC — color label printer sales and solutions for production teams in Albemarle, NC. Industrial inkjet, pigment durability, finishing, and integration support.",
  keywords: [
    "color label printer",
    "on demand labels",
    "Epson ColorWorks",
    "Afinia label printer",
    "industrial inkjet labels",
    "Albemarle NC label printer",
    "North Carolina label printer dealer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: `${SITE.name} — Color label systems`,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.legalName,
  telephone: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.addressLine1,
    addressLocality: "Albemarle",
    addressRegion: "NC",
    postalCode: COMPANY.postalCode,
    addressCountry: COMPANY.country,
  },
  url: siteUrl,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
