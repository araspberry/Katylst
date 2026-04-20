import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Katylst | Performance SEO & High-Converting Websites for Local Pros',
    template: '%s | Katylst',
  },
  description:
    'We build high-converting websites and run laser-focused local SEO for plumbers, roofers, HVAC pros, realtors & service businesses — delivering 3–5× more leads in 90 days.',
  keywords: ['local SEO', 'web design', 'lead generation', 'HVAC SEO', 'plumber websites', 'roofer marketing', 'Alpharetta GA'],
  authors: [{ name: 'Katylst', url: 'https://katylst.co' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://katylst.co',
    siteName: 'Katylst',
    title: 'Katylst | Performance SEO & High-Converting Websites for Local Pros',
    description: 'We build high-converting websites and run laser-focused local SEO for service businesses — delivering 3–5× more leads in 90 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katylst | Performance SEO & High-Converting Websites',
    description: 'Local SEO & web design for service businesses. 3–5× more leads in 90 days.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://katylst.co'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
