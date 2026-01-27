import { PricingPlan } from '../types';

export const PLATFORM_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Business Starter',
    tagline: 'Perfect for small businesses just getting started.',
    priceFrom: 99,
    idealFor: 'Solo Traders & Small Teams',
    features: [
      '2-Way SMS & Email Sync',
      'Unified Inbox',
      'Basic Calendar Booking',
      'Google My Business Integration',
      'Missed Call Text Back',
      'Standard Support'
    ],
    ctaLabel: 'Start Growing',
    highlighted: false
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    tagline: 'Automate your sales and reputation management.',
    priceFrom: 297,
    idealFor: 'Growing Service Businesses',
    features: [
      'Everything in Starter',
      'AI Review Management',
      'Advanced Workflows & Automation',
      'Unlimited Funnels & Forms',
      'Social Media Planner',
      'Priority Support',
      'Affiliate Manager'
    ],
    ctaLabel: 'Scale Up',
    highlighted: false
  },
  {
    id: 'dominator',
    name: 'The SEO Dominator',
    tagline: 'Total market domination. Website, Content & AI.',
    priceFrom: 19950,
    idealFor: 'Businesses Ready to Rule',
    features: [
      'Complete Premium Website Build',
      '6 Months Social Media Ads Managed',
      'Monthly Podcast & Video Production',
      'Full CRM Setup & Automations',
      'AI Receptionist Army',
      'Massive Local SEO Boost',
      'Dedicated Account Manager'
    ],
    ctaLabel: 'Dominate Your Market',
    highlighted: true
  }
];