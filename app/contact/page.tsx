import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with TOAKCO. Tell us what you\'re working on and we\'ll be in touch within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">Let&#39;s work together</p>
          <h1 className="font-display text-6xl md:text-8xl text-parchment leading-none max-w-2xl">
            Tell us about your project.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-6 max-w-md">
          <p className="font-body text-fog/70 leading-relaxed">
            We respond within 24 hours. If you&#39;re not ready to start yet, that&#39;s fine — tell us where you are and we&#39;ll take it from there.
          </p>
        </FadeIn>
      </section>

      {/* ── FORM + INFO ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          {/* Info panel */}
          <div className="md:col-span-4 md:col-start-9">
            <FadeIn delay={0.2}>
              <div className="space-y-10">
                <div>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30 mb-3">Email</p>
                  <a
                    href="mailto:studio@toakco.com"
                    className="font-display text-xl text-parchment hover:text-campfire transition-colors duration-300"
                  >
                    studio@toakco.com
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30 mb-3">Location</p>
                  <p className="font-body text-fog/60">
                    Thousand Oaks, CA<br />
                    <span className="text-fog/30 text-sm">Remote-friendly</span>
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/30 mb-3">Typical timeline</p>
                  <div className="space-y-2">
                    {[
                      { service: 'Brand Identity', time: '3–4 weeks' },
                      { service: 'Website', time: '2–4 weeks' },
                      { service: 'Campaign', time: '1–2 weeks' },
                      { service: 'Video', time: '2–3 weeks' },
                    ].map(({ service, time }) => (
                      <div key={service} className="flex justify-between">
                        <span className="font-body text-sm text-fog/50">{service}</span>
                        <span className="font-mono text-xs text-fog/30">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-fog/10 pt-8">
                  <p className="font-body text-sm text-fog/40 leading-relaxed">
                    Not sure what you need yet? That&#39;s where we usually start. Just describe what you&#39;re trying to accomplish and we&#39;ll figure out the shape of it together.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
