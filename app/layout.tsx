import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hypasus AI — Waar data, strategie en intelligentie samenkomen',
  description: 'Hypasus AI integreert kunstmatige intelligentie in bedrijven: AI-receptionisten, automatisering, dashboards en maatwerk.',
  icons: { icon: [
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
    { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    { rel: 'icon', url: '/favicon.ico' }
  ] 


  },
  openGraph: {
    title: 'Hypasus AI',
    description: 'Slimmer groeien met Hypasus AI — waar data, strategie en intelligentie samenkomen.',
    type: 'website',
    url: 'https://hypasus.nl',
    images: ['/og.jpg']
  },
  metadataBase: new URL('https://hypasus.nl')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="dark">
      <body className={`${inter.className} bg-hyp-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
