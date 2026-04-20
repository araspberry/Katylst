'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey there! 👋 I'm Bethany, Katylst's AI assistant. I help local service businesses get more leads through high-converting websites, local SEO, and social media ads.\n\nWhat brings you here today?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return
    const updated: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages([...updated, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: "Sorry, I hit a snag. Please email us at growth@katylst.co!" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100" style={{ height: '480px' }}>
          {/* Header */}
          <div className="bg-k-orange px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src="/bethany-avatar.png" alt="Bethany" width={38} height={38} className="rounded-full object-cover object-top border-2 border-white/30" style={{ width: 38, height: 38 }} />
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Bethany from Katylst</p>
                <p className="text-white/70 text-xs">AI Assistant · Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white px-4 py-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <img src="/bethany-avatar.png" alt="Bethany" className="w-6 h-6 rounded-full object-cover object-top flex-shrink-0 mb-0.5" />
                )}
                <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-k-orange text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <img src="/bethany-avatar.png" alt="Bethany" className="w-6 h-6 rounded-full object-cover object-top flex-shrink-0" />
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-100 px-3 py-3 flex items-center gap-2 flex-shrink-0">
            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none text-gray-800 placeholder-gray-400" />
            <button onClick={sendMessage} disabled={!input.trim() || loading} className="w-9 h-9 rounded-full bg-k-orange flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Trigger button — Bethany's face */}
      <button onClick={() => setOpen(!open)} aria-label="Chat with Bethany" className="fixed bottom-6 right-6 z-50 w-[56px] h-[56px] rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105 active:scale-95 border-2 border-white" style={{ boxShadow: '0 4px 24px rgba(200,80,42,0.45)' }}>
        {open ? (
          <div className="w-full h-full bg-k-orange flex items-center justify-center">
            <X className="w-6 h-6 text-white" />
          </div>
        ) : (
          <img src="/bethany-avatar.png" alt="Chat with Bethany" className="w-full h-full object-cover object-top" />
        )}
      </button>
    </>
  )
}
