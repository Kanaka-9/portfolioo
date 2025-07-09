import React from 'react';
import { motion } from 'framer-motion';
import VNRLogo from '../../assets/vnrlogo.png';
import NarayanaLogo from '../../assets/naralogo.png';
import VikasLogo from '../../assets/vikaslogo.png';

const educationList = [
  {
    institution: 'VNRVJIET',
    degree: 'B.Tech in Electronics and Communication Engineering',
    duration: '2022 – 2026',
    description:
      'Focusing on web development, UI/UX design, and software engineering principles.',
    grade: 'CGPA: 7.9',
    logo: VNRLogo,
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate (MPC)',
    duration: '2020 – 2022',
    description:
      'Mathematics, Physics, and Chemistry with emphasis on problem solving and logical reasoning.',
    grade: 'Percentage: 98.1%',
    logo: NarayanaLogo,
  },
  {
    institution: 'Vikas The Concept School',
    degree: 'CBSE (Class 10)',
    duration: '2019 – 2020',
    description:
      'Completed secondary education with strong academic foundation.',
    grade: 'Percentage: 93.6%',
    logo: VikasLogo,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id="education" className="pt-20 pb-10 px-6 bg-[#0D1B2A] text-white">
      <motion.h2
        className="text-3xl font-semibold text-center text-cyan-400 mb-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[#1E2A3A] border border-cyan-400 rounded-lg p-6 shadow-md flex flex-col sm:flex-row items-center gap-6
                       transition-all duration-300 ease-in-out 
                       hover:scale-[1.02] hover:border-cyan-500 
                       hover:shadow-lg hover:shadow-cyan-500/30 
                       hover:bg-[#223b53]"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            {/* Institution Logo */}
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            {/* Education Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {edu.institution}
              </h3>
              <p className="text-sm text-cyan-300 mb-1">{edu.degree}</p>
              <p className="text-xs text-gray-400 mb-2">{edu.duration}</p>
              <p className="text-sm text-slate-200 mb-2">
                <span className="font-semibold text-gray-300">Grade:</span> {edu.grade}
              </p>
              <p className="text-sm text-slate-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
