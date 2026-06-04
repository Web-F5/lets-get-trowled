import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";
import { LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plastering Service Areas | Central Victoria | Let's Get Trowled",
  description: "Plastering services across Central Victoria. Based in Seymour, we service towns within 130 km including Bendigo, Shepparton, Euroa, Kilmore, Kyneton & more.",
  alternates: { canonical: "https://letsgettrowled.com.au/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Where We Work
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Service Areas</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Based in Seymour, we provide professional plastering services to homes and businesses within 130 km — covering towns right across Central Victoria.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                <Image
                  src={loc.heroImage}
                  alt={loc.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-brand-dark/20 group-hover:from-brand-dark/90 transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5">
                  <h2 className="font-display text-xl font-bold text-white mb-0.5">{loc.town}</h2>
                  <span className="text-xs text-white/60 mb-3">VIC {loc.postcode}</span>
                  <span className="px-4 py-1.5 rounded-full bg-brand-accent text-brand-charcoal text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View area →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
