import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      className="relative flex flex-col items-center pt-14 sm:pt-16"
      animate={{ rotateZ: [-4, 4, -4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'top center' }}
    >
      {/* Rope line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px]"
        style={{
          height: '56px',
          background: 'repeating-linear-gradient(to bottom, rgba(215,226,234,0.3) 0, rgba(215,226,234,0.3) 4px, transparent 4px, transparent 8px)',
        }}
      />

      <div
        className="flex flex-col items-center gap-4 p-8 rounded-[30px] w-[260px] sm:w-[300px]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(215,226,234,0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-xl overflow-hidden border-2 border-[#D7E2EA]/30 flex-shrink-0">
          <img
            src="/farhan/farhan-id.jpg"
            alt="Muhammad Farhan"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <h3
            className="font-semibold uppercase tracking-wide"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
          >
            Muhammad Farhan
          </h3>
          <p
            className="font-light mt-1"
            style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)' }}
          >
            Software Developer & AI Engineer
          </p>
        </div>
      </div>
    </motion.div>
  )
}
