import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./swiss.css";
import SwissNavbar from "@/components/SwissNavbar";
import SwissFooter from "@/components/SwissFooter";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ISTE HIT SC | Technical Society at HIT",
    template: "%s | ISTE HIT SC",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ISTE HIT SC | Technical Society at HIT",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Iste.png",
        width: 512,
        height: 512,
        alt: "ISTE HIT Student Chapter logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISTE HIT SC | Technical Society at HIT",
    description: siteConfig.description,
    images: ["/Iste.png"],
  },
  icons: {
    icon: [{ url: "/Iste.png", type: "image/png" }],
    shortcut: ["/Iste.png"],
    apple: [{ url: "/Iste.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/Iste.png`,
  description: siteConfig.description,
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.shortName,
  url: siteConfig.siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <SwissNavbar />
        <main>
          {children}
        </main>
        <SwissFooter />
      </body>
    </html>
  );
}
