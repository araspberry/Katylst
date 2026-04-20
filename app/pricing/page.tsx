import type { Metadata } from 'next'
import Link from 'next/link'
import { PhoneCall, Sparkles, Globe, Search, Megaphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, results-focused pricing for websites, local SEO, and social media ads. No long-term contracts.',
}

const PLANS = [
  {
    icon: Globe,
    tier: 'Websites',
    price: '297',
    label: '/month',
    desc: 'A high-converting, mobile-optimized website built for local service businesses — designed to turn visitors into booked jobs.',
    features: [
      'Custom design & build',
      'Mobile-first & fast-loading',
      'Contact & lead capture forms',
      'Google Analytics setup',
      'On-page SEO foundation',
      'Hosting & maintenance included',
    ],
    cta: 'GET STARTED',
    popular: false,
  },
  {
    icon: Search,
    tier: 'Local SEO',
    price: '997',
    label: '/month',
    desc: 'Dominate local search and Google Maps so that when someone in your area searches for your service, they find you first.',
    features: [
      'Google Business Profile management',
      'Local keyword targeting',
      'Citation building & cleanup',
      'Monthly rankings report',
      'On-page optimization',
      'Competitor gap analysis',
    ],
    cta: 'GET STARTED',
    popular: true,
  },
  {
    icon: Megaphone,
    tier: 'Social Media Ads',
    price: '799',
    label: '/month + ad spend',
    desc: 'Targeted Facebook and Instagram ad campaigns that put your business in front of homeowners actively looking for your services.',
    features: [
      'Facebook & Instagram campaigns',
      'Custom audience targeting',
      'Ad creative & copywriting',
      'A/B testing & optimization',
      'Lead form & landing page setup',
      'Monthly performance report',
    ],
    cta: 'GET STARTED',
    popular: false,
  },
]

const FAQS = [
  { q: 'Are there any long-term contracts?', a: 'No. We work month-to-month. We earn your business every month by delivering results.' },
  { q: 'How quickly will I see results?', a: 'Most clients see measurable improvements in calls and leads within 60–90 days. SEO compounds over time, so results only improve.' },
  { q: 'Do I own my website and content?', a: 'Yes, 100%. You own everything we build. All accounts, all content, all data — always.' },
  { q: 'What industries do you work with?', a: 'We focus exclusively on local service businesses — plumbers, roofers, HVAC, realtors, landscapers, electricians, and similar trades.' },
  { q: 'What does the onboarding look like?', a: 'After signing, we kick off with a 90-minute strategy session, full audit, and launch your first deliverables within 2 weeks.' },
  { q: 'Can I bundle services?', a: 'Absolutely. Clients who combine website + SEO + ads get our best results and bundle pricing. Reach out at growth@katylst.co to discuss.' },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-20 py-20 text-center max-w-[1440px] mx-auto">
        <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">TRANSPARENT PRICING</p>
        <h1 className="font-serif italic text-[clamp(40px,4.8vw,66px)] leading-[1.08] tracking-[-1.5px] text-k-dark mb-5">
          Invest in growth,<br />not guesswork.
        </h1>
        <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[540px] mx-auto mb-4">
          Simple, service-based pricing. Pick what you need, bundle for best results.
        </p>
        <p className="text-[13.5px] text-k-mid">No long-term contracts · Cancel anytime · You own everything</p>
      </section>

      {/* Plans */}
      <section className="px-6 md:px-20 pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map(plan => {
            const Icon = plan.icon
            return (
              <div
                key={plan.tier}
                className={`relative rounded-[10px] p-[38px_34px] border-[1.5px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${
                  plan.popular ? 'bg-k-dark border-k-dark text-white' : 'bg-white border-k-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-k-orange text-white text-[9.5px] font-bold tracking-[1.5px] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className="w-10 h-10 rounded-lg bg-k-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-k-orange" />
                </div>
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-k-orange mb-2">{plan.tier}</p>
                <div className="font-serif text-[46px] font-extrabold leading-none mb-1">
                  <span className="text-[20px] font-sans font-normal">$</span>{plan.price}
                </div>
                <p className={`text-[13px] mb-6 ${plan.popular ? 'text-white/40' : 'text-k-light'}`}>{plan.label}</p>
                <p className={`text-[13.5px] leading-[1.62] mb-6 pb-6 border-b ${plan.popular ? 'text-white/55 border-white/10' : 'text-k-mid border-k-border'}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8 list-none p-0 m-0">
                  {plan.features.map(f => (
                    <li key={f} className={`flex gap-2.5 text-[13.5px] ${plan.popular ? 'text-white/70' : 'text-k-mid'}`}>
                      <span className="text-k-orange font-bold flex-shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-[13px] rounded-full text-[13px] font-bold tracking-[0.3px] no-underline transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-k-orange text-white hover:bg-k-orange-lt'
                      : 'bg-transparent text-k-dark border-[1.5px] border-[rgba(0,0,0,0.18)] hover:border-k-dark'
                  }`}
                >
                  {plan.cta} →
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Free audit nudge */}
      <section className="bg-white px-6 md:px-20 py-16 text-center">
        <p className="text-[14px] text-k-mid mb-3">Not sure where to start?</p>
        <Link href="/ai-audit" className="inline-flex items-center gap-2 bg-k-orange/10 text-k-orange text-[13px] font-bold px-6 py-3 rounded-full no-underline hover:bg-k-orange/20 transition-colors">
          <Sparkles className="w-4 h-4" /> Run a free SEO audit first — it takes 30 seconds
        </Link>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3 text-center">FAQ</p>
          <h2 className="font-serif italic text-[clamp(34px,3.8vw,48px)] leading-[1.1] tracking-[-1px] text-k-dark mb-12 text-center">Common questions</h2>
          <div className="space-y-5">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-[14px] border border-k-border p-7">
                <h3 className="text-[15px] font-bold text-k-dark mb-2">{q}</h3>
                <p className="text-[14px] text-k-mid leading-[1.7]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-k-dark text-white text-center px-6 md:px-20 py-24">
        <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] mb-4">
          Ready to get <span className="text-k-orange">started?</span>
        </h2>
        <p className="text-[16.5px] text-white/55 max-w-[480px] mx-auto mb-10">Book a free strategy call — no obligation, no pitch deck. Just a conversation about your business and what growth looks like.</p>
        <Link href="/contact" className="bg-k-orange text-white text-[13px] font-bold px-8 py-[15px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
          <PhoneCall className="w-4 h-4" /> BOOK YOUR FREE CALL
        </Link>
      </section>
    </>
  )
}
