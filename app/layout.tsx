import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: {
    default: 'TOAKCO — Creative Studio',
    template: '%s | TOAKCO',
  },
  description:
    'TOAKCO is a creative marketing studio built for small businesses, independent creatives, and bands. Brand identity, campaigns, content, and web — all in one place.',
  metadataBase: new URL('https://toakco.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toakco.com',
    siteName: 'TOAKCO',
    title: 'TOAKCO — Creative Studio',
    description: 'Brand identity, campaigns, content, and web for people who care about their work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOAKCO — Creative Studio',
    description: 'Brand identity, campaigns, content, and web for people who care about their work.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-pure text-parchment">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
