'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollLine() {
  const { scrollYProgress } = useScroll()

  // Map scroll progress to line height
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-transparent z-0">
      <motion.div
        style={{ height }}
        className="w-full bg-blue-500 origin-top"
      />
    </div>
  )
}
