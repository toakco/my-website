'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import { team } from '@/lib/team'
import type { Metadata } from 'next'

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.p
          className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The studio
        </motion.p>
        <motion.h1
          className="font-display text-6xl md:text-8xl text-parchment leading-none max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Built different.<br />
          <em className="italic text-fog/70">On purpose.</em>
        </motion.h1>
      </section>

      {/* ── STUDIO STORY ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <FadeIn>
            <div className="aspect-[4/5] relative overflow-hidden bg-forest">
              <Image
                src="/images/studio/studio-bts-1.jpg"
                alt="TOAKCO studio — behind the scenes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="md:pt-12">
            <div className="space-y-6 font-body text-fog/70 leading-relaxed">
              <p className="text-lg text-fog/90">
                TOAKCO is a creative marketing studio in Thousand Oaks, California. We work with small businesses, independent creatives, bands, and entrepreneurs who need real creative partners — not vendors.
              </p>
              <p>
                We built the studio around a core conviction: small, integrated teams do the best work. When the same people who take the brief are the ones executing it, nothing gets lost in translation.
              </p>
              <p>
                Our philosophy pulls from nature and technology as complementary forces — organic intuition and intentional craft. It shows up in everything we make: layered, considered, and built to last.
              </p>
              <p>
                We serve clients who are building something meaningful and need it to look that way. We&#39;re honest about scope, direct about process, and committed to work that actually works.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-fog/10 pt-10">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5', label: 'Team Members' },
                { number: '3yr', label: 'In Business' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p className="font-display text-4xl text-campfire">{number}</p>
                  <p className="font-mono text-xs tracking-wider uppercase text-fog/40 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TEAM GRID ─────────────────────────────────────── */}
      <section className="border-t border-fog/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3">The people</p>
            <h2 className="font-display text-5xl md:text-6xl text-parchment mb-16">Meet the team</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.08}>
                <Link href={`/about/${member.id}`} className="group block">
                  {/* Photo */}
                  <div className="aspect-[3/4] overflow-hidden mb-5 relative bg-forest">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-pure/30 group-hover:bg-pure/0 transition-colors duration-500" />
                    {/* Name overlay on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-campfire">
                        View profile <span>→</span>
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-2xl text-parchment group-hover:text-campfire transition-colors duration-300">
                        {member.name}
                      </p>
                      <p className="font-mono text-xs tracking-wider uppercase text-fog/40 mt-1">
                        {member.role}
                      </p>
                    </div>
                    <span className="text-fog/20 group-hover:text-campfire group-hover:translate-x-1 transition-all duration-300 mt-1">
                      →
                    </span>
                  </div>
                  <p className="mt-3 font-body text-sm text-fog/50 leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="border-t border-fog/10 py-24 md:py-32 bg-forest/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3">What we stand for</p>
            <h2 className="font-display text-5xl md:text-6xl text-parchment mb-16">Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Individuality',
                body: 'Every client gets work that could only belong to them. We build from who you are, not from a template of who you should be.',
              },
              {
                title: 'Ethical Partnerships',
                body: 'We work with clients we believe in and decline work that conflicts with our values. Long relationships built on honesty, not just deliverables.',
              },
              {
                title: 'Client Privacy',
                body: 'What you share with us stays with us. We don\'t share client information, work in progress, or internal briefs without explicit permission.',
              },
              {
                title: 'Innovation Through AI',
                body: 'We use AI as a tool — to move faster, think wider, and deliver more. Not to replace craft, but to amplify it.',
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="border-l border-fog/20 pl-8 py-2">
                  <h3 className="font-display text-2xl text-parchment mb-3">{value.title}</h3>
                  <p className="font-body text-sm text-fog/60 leading-relaxed">{value.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl text-parchment mb-6">
              Work with us.
            </h2>
            <p className="font-body text-lg text-fog/60 max-w-md mx-auto mb-10">
              We&#39;re selective about projects so we can give each one what it deserves.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-campfire text-pure font-body text-sm tracking-widest uppercase hover:bg-campfire/90 transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
