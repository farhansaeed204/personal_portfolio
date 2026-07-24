import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import ProfileCard from '../components/ProfileCard'

const ABOUT_TEXT =
  "I'm a developer passionate about building AI-powered software and intelligent agents. With expertise in Python, TypeScript, and JavaScript, I create solutions that make work easier — like my inventory management system Stokly. I focus on using AI tools and technologies to build modern, efficient applications."

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 pt-20 pb-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        <FadeIn delay={0.1} y={40} className="lg:hidden">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <FadeIn delay={0} y={30} className="flex-shrink-0">
          <ProfileCard />
        </FadeIn>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <FadeIn delay={0.1} y={40} className="hidden lg:block">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed max-w-[560px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
