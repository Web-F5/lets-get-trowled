import Link from "next/link";
import Image from "next/image";
import { CLIENT, SERVICES, LOCATIONS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-sand">
      {/* CTA band */}
      <div className="bg-brand-accent py-10 px-4 text-center">
        <p className="font-display text-2xl md:text-3xl font-bold text-brand-charcoal mb-1">
          Free quotes — no obligation
        </p>
        <p className="text-brand-charcoal/80 mb-4 text-sm">
          Call us or fill in the contact form and we&apos;ll get back to you promptly.
        </p>
        <a
          href={`tel:${CLIENT.phoneRaw}`}
          className="text-2xl font-bold text-brand-dark hover:underline"
        >
          {CLIENT.phone}
        </a>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/images/logo_white.webp" alt="Let's Get Trowled" 
              width={176}
              height={176}
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain" />
            <span className="font-display text-xl font-bold text-brand-primary"></span>
          </Link>
          <p className="text-sm leading-relaxed text-brand-sand/80 mb-5">
            Professional plastering services in Seymour and throughout Central Victoria. Licensed, insured, and dedicated to quality on every job.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`tel:${CLIENT.phoneRaw}`} className="flex items-center gap-2 text-brand-sand/80 hover:text-brand-accent transition-colors">
                <PhoneIcon /> {CLIENT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-brand-sand/80">
              <PinIcon /> Seymour VIC 3660 — 130 km service radius
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-lg font-bold text-brand-primary mb-4">Our Services</h3>
          <ul className="space-y-1.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-brand-sand/75 hover:text-brand-accent transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="font-display text-lg font-bold text-brand-primary mb-4">Service Areas</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {LOCATIONS.slice(0, 16).map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="text-sm text-brand-sand/75 hover:text-brand-accent transition-colors">
                  {l.town}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/locations" className="inline-block mt-3 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors">
            View all service areas →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-sand/50 max-w-7xl mx-auto w-full">
        <p>&copy; {year} Let&apos;s Get Trowled. All rights reserved.</p>
        <a
          href="https://webf5.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-sand transition-colors"
        >
          Web development &amp; SEO by Web F5
        </a>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
