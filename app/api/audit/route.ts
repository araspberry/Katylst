import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type MetricType = 'ok' | 'warn' | 'bad' | 'info'
type IssueLevel = 'bad' | 'warn' | 'info'

interface Metric {
  label: string
  value: string
  type: MetricType
}

interface Issue {
  title: string
  desc: string
  level: IssueLevel
}

interface AuditResponse {
  url: string
  score: number
  perf: number
  seo: number
  a11y: number
  bp: number
  metrics: Metric[]
  issues: Issue[]
  passed: string[]
}

interface LighthouseAudit {
  id: string
  title?: string
  description?: string
  score: number | null
  displayValue?: string
  numericValue?: number
  details?: unknown
}

interface PageSpeedResponse {
  lighthouseResult?: {
    categories?: Record<string, { score?: number }>
    audits?: Record<string, LighthouseAudit>
  }
  error?: {
    code?: number
    message?: string
    status?: string
  }
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)))
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function normalizeUrl(rawUrl: string) {
  const normalized = rawUrl.trim().startsWith('http') ? rawUrl.trim() : `https://${rawUrl.trim()}`
  const parsed = new URL(normalized)

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error('Only public HTTP and HTTPS URLs can be audited.')
  }

  return parsed.toString()
}

async function notifyLead(url: string, email?: string) {
  if (!email || !resend) return

  await resend.emails.send({
    from: 'Katylst Audit <onboarding@resend.dev>',
    to: 'growth@katylst.co',
    subject: `New SEO Audit Lead - ${url}`,
    html: `
      <h2>New SEO Audit Lead</h2>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Website:</strong> ${escapeHtml(url)}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `,
  }).catch((e: unknown) => console.warn('Resend error:', e))
}

