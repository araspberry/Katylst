
import { Service, PricingPlan, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Keyword Research',
    description: 'Data-driven strategy to find high-intent keywords that drive relevant traffic to your business.',
    icon: 'fa-magnifying-glass-chart'
  },
  {
    id: '2',
    title: 'Content Strategy',
    description: 'We create engaging, SEO-optimized content that builds authority and converts visitors into customers.',
    icon: 'fa-pen-nib'
  },
  {
    id: '3',
    title: 'On-Page SEO',
    description: 'Technical optimization of your website structure and metadata to ensure maximum crawlability.',
    icon: 'fa-code'
  },
  {
    id: '4',
    title: 'Link Building',
    description: 'Ethical, high-quality backlink campaigns that improve your domain authority and rankings.',
    icon: 'fa-link'
  },
  {
    id: '5',
    title: 'Analytics & Reporting',
    description: 'Transparent, real-time dashboards that show exactly how your SEO campaigns are performing.',
    icon: 'fa-chart-line'
  },
  {
    id: '6',
    title: 'Local SEO',
    description: 'Dominating local search results to drive foot traffic and inquiries to your physical locations.',
    icon: 'fa-location-dot'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$999',
    period: '/mo',
    features: ['10 Keywords', 'On-page Optimization', 'Content Audit', 'Monthly Report', 'Standard Support'],
    recommended: false
  },
  {
    name: 'Growth',
    price: '$1,999',
    period: '/mo',
    features: ['30 Keywords', 'Technical SEO', '2 Blog Posts / Month', 'Competitor Analysis', 'Priority Support'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    period: '/mo',
    features: ['Custom Keywords', 'Full Site Strategy', 'Bi-weekly Meetings', 'Advanced Link Building', 'Dedicated Manager'],
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO at TechBloom',
    content: "Our organic traffic tripled in just six months. The team's attention to detail and data-driven approach is second to none.",
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    name: 'Mark Thompson',
    role: 'Marketing Director, EduPath',
    content: "The best SEO agency we've ever worked with. They don't just provide rankings; they provide ROI-focused results.",
    avatar: 'https://picsum.photos/id/65/100/100'
  }
];
