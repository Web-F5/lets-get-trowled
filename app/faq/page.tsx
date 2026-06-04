"use client";

import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";
import { GLOBAL_FAQS } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GLOBAL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Got Questions?
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Answers to common questions about our plastering services throughout Seymour and Central Victoria.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={GLOBAL_FAQS} />
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
