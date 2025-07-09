import React from 'react';
import { motion } from 'framer-motion';
import VNRLogo from '../../assets/vnrlogo.png';
import NarayanaLogo from '../../assets/naralogo.png';
import VikasLogo from '../../assets/vikaslogo.png';

const educationList = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'VNRVJIET',
    duration: '2022 – 2026',
    description: 'Focusing on web development, UI/UX design, and software engineering principles.',
    grade: 'CGPA: 7.9',
    logo: VNRLogo,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    duration: '2020 – 2022',
    description: 'Mathematics, Physics, and Chemistry with emphasis on problem solving and logical reasoning.',
    grade: 'Percentage: 98.1%',
    logo: NarayanaLogo,
  },
  {
    degree: 'CBSE (Class 10)',
    institution: 'Vikas The Concept School',
    duration: '2019 – 2020',
    description: 'Completed secondary education with strong academic foundation.',
    grade: 'Percentage: 93.6%',
    logo: VikasLogo,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[#0D1B2A] text-white">
      <motion.h2
        className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-cyan-500 to-pink-500 p-[2px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative bg-[#1E2A3A] rounded-xl p-6 flex flex-col items-center h-full text-center">
              <img src={edu.logo} alt={edu.institution} className="w-16 h-16 object-contain rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm text-indigo-100">{edu.institution}</p>
              <p className="text-xs text-cyan-300 mb-2">{edu.duration}</p>
              <p className="text-sm text-slate-200 mb-1">{edu.description}</p>
              <p className="text-sm font-medium text-cyan-400">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
