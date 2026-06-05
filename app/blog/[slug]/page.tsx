// ============================================================
// app/blog/[slug]/page.tsx
// Next.js 15 App Router — dynamic blog post page
// ============================================================

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import BlogPostPage, { buildBlogMetadata } from '@/components/blog/BlogPostPage'

// ---------------------------------------------------------------------------
// GROQ query
// ---------------------------------------------------------------------------

const POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    title,
    slug,
    excerpt,
    publishedAt,
    image {
      asset -> { url },
      alt
    },
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset -> { url }
      }
    }
  }
`

const ALL_SLUGS_QUERY = `
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`

// ---------------------------------------------------------------------------
// Static params (build-time generation)
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
  return posts.map((post) => ({ slug: post.slug }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, { slug: params.slug })
  if (!post) return {}
  return buildBlogMetadata(post)
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug })

  if (!post) notFound()

  return <BlogPostPage post={post} />
}
