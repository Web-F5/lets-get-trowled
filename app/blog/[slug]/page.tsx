import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client, postBySlugQuery, allSlugsQuery, urlFor } from "@/lib/sanity";
import type { SanityPost } from "@/lib/types";
import BlogPostPage, { buildBlogMetadata } from "@/components/blog/BlogPostPage";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch { return []; }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post: SanityPost | null = await client.fetch(postBySlugQuery, { slug });
    if (!post) return {};
    return buildBlogMetadata({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      image: post.mainImage
        ? { asset: { url: urlFor(post.mainImage).width(1200).height(630).url() }, alt: post.mainImage.alt }
        : undefined,
      body: (post.body ?? []) as Parameters<typeof BlogPostPage>[0]["post"]["body"],
    });
  } catch { return {}; }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: SanityPost | null = null;
  try { post = await client.fetch(postBySlugQuery, { slug }); } catch { notFound(); }
  if (!post) notFound();

  return (
    <BlogPostPage
      post={{
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        image: post.mainImage
          ? { asset: { url: urlFor(post.mainImage).width(1200).height(675).url() }, alt: post.mainImage.alt }
          : undefined,
        body: (post.body ?? []) as Parameters<typeof BlogPostPage>[0]["post"]["body"],
      }}
    />
  );
}
