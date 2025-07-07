import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export const PinContainer = ({ children, title, href }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateStyle = {
    transform: useMotionTemplate`rotateX(${y}deg) rotateY(${x}deg)`
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-1 shadow-xl hover:shadow-2xl"
      style={rotateStyle}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const xVal = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const yVal = ((e.clientY - rect.top) / rect.height - 0.5) * -20
        x.set(xVal)
        y.set(yVal)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <div className="rounded-lg bg-black p-4 h-full">{children}</div>
    </motion.a>
  )
}
