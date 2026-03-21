'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '@/components/ui/FadeIn'
import type { TeamMember } from '@/lib/team'

interface Props {
  member: TeamMember
  prevMember?: TeamMember
  nextMember?: TeamMember
}

export default function MemberPageClient({ member, prevMember, nextMember }: Props) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="relative h-[60vh] md:h-auto order-first md:order-last">
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-pure/60 via-transparent to-transparent" />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-end px-6 md:px-16 pt-32 pb-16 md:pb-24">
          <motion.p
            className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/about" className="hover:text-parchment transition-colors">The team</Link>
            {' '} / {member.shortRole}
          </motion.p>
          <motion.h1
            className="font-display text-6xl md:text-7xl lg:text-8xl text-parchment leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {member.name}
          </motion.h1>
          <motion.p
            className="mt-3 font-mono text-sm tracking-wider uppercase text-fog/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {member.role}
          </motion.p>

          {member.quote && (
            <motion.blockquote
              className="mt-10 font-display text-xl italic text-fog/60 border-l border-campfire pl-5 leading-snug max-w-sm"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              &#8220;{member.quote}&#8221;
            </motion.blockquote>
          )}
        </div>
      </section>

      {/* ── BIO ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6">
            {member.longBio.map((para, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="font-body text-lg text-fog/70 leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <FadeIn delay={0.2}>
              <div className="border border-fog/10 p-6">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/40 mb-4">Specialties</p>
                <ul className="space-y-3">
                  {member.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-campfire flex-shrink-0" />
                      <span className="font-body text-sm text-fog/70">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION BETWEEN MEMBERS ─────────────── */}
      <section className="border-t border-fog/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {prevMember ? (
            <Link
              href={`/about/${prevMember.id}`}
              className="group flex items-center gap-4 hover:text-parchment transition-colors duration-300"
            >
              <span className="text-fog/30 group-hover:text-campfire group-hover:-translate-x-1 transition-all duration-300">←</span>
              <div>
                <p className="font-mono text-xs tracking-wider uppercase text-fog/30 group-hover:text-fog/60">Prev</p>
                <p className="font-display text-xl text-fog/60 group-hover:text-parchment transition-colors">{prevMember.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/about"
            className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30 hover:text-fog/60 transition-colors"
          >
            All team
          </Link>

          {nextMember ? (
            <Link
              href={`/about/${nextMember.id}`}
              className="group flex items-center gap-4 text-right hover:text-parchment transition-colors duration-300"
            >
              <div>
                <p className="font-mono text-xs tracking-wider uppercase text-fog/30 group-hover:text-fog/60">Next</p>
                <p className="font-display text-xl text-fog/60 group-hover:text-parchment transition-colors">{nextMember.name}</p>
              </div>
              <span className="text-fog/30 group-hover:text-campfire group-hover:translate-x-1 transition-all duration-300">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  )
}
