import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "69l341f0",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, mainImage,
    "categories": categories[]->title
  }
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, body, publishedAt, mainImage,
    "categories": categories[]->title,
    seoTitle, seoDescription
  }
`;

export const allSlugsQuery = `
  *[_type == "post"] { "slug": slug.current }
`;
