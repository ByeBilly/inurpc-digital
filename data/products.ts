
import { Product, Category } from '../types';

export const PRODUCTS: Product[] = [
  {
    slug: 'clinic-growth-snapshot',
    name: 'The Ultimate Clinic Growth Snapshot',
    category: Category.SNAPSHOT,
    price: 497,
    shortDescription: 'Complete automation engine for medical and dental clinics.',
    longDescription: 'Turn your leads into patients on autopilot. This snapshot includes pre-built funnels, SMS follow-up sequences, and appointment reminder workflows designed specifically for high-conversion clinics.',
    whatYouGet: [
      '5 Pre-built Landing Pages',
      '12 Automated SMS/Email Workflows',
      'Patient Reactivation Sequence',
      'No-Show Recovery Automation'
    ],
    idealFor: 'Dentists, Chiropractors, and Aesthetic Clinics.',
    deliverablesFormat: 'InurPC Snapshot Link',
    tags: ['Automation', 'Healthcare', 'High-Ticket'],
    licenseSummary: 'Commercial use for one business entity. Not for resale.',
    image: 'https://picsum.photos/seed/snapshot1/600/400'
  },
  {
    slug: 'lofi-beats-creators',
    name: 'Lo-Fi Chill Beats for Creators',
    category: Category.MP3,
    price: 49,
    shortDescription: 'Royalty-free lofi tracks for background audio.',
    longDescription: 'A curated collection of relaxed, high-quality lofi tracks perfect for YouTube background music, podcast intros, or clinic waiting rooms.',
    trackCount: 15,
    runtime: '45 minutes',
    whatYouGet: [
      '15 Unique Tracks',
      '320kbps MP3 Format',
      'WAV Masters Included',
      'Usage License PDF'
    ],
    idealFor: 'YouTubers, Streamers, and Local Businesses.',
    deliverablesFormat: 'Digital ZIP Download',
    tags: ['Music', 'Lofi', 'Royalty-Free'],
    licenseSummary: 'Royalty-free for use in content and ads. No standalone resale allowed.',
    image: 'https://picsum.photos/seed/lofi/600/400'
  },
  {
    slug: 'meditation-ambient-vol1',
    name: 'Meditation & Deep Sleep Ambient Vol. 1',
    category: Category.MP3,
    price: 67,
    shortDescription: 'Ethereal soundscapes for wellness and sleep channels.',
    longDescription: 'Professional grade ambient textures designed for deep relaxation. Perfect for spa environments, meditation apps, or sleep-focused YouTube channels.',
    trackCount: 10,
    runtime: '120 minutes',
    whatYouGet: [
      '10 Extended 12-minute Tracks',
      'Seamless Loopable Versions',
      'High-Fidelity Audio',
      'Commercial Rights'
    ],
    idealFor: 'Meditation Teachers, Spas, and Sleep Channels.',
    deliverablesFormat: 'Digital ZIP Download',
    tags: ['Wellness', 'Ambient', 'Meditation'],
    licenseSummary: 'Unlimited usage in your videos/apps. Resale of audio as standalone tracks is prohibited.',
    image: 'https://picsum.photos/seed/meditation/600/400'
  },
  {
    slug: 'energetic-ad-motivational',
    name: 'Energetic & Motivational Ad Packs',
    category: Category.MP3,
    price: 59,
    shortDescription: 'High-energy tracks to drive conversions in ads.',
    longDescription: 'Punchy, fast-paced music designed to grab attention in the first 3 seconds of your Facebook, TikTok, or YouTube ads.',
    trackCount: 12,
    runtime: '30 minutes',
    whatYouGet: [
      '12 High-Energy Tracks',
      '15s and 30s Cutdowns included',
      'Mixed for Voiceover Clarity',
      'Immediate Access'
    ],
    idealFor: 'Media Buyers, Advertisers, and E-commerce brands.',
    deliverablesFormat: 'Digital ZIP Download',
    tags: ['Advertising', 'High-Energy', 'Sales'],
    licenseSummary: 'Standard commercial license for advertising usage.',
    image: 'https://picsum.photos/seed/ads/600/400'
  },
  {
    slug: 'ai-prompt-mastery-pack',
    name: 'AI Content Mastery Prompt Pack',
    category: Category.PROMPT,
    price: 37,
    shortDescription: 'The exact prompts we use to generate $10k/mo in content.',
    longDescription: 'Stop struggling with "bad" AI outputs. This pack contains 100+ precision-engineered prompts for marketing, copywriting, and strategic planning.',
    whatYouGet: [
      '100+ Tested Prompts',
      'Output Formatting Guide',
      'Niche Adaptation Framework',
      'Bonus: GPT-4 Setup Guide'
    ],
    idealFor: 'Content Marketers, Solopreneurs, and Copywriters.',
    deliverablesFormat: 'PDF & Notion Template',
    tags: ['AI', 'Productivity', 'Copywriting'],
    licenseSummary: 'Personal and commercial use for your own business.',
    image: 'https://picsum.photos/seed/ai/600/400'
  }
];
