export interface Service {
  name: string;
  slug: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroAlt: string;
  introShort: string;
  introFull: string;
  sections: {
    heading: string;
    body: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  galleryDir: string;
  galleryImages: string[];
}

export interface Location {
  town: string;
  postcode: string;
  slug: string;
  state: string;
  heroDescription: string;
  heroImage: string;
  imageAlt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CommunityLink {
  name: string;
  url: string;
  icon: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  categories?: string[];
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
}
