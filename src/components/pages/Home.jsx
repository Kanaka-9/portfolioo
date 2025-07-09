// src/pages/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Contact from '../pages/Contact';
import MyPhoto from '../../assets/mee.png';
import { ShootingStars } from '../shootingstar';
import { StarsBackground } from '../starsbg';
import { TracingBeam } from '../tracingbeam';

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <TracingBeam>
      <div className="relative bg-[#0D1B2A] text-white min-h-screen overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <StarsBackground className="absolute inset-0" />
          <ShootingStars className="absolute inset-0" />
        </div>

        {/* Foreground Content */}
        <main className="relative z-10 max-w-6xl mx-auto pt-20 px-6 space-y-24 pb-0">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-center md:text-left">
              <motion.h1
                className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(34,211,238,0.5)]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I’m Sri Kanaka Vaishnavi
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-indigo-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A frontend developer crafting elegant & responsive experiences
              </motion.p>
            </div>

            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src={MyPhoto}
                alt="Sri Kanaka Vaishnavi"
                className="w-64 h-64 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
              />
            </motion.div>
          </motion.section>

          {/* About Me */}
          <section
            id="about"
            className="bg-[#1E2A3A] p-8 rounded-2xl space-y-6 shadow-md"
          >
            <motion.h2
              className="text-3xl font-semibold text-cyan-200"
              initial="hidden"
              whileInView="visible"
              variants={fade}
            >
              About Me
            </motion.h2>
            <motion.p
              className="leading-relaxed text-white"
              initial="hidden"
              whileInView="visible"
              variants={fade}
              transition={{ delay: 0.2 }}
            >
              I’m a passionate frontend developer currently pursuing my B.Tech in Electronics and Communication Engineering. 
              With a strong interest in design and usability, I specialize in building modern, responsive user interfaces using 
              <span className="text-cyan-300 font-semibold"> React.js</span> and <span className="text-cyan-300 font-semibold">Tailwind CSS</span>. 
              <br /><br />
              I'm experienced in tools like <span className="text-cyan-300 font-semibold">Framer Motion</span>, 
              <span className="text-cyan-300 font-semibold"> Git/GitHub</span>, and have dabbled in 
              <span className="text-cyan-300 font-semibold"> Python</span> for automation and scripting. 
              I love turning creative ideas into practical applications and continuously push myself to learn new technologies and best practices.
              When I’m not coding, I enjoy exploring UI/UX trends, contributing to open-source projects, and developing side projects to experiment with new frameworks. 
              I'm currently seeking opportunities where I can grow as a developer and work on impactful, user-focused projects.
            </motion.p>
          </section>

          {/* Resume Button */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={fade}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/resume%20(2).pdf"
              download
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Projects */}
          <Projects />

          {/* Education */}
          <Education />

          {/* Contact */}
          <Contact />
        </main>
      </div>
    </TracingBeam>
  );
};

export default Home;
