import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Search, PenTool, Code, MapPin, ChartColumn, Link as LinkIcon,
  ArrowRight, Star, PhoneCall, Sparkles,
} from 'lucide-react'
import PhoneMockup from '@/components/PhoneMockup'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Performance SEO & High-Converting Websites for Local Pros',
  description: 'Katylst builds high-converting websites and runs laser-focused local SEO for plumbers, roofers, HVAC pros, realtors & service businesses — delivering 3–5× more leads in 90 days.',
}

const SERVICES = [
  { icon: Search,     title: 'Keyword Research',    desc: 'Data-driven keyword strategy to find high-intent terms that drive relevant traffic and convert into paying customers.' },
  { icon: PenTool,    title: 'Content Strategy',     desc: 'We create engaging, SEO-optimized content that builds authority with search engines and turns visitors into loyal customers.' },
  { icon: Code,       title: 'On-Page SEO',          desc: 'Technical optimization of your website structure and metadata to ensure crawlability, relevance, and maximum ranking potential.' },
  { icon: MapPin,     title: 'Local SEO & Maps',     desc: 'Dominate the Google Maps 3-Pack in your service area. We optimize your GBP, citations, and local signals so customers find you first.' },
  { icon: LinkIcon,   title: 'Web Design & Build',   desc: 'High-converting websites built for speed, trust, and lead generation. Every element is intentional — from headline to CTA button.' },
  { icon: ChartColumn,title: 'Analytics & Reporting',desc: 'Clear, jargon-free monthly reports showing exactly what\'s working, what leads came in, and what we\'re doing next.' },
]

