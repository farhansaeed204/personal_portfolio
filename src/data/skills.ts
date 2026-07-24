import { Code2, FileJson, Globe, Sparkles, GitBranch, Box, BrainCircuit, FileCode } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Skill {
  name: string
  percentage: number
  icon: LucideIcon
}

export const SKILLS: Skill[] = [
  { name: 'Python', percentage: 80, icon: Code2 },
  { name: 'JavaScript', percentage: 75, icon: FileCode },
  { name: 'TypeScript', percentage: 70, icon: FileJson },
  { name: 'Web Development', percentage: 78, icon: Globe },
  { name: 'OpenAI Agents SDK', percentage: 50, icon: BrainCircuit },
  { name: 'AI Tools', percentage: 85, icon: Sparkles },
  { name: 'Git & GitHub', percentage: 78, icon: GitBranch },
  { name: 'Docker', percentage: 50, icon: Box },
]
