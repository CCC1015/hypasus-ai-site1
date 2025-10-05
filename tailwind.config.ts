import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        hyp: {
          bg: '#0a0f1e',
          card: '#0e152b',
          primary: '#4cc3ff',
          accent: '#8b5cf6'
        }
      },
      boxShadow: {
        glow: '0 0 35px rgba(76,195,255,0.25)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
export default config
