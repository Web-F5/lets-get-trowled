import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { CLIENT } from "@/lib/data";
import FAQAccordion from "./FAQAccordion";
import GalleryCarousel from "./GalleryCarousel";
import CTABanner from "./CTABanner";
import CommunitySection from "./CommunitySection";

export default function ServicePageLayout({ service }: { service: Service }) {
  const heroImage = `/${service.galleryDir}/${service.galleryImages[0]}`;

  const gallery = service.galleryImages.map((img) => ({
    src: `/${service.galleryDir}/${img}`,
    alt: `${service.name} — ${img.replace(".webp", "").replace(".jpg", "")}`,
  }));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex items-end">
        <Image src={heroImage} alt={service.heroAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-brand-accent">{service.name}</span>
          </nav>
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-widest">
            {service.keyword}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            {service.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed">
            {service.introShort}
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

      {/* ── Intro paragraph ──────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-brand-charcoal/80 leading-relaxed">{service.introFull}</p>
        </div>
      </section>

      {/* ── 4 content sections ───────────────────────────────── */}
      <section className="py-16 px-4 bg-brand-sand">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {service.sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border-l-4 border-brand-accent shadow-sm">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">{s.heading}</h2>
              <p className="text-brand-charcoal/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      {gallery.length > 0 && (
        <section className="py-16 px-4 bg-brand-sand">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-brand-dark mb-8 text-center">Our Work</h2>
            <GalleryCarousel images={gallery} />
          </div>
        </section>
      )}

      <CTABanner
        heading={`Ready to Get Started with ${service.name}?`}
        subtext="Contact us today for a free, no-obligation quote. We service Seymour and all of Central Victoria."
      />
      <CommunitySection />
    </>
  );
}
