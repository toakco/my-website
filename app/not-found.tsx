import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">404</p>
        <h1 className="font-display text-8xl text-parchment/20 mb-6">Lost.</h1>
        <p className="font-body text-fog/50 mb-8 max-w-sm mx-auto">
          That page doesn&#39;t exist — or it moved. Try starting from the home page.
        </p>
        <Link
          href="/"
          className="inline-block border border-fog/20 text-fog/50 text-sm tracking-widest uppercase px-6 py-3 hover:border-parchment hover:text-parchment transition-all duration-300 font-body"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
