'use client'

import { motion } from 'framer-motion'

// Newest first. Add a line here with each release worth telling clients about.
const updates = [
  { date: '19 november 2026', title: 'DataShield 1.0.0.8: AI-modellen kiezen', desc: 'Een pagina om veilig lokale AI-modellen te installeren die bij je pc passen, met live systeemstatistieken.' },
  { date: '19 november 2026', title: 'DataShield 1.0.0.7: Web Shield meldt aan DataShield', desc: 'Alles wat Web Shield op een website tegenhoudt, verschijnt direct in DataShield, met melding en geschiedenis.' },
  { date: '19 november 2026', title: 'DataShield 1.0.0.5: plak-aanvallen gestopt', desc: 'Nep-CAPTCHA’s die een commando op je klembord zetten worden herkend en onschadelijk gemaakt.' },
  { date: '19 november 2026', title: 'DataShield 1.0.0.4: altijd aan', desc: 'Bescherming blijft draaien in het systeemvak en start desgewenst met Windows.' },
  { date: '19 november 2026', title: 'DataShield 1.0.0.1: websitecheck', desc: 'Gevaarlijke sites worden vanzelf aangewezen; een lokale geheugencheck voor AI-modellen.' },
  { date: '18 november 2026', title: 'DataShield 1.0.0.0', desc: 'Eerste versie: Agent Box, één-klik-controles en Ask Shieldy met lokale AI.' },
]

export const Updates = () => {
  return (
    <section id="updates" className="relative">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Laatste updates</h2>
        <p className="mt-3 text-white/70">Waar we nu aan bouwen, met de datum waarop het uitkwam.</p>
        <ol className="mt-10 relative border-l border-white/10 pl-6 space-y-8">
          {updates.map((u, i) => (
            <motion.li
              key={u.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-hyp-bg ${i === 0 ? 'bg-emerald-300 shadow-[0_0_14px_rgba(61,245,180,0.8)]' : 'bg-hyp-primary/70'}`} />
              <time className="text-xs font-semibold uppercase tracking-wider text-hyp-primary">{u.date}</time>
              <h3 className="mt-1 text-lg font-semibold">{u.title}</h3>
              <p className="mt-1 text-sm text-white/70">{u.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
