import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hypasus AI — Waar data, strategie en intelligentie samenkomen',
  description: 'Hypasus AI integreert kunstmatige intelligentie in bedrijven: AI-receptionisten, automatisering, dashboards en maatwerk.',
  icons: { icon: '/favicon.ico' },
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
