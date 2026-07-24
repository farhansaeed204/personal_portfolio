import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { SKILLS } from '../data/skills'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-7">
        {SKILLS.map((skill, i) => {
          const Icon = skill.icon
          return (
            <FadeIn key={skill.name} delay={i * 0.08} y={20}>
              <div className="flex items-center gap-4 sm:gap-5">
                <div
                  className="flex items-center justify-center w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-xl flex-shrink-0"
                  style={{
                    background: 'rgba(215,226,234,0.06)',
                    border: '1px solid rgba(215,226,234,0.1)',
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} color="#D7E2EA" />
                </div>

                <span
                  className="font-medium uppercase tracking-wide flex-shrink-0 w-[100px] sm:w-[140px] md:w-[170px]"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
                >
                  {skill.name}
                </span>

                <div
                  className="flex-1 h-[10px] sm:h-[12px] rounded-full"
                  style={{ background: 'rgba(215,226,234,0.1)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #B600A8, #7621B0, #BE4C00)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                  />
                </div>

                <span
                  className="font-semibold tabular-nums flex-shrink-0 w-[38px] text-right"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
                >
                  {skill.percentage}%
                </span>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
