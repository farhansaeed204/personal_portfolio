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
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
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
      <div className="overflow-hidden mt-20 sm:mt-28 md:mt-32">
        <FadeIn delay={0.15} y={0}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-normal sm:whitespace-nowrap w-full text-center text-[7vw] sm:text-[9vw] md:text-[9.5vw] lg:text-[10vw]">
            Hi, i&apos;m M. Farhan
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[44%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-10 w-[200px] sm:w-[350px] md:w-[420px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={100} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
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
      <div className="mt-auto flex items-start sm:items-end justify-between pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[120px] sm:max-w-[220px] md:max-w-[260px] font-light uppercase tracking-wide leading-snug"
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
