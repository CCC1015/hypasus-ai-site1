'use client'

import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="rounded-2xl border border-white/10 bg-hyp-card/70 p-8 md:p-10 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-hyp-primary/10 to-hyp-accent/10" />
          <h2 className="text-3xl md:text-4xl font-bold">Werk met ons samen</h2>
          <p className="mt-3 text-white/75 max-w-2xl">
            Klaar om met AI échte business impact te maken? Plan een gratis consult — we bekijken de
            best passende use-cases, roadmap en quick wins voor jouw organisatie.
          </p>
          <form className="mt-8 grid md:grid-cols-3 gap-4">
            <input required placeholder="Naam" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-hyp-primary/60" />
            <input required type="email" placeholder="E‑mail" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-hyp-primary/60" />
            <input placeholder="Bedrijf" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-hyp-primary/60" />
            <textarea placeholder="Waarmee kunnen we helpen?" className="md:col-span-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 h-28 outline-none focus:border-hyp-primary/60"></textarea>
            <button className="md:col-span-3 rounded-xl px-6 py-3 bg-hyp-primary/90 hover:bg-hyp-primary text-black font-semibold transition shadow-glow">Plan consult</button>
          </form>
        </div>
      </div>
    </section>
  )
}