const TESTIMONIALS = [
  { initials: 'SJ', name: 'Sarah Jenkins',   role: 'CEO',             company: "Sarah's Plumbing",  headline: '"The phone hasn\'t stopped ringing."',  body: 'Katylst transformed our lead generation. We went from chasing customers to having them chase us. The conversion rate on our new site is night and day compared to our old template.', featured: false },
  { initials: 'MT', name: 'Marcus Thorne',   role: 'Founder',         company: 'Thorne Roofing',    headline: '"Maps Dominance."',                       body: 'The local SEO retainer is worth every penny. Our Google Maps visibility has skyrocketed. We now hold the top spot for "Roofers near me" in three different service areas.', featured: false },
  { initials: 'ER', name: 'Elena Rodriguez', role: 'Managing Partner', company: 'Summit Realty',    headline: '"High-Value Leads Only."',                body: 'Our organic traffic grew by 312% in the first 90 days. The strategy isn\'t just about traffic — it\'s about the quality of the leads. These are ready-to-list homeowners.', featured: true },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-66px)]">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#fff0eb] border border-[rgba(255,77,0,0.15)] rounded-full px-[14px] py-[6px] text-[12.5px] font-medium text-k-orange mb-7">
            <span className="w-[6px] h-[6px] rounded-full bg-k-orange inline-block" />
            Local Lead Generation Pros
          </div>
          <h1 className="font-serif italic text-[clamp(40px,4.8vw,66px)] leading-[1.08] tracking-[-1.5px] text-k-dark mb-6">
            Websites + SEO That<br />
            <span className="text-k-orange">Flood Your Phone</span><br />
            with Local Jobs
          </h1>
          <p className="text-[16.5px] leading-[1.7] text-k-mid max-w-[460px] mb-10">
            We build high-converting websites and run laser-focused local SEO for plumbers, roofers, HVAC pros, realtors &amp; service businesses — delivering 3–5× more leads in 90 days.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="bg-k-orange text-white text-[13px] font-bold px-7 py-[14px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,0,.3)] transition-all duration-200 inline-flex items-center gap-2">
              VIEW PRICING PLANS
            </Link>
            <Link href="/contact" className="bg-transparent text-k-dark border-[1.5px] border-[rgba(26,26,26,0.25)] text-[13px] font-semibold px-7 py-[13px] rounded-full no-underline hover:bg-k-dark hover:text-white hover:border-k-dark hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> BOOK STRATEGY CALL
            </Link>
          </div>
        </div>
        <PhoneMockup />
      </section>

      {/* ── TRUST BAR ── */}
      <TrustBar />

      {/* ── SERVICES ── */}
      <section id="services" className="px-6 md:px-20 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">OUR EXPERTISE</p>
            <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-k-dark mb-4">Complete SEO Solutions</h2>
            <p className="text-[16.5px] text-k-mid leading-[1.68] max-w-[540px] mx-auto">Everything you need to improve your online visibility, attract more visitors, and convert them into loyal customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-[10px] p-[34px_30px] border border-k-border hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-200">
                <div className="w-[50px] h-[50px] bg-[#fff0eb] rounded-[12px] flex items-center justify-center mb-6">
                  <Icon className="w-[22px] h-[22px] text-k-orange" />
                </div>
                <h3 className="text-[17px] font-bold mb-2.5">{title}</h3>
                <p className="text-[13.5px] leading-[1.65] text-k-mid mb-6">{desc}</p>
                <Link href="/services" className="text-[12px] font-bold tracking-[0.5px] uppercase text-k-orange no-underline inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIT TEASER ── */}
      <section className="bg-white px-6 md:px-20 py-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">FREE SEO ROADMAP</p>
            <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-k-dark mb-4">
              See exactly how your<br /><span className="text-k-orange">SEO stacks up.</span>
            </h2>
            <p className="text-[16.5px] text-k-mid leading-[1.68] mb-8">
              Enter your website URL and our analyzer will scan your site across 50+ ranking factors and deliver a comprehensive SEO health report with actionable recommendations.
            </p>
            <Link
              href="/ai-audit"
              className="bg-k-orange text-white text-[13px] font-bold px-7 py-[14px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,0,.3)] transition-all duration-200 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> RUN MY FREE AUDIT
            </Link>
          </div>
          <div className="bg-k-bg border border-k-border rounded-[20px] p-10 flex flex-col gap-5">
            {[
              { icon: Search,     label: 'Heading Structure (H1–H3)', desc: 'Clean hierarchy, keyword-aligned and properly nested.' },
              { icon: MapPin,     label: 'LocalBusiness Schema',       desc: 'Structured data that tells Google exactly who you are.' },
              { icon: Code,       label: 'Technical SEO Health',       desc: 'Canonical tags, meta descriptions, HTTPS, image alts.' },
              { icon: PhoneCall,  label: 'Conversion Readiness',       desc: 'Phone presence, CTAs, forms, and trust signals.' },
              { icon: ChartColumn,label: 'Real Lighthouse Scores',     desc: 'FCP, LCP, CLS, TBT — the metrics Google uses to rank.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-[44px] h-[44px] bg-[#fff0eb] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-[19px] h-[19px] text-k-orange" />
                </div>
                <div>
                  <h4 className="text-[14.5px] font-bold mb-1">{label}</h4>
                  <p className="text-[13px] text-k-mid leading-[1.55]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="px-6 md:px-20 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end mb-14">
            <div>
              <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">SOCIAL PROOF</p>
              <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-k-dark mb-4">We don&apos;t just talk<br />about results.</h2>
              <p className="text-[16.5px] text-k-mid leading-[1.68] max-w-[500px]">Join hundreds of service area leaders who have engineered their growth with Katylst.</p>
            </div>
            <div className="flex gap-9">
              <div className="text-right">
                <div className="font-serif text-[34px] font-extrabold text-k-dark leading-none mb-1">4.9/5</div>
                <div className="text-k-orange text-[13px] mb-1">★★★★★</div>
                <div className="text-[10px] font-bold tracking-[1px] uppercase text-k-light">Average Rating</div>
              </div>
              <div className="text-right">
                <div className="font-serif text-[34px] font-extrabold text-k-dark leading-none mb-1">12k+</div>
                <div className="text-[10px] font-bold tracking-[1px] uppercase text-k-light mt-[18px]">Leads Generated</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className={`rounded-[10px] p-[34px_30px] border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${t.featured ? 'bg-k-orange border-k-orange text-white' : 'bg-white border-k-border'}`}>
                <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-[13px] mb-[18px] ${t.featured ? 'bg-white/20 text-white' : 'bg-[#fff0eb] text-k-orange'}`}>
                  {t.initials}
                </div>
                <div className="text-[14.5px] font-bold mb-0.5">{t.name}</div>
                <div className={`text-[10px] font-bold tracking-[0.5px] uppercase mb-1 ${t.featured ? 'text-white/60' : 'text-k-light'}`}>{t.role}</div>
                <div className={`text-[11.5px] mb-[18px] ${t.featured ? 'text-white/65' : 'text-k-mid'}`}>🏠 {t.company}</div>
                <div className="font-serif italic text-[17px] leading-[1.3] mb-3">{t.headline}</div>
                <p className={`text-[13px] leading-[1.7] mb-[18px] ${t.featured ? 'text-white/75' : 'text-k-mid'}`}>{t.body}</p>
                <span className={`text-[10.5px] font-bold tracking-[0.8px] uppercase cursor-pointer ${t.featured ? 'text-white/85' : 'text-k-orange'}`}>CASE STUDY →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-k-dark text-white text-center px-6 md:px-20 py-24">
        <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-white/40 mb-4">READY TO GROW?</p>
        <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-white mb-4">
          Stop leaving leads<br />on the <span className="text-k-orange">table.</span>
        </h2>
        <p className="text-[16.5px] text-white/55 leading-[1.68] max-w-[540px] mx-auto mb-12">
          Book a free 30-minute strategy call. We&apos;ll audit your current presence, show you exactly what&apos;s holding you back, and map out what 90 days could look like.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="bg-k-orange text-white text-[13px] font-bold px-7 py-[14px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
            <PhoneCall className="w-4 h-4" /> BOOK STRATEGY CALL
          </Link>
          <Link href="/ai-audit" className="bg-transparent text-white border-[1.5px] border-white/30 text-[13px] font-semibold px-7 py-[13px] rounded-full no-underline hover:border-white hover:bg-white/[0.06] transition-all duration-200 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> GET FREE SEO AUDIT
          </Link>
        </div>
      </section>
    </>
  )
}
