'use client'
import { useState } from 'react'
import { PhoneCall, Mail, MapPin, Calendar, Send, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [form,    setForm]    = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status,  setStatus]  = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const ejs = (await import('@emailjs/browser')).default
      ejs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY || '')
      await ejs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE  || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '',
        {
          to_email:    'growth@katylst.co',
          from_name:   form.name,
          from_email:  form.email,
          phone:       form.phone,
          company:     form.company,
          service:     form.service,
          message:     form.message,
        }
      )
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-20 py-20 max-w-[1440px] mx-auto">
        <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-3">GET IN TOUCH</p>
        <h1 className="font-serif italic text-[clamp(40px,4.8vw,66px)] leading-[1.08] tracking-[-1.5px] text-k-dark mb-5 max-w-[640px]">
          Let&apos;s talk about <span className="text-k-orange">growing your business.</span>
        </h1>
        <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[500px]">
          Book a free 30-minute strategy call. No sales pitch — just an honest look at your current presence and what 90 days of focused SEO could do.
        </p>
      </section>

      {/* Content */}
      <section className="px-6 md:px-20 pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail,      label: 'Email us',        value: 'growth@katylst.co',      href: 'mailto:growth@katylst.co' },
                { icon: PhoneCall, label: 'Book a call',     value: 'Schedule via Calendly',  href: '#' },
                { icon: MapPin,    label: 'Based in',        value: 'Alpharetta, GA (serving nationwide)', href: null },
                { icon: Calendar,  label: 'Response time',   value: 'Within 1 business day',  href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-[44px] h-[44px] bg-[#fff0eb] rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-k-orange" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[1px] uppercase text-k-light mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-[14.5px] font-semibold text-k-dark no-underline hover:text-k-orange transition-colors">{value}</a>
                    ) : (
                      <p className="text-[14.5px] text-k-mid">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="bg-k-bg border border-k-border rounded-[16px] p-7">
              <h3 className="text-[15px] font-bold mb-4">What happens on the call:</h3>
              <div className="space-y-4">
                {[
                  { num: '01', text: 'We review your current online presence' },
                  { num: '02', text: 'We identify the biggest gaps and opportunities' },
                  { num: '03', text: 'We walk you through what a 90-day plan looks like' },
                  { num: '04', text: 'You decide if we\'re the right fit — zero pressure' },
                ].map(({ num, text }) => (
                  <div key={num} className="flex gap-3 items-start">
                    <span className="font-serif text-[18px] font-extrabold text-k-orange leading-none flex-shrink-0 mt-0.5">{num}</span>
                    <p className="text-[13.5px] text-k-mid leading-[1.6]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[20px] border border-k-border p-10">
            {status === 'sent' ? (
              <div className="text-center py-8">
                <div className="text-[56px] mb-4">🎯</div>
                <h3 className="font-serif italic text-[26px] mb-3">We&apos;re on it!</h3>
                <p className="text-[14px] text-k-mid leading-[1.7]">Thanks for reaching out. We&apos;ll be in touch within one business day to book your strategy call.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="font-serif italic text-[24px] text-k-dark mb-6">Send us a message</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="John Smith"
                      className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors placeholder:text-gray-300 font-sans" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors placeholder:text-gray-300 font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors placeholder:text-gray-300 font-sans" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">Company</label>
                    <input name="company" value={form.company} onChange={handle} placeholder="ABC Plumbing"
                      className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors placeholder:text-gray-300 font-sans" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">I&apos;m interested in...</label>
                  <select name="service" value={form.service} onChange={handle}
                    className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors font-sans appearance-none">
                    <option value="">Select a service</option>
                    <option>Local SEO & Maps</option>
                    <option>Web Design & Build</option>
                    <option>Content Strategy</option>
                    <option>Full Growth Package</option>
                    <option>Free SEO Audit</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-k-mid mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your business and what you're looking to accomplish..."
                    className="w-full px-4 py-3 bg-k-bg border border-k-border rounded-[10px] text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors placeholder:text-gray-300 font-sans resize-none" />
                </div>

                {status === 'error' && (
                  <p className="text-[13px] text-red-500">Something went wrong. Please email us directly at growth@katylst.co</p>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-k-orange text-white py-[14px] rounded-full text-[13px] font-bold tracking-[0.5px] uppercase border-none cursor-pointer hover:bg-k-orange-lt hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,77,0,.3)] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white spinner" /> SENDING...</>
                  ) : (
                    <><Send className="w-4 h-4" /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
