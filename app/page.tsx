'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import { services } from '@/lib/services'
import { team } from '@/lib/team'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] overflow-hidden flex items-end"
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src="/images/nature/hero-1.jpg"
            alt="TOAKCO creative studio — nature and craft"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 photo-overlay" />
        </motion.div>

        {/* Hero copy */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Creative Studio — Thousand Oaks, CA
          </motion.p>
          <motion.h1
            className="font-display text-7xl md:text-8xl lg:text-9xl text-parchment leading-none max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Made with<br />
            <em className="italic text-fog/80">intention.</em>
          </motion.h1>
          <motion.p
            className="mt-6 font-body text-lg text-fog/80 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Brand identity, campaigns, content, and web — for small businesses and independent creatives who care about how they look and what they say.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-campfire text-pure font-body text-sm tracking-widest uppercase hover:bg-campfire/90 transition-colors duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="px-7 py-3.5 border border-fog/30 text-fog font-body text-sm tracking-widest uppercase hover:border-parchment hover:text-parchment transition-colors duration-300"
            >
              See the Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-fog/40 rotate-90 origin-center mb-6">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-fog/40 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">Our approach</p>
            <h2 className="font-display text-5xl md:text-6xl text-parchment leading-tight">
              Nature and technology as a lens for individuality.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-5 text-fog/70 font-body leading-relaxed">
              <p>
                TOAKCO is a small creative studio in Thousand Oaks. We work with small businesses, independent creatives, bands, and anyone building something that deserves to look like what it is.
              </p>
              <p>
                We don&#39;t use templates. We don&#39;t hand work off to contractors. Every project is built in-house by the same team that took the brief.
              </p>
              <p>
                The result is work that holds together — visually, strategically, and across every surface it touches.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-8 font-body text-sm tracking-widest uppercase text-campfire hover:text-parchment transition-colors duration-300 group"
            >
              Meet the team
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section className="border-t border-fog/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3">What we do</p>
                <h2 className="font-display text-5xl md:text-6xl text-parchment">Services</h2>
              </div>
              <Link
                href="/services"
                className="hidden md:inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-fog/50 hover:text-parchment transition-colors duration-300 group"
              >
                All services
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog/10">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.06}>
                <div className="bg-pure p-8 md:p-10 group hover:bg-forest/50 transition-colors duration-500 h-full">
                  <div
                    className="w-8 h-px mb-6 transition-all duration-500 group-hover:w-16"
                    style={{ backgroundColor: service.accent }}
                  />
                  <h3 className="font-display text-3xl text-parchment mb-3 group-hover:text-campfire transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-fog/60 italic mb-4">{service.tagline}</p>
                  <p className="font-body text-sm text-fog/50 leading-relaxed">{service.description}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 mt-6 font-mono text-xs tracking-widest uppercase text-campfire/60 hover:text-campfire transition-colors duration-300 group/link"
                  >
                    Learn more
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO INTERLUDE ───────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <ParallaxImage
          src="/images/nature/interlude-1.jpg"
          alt="Nature photography — TOAKCO studio"
          speed={0.3}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <FadeIn>
              <blockquote className="font-display text-4xl md:text-6xl text-parchment max-w-3xl italic leading-tight">
                &#8220;Every brand has a personality. Our job is to find it.&#8221;
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ─────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-16">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3">The people</p>
                <h2 className="font-display text-5xl md:text-6xl text-parchment">The team</h2>
              </div>
              <Link
                href="/about"
                className="hidden md:inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-fog/50 hover:text-parchment transition-colors duration-300 group"
              >
                Full team
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.08}>
                <Link href={`/about/${member.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden mb-4 relative bg-forest">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-pure/40 group-hover:bg-pure/10 transition-colors duration-500" />
                  </div>
                  <p className="font-display text-xl text-parchment group-hover:text-campfire transition-colors duration-300">
                    {member.name}
                  </p>
                  <p className="font-mono text-xs tracking-wider uppercase text-fog/40 mt-1">
                    {member.shortRole}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-fog/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">Let&#39;s work together</p>
              <h2 className="font-display text-5xl md:text-7xl text-parchment leading-none">
                Ready to build something?
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 font-body text-lg text-fog/60 leading-relaxed max-w-lg">
                Tell us about your project. We&#39;ll be honest about whether we&#39;re the right fit, and if we are, we&#39;ll make something good together.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-campfire text-pure font-body text-sm tracking-widest uppercase hover:bg-campfire/90 transition-colors duration-300"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/newsletter"
                  className="px-7 py-3.5 border border-fog/30 text-fog font-body text-sm tracking-widest uppercase hover:border-parchment hover:text-parchment transition-colors duration-300"
                >
                  Get the Newsletter
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

// Parallax image component for interlude sections
function ParallaxImage({ src, alt, speed = 0.3 }: { src: string; alt: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 50}%`, `${speed * 50}%`])

  return (
    <motion.div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-[-20%]" style={{ y }}>
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-pure/60" />
      </motion.div>
    </motion.div>
  )
}
