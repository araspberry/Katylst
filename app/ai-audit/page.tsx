'use client'
import { useState, useRef } from 'react'
import { Search, MapPin, Code, PhoneCall, ChartColumn, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

// ── Types ────────────────────────────────────────────
type Step = 'url' | 'email' | 'loading' | 'results' | 'error'

interface AuditData {
  url: string
  avg: number
  perf: number
  seo: number
  a11y: number
  bp: number
  metrics: { label: string; value: string; type: 'ok' | 'warn' | 'bad' | 'info' }[]
  issues: { title: string; desc: string; level: 'bad' | 'warn' | 'info' }[]
  passed: string[]
}

// ── Helpers ──────────────────────────────────────────
const scoreColor = (s: number) => s >= 90 ? '#22c55e' : s >= 50 ? '#f59e0b' : '#ef4444'
const scoreDesc  = (s: number) =>
  s >= 80 ? 'Good foundation, but there\'s room for improvement. See recommendations below.'
  : s >= 60 ? 'Several issues detected that are hurting your rankings. See the full report below.'
  : 'Significant SEO problems found. Let\'s fix these and start growing.'

function Ring({ score, r, cx = 45, cy = 45, size = 90, sw = 6 }: { score: number; r: number; cx?: number; cy?: number; size?: number; sw?: number }) {
  const circ   = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  const color  = scoreColor(score)
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={sw} cx={cx} cy={cy} r={r} />
      <circle fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round"
        cx={cx} cy={cy} r={r}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.9s ease' }}
      />
    </svg>
  )
}

function MiniRing({ score, size = 64 }: { score: number; size?: number }) {
  const r    = 26
  const circ = 2 * Math.PI * r
  const off  = circ - (score / 100) * circ
  const color = scoreColor(score)
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle fill="none" stroke="#e2e8f0" strokeWidth="5" cx="32" cy="32" r={r} />
      <circle fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
        cx="32" cy="32" r={r}
        strokeDasharray={circ}
        strokeDashoffset={off}
        style={{ transition: 'stroke-dashoffset 0.9s ease' }}
      />
    </svg>
  )
}

const METRIC_BG: Record<string, string> = {
  ok:   'bg-green-50 border border-green-200',
  warn: 'bg-yellow-50 border border-yellow-200',
  bad:  'bg-red-50 border border-red-100',
  info: 'bg-blue-50 border border-blue-200',
}
const METRIC_VAL: Record<string, string> = {
  ok: 'text-green-600', warn: 'text-yellow-500', bad: 'text-red-500', info: 'text-blue-500',
}
const METRIC_ICO: Record<string, string> = { ok: '✓', warn: '△', bad: '⊗', info: 'ℹ' }
const ISSUE_BG:  Record<string, string> = {
  bad:  'bg-red-50 border border-red-100',
  warn: 'bg-yellow-50 border border-yellow-200',
  info: 'bg-blue-50 border border-blue-200',
}
const ISSUE_ICO: Record<string, string> = { bad: '⊗', warn: '△', info: 'ℹ' }

