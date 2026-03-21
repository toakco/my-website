import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Brand identity, campaigns, content, and web — built in-house by the TOAKCO team.',
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">What we offer</p>
          <h1 className="font-display text-6xl md:text-8xl text-parchment leading-none max-w-2xl">
            Services built to work together.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-8 max-w-xl">
          <p className="font-body text-lg text-fog/70 leading-relaxed">
            Every service we offer is available standalone or as part of an integrated engagement. The work gets better when everything is built by the same team.
          </p>
        </FadeIn>
      </section>

      {/* ── SERVICES LIST ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="space-y-0 divide-y divide-fog/10">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <div
                id={service.id}
                className="group py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-fog/20 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title + tagline */}
                <div className="md:col-span-4">
                  <h2
                    className="font-display text-4xl md:text-5xl text-parchment group-hover:text-campfire transition-colors duration-300"
                    style={{ '--accent': service.accent } as React.CSSProperties}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-2 font-body text-sm italic text-fog/50">{service.tagline}</p>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="font-body text-sm text-fog/60 leading-relaxed mb-6">{service.description}</p>
                  <p className="font-body text-xs text-fog/40 italic">
                    <strong className="text-fog/50 not-italic">Best for:</strong> {service.suited}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="md:col-span-3">
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30 mb-4">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.accent }}
                        />
                        <span className="font-body text-xs text-fog/50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className="border-t border-fog/10 py-24 md:py-32 bg-forest/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-3">How it works</p>
            <h2 className="font-display text-5xl md:text-6xl text-parchment mb-16">The process</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Brief',
                body: 'We start with a conversation. You tell us what you\'re building and what done looks like. We ask the questions that matter.',
              },
              {
                step: '02',
                title: 'Direction',
                body: 'We develop creative direction — mood, references, approach. You approve before anything gets built.',
              },
              {
                step: '03',
                title: 'Build',
                body: 'We execute. One round of revisions is built in. Additional rounds at a flat rate.',
              },
              {
                step: '04',
                title: 'Deliver',
                body: 'Final files, organized and production-ready. We stay available for follow-up questions.',
              },
            ].map((phase, i) => (
              <FadeIn key={phase.step} delay={i * 0.08}>
                <div className="border-t border-fog/20 pt-6">
                  <p className="font-mono text-xs text-fog/20 tracking-widest mb-4">{phase.step}</p>
                  <h3 className="font-display text-2xl text-parchment mb-3">{phase.title}</h3>
                  <p className="font-body text-sm text-fog/50 leading-relaxed">{phase.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-5xl text-parchment">Ready to start?</h2>
                <p className="mt-3 font-body text-fog/60 max-w-md">Tell us about your project — we respond within 24 hours.</p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 px-8 py-4 bg-campfire text-pure font-body text-sm tracking-widest uppercase hover:bg-campfire/90 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
