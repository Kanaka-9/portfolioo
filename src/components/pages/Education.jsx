// Education.jsx
import React from 'react'
import { motion } from 'framer-motion'

const educationList = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'VNRVJIET',
    duration: '2022 – 2026',
    description: 'Focusing on web development, UI/UX design, and software engineering principles.',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    duration: '2020 – 2022',
    description: 'Mathematics, Physics, and Chemistry with emphasis on problem solving and logical reasoning.',
  },
  {
    degree: 'CBSE',
    institution: 'Vikas The Concept School',
    duration: '2019 – 2020',
    description: 'Completed secondary education with strong academic foundation.',
  },
]

const Education = () => {
  return (
    <section id="education" className="space-y-16">
      <motion.h2
        className="text-3xl font-semibold text-black text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-12">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${index % 2 === 0 ? 'bg-white text-black' : 'bg-black text-white'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-sm font-medium mt-1">{edu.institution}</p>
            <p className="text-xs opacity-70">{edu.duration}</p>
            <p className="mt-3 text-sm">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education