// ── Component ────────────────────────────────────────
export default function AiAuditPage() {
  const [step,    setStep]    = useState<Step>('url')
  const [url,     setUrl]     = useState('')
  const [email,   setEmail]   = useState('')
  const [data,    setData]    = useState<AuditData | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Step 1 → Step 2
  function handleUrl() {
    const raw = url.trim()
    if (!raw) return
    const full = raw.startsWith('http') ? raw : 'https://' + raw
    try { new URL(full) } catch { alert('Please enter a valid URL.'); return }
    setUrl(full)
    setStep('email')
  }

  // Step 2 → Run audit
  async function handleEmail() {
    const em = email.trim()
    if (!em || !em.includes('@')) return

    // Fire lead to growth@katylst.co
    try {
      const ejs = (await import('@emailjs/browser')).default
      ejs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY || '')
      ejs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE  || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '',
        { to_email: 'growth@katylst.co', from_email: em, website_url: url, message: `New SEO Audit Lead\nEmail: ${em}\nURL: ${url}\nTime: ${new Date().toLocaleString()}` }
      )
    } catch { /* fail silently — don't block UX */ }

    setStep('loading')
    await runAudit(url)
  }

  async function runAudit(targetUrl: string) {
    try {
      // Calls our own API route — easy to swap for real backend in Phase 3
      const res  = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: targetUrl, email }),
      })
      const json = await res.json()

      if (!res.ok || json.error) throw new Error(json.error || 'Audit failed')

      setData({
        url:     json.url,
        avg:     json.score,
        perf:    json.perf,
        seo:     json.seo,
        a11y:    json.a11y,
        bp:      json.bp,
        metrics: json.metrics,
        issues:  json.issues,
        passed:  json.passed,
      })
      setStep('results')
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
    } catch {
      setStep('error')
    }
  }

  function reset() {
    setStep('url'); setUrl(''); setEmail(''); setData(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="px-6 md:px-20 py-16 max-w-[1440px] mx-auto">
        <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">FREE AI-POWERED AUDIT</p>
        <h1 className="font-serif italic text-[clamp(36px,4.5vw,60px)] leading-[1.1] tracking-[-1.5px] text-k-dark mb-4">
          See exactly how your<br /><span className="text-k-orange">SEO stacks up.</span>
        </h1>
        <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[540px] mb-10">
          Enter your website URL and our analyzer will scan your site across 50+ ranking factors and deliver a comprehensive SEO health report with actionable recommendations.
        </p>

        {/* ── 2-STEP FORM ── */}
        <div className="max-w-[640px]">

          {/* Step indicators */}
          {(step === 'url' || step === 'email') && (
            <div className="flex gap-1.5 mb-6">
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 'url' ? 'w-8 bg-k-orange' : 'w-5 bg-k-border'}`} />
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 'email' ? 'w-8 bg-k-orange' : 'w-5 bg-k-border'}`} />
            </div>
          )}

          {/* STEP 1 — URL */}
          {step === 'url' && (
            <div>
              <p className="text-[11px] font-bold tracking-[0.5px] text-k-light mb-2">STEP 1 OF 2</p>
              <div className="flex bg-white border-[1.5px] border-k-border rounded-full overflow-hidden focus-within:border-k-orange transition-colors">
                <input
                  type="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleUrl()}
                  placeholder="https://yourwebsite.com"
                  className="flex-1 px-[18px] py-[13px] bg-transparent border-none outline-none font-sans text-[14.5px] text-k-dark placeholder:text-gray-300"
                />
                <button
                  onClick={handleUrl}
                  className="bg-k-orange text-white px-5 py-[13px] font-bold text-[12px] tracking-[0.5px] uppercase flex items-center gap-1.5 hover:bg-k-orange-lt transition-colors whitespace-nowrap"
                >
                  ANALYZE MY SITE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex gap-4 mt-4 flex-wrap">
                {['✅ Free audit', '🔒 No spam, ever', '⚡ Results in ~30s'].map(t => (
                  <span key={t} className="text-[12px] text-k-mid">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 — EMAIL */}
          {step === 'email' && (
            <div>
              <p className="text-[11px] font-bold tracking-[0.5px] text-k-light mb-2">STEP 2 OF 2</p>
              <div className="flex items-center gap-2 bg-white border border-k-border rounded-[8px] px-3.5 py-2 mb-4 max-w-max">
                <span className="w-[7px] h-[7px] rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-[13px] text-k-mid">{url.replace(/^https?:\/\//, '')}</span>
              </div>
              <div className="flex bg-white border-[1.5px] border-k-border rounded-full overflow-hidden focus-within:border-k-orange transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEmail()}
                  placeholder="your@email.com"
                  autoFocus
                  className="flex-1 px-[18px] py-[13px] bg-transparent border-none outline-none font-sans text-[14.5px] text-k-dark placeholder:text-gray-300"
                />
                <button
                  onClick={handleEmail}
                  className="bg-k-orange text-white px-5 py-[13px] font-bold text-[12px] tracking-[0.5px] uppercase flex items-center gap-1.5 hover:bg-k-orange-lt transition-colors whitespace-nowrap"
                >
                  GET MY REPORT <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <button onClick={() => setStep('url')} className="mt-3 text-[12.5px] text-k-light hover:text-k-dark bg-transparent border-none cursor-pointer transition-colors flex items-center gap-1">
                ← Change URL
              </button>
            </div>
          )}

          {/* LOADING */}
          {step === 'loading' && (
            <div className="flex items-center gap-4 py-4">
              <div className="w-11 h-11 rounded-full border-[3px] border-k-border border-t-k-orange spinner flex-shrink-0" />
              <p className="text-[14px] text-k-mid">Scanning your site across 50+ SEO factors…</p>
            </div>
          )}

          {/* ERROR */}
          {step === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-[14px] p-5">
              <p className="text-[14px] font-bold text-red-700 mb-1">Couldn&apos;t reach that URL</p>
              <p className="text-[13px] text-red-600 mb-4">The URL may be blocked or offline. Please try a publicly-accessible URL.</p>
              <button onClick={reset} className="bg-k-orange text-white text-[12px] font-bold px-5 py-2.5 rounded-full border-none cursor-pointer hover:bg-k-orange-lt transition-colors">
                TRY AGAIN
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── RESULTS ── */}
      {step === 'results' && data && (
        <section ref={resultsRef} className="px-6 md:px-20 pb-24 max-w-[1440px] mx-auto">
          <div className="max-w-[860px]">

            {/* Score header */}
            <div className="bg-k-dark rounded-[16px] p-8 mb-5 flex items-center gap-8">
              <div className="relative w-[90px] h-[90px] flex-shrink-0">
                <Ring score={data.avg} r={38} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-[26px] font-extrabold text-white leading-none">{data.avg}</span>
                  <span className="text-[11px] text-white/40">/100</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-k-orange mb-1.5">SEO HEALTH REPORT</p>
                <p className="text-[18px] font-bold text-white mb-1.5 break-all">{data.url}</p>
                <p className="text-[13px] text-white/50 leading-[1.55]">{scoreDesc(data.avg)}</p>
              </div>
            </div>

            {/* Category scores */}
            <div className="grid grid-cols-4 bg-white rounded-[14px] border border-k-border overflow-hidden mb-5">
              {[
                { label: 'Performance', score: data.perf },
                { label: 'SEO',         score: data.seo  },
                { label: 'Accessibility',score: data.a11y },
                { label: 'Best Practices',score: data.bp  },
              ].map(({ label, score }) => (
                <div key={label} className="py-6 px-4 text-center border-r border-k-border last:border-r-0">
                  <div className="relative w-16 h-16 mx-auto mb-2.5">
                    <MiniRing score={score} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-serif text-[18px] font-extrabold leading-none" style={{ color: scoreColor(score) }}>{score}</span>
                      <span className="text-[9px] text-k-light">/100</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold tracking-[1.2px] uppercase text-k-mid">{label}</p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="bg-white rounded-[14px] border border-k-border p-7 mb-5">
              <h3 className="text-[15px] font-bold text-k-dark mb-4">⏱ Site Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.metrics.map(m => (
                  <div key={m.label} className={`rounded-[10px] p-[14px_16px] ${METRIC_BG[m.type]}`}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[9.5px] font-bold tracking-[1px] uppercase text-k-mid">{m.label}</span>
                      <span className="text-[13px]">{METRIC_ICO[m.type]}</span>
                    </div>
                    <span className={`text-[17px] font-extrabold ${METRIC_VAL[m.type]}`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Issues */}
            <div className="bg-white rounded-[14px] border border-k-border p-7 mb-5">
              <h3 className="text-[15px] font-bold text-k-dark mb-4">⚠️ Issues Found ({data.issues.length})</h3>
              <div className="flex flex-col gap-2.5">
                {data.issues.length === 0 ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-[10px] p-3.5 flex gap-3">
                    <span className="text-[16px] flex-shrink-0">ℹ</span>
                    <div>
                      <p className="text-[13.5px] font-bold text-k-dark mb-0.5">No major issues detected</p>
                      <p className="text-[12.5px] text-k-mid">Your site looks great on key SEO metrics!</p>
                    </div>
                  </div>
                ) : data.issues.map((issue, i) => (
                  <div key={i} className={`rounded-[10px] p-[13px_16px] flex gap-3 ${ISSUE_BG[issue.level]}`}>
                    <span className="text-[16px] flex-shrink-0 mt-0.5">{ISSUE_ICO[issue.level]}</span>
                    <div>
                      <p className="text-[13.5px] font-bold text-k-dark mb-0.5">{issue.title}</p>
                      <p className="text-[12.5px] text-k-mid leading-[1.55]">{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Passed */}
            <div className="bg-white rounded-[14px] border border-k-border p-7 mb-5">
              <h3 className="text-[15px] font-bold text-k-dark mb-4">✅ Passed Audits ({data.passed.length})</h3>
              <div className="flex flex-wrap gap-2">
                {data.passed.map(p => (
                  <span key={p} className="bg-green-50 border border-green-200 rounded-full px-3.5 py-1.5 text-[12px] text-green-700 font-medium">
                    ✓ {p}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-k-orange rounded-[16px] p-9 text-center text-white">
              <h3 className="font-serif italic text-[24px] mb-2">Want us to fix these issues for you?</h3>
              <p className="text-[14px] opacity-85 leading-[1.6] mb-6">Our team specializes in turning SEO audits into real results. Book a free strategy call and we&apos;ll walk you through a custom plan.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact" className="bg-white text-k-orange text-[12.5px] font-bold px-6 py-3 rounded-full no-underline hover:-translate-y-0.5 transition-all">
                  BOOK A FREE STRATEGY CALL
                </Link>
                <button onClick={reset} className="bg-transparent text-white border-[1.5px] border-white/45 text-[12.5px] font-bold px-6 py-3 rounded-full cursor-pointer hover:border-white hover:bg-white/10 transition-all">
                  ANALYZE ANOTHER SITE
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ── WHAT WE CHECK ── */}
      {step !== 'results' && (
        <section className="px-6 md:px-20 py-24 bg-white">
          <div className="max-w-[1280px] mx-auto text-center mb-14">
            <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">COMPREHENSIVE ANALYSIS</p>
            <h2 className="font-serif italic text-[clamp(34px,3.8vw,52px)] leading-[1.1] tracking-[-1px] text-k-dark mb-4">What Our Audit Covers</h2>
            <p className="text-[16.5px] text-k-mid max-w-[540px] mx-auto">We scan your site across 50+ ranking factors and deliver a clear, prioritized action plan.</p>
          </div>
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: Search,     title: 'Technical SEO',      desc: 'Meta tags, canonical URLs, heading hierarchy, structured data, and crawlability signals.' },
              { icon: ChartColumn,title: 'Performance',        desc: 'Core Web Vitals — FCP, LCP, CLS, TBT — and page speed metrics Google uses to rank.' },
              { icon: MapPin,     title: 'Local Visibility',   desc: 'LocalBusiness schema, GBP signals, NAP consistency, and service area coverage.' },
              { icon: PhoneCall,  title: 'Conversion Signals', desc: 'Phone presence, CTA language, form accessibility, and trust signals.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-k-bg rounded-[10px] p-8 border border-k-border">
                <div className="w-[52px] h-[52px] bg-[#fff0eb] rounded-[14px] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-k-orange" />
                </div>
                <h3 className="text-[16px] font-bold mb-2">{title}</h3>
                <p className="text-[13.5px] text-k-mid leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
