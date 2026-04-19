# Katylst — Next.js Site

Production-ready multi-page Next.js site for katylst.co.

## Stack
- **Next.js 14** (App Router, SSR)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons — matching live site)
- **EmailJS** (lead capture → growth@katylst.co)
- **Google PageSpeed Insights API** (audit engine — swap for backend later)

## Pages
| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/pricing` | Pricing |
| `/ai-audit` | AI Audit Tool |
| `/contact` | Contact / Get In Touch |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your EmailJS keys

# 3. Run locally
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
npm start
```

## EmailJS Setup (3 values to plug in)
1. Log into emailjs.com
2. Copy your **Public Key** → `NEXT_PUBLIC_EMAILJS_KEY`
3. Copy your **Service ID** → `NEXT_PUBLIC_EMAILJS_SERVICE`
4. Copy your **Template ID** → `NEXT_PUBLIC_EMAILJS_TEMPLATE`

Template variables to map in EmailJS:
- `{{to_email}}` — always growth@katylst.co
- `{{from_email}}` — prospect's email
- `{{website_url}}` — their site URL
- `{{message}}` — full lead summary

## Deploy to DigitalOcean App Platform
1. Push this repo to GitHub (`ARASPBERRY/KATYLST` or new repo)
2. Go to DigitalOcean → App Platform → New App
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Run command: `npm start`
6. Output directory: `.next`
7. Add your env vars in the App Platform dashboard
8. Point `katylst.co` DNS to the app

## Backend Audit (Phase 3)
The audit tool currently uses Google PageSpeed Insights API.
To connect the real backend (Kali's server-side audit engine):
- Update `app/ai-audit/page.tsx` → `runAudit()` function
- Replace the PSI fetch with a call to your audit API endpoint
- The response shape is already structured to receive `{ perf, seo, a11y, bp, metrics, issues, passed }`
