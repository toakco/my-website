export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  suited: string
  accent: string
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    tagline: 'Built to be recognized.',
    description:
      'We build brand systems that hold. Logo, color, typography, voice — every element designed as part of a coherent whole, not a loose collection of assets.',
    deliverables: [
      'Logo suite (primary, secondary, icon)',
      'Color system',
      'Typography system',
      'Brand guidelines document',
      'Application mockups',
    ],
    suited: 'New businesses, rebrands, and anyone who\'s outgrown their first attempt at a brand.',
    accent: '#5C7A52',
  },
  {
    id: 'campaigns',
    title: 'Campaign & Drop Work',
    tagline: 'Coordinated. Intentional. Timed right.',
    description:
      'From product drops to event launches to ongoing campaign work — we plan and execute coordinated creative across every platform your audience lives on.',
    deliverables: [
      'Campaign strategy + content calendar',
      'Platform-native content (IG, TikTok, X, LinkedIn)',
      'Ad creative',
      'Copy + captions',
      'Launch timeline',
    ],
    suited: 'Brands with something to announce and an audience worth reaching.',
    accent: '#C97B3A',
  },
  {
    id: 'content',
    title: 'Content Creation',
    tagline: 'Made to move people.',
    description:
      'Short-form video, long-form productions, loops, reels — content that gets made, not just planned. We shoot, edit, and deliver work that performs.',
    deliverables: [
      'Short-form video (Reels, TikTok, Shorts)',
      'Long-form brand films',
      'Ambient + loop video',
      'Photo editing + retouching',
      'Formatted for every platform',
    ],
    suited: 'Creators, brands, and businesses that need a steady content output without a full-time team.',
    accent: '#C97B3A',
  },
  {
    id: 'web',
    title: 'Web & UI/UX',
    tagline: 'Fast, intentional, yours.',
    description:
      'Framer-built websites that reflect who you actually are — not a template filled in with your logo. Clean scroll, considered layout, and copy that works.',
    deliverables: [
      'Framer website design + build',
      'Mobile-responsive layouts',
      'Scroll animations',
      'Contact + booking integration',
      'SEO foundation',
    ],
    suited: 'Small businesses, studios, creatives, and anyone who needs a website that does real work.',
    accent: '#4E9BB5',
  },
  {
    id: 'print-digital',
    title: 'Print & Digital Assets',
    tagline: 'Anything physical or digital.',
    description:
      'Business cards, flyers, posters, signage — production-ready files built to spec, on brand, and delivered on time.',
    deliverables: [
      'Business cards',
      'Flyers + posters',
      'Social media graphics',
      'Digital ads',
      'Signage + print',
    ],
    suited: 'Anyone needing one-off assets or an ongoing production partner.',
    accent: '#8FA67A',
  },
]
