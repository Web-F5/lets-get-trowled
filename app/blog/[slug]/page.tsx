import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client, postBySlugQuery, allSlugsQuery, urlFor } from "@/lib/sanity";
import type { SanityPost } from "@/lib/types";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch { return []; }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post: SanityPost | null = await client.fetch(postBySlugQuery, { slug });
    if (!post) return {};
    return {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      alternates: { canonical: `https://letsgettrowled.com.au/blog/${slug}` },
      openGraph: {
        title: post.seoTitle ?? post.title,
        description: post.seoDescription ?? post.excerpt,
        images: post.mainImage ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }] : [],
      },
    };
  } catch { return {}; }
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: SanityPost | null = null;
  try { post = await client.fetch(postBySlugQuery, { slug }); } catch { notFound(); }
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-accent truncate max-w-[200px]">{post.title}</span>
          </nav>
          <p className="text-brand-accent/70 text-sm font-medium mb-3">{fmtDate(post.publishedAt)}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
          {post.excerpt && <p className="mt-4 text-white/60 text-lg leading-relaxed">{post.excerpt}</p>}
        </div>
      </section>

      {post.mainImage && (
        <div className="max-w-4xl mx-auto px-4 -mb-8 relative z-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.mainImage.alt ?? post.title}
              fill priority sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="py-20 px-4 bg-white">
        <article className="max-w-3xl mx-auto prose">
          {post.body
            ? <PortableText value={post.body as Parameters<typeof PortableText>[0]["value"]} />
            : <p className="text-brand-charcoal/70">{post.excerpt}</p>
          }
        </article>
      </section>

      <div className="bg-white px-4 pb-12 flex justify-center">
        <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold transition-colors">
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          Back to Blog
        </Link>
      </div>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
