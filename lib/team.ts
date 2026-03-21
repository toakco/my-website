export interface TeamMember {
  id: string
  name: string
  role: string
  shortRole: string
  bio: string
  longBio: string[]
  image: string
  imageAlt: string
  skills: string[]
  quote?: string
  social?: {
    instagram?: string
    linkedin?: string
  }
}

export const team: TeamMember[] = [
  {
    id: 'jack-lopez',
    name: 'Jack Lopez',
    role: 'Creative Director',
    shortRole: 'Creative Direction',
    bio: 'Jack shapes the visual language of every project — building systems that feel intentional and alive.',
    longBio: [
      'Jack Lopez is the creative mind behind TOAKCO\'s visual identity work. He approaches every brand as a living system — one that needs to hold up across mediums, scale with the business, and still feel like something the client would have chosen for themselves.',
      'His process is rooted in observation. He listens for what\'s not being said, pulls references from places most designers wouldn\'t look, and builds direction from there. The result is work that doesn\'t feel designed so much as discovered.',
      'Jack leads creative direction across brand identity, campaign work, and the studio\'s own visual language.',
    ],
    image: '/images/team/jack-lopez.jpg',
    imageAlt: 'Jack Lopez, Creative Director at TOAKCO',
    skills: ['Brand Identity', 'Creative Direction', 'Visual Systems', 'Campaign Design'],
    quote: 'Good design is a conversation between the work and the person who\'ll live with it.',
  },
  {
    id: 'max-sims',
    name: 'Max Sims',
    role: 'Motion & Video',
    shortRole: 'Motion + Video',
    bio: 'Max finds the moment inside footage and builds it into something that holds attention.',
    longBio: [
      'Max Sims came up through filmmaking and found his way to commercial work by learning that the same principles apply everywhere: story first, craft second, tools last.',
      'He handles everything in-house — shoot planning, directing, editing, color, and sound. That full ownership means the final cut is never a compromise between what was intended and what made it through post.',
      'His recent focus has been short-form work that hits within the first two seconds and stays with you after the loop ends.',
    ],
    image: '/images/team/max-sims.jpg',
    imageAlt: 'Max Sims, Motion & Video at TOAKCO',
    skills: ['Video Production', 'Motion Design', 'Color Grading', 'Short-Form Content'],
    quote: 'Every piece of footage has the story already in it. You just have to find the right cut.',
  },
  {
    id: 'rory-moon',
    name: 'Rory Moon',
    role: 'Web & Digital',
    shortRole: 'Web + Digital',
    bio: 'Rory builds websites that work as hard as they look — fast, intentional, and built to last.',
    longBio: [
      'Rory Moon bridges design and engineering. She designs with code in mind and builds with aesthetics as a first-class concern — not an afterthought.',
      'She leads web work at TOAKCO, from early Framer prototypes through production. Her sites load fast, scroll smooth, and handle the edge cases that most builds ignore until launch.',
      'Outside of client work, Rory experiments with generative layouts, scroll-driven interactions, and the ongoing question of how much a website can feel like a place.',
    ],
    image: '/images/team/rory-moon.jpg',
    imageAlt: 'Rory Moon, Web & Digital at TOAKCO',
    skills: ['Web Design', 'Framer', 'UI/UX', 'Front-End Development'],
    quote: 'A great website doesn\'t announce itself. It just gets out of the way and lets the work speak.',
  },
  {
    id: 'samuel-salamanca',
    name: 'Samuel Salamanca',
    role: 'Strategy & Content',
    shortRole: 'Strategy + Content',
    bio: 'Samuel connects creative vision to audience reality — building content that reaches and resonates.',
    longBio: [
      'Samuel Salamanca approaches content as infrastructure. A good post isn\'t just good — it\'s positioned right, timed right, and part of something bigger.',
      'He leads strategy and content at TOAKCO, which means he\'s thinking about campaign architecture, platform behavior, and what the audience actually wants to see before any asset gets made.',
      'His background in social media management gives him an operational edge: he doesn\'t just plan campaigns, he runs them, adapts them in real-time, and knows how to read what\'s working.',
    ],
    image: '/images/team/samuel-salamanca.jpg',
    imageAlt: 'Samuel Salamanca, Strategy & Content at TOAKCO',
    skills: ['Content Strategy', 'Social Media', 'Campaign Planning', 'Copywriting'],
    quote: 'Strategy without creativity is just a calendar. Creativity without strategy is just noise.',
  },
  {
    id: 'joey-markley',
    name: 'Joey Markley',
    role: 'Founder & Operations',
    shortRole: 'Founder',
    bio: 'Joey built TOAKCO on the belief that small teams with clear values do the best creative work.',
    longBio: [
      'Joey Markley started TOAKCO because he kept seeing the same problem: great clients stuck with generic creative, and talented people doing work that didn\'t feel like theirs.',
      'He built the studio around a different model — a small, integrated team with full ownership of each project, from strategy through execution. No handoffs to contractors. No diluted vision.',
      'Today he runs operations, client relationships, and the systems that keep everything moving. He\'s also the person most likely to be seen stress-testing a new workflow at midnight because it\'s almost working and he wants to see it work.',
    ],
    image: '/images/team/joey-markley.jpg',
    imageAlt: 'Joey Markley, Founder of TOAKCO',
    skills: ['Studio Operations', 'Client Relations', 'AI Integration', 'Brand Strategy'],
    quote: 'The studio is only as good as the trust between the people making the work.',
  },
]

export function getMember(id: string): TeamMember | undefined {
  return team.find(m => m.id === id)
}
