"use client";

import { useState } from "react";

interface FAQItem { q: string; a: string }

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`rounded-xl border overflow-hidden transition-colors ${isOpen ? "border-brand-accent" : "border-brand-sand"}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                isOpen
                  ? "bg-brand-dark text-brand-primary"
                  : "bg-white text-brand-dark hover:bg-brand-sand/50"
              }`}
            >
              <span className="font-display font-semibold text-lg leading-snug">{item.q}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-accent" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "600px" : "0px" }}
            >
              <p className="px-6 py-5 text-brand-charcoal/80 leading-relaxed border-t border-brand-sand bg-white">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
