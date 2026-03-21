import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies and selected projects from TOAKCO creative studio.',
}

const projects = [
  {
    id: 'project-1',
    title: 'Brand Identity',
    client: 'Local Music Collective',
    category: 'Brand Identity',
    tags: ['Logo', 'Color System', 'Guidelines'],
    image: '/images/work/project-1.jpg',
    year: '2024',
    description: 'Full brand system for an indie music collective — wordmark, icon mark, typographic system, and a 24-page guidelines doc.',
    accent: '#5C7A52',
  },
  {
    id: 'project-2',
    title: 'Product Drop Campaign',
    client: 'Small Batch Coffee Co.',
    category: 'Campaign',
    tags: ['Social Content', 'Photography', 'Copy'],
    image: '/images/work/project-2.jpg',
    year: '2024',
    description: 'Three-week campaign across Instagram and TikTok for a limited-edition seasonal roast. 14 posts, 4 stories, launch video.',
    accent: '#C97B3A',
  },
  {
    id: 'project-3',
    title: 'Website Design + Build',
    client: 'Independent Photographer',
    category: 'Web',
    tags: ['Framer', 'UI/UX', 'Portfolio'],
    image: '/images/work/project-3.jpg',
    year: '2024',
    description: 'Minimal, photo-forward Framer portfolio with scroll animations, a booking integration, and a print shop.',
    accent: '#4E9BB5',
  },
  {
    id: 'project-4',
    title: 'Brand Film',
    client: 'Local Restaurant Group',
    category: 'Video',
    tags: ['Brand Film', 'Color Grade', 'Music'],
    image: '/images/work/project-4.jpg',
    year: '2023',
    description: 'Two-minute brand film — shot over two evenings, edited and color graded in-house, with licensed music.',
    accent: '#C97B3A',
  },
  {
    id: 'project-5',
    title: 'Social Content System',
    client: 'Fitness Studio',
    category: 'Content',
    tags: ['Templates', 'Reels', 'Captions'],
    image: '/images/work/project-5.jpg',
    year: '2023',
    description: 'Ongoing content system: weekly Reels, 3x/week static posts, monthly newsletter, and a reusable template library.',
    accent: '#8FA67A',
  },
  {
    id: 'project-6',
    title: 'Rebrand',
    client: 'Local Law Practice',
    category: 'Brand Identity',
    tags: ['Rebrand', 'Print', 'Web'],
    image: '/images/work/project-6.jpg',
    year: '2023',
    description: 'Complete rebrand — new logo, business system, website, and signage for a 15-year-old practice entering a new phase.',
    accent: '#3D2B1F',
  },
]

const categories = ['All', 'Brand Identity', 'Campaign', 'Web', 'Video', 'Content']

export default function WorkPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">Selected projects</p>
          <h1 className="font-display text-6xl md:text-8xl text-parchment leading-none">
            The work.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-8 max-w-lg">
          <p className="font-body text-lg text-fog/70 leading-relaxed">
            A selection of brand, campaign, content, and web projects. Most of our work is confidential — what you see here is what we were given permission to share.
          </p>
        </FadeIn>
      </section>

      {/* ── PROJECTS GRID ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.07}>
              <div className="group">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-forest mb-5">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.client}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-pure/20 group-hover:bg-pure/0 transition-colors duration-500" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 text-pure"
                      style={{ backgroundColor: project.accent }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-mono text-xs tracking-wider uppercase text-fog/30 mb-1">{project.client}</p>
                    <h3 className="font-display text-2xl text-parchment group-hover:text-campfire transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-fog/50 leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-xs tracking-wider border border-fog/15 text-fog/40 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-fog/20 mt-1 ml-4">{project.year}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES NOTE ──────────────────────────────── */}
      <section className="border-t border-fog/10 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-campfire mb-4">A note</p>
              <p className="font-body text-fog/60 leading-relaxed">
                Many of our strongest projects aren&#39;t in this gallery — client confidentiality comes first. If you need to see work in a specific category or industry, reach out directly. We can often share more in a conversation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 font-body text-sm tracking-widest uppercase text-campfire hover:text-parchment transition-colors duration-300 group"
              >
                Get in touch <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