function pageSpeedToAudit(url: string, psiData: PageSpeedResponse): AuditResponse | null {
  const lighthouse = psiData.lighthouseResult
  if (!lighthouse) return null

  const cats = lighthouse.categories || {}
  const audits = lighthouse.audits || {}

  const perf = clampScore((cats.performance?.score || 0) * 100)
  const seo = clampScore((cats.seo?.score || 0) * 100)
  const a11y = clampScore((cats.accessibility?.score || 0) * 100)
  const bp = clampScore((cats['best-practices']?.score || 0) * 100)
  const score = clampScore((perf + seo + a11y + bp) / 4)

  const tbtN = Number(audits['total-blocking-time']?.numericValue || 0)
  const clsN = Number(audits['cumulative-layout-shift']?.numericValue || 0)

  const metrics: Metric[] = [
    { label: 'FCP', value: audits['first-contentful-paint']?.displayValue || '-', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
    { label: 'LCP', value: audits['largest-contentful-paint']?.displayValue || '-', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
    { label: 'Speed Index', value: audits['speed-index']?.displayValue || '-', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
    { label: 'Blocking Time', value: audits['total-blocking-time']?.displayValue || '-', type: tbtN < 200 ? 'ok' : tbtN < 600 ? 'warn' : 'bad' },
    { label: 'Layout Shift', value: audits['cumulative-layout-shift']?.displayValue || '-', type: clsN < 0.1 ? 'ok' : clsN < 0.25 ? 'warn' : 'bad' },
    { label: 'TTFB', value: audits['server-response-time']?.displayValue || '-', type: 'info' },
  ]

  const skip = new Set([
    'cumulative-layout-shift',
    'total-blocking-time',
    'first-contentful-paint',
    'largest-contentful-paint',
    'speed-index',
    'server-response-time',
    'interactive',
    'bootup-time',
  ])

  const issues: Issue[] = Object.values(audits)
    .filter((audit) => audit.score !== null && audit.score < 1 && audit.details && audit.title && !skip.has(audit.id))
    .slice(0, 8)
    .map((audit) => ({
      title: audit.title as string,
      desc: ((audit.description || '') as string).split('.')[0],
      level: audit.score !== null && audit.score < 0.5 ? 'bad' : audit.score !== null && audit.score < 0.9 ? 'warn' : 'info',
    }))

  const passed = Object.values(audits)
    .filter((audit) => audit.score === 1 && audit.title)
    .slice(0, 12)
    .map((audit) => audit.title as string)

  return { url, score, perf, seo, a11y, bp, metrics, issues, passed }
}

async function runPageSpeedAudit(url: string) {
  const apiKey = process.env.GOOGLE_PSI_KEY || ''
  if (!apiKey) return null

  const keyParam = `&key=${apiKey}`
  const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices${keyParam}`

  const psiRes = await fetch(psiUrl, { cache: 'no-store' })
  const psiData = await psiRes.json() as PageSpeedResponse

  if (!psiRes.ok) {
    console.warn('PageSpeed unavailable:', psiData.error?.status || psiRes.status, psiData.error?.message)
    return null
  }

  return pageSpeedToAudit(url, psiData)
}

function extractContent(html: string, regex: RegExp) {
  return html.match(regex)?.[1]?.trim() || ''
}

function countMatches(html: string, regex: RegExp) {
  return html.match(regex)?.length || 0
}

async function runBasicAudit(url: string): Promise<AuditResponse> {
  const startedAt = Date.now()
  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      'user-agent': 'Katylst SEO Audit Bot/1.0 (+https://katylst.co/ai-audit)',
      accept: 'text/html,application/xhtml+xml',
    },
    signal: AbortSignal.timeout(15000),
  })
  const responseMs = Date.now() - startedAt

  if (!res.ok) throw new Error(`The URL responded with HTTP ${res.status}.`)

  const html = await res.text()
  const htmlKb = Math.max(1, Math.round(new Blob([html]).size / 1024))
  const title = extractContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i).replace(/\s+/g, ' ')
  const description = extractContent(html, /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || extractContent(html, /<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i)
  const canonical = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)
  const viewport = /<meta\s+[^>]*name=["']viewport["'][^>]*>/i.test(html)
  const lang = /<html\s+[^>]*lang=["'][^"']+["'][^>]*>/i.test(html)
  const h1Count = countMatches(html, /<h1\b/gi)
  const imageCount = countMatches(html, /<img\b/gi)
  const imagesMissingAlt = countMatches(html, /<img\b(?![^>]*\balt=)[^>]*>/gi)
  const noindex = /<meta\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
  const ogTitle = /<meta\s+[^>]*property=["']og:title["'][^>]*>/i.test(html)
  const ogDescription = /<meta\s+[^>]*property=["']og:description["'][^>]*>/i.test(html)

  const issues: Issue[] = []
  const passed: string[] = []
  let seo = 100
  let a11y = 100
  let bp = 100
  let perf = 100

  const addIssue = (titleText: string, desc: string, level: IssueLevel, scoreHit: Partial<Record<'seo' | 'a11y' | 'bp' | 'perf', number>>) => {
    issues.push({ title: titleText, desc, level })
    seo -= scoreHit.seo || 0
    a11y -= scoreHit.a11y || 0
    bp -= scoreHit.bp || 0
    perf -= scoreHit.perf || 0
  }

  if (!title) addIssue('Missing page title', 'Add a concise, keyword-focused title tag for this page', 'bad', { seo: 20 })
  else if (title.length > 60) addIssue('Title may be too long', 'Keep the title near 50-60 characters so it reads well in search results', 'warn', { seo: 8 })
  else passed.push('Page has a title tag')

  if (!description) addIssue('Missing meta description', 'Add a clear description that explains the offer and encourages clicks', 'bad', { seo: 25 })
  else if (description.length > 160) addIssue('Meta description may be too long', 'Keep descriptions near 150-160 characters for cleaner snippets', 'warn', { seo: 8 })
  else passed.push('Page has a meta description')

  if (h1Count === 0) addIssue('Missing H1 heading', 'Add one primary H1 that describes the page topic', 'bad', { seo: 15 })
  else if (h1Count > 1) addIssue('Multiple H1 headings found', 'Use one primary H1 and structure supporting sections with H2/H3 headings', 'warn', { seo: 8 })
  else passed.push('Page has one primary H1')

  if (!canonical) addIssue('Missing canonical URL', 'Add a canonical link to reduce duplicate URL ambiguity', 'warn', { seo: 8 })
  else passed.push('Canonical URL is present')

  if (!viewport) addIssue('Missing mobile viewport tag', 'Add a viewport meta tag so mobile browsers render the layout correctly', 'bad', { bp: 15, perf: 8 })
  else passed.push('Mobile viewport is configured')

  if (!lang) addIssue('Missing HTML language attribute', 'Add a lang attribute to the html element for accessibility and localization', 'warn', { a11y: 10 })
  else passed.push('HTML language is set')

  if (noindex) addIssue('Page is marked noindex', 'Remove noindex if this page should appear in search results', 'bad', { seo: 25 })
  else passed.push('Page is indexable')

  if (!ogTitle || !ogDescription) addIssue('Social sharing metadata is incomplete', 'Add Open Graph title and description tags for stronger previews', 'info', { seo: 5 })
  else passed.push('Open Graph metadata is present')

  if (imagesMissingAlt > 0) addIssue('Images missing alt text', `${imagesMissingAlt} of ${imageCount} images are missing alt attributes`, 'warn', { a11y: Math.min(25, imagesMissingAlt * 3), seo: 5 })
  else if (imageCount > 0) passed.push('Images include alt attributes')

  if (responseMs > 1500) addIssue('Slow server response', `The page took ${responseMs}ms to respond from the audit server`, 'warn', { perf: 15 })
  else passed.push('Server response was quick')

  if (htmlKb > 500) addIssue('Large HTML document', `The HTML response is about ${htmlKb}KB before assets load`, 'warn', { perf: 10 })
  else passed.push('HTML document size is reasonable')

  seo = clampScore(seo)
  a11y = clampScore(a11y)
  bp = clampScore(bp)
  perf = clampScore(perf)

  const metrics: Metric[] = [
    { label: 'Response', value: `${responseMs} ms`, type: responseMs < 800 ? 'ok' : responseMs < 1500 ? 'warn' : 'bad' },
    { label: 'HTML Size', value: `${htmlKb} KB`, type: htmlKb < 250 ? 'ok' : htmlKb < 500 ? 'warn' : 'bad' },
    { label: 'Title', value: title ? `${title.length} chars` : 'Missing', type: title ? title.length <= 60 ? 'ok' : 'warn' : 'bad' },
    { label: 'Description', value: description ? `${description.length} chars` : 'Missing', type: description ? description.length <= 160 ? 'ok' : 'warn' : 'bad' },
    { label: 'H1', value: String(h1Count), type: h1Count === 1 ? 'ok' : h1Count === 0 ? 'bad' : 'warn' },
    { label: 'Images Missing Alt', value: String(imagesMissingAlt), type: imagesMissingAlt === 0 ? 'ok' : 'warn' },
  ]

  if (issues.length === 0) {
    issues.push({
      title: 'No major on-page SEO issues found',
      desc: 'The fallback scanner found a healthy basic SEO setup',
      level: 'info',
    })
  }

  const score = clampScore((perf + seo + a11y + bp) / 4)
  return { url, score, perf, seo, a11y, bp, metrics, issues: issues.slice(0, 8), passed: passed.slice(0, 12) }
}

export async function POST(req: NextRequest) {
  try {
    const { url: rawUrl, email } = await req.json()
    if (!rawUrl) return NextResponse.json({ error: 'URL is required' }, { status: 400 })

    let url: string
    try {
      url = normalizeUrl(rawUrl)
    } catch {
      return NextResponse.json({ error: 'Please enter a valid public URL.' }, { status: 400 })
    }

    await notifyLead(url, email)

    const pageSpeedAudit = await runPageSpeedAudit(url).catch((err: unknown) => {
      console.warn('PageSpeed audit failed:', err)
      return null
    })

    if (pageSpeedAudit) {
      return NextResponse.json(pageSpeedAudit)
    }

    const basicAudit = await runBasicAudit(url)
    return NextResponse.json(basicAudit)
  } catch (err) {
    console.error('[/api/audit]', err)
    return NextResponse.json({ error: 'The audit tool had trouble scanning that URL. Please try again.' }, { status: 500 })
  }
}
