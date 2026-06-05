// ============================================================
// Font setup — add to your app/layout.tsx
// ============================================================
//
// 1. Import the fonts from next/font/google
// 2. Add the className to your <html> or <body> tag
// 3. Add the CSS variables to your global.css
// ============================================================

import { Playfair_Display, Source_Serif_4 } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-playfair',
  display: 'swap',
})

export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
})

// ---------------------------------------------------------------------------
// Usage in layout.tsx:
// ---------------------------------------------------------------------------
//
// import { playfair, sourceSerif } from './fonts'
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
//       <body>{children}</body>
//     </html>
//   )
// }

// ---------------------------------------------------------------------------
// Then update blog.css to use the CSS variables:
// ---------------------------------------------------------------------------
//
// .blog-title, .blog-h2, .blog-h3, .blog-q-text {
//   font-family: var(--font-playfair), Georgia, serif;
// }
//
// .blog-wrap, .blog-body, .blog-label, .blog-excerpt {
//   font-family: var(--font-source-serif), Georgia, serif;
// }
