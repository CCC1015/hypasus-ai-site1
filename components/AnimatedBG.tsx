'use client'

import { motion } from 'framer-motion'

export const AnimatedBG = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(76,195,255,0.25), transparent 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: [1, 1.1, 1], x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)' }}
      />
      {/* a third, green orb for DataShield, halfway down the page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45, x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[38%] left-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(61,245,180,0.16), transparent 70%)' }}
      />
      {/* subtle grid overlay */}
      <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
    </div>
  )
}
