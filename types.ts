
export enum Category {
  SNAPSHOT = 'Snapshots',
  PROMPT = 'Prompts & Sequences',
  MEDIA = 'Media Packs',
  MP3 = 'MP3 Song Packs'
}

export interface Review {
  id: string;
  productSlug: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  shortDescription: string;
  longDescription: string;
  whatYouGet: string[];
  idealFor: string;
  deliverablesFormat: string;
  tags: string[];
  licenseSummary: string;
  image: string;
  // Specific for MP3
  trackCount?: number;
  runtime?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceFrom: number;
  idealFor: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}
