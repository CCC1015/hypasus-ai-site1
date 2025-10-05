'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const About = () => {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Over Hypasus AI</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Hypasus AI is een vooruitstrevend integratiebureau onder leiding van oprichter en CEO <strong>Dylano</strong>.
            We combineren diepgaande kennis van <em>data, marketing, AI en computer science</em> om oplossingen te bouwen die écht werken.
            Wij geloven niet in standaardoplossingen — elk bedrijf verdient een AI‑systeem dat zich aanpast in plaats van vervangt.
          </p>
          <p className="mt-4 text-white/70">
            Van AI‑receptionisten en geautomatiseerde lead follow‑up tot intelligente dashboards en maatwerk integraties:
            we laten technologie voor jouw strategie werken — niet andersom.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-hyp-card p-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-hyp-primary/10 via-transparent to-hyp-accent/10" />
          <Image src="/hero-visual.jpg" alt="Hypasus Visual" width={1200} height={900} className="rounded-xl object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
