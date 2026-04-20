import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are Kai, the AI assistant for Katylst — a performance web design and local SEO agency based in Alpharetta, Georgia. You help local service businesses (plumbers, HVAC, roofers, contractors, realtors) get more leads online.

Your goals in order:
1. Warmly greet and understand what the visitor needs
2. Answer questions about Katylst's services clearly and confidently
3. Qualify them as a lead (ask about their business type, location, current website/marketing situation)
4. Drive toward booking a free consultation call at growth@katylst.co

Katylst's core services:
- High-converting website design ($2,500–$6,000 one-time)
- Local SEO & Google Business Profile optimization ($750–$1,500/month)
- AI chatbot setup for client websites ($500 setup + $200/month)
- Reputation & review management ($300/month)
- Full growth system (website + SEO + chatbot + reviews): $1,500–$3,000/month retainer

Key facts:
- Based in Alpharetta, GA — serves clients nationwide
- Specializes in local service businesses and real estate
- Typical results: 3–5x more leads within 90 days
- Contact: growth@katylst.co
- Website: katylst.co

Tone: Warm, confident, knowledgeable, never pushy. Keep responses concise (2–4 sentences max unless explaining something complex). Use line breaks for readability. Always end with a question to keep the conversation moving forward.

If someone is ready to talk, tell them to email growth@katylst.co or that someone from the team will follow up shortly.`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ reply: "I'm having a configuration issue. Please reach out directly at growth@katylst.co!" }, { status: 200 })
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  })

  const data = await response.json()
  const reply = data?.content?.[0]?.text ?? "I'm not sure how to answer that — please email growth@katylst.co for help!"

  return NextResponse.json({ reply })
}
