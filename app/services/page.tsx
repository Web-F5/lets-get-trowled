import type { Metadata } from "next";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plastering Services Seymour VIC | Let's Get Trowled",
  description: "Full range of plastering services in Seymour & Central Victoria. Domestic, commercial, renovations, fibrous plastering, repairs & more. Get a free quote.",
  alternates: { canonical: "https://letsgettrowled.com.au/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Our Plastering Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of plastering services for residential and commercial clients throughout Seymour and Central Victoria. Every job receives the same high standard of workmanship — no matter the size.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
