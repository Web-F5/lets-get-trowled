# Blog scaffold — Let's Get Trowled

Portable Text renderer for the editorial blog style, wired to Sanity and Next.js 15 App Router.

---

## File structure

```
app/
  blog/
    [slug]/
      page.tsx          ← Dynamic route, GROQ query, generateStaticParams
  fonts.ts              ← next/font setup (Playfair Display + Source Serif 4)

components/
  blog/
    BlogPostPage.tsx    ← Article layout with title, excerpt, image, body
    PortableTextRenderer.tsx ← @portabletext/react component map

sanity/
  schemas/
    blogPost.ts         ← Sanity document + custom block type schemas

styles/
  blog.css              ← All blog styles (import in globals.css or layout)
```

---

## Setup steps

### 1. Install dependencies

```bash
npm install @portabletext/react @portabletext/types
```

### 2. Add schemas to Sanity

In your `sanity.config.ts` (or `sanity/schemas/index.ts`), import and register the types:

```ts
import {
  blogPostType,
  redFlagType,
  tipBoxType,
  checklistItemType,
  qaItemType,
} from './schemas/blogPost'

export default defineConfig({
  schema: {
    types: [
      blogPostType,
      redFlagType,
      tipBoxType,
      checklistItemType,
      qaItemType,
    ],
  },
})
```

### 3. Add fonts to layout.tsx

```tsx
import { playfair, sourceSerif } from './fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then update `blog.css` to use the CSS variables:

```css
.blog-title, .blog-h2, .blog-h3, .blog-q-text {
  font-family: var(--font-playfair), Georgia, serif;
}

.blog-wrap, .blog-body, .blog-label, .blog-excerpt {
  font-family: var(--font-source-serif), Georgia, serif;
}
```

### 4. Import the stylesheet

In your `app/globals.css`:

```css
@import '../styles/blog.css';
```

### 5. Confirm your Sanity client path

The page route imports from `@/sanity/lib/client`. Adjust this to match your project structure if needed.

---

## Custom block types in Sanity Studio

When editing a blog post body, editors can insert:

| Block type | Purpose | Studio label |
|---|---|---|
| `redFlag` | Amber-bordered warning callout | ⚠️ Red Flag |
| `tipBox` | Highlighted tip or key takeaway | 💡 Tip Box |
| `checklistItem` | Tick-icon checklist entry | ✅ Checklist Item |
| `qaItem` | Numbered Q&A pair | Q: Question text |

---

## Adding more blog posts

The four seed posts from the content brief can be entered directly in Sanity Studio under the `Blog Post` document type. Use the custom block types for:

- Checklist items → `checklistItem` blocks
- Red flag warnings → `redFlag` blocks  
- Closing tip callout → `tipBox` block
- Q&A sections → `qaItem` blocks
