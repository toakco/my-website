'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-600',
          scrolled
            ? 'bg-pure/90 backdrop-blur-md border-b border-fog/10'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-display text-2xl tracking-[0.15em] text-parchment uppercase group-hover:text-campfire transition-colors duration-300">
              TOAKCO
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'font-body text-sm tracking-widest uppercase transition-colors duration-300',
                    active
                      ? 'text-campfire'
                      : 'text-fog hover:text-parchment'
                  )}
                >
                  {label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border border-campfire text-campfire text-sm tracking-widest uppercase font-body hover:bg-campfire hover:text-pure transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-px bg-parchment block"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-4 h-px bg-parchment block"
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-px bg-parchment block"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-pure flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col justify-center h-full px-8 pb-24 gap-2">
              {navLinks.map(({ href, label }, i) => {
                const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        'font-display text-6xl block py-3 transition-colors duration-300',
                        active ? 'text-campfire' : 'text-parchment'
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-block border border-campfire text-campfire text-sm tracking-widest uppercase px-6 py-3 hover:bg-campfire hover:text-pure transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>

            {/* Studio tag at bottom */}
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
              <span className="font-display text-xl tracking-[0.15em] uppercase text-parchment/40">TOAKCO</span>
              <span className="font-mono text-xs text-fog/40 tracking-wider">Creative Studio</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
