import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServicePageLayout from "@/components/ui/ServicePageLayout";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.keyword, "plastering Seymour", "plastering VIC", "Let's Get Trowled"],
    alternates: { canonical: `https://letsgettrowled.com.au/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: `/${service.galleryDir}/${service.galleryImages[0]}` }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Let's Get Trowled",
      telephone: "0422820129",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seymour",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: "Central Victoria",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout service={service} />
    </>
  );
}
