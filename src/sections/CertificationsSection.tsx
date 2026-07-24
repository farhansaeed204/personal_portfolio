import { Award } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { CERTIFICATIONS } from '../data/certifications'

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative px-5 sm:px-8 md:px-10 pt-20 pb-0 sm:pt-24 sm:pb-0 md:pt-32 md:pb-0"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Certifications
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {CERTIFICATIONS.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.12} y={20}>
            <div
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-[24px]"
              style={{
                background: 'rgba(215,226,234,0.04)',
                border: '1px solid rgba(215,226,234,0.08)',
              }}
            >
              <div
                className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-xl flex-shrink-0 mt-1"
                style={{
                  background: 'rgba(215,226,234,0.06)',
                  border: '1px solid rgba(215,226,234,0.1)',
                }}
              >
                <Award size={24} strokeWidth={1.5} color="#D7E2EA" />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <h3
                  className="font-semibold uppercase tracking-wide"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
                >
                  {cert.name}
                </h3>
                <p
                  className="font-light"
                  style={{ color: '#D7E2EA', opacity: 0.55, fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)' }}
                >
                  {cert.organization}
                </p>
                <p
                  className="font-light text-sm"
                  style={{ color: '#D7E2EA', opacity: 0.4, fontSize: 'clamp(0.7rem, 1vw, 0.8rem)' }}
                >
                  {cert.duration}
                </p>
              </div>

              <span
                className="flex-shrink-0 text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full self-start sm:self-center sm:ml-auto"
                style={{
                  color: cert.status === 'completed' ? '#4ADE80' : '#FBBF24',
                  background:
                    cert.status === 'completed'
                      ? 'rgba(74,222,128,0.1)'
                      : 'rgba(251,191,36,0.1)',
                  border: `1px solid ${
                    cert.status === 'completed'
                      ? 'rgba(74,222,128,0.25)'
                      : 'rgba(251,191,36,0.25)'
                  }`,
                }}
              >
                {cert.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
