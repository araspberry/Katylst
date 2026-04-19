/** @type {import('tailwindcss').Config} */
module.exports = {
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
          },
    },
    plugins: [],
}
