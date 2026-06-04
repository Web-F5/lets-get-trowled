import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  name: string;
  slug: string;
  keyword: string;
  introShort: string;
  galleryDir: string;
  galleryImages: string[];
}

export default function ServiceCard({ name, slug, keyword, introShort, galleryDir, galleryImages }: ServiceCardProps) {
  const imgSrc = galleryImages.length > 0 ? `/${galleryDir}/${galleryImages[0]}` : "/images/placeholder.webp";

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-brand-sand bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">
          {keyword}
        </span>
        <h3 className="font-display text-xl font-bold text-brand-dark mb-3 leading-snug">
          {name}
        </h3>
        <p className="text-sm text-brand-charcoal/70 leading-relaxed flex-1 mb-5">
          {introShort}
        </p>
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark group-hover:text-brand-accent transition-colors"
        >
          Learn more
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
