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
    grade: 'Percentage:93.6%',
    logo: VikasLogo,
  },
  
];

const Education = () => {
  return (
    <section id="education" className="space-y-16 py-20 px-6 bg-[#0D1B2A] text-white">
      <motion.h2 
        className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-[#1E2A3A] shadow-md flex flex-col sm:flex-row sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={edu.logo}
              alt={`${edu.institution} logo`}
              className="w-16 h-16 object-contain rounded-md"
            />
            <div>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-sm font-medium mt-1 text-indigo-100">{edu.institution}</p>
              <p className="text-xs text-cyan-300">{edu.duration}</p>
              <p className="mt-2 text-sm text-slate-200">{edu.description}</p>
              <p className="mt-1 text-sm text-cyan-400 font-medium">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
