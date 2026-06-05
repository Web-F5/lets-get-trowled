import type { Metadata } from 'next'
import Image from 'next/image'
import PortableTextRenderer from '@/components/blog/PortableTextRenderer'
import type { PortableTextBlock } from '@portabletext/types'

// ---------------------------------------------------------------------------
// Types — mirror your Sanity schema
// ---------------------------------------------------------------------------

interface BlogPost {
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  image?: {
    asset: { url: string }
    alt?: string
  }
  body: PortableTextBlock[]
}

interface BlogPostPageProps {
  post: BlogPost
}

// ---------------------------------------------------------------------------
// Metadata helper (call from generateMetadata in your page.tsx)
// ---------------------------------------------------------------------------

export function buildBlogMetadata(post: BlogPost): Metadata {
  return {
    title: `${post.title} | Let's Get Trowled`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image?.asset.url ? [post.image.asset.url] : [],
    },
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="blog-wrap">

      {/* Label row */}
      <p className="blog-label">
        Trade guide &nbsp;·&nbsp; Let&apos;s Get Trowled &nbsp;·&nbsp;{' '}
        <time dateTime={post.publishedAt}>{formattedDate}</time>
      </p>

      {/* Title */}
      <h1 className="blog-title">{post.title}</h1>

      {/* Excerpt */}
      <p className="blog-excerpt">{post.excerpt}</p>

      {/* Hero image */}
      {post.image?.asset.url && (
        <div className="blog-hero-image">
          <Image
            src={post.image.asset.url}
            alt={post.image.alt ?? post.title}
            width={1200}
            height={630}
            priority
            className="blog-hero-img"
          />
        </div>
      )}

      {/* Body */}
      <PortableTextRenderer content={post.body} />

    </article>
  )
}
