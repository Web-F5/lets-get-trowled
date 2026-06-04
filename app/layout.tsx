import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLIENT } from "@/lib/data";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Let's Get Trowled | Plastering Services Seymour VIC",
    template: "%s | Let's Get Trowled",
  },
  description:
    "Professional plastering services in Seymour & Central Victoria. Domestic, commercial, renovations, repairs & decorative plastering. Free quotes. Call today.",
  metadataBase: new URL("https://letsgettrowled.com.au"),
  openGraph: {
    siteName: "Let's Get Trowled",
    images: [{ url: "/images/heros/hero-1.webp" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: CLIENT.businessName,
  telephone: CLIENT.phone,
  email: CLIENT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: CLIENT.suburb,
    addressRegion: CLIENT.state,
    postalCode: CLIENT.postcode,
    addressCountry: "AU",
  },
  areaServed: CLIENT.serviceArea,
  url: CLIENT.siteUrl,
  image: `${CLIENT.siteUrl}/images/logo.webp`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
