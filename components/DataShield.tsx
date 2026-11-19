'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Web Shield',
    desc: 'Stopt kwaadaardige scripts op elke website: card-skimmers, datadiefstal en bekende aanvalsservers, nog vóór er iets weglekt.',
  },
  {
    title: 'Agent Box',
    desc: 'AI-codetools draaien in een afgesloten omgeving: een kopie van je project zonder geheimen, alleen de websites die jij toestaat.',
  },
  {
    title: 'Plak-aanvallen',
    desc: 'Herkent nep-CAPTCHA’s die een commando op je klembord zetten (ClickFix) en haalt het weg voordat je kunt plakken.',
  },
  {
    title: 'Automatische bescherming',
    desc: 'Vermomde downloads in quarantaine, nieuwe opstartitems en extensies gemeld, ransomware-gedrag direct gezien.',
  },
  {
    title: 'Ask Shieldy',
    desc: 'Vraag of een mail, link of bestand veilig is. Antwoord van een lokale AI: er verlaat niets je pc.',
  },
  {
    title: 'Websitecheck',
    desc: 'Lookalike-adressen, merken op andermans domein en nep-virusmeldingen worden direct aangewezen.',
  },
]

export const DataShield = () => {
  return (
    <section id="datashield" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> NIEUW · VERSIE 1.0.0.13
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              DataShield: je <span className="bg-gradient-to-r from-emerald-300 to-hyp-primary bg-clip-text text-transparent">laatste verdedigingslinie</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/75 text-lg">
              Een cybersecurity-companion voor Windows, gebouwd door Hypasus. Waar de virusscanner stopt, kijkt DataShield verder:
              naar de scripts op websites, naar wat er op je klembord belandt en naar wat AI-agents op je pc doen. Alles lokaal, niets in de cloud.
            </p>
          </div>
          <ShieldVisual />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-hyp-card/70 p-6 relative overflow-hidden transition hover:-translate-y-1 hover:border-emerald-300/40"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-400/10 via-transparent to-hyp-primary/10 opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** A glowing shield with a scan line passing over it, in pure SVG (no image, no extra package). */
const ShieldVisual = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative mx-auto h-56 w-48 md:h-72 md:w-60"
    aria-hidden
  >
    <div className="absolute inset-0 rounded-full blur-3xl bg-emerald-400/20" />
    <svg viewBox="0 0 120 140" className="relative h-full w-full drop-shadow-[0_0_30px_rgba(61,245,180,0.35)]">
      <defs>
        <linearGradient id="ds-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3DDC97" />
          <stop offset="1" stopColor="#1E9E6E" />
        </linearGradient>
        <clipPath id="ds-clip">
          <path d="M60 8 C78 16 96 19 110 19 C113 66 98 102 60 130 C22 102 7 66 10 19 C24 19 42 16 60 8 Z" />
        </clipPath>
      </defs>
      <path d="M60 8 C78 16 96 19 110 19 C113 66 98 102 60 130 C22 102 7 66 10 19 C24 19 42 16 60 8 Z" fill="url(#ds-body)" stroke="#0B0B14" strokeWidth="5" strokeLinejoin="round" />
      <path d="M38 70 L54 86 L84 52" fill="none" stroke="#0B0B14" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <g clipPath="url(#ds-clip)">
        <motion.rect
          x="0" width="120" height="22" fill="rgba(233,255,246,0.55)"
          initial={{ y: -30 }}
          animate={{ y: 150 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
        />
      </g>
    </svg>
  </motion.div>
)
