import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";
import { GALLERY_IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Plastering Gallery | Our Work | Let's Get Trowled",
  description: "Browse our plastering gallery — domestic and commercial plastering, renovations, fibrous plastering, cornices, ceiling roses & more. Based in Seymour VIC.",
  alternates: { canonical: "https://letsgettrowled.com.au/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Project Gallery</h1>
          <p className="text-white/70 text-lg">
            A selection of our recent plastering projects throughout Seymour and Central Victoria.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {img.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-dark/80 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
