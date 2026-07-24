import LiveProjectButton from '../components/LiveProjectButton'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <div
        style={{
          background: '#0C0C0C',
          border: '2px solid #D7E2EA',
        }}
        className="h-full w-full rounded-[24px] sm:rounded-[50px] md:rounded-[60px] p-3 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2.5rem, 8vw, 100px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="uppercase tracking-widest text-xs sm:text-sm font-medium"
                style={{ color: '#D7E2EA', opacity: 0.6 }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase"
                style={{ color: '#D7E2EA', fontSize: 'clamp(1.1rem, 2.6vw, 2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton />
            </a>
          )}
        </div>

        {/* Bottom row - image grid */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="flex flex-row md:flex-col gap-3 sm:gap-4 md:w-[40%]">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-1/2 md:w-full object-cover rounded-[20px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(80px, 20vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-1/2 md:w-full object-cover rounded-[20px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(100px, 28vw, 340px)' }}
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-h-0 md:flex-none md:w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
