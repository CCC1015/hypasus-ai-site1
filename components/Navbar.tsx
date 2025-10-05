'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-hyp-bg/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Hypasus" width={128} height={128} priority />
          <span className="font-semibold tracking-wide">HYPASUS</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-hyp-primary transition">Diensten</a>
          <a href="#about" className="hover:text-hyp-primary transition">Over</a>
          <a href="#contact" className="hover:text-hyp-primary transition">Contact</a>
          <Link href="#contact" className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10 shadow-glow transition">
            Plan consult
          </Link>
        </nav>
      </div>
    </header>
  )
}
