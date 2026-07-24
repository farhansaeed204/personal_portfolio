export interface Certification {
  name: string
  organization: string
  duration: string
  status: 'completed' | 'in-progress'
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Python Programming',
    organization: 'Alkhidmat Bano Qabil 2.0',
    duration: 'Dec 2023 - Feb 2024',
    status: 'completed',
  },
  {
    name: 'Web Development',
    organization: 'PITP Phase 2, NED University',
    duration: 'Sep 2026 - Nov 2026',
    status: 'completed',
  },
  {
    name: 'GenAI, Web3 and Metaverse',
    organization: 'Governor Initiative',
    duration: 'Feb 2024 - Ongoing',
    status: 'in-progress',
  },
]
