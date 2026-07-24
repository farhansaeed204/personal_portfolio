import { useRef, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const FORM_URL = 'https://formsubmit.co/m.farhan25555@gmail.com'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    fetch(FORM_URL, { method: 'POST', body: formData })
      .then(() => {
        form.reset()
        alert('Message sent successfully!')
      })
      .catch(() => alert('Something went wrong. Please try again.'))
  }

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-20 pb-0 sm:pt-24 sm:pb-0 md:pt-32 md:pb-0"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-10 sm:mb-16 md:mb-20 leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20} className="max-w-lg mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-4 rounded-[14px] text-sm font-light outline-none transition-opacity duration-200 focus:opacity-90"
            style={{
              background: 'rgba(215,226,234,0.04)',
              border: '1px solid rgba(215,226,234,0.1)',
              color: '#D7E2EA',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-4 rounded-[14px] text-sm font-light outline-none transition-opacity duration-200 focus:opacity-90"
            style={{
              background: 'rgba(215,226,234,0.04)',
              border: '1px solid rgba(215,226,234,0.1)',
              color: '#D7E2EA',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-5 py-4 rounded-[14px] text-sm font-light outline-none resize-none transition-opacity duration-200 focus:opacity-90"
            style={{
              background: 'rgba(215,226,234,0.04)',
              border: '1px solid rgba(215,226,234,0.1)',
              color: '#D7E2EA',
            }}
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-[14px] text-sm font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-90"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              color: '#FFFFFF',
            }}
          >
            <Send size={16} strokeWidth={1.5} />
            Send Message
          </button>
        </form>
      </FadeIn>
    </section>
  )
}
