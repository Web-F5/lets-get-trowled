"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CLIENT } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Service Areas",href: "/locations" },
  { label: "Blog",         href: "/blog" },
  { label: "FAQ",          href: "/faq" },
  { label: "Contact",      href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-lg">
      {/* Top phone bar — desktop */}
      <div className="hidden lg:flex items-center justify-end gap-6 px-6 py-1.5 bg-brand-charcoal/30 text-xs text-brand-sand/80">
        <span>Mon–Fri 7am–4pm &nbsp;|&nbsp; Weekends by appointment</span>
        <a href={`tel:${CLIENT.phoneRaw}`} className="font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors">
          ☎ {CLIENT.phone}
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* auto | 1fr | auto — logo and CTA take only what they need,
            nav gets the remaining space and centres within it           */}
        <div className="grid h-16" style={{ gridTemplateColumns: "auto 1fr auto", gridTemplateRows: "64px" }}>

          {/* ── Logo (left) ─────────────────────────────────── */}
          <Link href="/" className="self-start flex items-center flex-shrink-0 -mt-8 sm:-mt-14">
            <Image
              src="/images/logo_white.webp"
              alt="Let's Get Trowled"
              width={176}
              height={176}
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
            />
          </Link>

          {/* ── Nav links (center) ──────────────────────────── */}
          <nav className="self-center hidden lg:flex items-center justify-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(l.href)
                    ? "text-brand-accent"
                    : "text-brand-sand/80 hover:text-brand-primary"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + mobile hamburger (right) ──────────────── */}
          <div className="self-center flex items-center justify-end gap-3">
            <Link
              href="/contact#contactform"
              className="hidden lg:inline-block px-5 py-2 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-semibold text-sm whitespace-nowrap transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded text-brand-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-0.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded font-medium transition-colors ${
                  isActive(l.href)
                    ? "text-brand-accent"
                    : "text-brand-sand/80 hover:text-brand-primary"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 flex flex-col gap-2">
              <Link
                href="/contact#contactform"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-charcoal font-bold text-center transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${CLIENT.phoneRaw}`}
                className="px-5 py-3 text-center font-semibold text-brand-accent"
              >
                ☎ {CLIENT.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
