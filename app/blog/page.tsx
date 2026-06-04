import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client, allPostsQuery, urlFor } from "@/lib/sanity";
import type { SanityPost } from "@/lib/types";
import CTABanner from "@/components/ui/CTABanner";
import CommunitySection from "@/components/ui/CommunitySection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Plastering Insights — Blog | Let's Get Trowled",
  description: "Plastering tips, guides, and industry insights from Let's Get Trowled — your local plastering experts in Seymour & Central Victoria.",
  alternates: { canonical: "https://letsgettrowled.com.au/blog" },
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  let posts: SanityPost[] = [];
  try { posts = await client.fetch(allPostsQuery); } catch { posts = []; }

  return (
    <>
      <section className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Insights
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Plastering Insights
          </h1>
          <p className="text-white/70 text-lg">
            Tips and guides from our experienced plastering team in Seymour VIC.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-lg text-brand-charcoal/60">Blog posts coming soon — check back shortly.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post._id} className="group flex flex-col rounded-2xl overflow-hidden border border-brand-sand bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {post.mainImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(338).url()}
                        alt={post.mainImage.alt ?? post.title}
                        fill sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-6">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((c) => (
                          <span key={c} className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-accent/15 text-brand-accent uppercase tracking-wide">{c}</span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-brand-charcoal/40 mb-2">{fmtDate(post.publishedAt)}</p>
                    <h2 className="font-display text-xl font-bold text-brand-dark mb-3 flex-1 leading-snug">{post.title}</h2>
                    {post.excerpt && <p className="text-sm text-brand-charcoal/65 leading-relaxed mb-5">{post.excerpt}</p>}
                    <Link href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                      Read more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
      <CommunitySection />
    </>
  );
}
