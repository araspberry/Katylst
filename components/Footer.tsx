import Link from 'next/link'
import { Send } from 'lucide-react'

const services = ['Local SEO', 'Web Design', 'Content Strategy', 'Google Maps', 'Analytics']
const company  = [
  { label: 'About',        href: '#' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'Contact',      href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-k-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-4">
              <img src="/katylst-logo.png" alt="Katylst" width={38} height={38} style={{ borderRadius: '9px' }} />
              <span className="font-sans font-semibold text-[17px] text-white tracking-[-0.2px]">
                Katylst<em className="not-italic text-k-orange">.</em>
              </span>
            </Link>
            <p className="text-[13.5px] leading-[1.75] text-white/40 max-w-[280px] mb-6">
              We build high-converting websites and run laser-focused local SEO for service businesses — delivering real leads, not vanity metrics.
            </p>
            {/* Email CTA */}
            <Link
              href="mailto:growth@katylst.co"
              className="inline-flex items-center gap-2 bg-k-orange text-white text-[12px] font-bold px-5 py-2.5 rounded-full no-underline hover:bg-k-orange-lt transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              growth@katylst.co
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/85 mb-5">Services</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-[13.5px] text-white/40 no-underline hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/85 mb-5">Company</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13.5px] text-white/40 no-underline hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3 text-[12.5px] text-white/28">
          <span>© {new Date().getFullYear()} Katylst. All rights reserved.</span>
          <span>Built by Katylst — Alpharetta, GA</span>
        </div>
      </div>
    </footer>
  )
}
