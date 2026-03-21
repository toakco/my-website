import type { Metadata } from 'next'
import NewsletterForm from './NewsletterForm'
import FadeIn from '@/components/ui/FadeIn'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'The TOAKCO newsletter — notes on creativity, brand, and the work.',
}

export default function NewsletterPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nature/newsletter-hero.jpg"
            alt="TOAKCO newsletter — notes from the studio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pure via-pure/70 to-pure/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">The studio newsletter</p>
            <h1 className="font-display text-6xl md:text-8xl text-parchment leading-none max-w-2xl">
              Notes from<br />
              <em className="italic text-fog/70">the field.</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT + FORM ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <FadeIn>
            <div className="space-y-5 font-body text-fog/70 leading-relaxed">
              <p className="text-lg text-fog/90">
                Irregular, honest notes from the TOAKCO studio. What we&#39;re working on, what we&#39;re thinking about, and what&#39;s been worth paying attention to.
              </p>
              <p>
                No content strategy behind it. No engagement optimization. Just dispatches from people doing creative work who want to share what they find.
              </p>
              <p>
                About once a month. Unsubscribe whenever.
              </p>
            </div>

            <div className="mt-10 space-y-4 border-t border-fog/10 pt-8">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30">What you&#39;ll get</p>
              {[
                'What we\'re working on (when we can share it)',
                'Notes on process, tools, and how we think about creative work',
                'Things we found interesting — links, references, images',
                'Occasional offers for subscribers first',
              ].map(item => (
                <div key={item} className="flex gap-3">
                  <span className="w-1 h-1 rounded-full bg-campfire flex-shrink-0 mt-2" />
                  <span className="font-body text-sm text-fog/50">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border border-fog/10 p-8 md:p-10">
              <h2 className="font-display text-3xl text-parchment mb-2">Sign up</h2>
              <p className="font-body text-sm text-fog/50 mb-8">No spam. No selling your info. Just the newsletter.</p>
              <NewsletterForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PAST ISSUES ───────────────────────────────────── */}
      <section className="border-t border-fog/10 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-8">Recent issues</p>
          </FadeIn>
          <div className="space-y-0 divide-y divide-fog/10">
            {[
              { title: 'On building things that age well', date: 'March 2026', number: '004' },
              { title: 'What references actually tell you', date: 'February 2026', number: '003' },
              { title: 'The problem with "just make it pop"', date: 'January 2026', number: '002' },
              { title: 'Why we started TOAKCO', date: 'December 2025', number: '001' },
            ].map((issue) => (
              <FadeIn key={issue.number}>
                <div className="py-6 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-fog/20 tracking-widest w-8">{issue.number}</span>
                    <div>
                      <p className="font-display text-xl text-parchment group-hover:text-campfire transition-colors duration-300">
                        {issue.title}
                      </p>
                      <p className="font-mono text-xs text-fog/30 mt-1">{issue.date}</p>
                    </div>
                  </div>
                  <span className="text-fog/20 group-hover:text-campfire group-hover:translate-x-1 transition-all duration-300">→</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
