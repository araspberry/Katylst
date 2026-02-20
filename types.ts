
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  subPrice?: string;
  period: string;
  description: string;
  features: string[];
  recommended: boolean;
  type: 'one-time' | 'monthly' | 'bundle';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  headline: string;
  avatar: string;
  logo: string;
}

export interface AuditResult {
  overview: string;
  strategies: string[];
  score: number;
}
