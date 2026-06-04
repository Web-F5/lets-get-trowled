"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface GalleryImage { src: string; alt: string; caption?: string }

export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const [cur, setCur] = useState(0);
  const touchX = useRef<number | null>(null);

  // Desktop: 3 visible; mobile: 1
  const [perView] = useState(typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3);
  const max = Math.max(0, images.length - perView);

  const prev = () => setCur((c) => Math.max(0, c - 1));
  const next = () => setCur((c) => Math.min(max, c + 1));

  return (
    <div className="relative px-4">
      <div
        className="overflow-hidden rounded-xl"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (!touchX.current) return;
          const d = touchX.current - e.changedTouches[0].clientX;
          if (d > 50) next(); else if (d < -50) prev();
          touchX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-400 ease-in-out gap-4"
          style={{ transform: `translateX(calc(-${(cur * 100) / 3}% - ${cur * (16 / 3)}px))` }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-1/3 min-w-[calc(33.333%-11px)]">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-sand">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {img.caption && (
                <p className="text-xs text-center mt-2 text-brand-charcoal/60">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {images.length > 3 && (
        <>
          <button onClick={prev} disabled={cur === 0} aria-label="Previous" className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-dark text-white shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-brand-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} disabled={cur >= max} aria-label="Next" className="absolute -right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-dark text-white shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-brand-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all ${i === cur ? "w-6 h-2 bg-brand-accent" : "w-2 h-2 bg-brand-sand"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
