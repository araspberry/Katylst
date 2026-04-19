import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/audit
 *
 * Phase 2 (current): Proxies to Google PageSpeed Insights API
 * Phase 3 (backend): Swap the PSI call below for a call to the
 *   real server-side audit engine (Kali's Node.js audit backend).
 *
 * Expected request body:  { url: string, email: string }
 * Expected response shape: { score, perf, seo, a11y, bp, metrics, issues, passed }
 */
export async function POST(req: NextRequest) {
  try {
    const { url, email } = await req.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // ── PHASE 3: Replace this block with your real backend call ──────
    // Example:
    // const result = await fetch(`${process.env.AUDIT_BACKEND_URL}/api/audit`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ url, email }),
    // })
    // const data = await result.json()
    // return NextResponse.json(data)
    // ─────────────────────────────────────────────────────────────────

    // ── PHASE 2: Google PageSpeed Insights ───────────────────────────
    const apiKey = process.env.GOOGLE_PSI_KEY || ''
    const keyParam = apiKey ? `&key=${apiKey}` : ''
    const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices${keyParam}`

    const psiRes  = await fetch(psiUrl, { next: { revalidate: 0 } })
    const psiData = await psiRes.json()

    if (!psiData.lighthouseResult) {
      return NextResponse.json({ error: 'Could not analyze this URL' }, { status: 422 })
    }

    const cats   = psiData.lighthouseResult.categories || {}
    const audits = psiData.lighthouseResult.audits     || {}

    const perf = Math.round((cats.performance?.score       || 0) * 100)
    const seo  = Math.round((cats.seo?.score               || 0) * 100)
    const a11y = Math.round((cats.accessibility?.score     || 0) * 100)
    const bp   = Math.round((cats['best-practices']?.score || 0) * 100)
    const score = Math.round((perf + seo + a11y + bp) / 4)

    const tbtN = parseFloat(audits['total-blocking-time']?.numericValue  || 0)
    const clsN = parseFloat(audits['cumulative-layout-shift']?.numericValue || 0)

    const metrics = [
      { label: 'FCP',           value: audits['first-contentful-paint']?.displayValue  || '—', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
      { label: 'LCP',           value: audits['largest-contentful-paint']?.displayValue|| '—', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
      { label: 'Speed Index',   value: audits['speed-index']?.displayValue             || '—', type: perf >= 90 ? 'ok' : perf >= 50 ? 'warn' : 'bad' },
      { label: 'Blocking Time', value: audits['total-blocking-time']?.displayValue     || '—', type: tbtN < 200 ? 'ok' : tbtN < 600 ? 'warn' : 'bad' },
      { label: 'Layout Shift',  value: audits['cumulative-layout-shift']?.displayValue || '—', type: clsN < 0.1 ? 'ok' : clsN < 0.25 ? 'warn' : 'bad' },
      { label: 'TTFB',          value: audits['server-response-time']?.displayValue    || '—', type: 'info' },
    ]

    const SKIP = ['cumulative-layout-shift','total-blocking-time','first-contentful-paint','largest-contentful-paint','speed-index','server-response-time','interactive','bootup-time']
    const issues = Object.values(audits)
      .filter((a: any) => a.score !== null && a.score < 1 && a.details && a.title && !SKIP.includes(a.id))
      .slice(0, 8)
      .map((a: any) => ({
        title: a.title as string,
        desc:  ((a.description || '') as string).split('.')[0],
        level: a.score < 0.5 ? 'bad' : a.score < 0.9 ? 'warn' : 'info',
      }))

    const passed = Object.values(audits)
      .filter((a: any) => a.score === 1 && a.title)
      .slice(0, 12)
      .map((a: any) => a.title as string)

    return NextResponse.json({ url, score, perf, seo, a11y, bp, metrics, issues, passed })

  } catch (err) {
    console.error('[/api/audit]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
