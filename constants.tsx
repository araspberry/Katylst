
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
    name: 'Web Design & Dev',
    price: '$3,995',
    period: 'One-time',
    description: 'A high-performance, custom-engineered website built to convert local traffic into customers.',
    type: 'one-time',
    features: ['Custom UI/UX Design', 'Conversion-First Architecture', 'Mobile-Responsive Coding', 'Basic On-Page SEO', 'Fast-Load Optimization'],
    recommended: false
  },
  {
    name: 'Local SEO Retainer',
    price: '$500',
    period: '/mo',
    description: 'Consistent, aggressive local search optimization to keep your phone ringing daily.',
    type: 'monthly',
    features: ['GMB Profile Management', 'Local Citation Building', 'Keyword Tracking (5-10)', 'Weekly Google Posts', 'Monthly Performance Report'],
    recommended: false
  },
  {
    name: 'SEO + Web Bundle',
    price: '$4,495',
    subPrice: '+ $500/mo',
    period: 'Build + Retainer',
    description: 'The ultimate growth engine. A new custom site plus the power of sustained local SEO.',
    type: 'bundle',
    features: ['Everything in Web Dev', 'Everything in Local SEO', 'Priority Launch Status', 'Integrated CRM Tracking', 'Quarterly Strategy Deep-Dives'],
    recommended: true
  },
  {
    name: 'Social Ads Engine',
    price: '$1,995',
    period: '/mo',
    description: 'Hyper-targeted Meta & Google ads designed to generate instant high-intent inquiries.',
    type: 'monthly',
    features: ['Ad Creative Production', 'A/B Testing Campaigns', 'Audience Targeting', 'Daily Budget Management', 'Lead Form Integration'],
    recommended: false
  },
  {
    name: 'Enterprise AI Core',
    price: '$Custom',
    period: 'Consulting',
    description: 'Bespoke AI workflows and automation for multi-location service brands looking to scale.',
    type: 'monthly',
    features: ['Custom AI Chatbots', 'Workflow Automation', 'Brand Voice Training', 'API Integrations', 'Dedicated Account Team'],
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Sarah\'s Plumbing',
    content: 'Katylst transformed our lead generation. We went from chasing customers to having them chase us. The conversion rate on our new site is night and day compared to our old template.',
    headline: 'The phone hasn\'t stopped ringing.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-droplet'
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'Thorne Roofing',
    content: 'The local SEO retainer is worth every penny. Our Google Maps visibility has skyrocketed. We now hold the top spot for "Roofers near me" in three different service areas.',
    headline: 'Maps Dominance.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-house-chimney'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Managing Partner',
    company: 'Summit Realty',
    content: 'Our organic traffic grew by 312% in the first 90 days. The strategy isn\'t just about traffic—it\'s about the quality of the leads. These are ready-to-list homeowners.',
    headline: 'High-Value Leads Only.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-building'
  },
  {
    name: 'David Choi',
    role: 'Owner',
    company: 'CoolAir HVAC',
    content: 'The Social Ads engine provided instant relief during our slow season. We saw a 14x ROI on our first campaign. Absolute game changer for our cash flow.',
    headline: 'Instant ROI.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-wind'
  },
  {
    name: 'Jessica Wu',
    role: 'Marketing Director',
    company: 'Prime Law Associates',
    content: 'Working with Katylst feels like having an in-house engineering team focused entirely on our growth. Their reporting is transparent and their results are undeniable.',
    headline: 'Bespoke Growth.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-scale-balanced'
  },
  {
    name: 'Robert Miller',
    role: 'General Manager',
    company: 'Miller Landscaping',
    content: 'Our local SEO has never been stronger. We are getting calls from neighborhood zip codes we never used to reach. The AI Audit was spot on from day one.',
    headline: 'Territory Growth.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    logo: 'fa-solid fa-tree'
  }
];
