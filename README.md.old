# Let's Get Trowled — Next.js Website

Professional plastering services website for Let's Get Trowled, Seymour VIC. Built with Next.js 15, Tailwind CSS v4, and Sanity.io.

---

## Setup

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID (`69l341f0`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (`production`) |
| `SANITY_API_TOKEN` | Server-only Sanity API token (for mutations) |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (`mwvjewly`) |
| `NEXT_PUBLIC_SITE_URL` | Production URL (`https://letsgettrowled.com.au`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (`G-KSKCBF6L9F`) |

---

## Formspree Setup

1. Log in at [formspree.io](https://formspree.io)
2. The form ID is already configured: `mwvjewly`
3. Set `NEXT_PUBLIC_FORMSPREE_ID=mwvjewly` in `.env.local`
4. Configure email notifications in the Formspree dashboard

---

## Sanity Setup

1. Log in at [sanity.io](https://sanity.io)
2. Project ID: `69l341f0` — use the existing project or create a new one
3. Install Sanity CLI: `npm install -g @sanity/cli`
4. Initialise the Sanity studio:
   ```powershell
   cd sanity
   sanity init --project 69l341f0 --dataset production
   ```
5. Deploy the schema:
   ```powershell
   sanity schema deploy
   ```
6. Generate an API token:
   - Go to sanity.io → your project → API → Tokens
   - Create a token with Editor permissions
   - Add it as `SANITY_API_TOKEN` in `.env.local`

---

## Vercel Deployment

1. Push the repository to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.local` to the Vercel project settings
4. Deploy — Vercel auto-deploys on every push to `main`

---

## Auto-Posting to Blog via Sanity API

Use this PowerShell curl command to create a blog post via the Sanity API:

```powershell
$body = @{
  mutations = @(
    @{
      create = @{
        _type = "post"
        title = "Your Post Title"
        slug = @{ _type = "slug"; current = "your-post-slug" }
        excerpt = "Brief description of the post..."
        publishedAt = "2026-06-04T00:00:00Z"
        body = @(
          @{
            _type = "block"
            children = @(@{ _type = "span"; text = "Your post content here." })
          }
        )
      }
    }
  )
} | ConvertTo-Json -Depth 10

Invoke-RestMethod `
  -Uri "https://69l341f0.api.sanity.io/v2024-01-01/data/mutate/production" `
  -Method POST `
  -Headers @{ Authorization = "Bearer $env:SANITY_API_TOKEN"; "Content-Type" = "application/json" } `
  -Body $body
```

After the mutation, Sanity fires a webhook → Vercel rebuilds → post goes live within seconds.

---

## Adding a New Service Page

1. Open `lib/data.ts`
2. Add a new entry to the `SERVICES` array following the existing pattern
3. The dynamic route `app/services/[slug]/page.tsx` picks it up automatically via `generateStaticParams`
4. Add gallery images to `/public/images/[service-slug]/`
5. Run `npm run build` to verify

---

## Adding a New Location Page

1. Open `lib/data.ts`
2. Add a new entry to the `LOCATIONS` array
3. The dynamic route `app/locations/[slug]/page.tsx` picks it up automatically
4. Add a hero image to `/public/images/locations/hero-[town].webp`
5. Run `npm run build` to verify

---

## Image Checklist

Place all images in `/public/` following this structure:

```
public/
  images/
    logo.webp
    logo_white.webp
    favicon.ico
    icon.png
    about-lets-get-trowled.webp
    heros/
      hero-1.webp
      hero-1-mobile.webp
      hero-2.webp
      hero-2-mobile.webp
      hero-3.webp
      hero-3-mobile.webp
    locations/
      hero-seymour.webp
      hero-tallarook.webp
      hero-avenel.webp
      hero-trawool.webp
      hero-puckapunyal.webp
      hero-nagambie.webp
      hero-longwood.webp
      hero-locksley.webp
      hero-euroa.webp
      hero-violet-town.webp
      hero-shepparton.webp
      hero-benalla.webp
      hero-tooborac.webp
      hero-heathcote.webp
      hero-kyneton.webp
      hero-bendigo.webp
      hero-wandong.webp
      hero-heathcote-junction.webp
      hero-broadford.webp
      hero-kilmore.webp
      hero-pyalong.webp
      hero-yea.webp
    services/
      domestic-plastering-hero.jpg
      commercial-plastering-hero.jpg
      plastering-renovations-hero.jpg
      plastering-extensions-hero.jpg
      plastering-new-builds-hero.jpg
      fibrous-plastering-hero.jpg
      plaster-supply-install-hero.jpg
      metal-battens-hero.jpg
      decorative-cornices-hero.jpg
      ceiling-roses-hero.jpg
      metal-stud-walls-hero.jpg
      suspended-ceilings-hero.jpg
      plaster-patching-hero.jpg
      small-plastering-jobs-hero.jpg
    domestic-plastering/
      image1.webp ... image10.webp
    commercial-plastering/
      image1.webp ... image4.webp
    (etc. for each service gallery)
```

---

## Support

Site built by [Web F5](https://webf5.com.au) — web development & SEO for local businesses in Central Victoria.
