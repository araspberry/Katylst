import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-4">404 ERROR</p>
      <h1 className="font-serif italic text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-[-2px] text-k-dark mb-5">
        Page not found.
      </h1>
      <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[420px] mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="bg-k-orange text-white text-[13px] font-bold px-7 py-[14px] rounded-full uppercase tracking-[0.8px] no-underline hover:bg-k-orange-lt hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2">
          GO HOME <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/ai-audit" className="bg-transparent text-k-dark border-[1.5px] border-[rgba(26,26,26,0.25)] text-[13px] font-semibold px-7 py-[13px] rounded-full no-underline hover:bg-k-dark hover:text-white transition-all duration-200">
          FREE SEO AUDIT
        </Link>
      </div>
    </section>
  )
}
