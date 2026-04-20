import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
          const { name, email, phone, service, message } = await req.json()

          await resend.emails.send({
                  from: 'Katylst Contact <onboarding@resend.dev>',
                  to: 'growth@katylst.co',
                  subject: `New Contact: ${name} — ${service || 'General Inquiry'}`,
                  html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Service:</strong> ${service || 'N/A'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                  `,
                })

          return NextResponse.json({ ok: true })
        } catch (err) {
          console.error('[/api/contact]', err)
          return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
        }
  }
