import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'k-orange':    '#ff4d00',
        'k-orange-lt': '#ff6a26',
        'k-dark':      '#1a1a1a',
        'k-mid':       '#64748b',
        'k-light':     '#94a3b8',
        'k-bg':        '#f5f7f9',
        'k-border':    '#e2e8f0',
        'k-muted':     '#f1f5f9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'phone': '48px',
      },
      animation: {
        'ticker':     'ticker 26s linear infinite',
        'float':      'float 3s ease-in-out infinite',
        'float-slow': 'float 3.5s ease-in-out infinite 0.6s',
        'feed':       'feedScroll 22s linear infinite',
        'live':       'livePulse 1.4s ease-in-out infinite',
        'pulse-cta':  'pulseCta 2.5s ease-in-out infinite',
        'spin-ring':  'spin .8s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        feedScroll: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        livePulse: {
          '0%,100%': { opacity: '1',   boxShadow: '0 0 5px #39ff14, 0 0 12px #39ff14' },
          '50%':     { opacity: '0.28', boxShadow: '0 0 2px #39ff14' },
        },
        pulseCta: {
          '0%,100%': { boxShadow: '0 6px 24px rgba(255,77,0,.4)' },
          '50%':     { boxShadow: '0 6px 40px rgba(255,77,0,.65)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
