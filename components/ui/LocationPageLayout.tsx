import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/types";
import { CLIENT, SERVICES } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import CTABanner from "./CTABanner";
import CommunitySection from "./CommunitySection";

export default function LocationPageLayout({ location }: { location: Location }) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-end">
        <Image src={location.heroImage} alt={location.imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-32">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white/80 transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-brand-accent">{location.town}</span>
          </nav>
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-widest">
            {location.state} {location.postcode}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Plastering Services {location.town}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed">
            {location.heroDescription}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${CLIENT.phoneRaw}`}
               className="px-7 py-3 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold transition-colors">
              ☎ {CLIENT.phone}
            </a>
            <Link href="/contact#contactform"
                  className="px-7 py-3 rounded-full border-2 border-white/50 text-white hover:bg-white/10 font-bold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-dark mb-4">
              Our Services in {location.town}
            </h2>
            <p className="text-brand-charcoal/70 text-lg max-w-2xl mx-auto">
              Full plastering solutions for residential and commercial customers in {location.town} and surrounds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Local trust ──────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Trusted Plasterers in {location.town}
          </h2>
          <p className="text-brand-charcoal/75 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Let&apos;s Get Trowled is based in Seymour and services {location.town} and all surrounding areas.
            Our team brings over 18 years of plastering experience to every job — from minor repairs through
            to full commercial builds. We&apos;re licensed, fully insured, and committed to a high standard
            of workmanship on every project.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "18+",       l: "Years Experience" },
              { v: "100%",      l: "Licensed & Insured" },
              { v: "130 km",    l: "Service Radius" },
              { v: "Free",      l: "Quotes" },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="font-display text-3xl font-bold text-brand-dark mb-1">{s.v}</div>
                <div className="text-sm text-brand-charcoal/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Need a Plasterer in ${location.town}?`}
        subtext={`Contact Let's Get Trowled for a free, no-obligation quote on any plastering work in ${location.town} and surrounds.`}
      />
      <CommunitySection />
    </>
  );
}
