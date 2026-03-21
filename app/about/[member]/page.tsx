import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getMember, team } from '@/lib/team'
import MemberPageClient from './MemberPageClient'

interface Props {
  params: { member: string }
}

export async function generateStaticParams() {
  return team.map(m => ({ member: m.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getMember(params.member)
  if (!member) return { title: 'Not Found' }
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
  }
}

export default function MemberPage({ params }: Props) {
  const member = getMember(params.member)
  if (!member) notFound()

  const currentIndex = team.findIndex(m => m.id === member.id)
  const prevMember = team[currentIndex - 1]
  const nextMember = team[currentIndex + 1]

  return <MemberPageClient member={member} prevMember={prevMember} nextMember={nextMember} />
}
