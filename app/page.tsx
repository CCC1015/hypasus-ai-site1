'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { AnimatedBG } from '@/components/AnimatedBG'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBG />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-t from-hyp-bg/60 via-transparent to-transparent" />
    </main>
  )
}
