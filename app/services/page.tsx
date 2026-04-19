import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, PenTool, Code, MapPin, ChartColumn, Link as LinkIcon, ArrowRight, PhoneCall, Sparkles, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Local SEO, web design, content strategy, Google Maps optimization, and analytics for service businesses. Delivering 3–5× more leads in 90 days.',
}

const SERVICES = [
  {
    icon: Search,
    title: 'Keyword Research',
    desc: 'We identify the exact search terms your ideal customers are using — high-intent, local, and conversion-ready. No guesswork, no vanity traffic.',
    bullets: ['Competitor gap analysis', 'Local & service-area keywords', 'Search intent mapping', 'Monthly keyword tracking'],
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    desc: 'Content that ranks and converts. We create service pages, location pages, and blog content engineered to climb Google and pull in qualified leads.',
    bullets: ['Service & location page creation', 'Blog & authority content', 'On-site content audits', 'Content calendar management'],
  },
  {
    icon: Code,
    title: 'On-Page SEO',
    desc: 'We optimize every technical element of your site — from title tags and schema markup to internal linking — so Google understands exactly what you do and who you serve.',
    bullets: ['Meta title & description optimization', 'Schema & structured data', 'Internal link architecture', 'Image alt text & compression'],
  },
  {
    icon: MapPin,
    title: 'Local SEO & Maps',
    desc: 'Dominate the Google Maps 3-Pack in your service area. We combine GBP optimization, citation building, and review strategy to put you at the top when locals search.',
    bullets: ['Google Business Profile management', 'Citation building & cleanup', 'Review generation strategy', 'Service area expansion'],
  },
  {
    icon: LinkIcon,
    title: 'Web Design & Build',
    desc: 'High-converting websites that load fast, look professional, and turn visitors into calls. Built for service businesses, not vanity portfolios.',
    bullets: ['Custom design (no templates)', 'Mobile-first, Core Web Vitals ready', 'Lead capture optimization', 'CMS setup & training'],
  },
  {
    icon: ChartColumn,
    title: 'Analytics & Reporting',
    desc: 'Monthly reports in plain English. Know exactly how many leads came in, which pages are ranking, and what we\'re doing next to keep growing.',
    bullets: ['Google Analytics 4 setup', 'Search Console monitoring', 'Monthly performance reports', 'ROI tracking & call attribution'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-20 py-20 max-w-[1440px] mx-auto">
        <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">WHAT WE DO</p>
        <h1 className="font-serif italic text-[clamp(40px,4.8vw,66px)] leading-[1.08] tracking-[-1.5px] text-k-dark mb-6 max-w-[700px]">
          Every service built to <span className="text-k-orange">flood your phone</span> with local jobs.
        </h1>
        <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[560px] mb-10">
          We don&apos;t offer 40 services and hope one sticks. Everything we do is laser-focused on one outcome: more qualified local leads for your business.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/pricing" className="bg-k-orange text-white text-[13px] font-bold px-7 py-[14px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,0,.3)] transition-all duration-200 inline-flex items-center gap-2">
            VIEW PRICING PLANS
          </Link>
          <Link href="/ai-audit" className="bg-transparent text-k-dark border-[1.5px] border-[rgba(26,26,26,0.25)] text-[13px] font-semibold px-7 py-[13px] rounded-full no-underline hover:bg-k-dark hover:text-white hover:border-k-dark transition-all duration-200 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> FREE SEO AUDIT
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-20 pb-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="bg-white rounded-[14px] p-10 border border-k-border hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-200">
              <div className="w-[52px] h-[52px] bg-[#fff0eb] rounded-[14px] flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-k-orange" />
              </div>
              <h2 className="text-[20px] font-bold mb-3">{title}</h2>
              <p className="text-[14px] text-k-mid leading-[1.7] mb-6">{desc}</p>
              <ul className="space-y-2.5 mb-6 list-none p-0 m-0">
                {bullets.map(b => (
                  <li key={b} className="flex items-center gap-2.5 text-[13.5px] text-k-mid">
                    <span className="text-k-orange font-bold text-[13px]">✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-[12px] font-bold tracking-[0.5px] uppercase text-k-orange no-underline inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                GET STARTED <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Katylst */}
      <section className="bg-white px-6 md:px-20 py-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">WHY KATYLST</p>
            <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-k-dark mb-6">We only work with<br />service businesses.</h2>
            <p className="text-[16px] text-k-mid leading-[1.7] mb-8">We&apos;re not a generalist agency. We live and breathe local service business marketing — plumbers, roofers, HVAC, realtors, landscapers. That focus is why we win.</p>
            <div className="space-y-5">
              {[
                { stat: '450+', label: 'Service businesses served' },
                { stat: '12k+', label: 'Qualified leads generated' },
                { stat: '90',   label: 'Days to see real results' },
                { stat: '4.9',  label: 'Average client rating' },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="font-serif text-[32px] font-extrabold text-k-orange leading-none w-24 flex-shrink-0">{stat}</span>
                  <span className="text-[14px] text-k-mid">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { icon: Star,      title: 'Niche expertise',    desc: 'We know what works for service businesses — the keywords, the CTAs, the local signals. No learning curve on your dime.' },
              { icon: PhoneCall, title: 'Results-first',      desc: 'We track phone calls, form fills, and booked jobs — not just rankings and traffic.' },
              { icon: ChartColumn,title:'Full transparency',  desc: 'You own all your accounts, all your content, all your data. We work for you, not your lock-in.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start bg-k-bg rounded-[14px] p-6 border border-k-border">
                <div className="w-[44px] h-[44px] bg-[#fff0eb] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-k-orange" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold mb-1.5">{title}</h3>
                  <p className="text-[13.5px] text-k-mid leading-[1.6]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-k-dark text-white text-center px-6 md:px-20 py-24">
        <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] mb-4">
          Ready to flood your <span className="text-k-orange">phone?</span>
        </h2>
        <p className="text-[16.5px] text-white/55 max-w-[480px] mx-auto mb-10">Book a free strategy call and we&apos;ll map out exactly what it takes to dominate your local market.</p>
        <Link href="/contact" className="bg-k-orange text-white text-[13px] font-bold px-8 py-[15px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
          <PhoneCall className="w-4 h-4" /> BOOK YOUR FREE CALL
        </Link>
      </section>
    </>
  )
}
