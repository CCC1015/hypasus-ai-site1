'use client'

import { motion } from 'framer-motion'

const items = [
  {
    title: 'AI Receptionist',
    desc: '24/7 telefoon en chat met natuurlijke taal, afspraken, routering en CRM-koppeling.',
  },
  {
    title: 'Lead Follow-up & Email Automation',
    desc: 'Slimme sequenties die leads nurturen en converteren met persoonlijke tone-of-voice.',
  },
  {
    title: 'Dashboards & Datavisualisatie',
    desc: 'Realtime inzichten met KPI’s, alerts en heldere visualisaties voor besluitvorming.',
  },
  {
    title: 'Maatwerk AI-integraties',
    desc: 'Koppelingen met jouw tools: ERP/CRM, data pipelines, RPA, workflow-automations.',
  },
]

export const Services = () => {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Diensten</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Geen copy‑paste. Oplossingen afgestemd op jouw structuur, cultuur en doelen.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-hyp-card/70 p-6 hover:shadow-glow transition relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-hyp-primary/10 via-transparent to-hyp-accent/10 opacity-60" />
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
