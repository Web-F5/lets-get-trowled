"use client";

import Link from "next/link";
import { CLIENT } from "@/lib/data";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTABanner({
  heading = "Ready to Get Started?",
  subtext = "Contact us today for a free, no-obligation quote on any plastering work throughout Seymour and Central Victoria.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact#contactform",
}: CTABannerProps) {
  return (
    <section className="bg-brand-dark py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-primary mb-4">
          {heading}
        </h2>
        <p className="text-brand-sand/80 text-lg mb-8 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-block px-8 py-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold text-lg transition-colors"
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${CLIENT.phoneRaw}`}
            className="inline-block px-8 py-4 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-white/10 font-bold text-lg transition-colors"
          >
            Call {CLIENT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
