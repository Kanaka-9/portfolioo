import React from 'react';
import { motion } from 'framer-motion';

const eduVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6 }
  })
};

function Education() {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      school: "VNRVJIET",
      year: "2022 - 2026",
      desc: "Focused on software development, python, and machine learning.",
    },
    {
      degree: "High School",
      school: "Narayana High School",
      year: "2020 - 2022",
      desc: "Studied Mathematics, Physics, Chemistry.",
    },
  ];

  return (
    <motion.div
      id="education"
      className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.h1
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-300 to-cyan-400 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        🎓 Education
      </motion.h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={eduVariants}
          >
            <h2 className="text-xl font-bold text-cyan-200">{edu.degree}</h2>
            <h3 className="text-md text-indigo-100">{edu.school}</h3>
            <p className="text-sm text-indigo-200 mb-0">{edu.year}</p>
            <p className="text-indigo-50">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
