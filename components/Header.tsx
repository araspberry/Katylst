'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/',         label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/pricing',  label: 'PRICING' },
  { href: '/ai-audit', label: 'AI AUDIT' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-k-border">
      <div className="max-w-7xl mx-auto px-6 md:px-14 h-[66px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/Katylst-logo.png"
            alt="Katylst"
            width={38}
            height={38}
            className="rounded-[9px]"
          />
          <span className="font-sans font-semibold text-[17px] text-k-dark tracking-[-0.2px]">
            Katylst<em className="not-italic text-k-orange">.</em>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13.5px] font-medium tracking-[0.2px] no-underline transition-colors duration-200 ${
                pathname === href
                  ? href === '/ai-audit' ? 'text-k-orange' : 'text-k-dark'
                  : href === '/ai-audit' ? 'text-k-orange' : 'text-k-mid hover:text-k-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-k-orange text-white text-[13px] font-bold px-6 py-2.5 rounded-full no-underline transition-all duration-200 hover:bg-k-orange-lt hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,77,0,.3)]"
          >
            GET IN TOUCH
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-k-border px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-[14px] font-medium no-underline transition-colors ${
                pathname === href ? 'text-k-orange' : 'text-k-mid'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-k-orange text-white text-[13px] font-bold px-6 py-3 rounded-full text-center no-underline"
          >
            GET IN TOUCH
          </Link>
        </div>
      )}
    </header>
  )
}
