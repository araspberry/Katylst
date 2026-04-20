'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')

  const services = ['Website Design','Local SEO','Google Business Profile','Reputation Management','AI Audit','Other']

  async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('sending')
        try {
                const res = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(form),
                })
                if (res.ok) {
                          setStatus('done')
                          setForm({ name: '', email: '', phone: '', service: '', message: '' })
                } else {
                          setStatus('error')
                }
        } catch {
                setStatus('error')
        }
  }

  return (
        <main>
              <section className="bg-k-bg pt-24 pb-16 px-6">
                      <div className="max-w-[1100px] mx-auto text-center">
                                <p className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-k-orange mb-4">Get In Touch</p>p>
                                <h1 className="font-serif italic text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-[-2px] text-k-dark mb-5">
                                            Let&apos;s build something<br />
                                            <span className="text-k-orange">that gets you leads.</span>span>
                                </h1>h1>
                                <p className="text-[16.5px] text-k-mid leading-[1.7] max-w-[520px] mx-auto">
                                            Book a free strategy call or send us a message. We&apos;ll respond within one business day.
                                </p>p>
                      </div>div>
              </section>section>
        
              <section className="py-20 px-6 bg-white">
                      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16">
                                <div>
                                            <h2 className="font-serif italic text-[28px] text-k-dark mb-8">Contact info</h2>h2>
                                  {[
          { icon: Phone, label: 'Call us', value: '(470) 555-0192' },
          { icon: Mail, label: 'Email us', value: 'hello@katylst.co' },
          { icon: MapPin, label: 'Based in', value: 'Alpharetta, GA' },
          { icon: MessageSquare, label: 'Response time', value: 'Within 1 business day' },
                      ].map(({ icon: Icon, label, value }) => (
                                      <div key={label} className="flex items-start gap-4 mb-6">
                                                      <div className="w-10 h-10 rounded-full bg-[#fff3ef] flex items-center justify-center flex-shrink-0">
                                                                        <Icon className="w-4 h-4 text-k-orange" />
                                                      </div>div>
                                                      <div>
                                                                        <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-0.5">{label}</div>div>
                                                                        <div className="text-[15px] font-semibold text-k-dark">{value}</div>div>
                                                      </div>div>
                                      </div>div>
                                    ))}
                                </div>div>
                      
                                <div className="bg-k-bg rounded-[20px] p-8 md:p-10">
                                  {status === 'done' ? (
                        <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                          <Send className="w-7 h-7 text-green-600" />
                                        </div>div>
                                        <h3 className="font-serif italic text-[24px] text-k-dark mb-2">Message sent!</h3>h3>
                                        <p className="text-k-mid">We&apos;ll be in touch within one business day.</p>p>
                        </div>div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                          <div>
                                                                              <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-2">Name *</label>label>
                                                                              <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                                                                                                      className="w-full bg-white border border-k-border rounded-[10px] px-4 py-3 text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors"
                                                                                                      placeholder="John Smith" />
                                                          </div>div>
                                                          <div>
                                                                              <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-2">Email *</label>label>
                                                                              <input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                                                                                                      className="w-full bg-white border border-k-border rounded-[10px] px-4 py-3 text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors"
                                                                                                      placeholder="john@business.com" />
                                                          </div>div>
                                        </div>div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                          <div>
                                                                              <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-2">Phone</label>label>
                                                                              <input value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                                                                                                      className="w-full bg-white border border-k-border rounded-[10px] px-4 py-3 text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors"
                                                                                                      placeholder="(555) 000-0000" />
                                                          </div>div>
                                                          <div>
                                                                              <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-2">Service</label>label>
                                                                              <select value={form.service} onChange={e => setForm(f => ({...f, service: e.target.value}))}
                                                                                                      className="w-full bg-white border border-k-border rounded-[10px] px-4 py-3 text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors">
                                                                                                    <option value="">Select a service...</option>option>
                                                                                {services.map(s => <option key={s} value={s}>{s}</option>option>)}
                                                                              </select>select>
                                                          </div>div>
                                        </div>div>
                                        <div>
                                                          <label className="block text-[11px] font-bold tracking-[1.5px] uppercase text-k-mid mb-2">Message *</label>label>
                                                          <textarea required rows={4} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                                                                                className="w-full bg-white border border-k-border rounded-[10px] px-4 py-3 text-[14px] text-k-dark outline-none focus:border-k-orange transition-colors resize-none"
                                                                                placeholder="Tell us about your business and goals..." />
                                        </div>div>
                          {status === 'error' && (
                                            <p className="text-red-500 text-[13px]">Something went wrong. Please try again or email us directly.</p>p>
                                        )}
                                        <button type="submit" disabled={status === 'sending'}
                                                            className="bg-k-orange text-white text-[13px] font-bold px-8 py-[15px] rounded-full uppercase tracking-[0.8px] hover:bg-k-orange-lt hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60">
                                          {status === 'sending' ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>>}
                                        </button>button>
                        </form>form>
                                            )}
                                </div>div>
                      </div>div>
              </section>section>
        </main>main>
      )
}</></main>
