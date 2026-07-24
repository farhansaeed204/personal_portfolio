import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative px-5 sm:px-8 md:px-10 py-10 sm:py-12"
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215,226,234,0.06)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className="text-xs font-light text-center md:text-left"
          style={{ color: '#D7E2EA', opacity: 0.45 }}
        >
          &copy; {year} Muhammad Farhan. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=m.farhan25555@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            style={{ color: '#D7E2EA', opacity: 0.5 }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-farhan-56a855296"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#D7E2EA', opacity: 0.5 }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/farhansaeed204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: '#D7E2EA', opacity: 0.5 }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
