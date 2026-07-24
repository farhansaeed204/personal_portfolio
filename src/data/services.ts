export interface Service {
  number: string
  name: string
  description: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Software Development',
    description:
      'Building scalable, efficient software solutions tailored to business needs — from desktop apps to complex backend systems.',
  },
  {
    number: '02',
    name: 'Web Development',
    description:
      'Designing and developing modern, responsive websites and web applications with clean code and great user experience.',
  },
  {
    number: '03',
    name: 'AI Agents',
    description:
      'Creating intelligent AI-powered agents and automation solutions using OpenAI, Claude, and modern AI tools to streamline workflows.',
  },
]
