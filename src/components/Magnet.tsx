import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  className?: string
}

export default function Magnet({ children, className }: MagnetProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
