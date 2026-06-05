import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";
import type { PortableTextBlock } from "@portabletext/types";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";

// ── Types ───────────────────────────────────────────────────────

interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  image?: { asset: { url: string }; alt?: string };
  body: PortableTextBlock[];
}

// ── Metadata helper ─────────────────────────────────────────────

export function buildBlogMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | Let's Get Trowled`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image?.asset.url ? [post.image.asset.url] : [],
    },
  };
}

// ── Component ───────────────────────────────────────────────────

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-accent truncate max-w-[240px]">{post.title}</span>
          </nav>

          <p className="text-brand-accent/80 text-xs font-bold uppercase tracking-widest mb-3">
            Trade Guide &nbsp;·&nbsp; Let&apos;s Get Trowled &nbsp;·&nbsp;{" "}
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-white/60 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────── */}
      {post.image?.asset.url && (
        <div className="max-w-4xl mx-auto px-4 -mb-8 relative z-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image.asset.url}
              alt={post.image.alt ?? post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <article className="max-w-3xl mx-auto">
          <PortableTextRenderer content={post.body} />
        </article>
      </section>

      {/* ── Back to blog ─────────────────────────────────── */}
      <div className="bg-white px-4 pb-12 flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold transition-colors"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
