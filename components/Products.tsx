'use client'

import { motion } from 'framer-motion'

type Product = { name: string; desc: string; tags: string[]; status: string }

const products: Product[] = [
  {
    name: 'DataShield',
    desc: 'Cybersecurity-companion voor Windows met Web Shield, Agent Box en een lokale AI-assistent.',
    tags: ['Security', 'Windows', '.NET'],
    status: 'Live · 1.0.0.9',
  },
  {
    name: 'TaskEasy',
    desc: 'Overzichtelijke taak- en doelentracker: doelen toevoegen, afvinken en voortgang bijhouden.',
    tags: ['Productiviteit', 'Python', 'Flask'],
    status: 'Product',
  },
  {
    name: 'Solana Pay Store',
    desc: 'Webshop die betalingen direct op de Solana-blockchain afhandelt via Solana Pay en een wallet-koppeling.',
    tags: ['Solana', 'Web3', 'Next.js'],
    status: 'Labs',
  },
  {
    name: 'Airdropeasy',
    desc: 'Discord-bot rond farmbare airdrops op Solana: opdrachten, kaarten en beloningen voor een community.',
    tags: ['Solana', 'Discord', 'Node.js'],
    status: 'Labs',
  },
  {
    name: 'SolCre8 Creator Tools',
    desc: 'Tools voor creators: eigen profielpagina’s en speciale content, gebouwd als lichte webapp.',
    tags: ['Creators', 'Python', 'Web'],
    status: 'Labs',
  },
  {
    name: 'Hypasus Solana',
    desc: 'Web3-site met wallet-verbinding: de basis voor token- en community-functies van Hypasus.',
    tags: ['Solana', 'Wallet', 'Web3'],
    status: 'Labs',
  },
]

export const Products = () => {
  return (
    <section id="producten" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Producten & Labs</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Naast maatwerk bouwen we eigen producten. Van security tot Web3: wat we leren in onze labs, gebruiken we in jouw oplossing.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-white/15 hover:from-hyp-primary/60 hover:to-hyp-accent/60 transition"
            >
              <div className="h-full rounded-2xl bg-hyp-card/95 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${p.status === 'Labs' ? 'bg-hyp-accent/15 text-violet-300' : 'bg-emerald-400/15 text-emerald-300'}`}>
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
