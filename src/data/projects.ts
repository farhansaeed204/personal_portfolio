export interface Project {
  number: string
  name: string
  category: string
  liveUrl?: string
  col1Image1: string
  col1Image2: string
  col2Image: string
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Flappy Bird',
    category: 'Personal',
    liveUrl: 'https://flappy-bird-play.vercel.app/',
    col1Image1: '/flappy-bird/1.png',
    col1Image2: '/flappy-bird/2.png',
    col2Image: '/flappy-bird/3.png',
  },
  {
    number: '02',
    name: 'Stokly',
    category: 'Client',
    liveUrl: 'https://www.mediafire.com/file/6mv5ozv2w7ctquy/Stokly+Inventory+System.apk/file',
    col1Image1: '/stokly/1.png',
    col1Image2: '/stokly/2.png',
    col2Image: '/stokly/3.png',
  },
]
