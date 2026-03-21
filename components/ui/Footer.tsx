import Link from 'next/link'

const links = {
  Studio: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Brand Identity', href: '/services#brand-identity' },
    { label: 'Campaigns', href: '/services#campaigns' },
    { label: 'Content', href: '/services#content' },
    { label: 'Web & UI', href: '/services#web' },
  ],
  Connect: [
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Instagram', href: '#' },
    { label: 'Start a Project', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-fog/10 bg-pure">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl tracking-[0.15em] uppercase text-parchment hover:text-campfire transition-colors">
              TOAKCO
            </Link>
            <p className="mt-4 font-body text-sm text-fog/70 leading-relaxed max-w-48">
              A creative studio for brands that care about how they look and what they say.
            </p>
            <p className="mt-6 font-mono text-xs text-fog/30 tracking-wider uppercase">
              Thousand Oaks, CA
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-fog/40 mb-4">{group}</p>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-sm text-fog/60 hover:text-parchment transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-fog/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-xs text-fog/30">
            © {new Date().getFullYear()} TOAKCO LLC. All rights reserved.
          </p>
          <p className="font-mono text-xs text-fog/20 tracking-wider">
            Nature + Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
