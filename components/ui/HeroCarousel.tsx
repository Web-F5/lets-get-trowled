"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLIENT } from "@/lib/data";

const SLIDES = [
  {
    desktop: "/images/heros/hero-1.webp",
    mobile:  "/images/heros/hero-1-mobile.webp",
    heading: "Plastering Services for Central Victoria",
    sub:     "Over 17 years of plastering excellence. Trusted by homeowners, builders, and businesses across Central Victoria.",
    cta:     "Get a Free Quote",
    href:    "/contact#contactform",
  },
  {
    desktop: "/images/heros/hero-2.webp",
    mobile:  "/images/heros/hero-2-mobile.webp",
    heading: "Quality Finishes. Every Time.",
    sub:     "From domestic repairs to large commercial builds — delivered on time, on budget, and to the highest standard.",
    cta:     "View Our Services",
    href:    "/services",
  },
  {
    desktop: "/images/heros/hero-3.webp",
    mobile:  "/images/heros/hero-3-mobile.webp",
    heading: "Local Plasterers You Can Trust",
    sub:     "Based in Seymour and servicing all of Central Victoria within 130 km. Licensed, insured, and ready to quote.",
    cta:     "Get a Free Quote",
    href:    "/contact#contactform",
  },
];

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCur((c) => (c + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const prev = () => setCur((c) => (c - 1 + n) % n);
  const next = () => setCur((c) => (c + 1) % n);

  return (
    <section
      className="relative w-full overflow-hidden bg-brand-dark"
      style={{ height: "calc(100vh - 80px)", minHeight: "480px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const d = touchX.current - e.changedTouches[0].clientX;
        if (d > 50) next(); else if (d < -50) prev();
        touchX.current = null;
      }}
    >
      {/* ── Slides ─────────────────────────────────────────── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === cur ? 1 : 0, zIndex: i === cur ? 1 : 0 }}
        >
          {/* Desktop image */}
          <Image
            src={s.desktop}
            alt={s.heading}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover hidden md:block"
          />
          {/* Mobile image */}
          <Image
            src={s.mobile}
            alt={s.heading}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover md:hidden"
          />
          {/* Dark overlay — inline so it always works regardless of Tailwind colour utilities */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(20,33,61,0.25) 0%, rgba(20,33,61,0.55) 50%, rgba(20,33,61,0.80) 100%)" }}
          />
        </div>
      ))}

      {/* ── Text ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl w-full">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-brand-accent text-sm font-bold tracking-wide border border-brand-accent/40"
            style={{ backgroundColor: "rgba(252,163,17,0.15)" }}>
            Seymour &amp; Central Victoria
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-none mb-6 drop-shadow-lg">
            {SLIDES[cur].heading}
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {SLIDES[cur].sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={SLIDES[cur].href}
              className="px-8 py-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold text-lg transition-colors shadow-lg"
            >
              {SLIDES[cur].cta}
            </Link>
            <a
              href={`tel:${CLIENT.phoneRaw}`}
              className="px-8 py-4 rounded-full border-2 border-white/60 text-white hover:bg-white/10 font-bold text-lg transition-colors"
            >
              ☎ {CLIENT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Prev / Next ─────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full text-white flex items-center justify-center transition-colors"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full text-white flex items-center justify-center transition-colors"
        style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dots ───────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:           i === cur ? "28px" : "8px",
              height:          "8px",
              backgroundColor: i === cur ? "#fca311" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
