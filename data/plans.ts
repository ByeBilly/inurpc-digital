import { PricingPlan as Plan } from '../types';

export const PLATFORM_PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Managed',
    tagline: 'Essential maintenance & basics.',
    priceFrom: 195,
    idealFor: 'Small Local Business',
    features: [
      'Managed Hosting & Security',
      'Basic CRM Access',
      'Monthly Content Update',
      'Google Review Management',
      'Email Support'
    ],
    ctaLabel: 'Start Managed Plan'
  },
  {
    id: 'growth',
    name: 'Growth Managed',
    tagline: 'Active growth & automation.',
    priceFrom: 500,
    idealFor: 'Growing Service Teams',
    features: [
      'Priority Hosting & Speed Opt.',
      'Full CRM Management',
      '2x Monthly Content Swaps',
      'Social Media Automation Setup',
      'Missed Call Text Back (AI)',
      'Priority Phone Support'
    ],
    ctaLabel: 'Accelerate Growth',
    highlighted: true
  },
  {
    id: 'dominator',
    name: 'The SEO Dominator',
    tagline: 'Total market domination.',
    priceFrom: 1995,
    idealFor: 'Market Leaders',
    features: [
      'Dedicated Account Manager',
      'Weekly Content Production (Video/Graphic)',
      'Aggressive Local SEO Campaign',
      'Full "AI Employee" Customization',
      'Cross-Platform Ad Management',
      'Google Play Store App Maintenance',
      '24/7 VIP Support Line'
    ],
    ctaLabel: 'Dominate Your Market',
    highlighted: true
  }
];