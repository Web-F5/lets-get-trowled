import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/data";
import LocationPageLayout from "@/components/ui/LocationPageLayout";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return {};

  return {
    title: `Plastering Services ${location.town} VIC ${location.postcode} | Let's Get Trowled`,
    description: `Professional plastering services in ${location.town} VIC. Domestic, commercial, renovations & repairs. Local plasterers serving ${location.town} and surrounds. Free quotes.`,
    alternates: { canonical: `https://letsgettrowled.com.au/locations/${slug}` },
    openGraph: {
      images: [{ url: location.heroImage }],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) notFound();

  return <LocationPageLayout location={location} />;
}
