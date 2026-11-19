'use client'

import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Slimmer groeien met{' '}
          <span className="bg-gradient-to-r from-hyp-primary via-sky-300 to-hyp-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
            Hypasus AI
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
        >
          Waar data, strategie en intelligentie samenkomen. Wij bouwen AI-systemen die zich aanpassen aan jouw bedrijf: AI-receptionisten, automatisering, dashboards en maatwerk integraties. 
        </motion.p>
         <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
        >
Demo proberen? Bel +31 970 102 25352         </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#contact" className="rounded-xl px-6 py-3 bg-hyp-primary/90 hover:bg-hyp-primary text-black font-semibold transition shadow-glow">Start een project</a>
          <a href="#services" className="rounded-xl px-6 py-3 border border-white/15 hover:bg-white/10 transition">Bekijk diensten</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-wrap gap-3 text-sm"
        >
          {['AI-receptionisten', 'Automatisering', 'Cybersecurity met DataShield', 'Web3 & Solana'].map(t => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-white/75 backdrop-blur">{t}</span>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
