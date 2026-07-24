import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Skills', 'Certifications', 'Services', 'Projects']

const PORTRAIT_URL = '/farhan/farhan-portrait.png'

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (link: string) => {
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen sm:h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          <span className="md:hidden text-sm font-bold uppercase tracking-wider" style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            MF
          </span>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="hidden md:block text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </button>
          ))}

          <button
            className="md:hidden ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: '#D7E2EA' }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="absolute top-full right-6 mt-2 w-[220px] flex flex-col gap-1 p-4 rounded-[20px] z-50"
            style={{
              background: 'rgba(12,12,12,0.95)',
              border: '1px solid rgba(215,226,234,0.1)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="w-full text-left px-4 py-3 text-sm font-medium uppercase tracking-wider rounded-xl transition-opacity duration-200 hover:opacity-70"
                style={{ color: '#D7E2EA' }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden mt-8 sm:mt-28 md:mt-32">
        <FadeIn delay={0.15} y={0}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[9vw] md:text-[9.5vw] lg:text-[10vw]">
            Hi, i&apos;m M. Farhan
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="relative sm:absolute mx-auto sm:mx-0 sm:left-1/2 sm:-translate-x-1/2 z-10 sm:bottom-10 w-[280px] sm:w-[350px] md:w-[420px] mt-4 sm:mt-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet>
            <img
              src={PORTRAIT_URL}
              alt="Muhammad Farhan, portfolio portrait"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mt-4 sm:mt-auto pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 gap-3 sm:gap-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[200px] sm:max-w-[220px] md:max-w-[260px] text-center sm:text-left font-light uppercase tracking-wide leading-snug"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.6rem, 1.4vw, 1.5rem)' }}
          >
            a developer building AI-powered solutions and modern web applications
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  )
}
