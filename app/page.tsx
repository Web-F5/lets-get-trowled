import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/ui/HeroCarousel";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";
import { SERVICES, CLIENT, LOCATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Let's Get Trowled | Plastering Services Seymour VIC",
  description:
    "Professional plastering services in Seymour & Central Victoria. Domestic, commercial, renovations, repairs & decorative plastering. Free quotes. Call today.",
  alternates: { canonical: "https://letsgettrowled.com.au" },
  openGraph: {
    title: "Let's Get Trowled | Plastering Services Seymour VIC",
    description: "Professional plastering services in Seymour & Central Victoria. Domestic, commercial, renovations, repairs & decorative plastering. Free quotes.",
    images: [{ url: "/images/heros/hero-1.webp" }],
  },
};

const STATS = [
  { value: "18+",         label: "Years Experience" },
  { value: "100%",        label: "Licensed & Insured" },
  { value: "130 km",      label: "Service Radius" },
  { value: "Central VIC", label: "Local Plastering Experts" },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

  {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose Let&apos;s Get Trowled?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Reliable, experienced, and genuinely committed to quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "18+ Years Experience", desc: "Over 18 years delivering quality plastering across Central Victoria." },
              { title: "Licensed & Insured",   desc: "Fully licensed and carrying comprehensive public liability insurance." },
              { title: "Locally Based",        desc: "Based in Seymour — we understand regional Victoria and its communities." },
              { title: "Free Quotes",          desc: "No-obligation quotes for all jobs, big or small, residential or commercial." },
            ].map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-colors">
                <h3 className="font-display text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-brand-accent/15 text-brand-accent text-xs font-bold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-4">
              Our Plastering Services
            </h2>
            <p className="text-brand-charcoal/70 text-lg max-w-2xl mx-auto">
              From domestic repairs to large commercial builds — we cover the full range of plastering services throughout Central Victoria.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 rounded-full bg-brand-dark hover:bg-brand-dark/80 text-white font-bold text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-sand">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-brand-accent/15 text-brand-accent text-xs font-bold uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Much More Than Just Plastering
            </h2>
            <div className="space-y-4 text-brand-charcoal/75 leading-relaxed">
              <p>
                Let&apos;s Get Trowled is a Seymour-based plastering company serving homeowners, builders, and businesses across Central Victoria. With over 18 years of experience, our dedicated team brings genuine trade knowledge and a high standard of workmanship to every project — from a minor plaster repair in Kilmore through to a full commercial plastering contract in Shepparton.
              </p>
              <p>
                We&apos;re licensed, fully insured, and offer a comprehensive range of services including domestic and commercial plastering, fibrous plastering, decorative cornices and ceiling roses, metal stud walls, suspended ceilings, metal batten systems, and plasterboard supply and install.
              </p>
              <p>
                Based in Seymour with a 130 km service radius, we reach towns across Central Victoria — from Bendigo and Heathcote in the west, to Euroa and Benalla in the north-east, Yea in the east, and Kilmore and Kyneton to the south.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#contactform"
                className="px-7 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${CLIENT.phoneRaw}`}
                className="px-7 py-3.5 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold transition-colors"
              >
                ☎ {CLIENT.phone}
              </a>
            </div>
          </div>

          {/* Image + stats */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-lets-get-trowled.webp"
                alt="Let's Get Trowled plastering team in Seymour VIC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-white/80">
                  <div className="font-display text-3xl font-bold text-brand-dark mb-1">{s.value}</div>
                  <div className="text-xs text-brand-charcoal/60 uppercase tracking-wide font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas strip ──────────────────────────────── */}
      <section className="py-14 px-4 bg-brand-sand">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Servicing Central Victoria — Within 130 km of Seymour
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-brand-sand text-brand-dark text-sm font-medium hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-colors shadow-sm"
              >
                {l.town}
              </Link>
            ))}
          </div>
          <Link href="/locations" className="inline-block px-7 py-3 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold transition-colors">
            View All Service Areas
          </Link>
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
