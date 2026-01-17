import { PricingPlan } from '../types';

export const PLATFORM_PLANS: PricingPlan[] = [
  {
    id: 'launch',
    name: 'Your best ever business decision',
    tagline: 'Perfect for solos and early-stage startups.',
    priceFrom: 297,
    idealFor: 'Individual consultants and new local service providers.',
    features: [
      'Core CRM & Lead Management',
      '2-Way SMS & Email Sync',
      'Basic Automation Workflows',
      'Single Landing Page Funnel',
      'Unified Messaging Inbox',
      'Mobile App Access'
    ],
    ctaLabel: 'Start Launch'
  },
  {
    id: 'growth-engine',
    name: 'Set the bar, be a gamechanger',
    tagline: 'Our most popular choice for scaling businesses.',
    priceFrom: 497,
    idealFor: 'Established clinics, agencies, and e-commerce brands.',
    features: [
      'Everything in Launch',
      'Advanced Multi-step Automations',
      'Unlimited Funnels & Landing Pages',
      'Calendar & Appointment Booking',
      'Reputation Management (Reviews)',
      'A/B Split Testing Tools',
      'Done-With-You Onboarding'
    ],
    ctaLabel: 'Upgrade to Growth',
    highlighted: true
  },
  {
    id: 'scale-partner',
    name: 'Node State',
    tagline: 'Fully managed infrastructure for market leaders.',
    priceFrom: 997,
    idealFor: 'High-volume clinics, franchises, and course creators.',
    features: [
      'Everything in Growth Engine',
      'Dedicated Strategy Consultant',
      'Custom Snapshot Development',
      'API Integrations & Webhooks',
      'Enterprise Client Portals',
      'Premium Support (4hr TAT)',
      'Bi-weekly Optimization Audits'
    ],
    ctaLabel: 'Talk to an Expert'
  }
];