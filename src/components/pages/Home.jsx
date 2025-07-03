import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Hero Section */}
        <motion.section 
          className="text-center pt-24"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-400">
            Hi, I'm Sri Kanaka Vaishnavi
          </h1>
          <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
            A frontend developer crafting beautiful web experiences with 
            <span className="text-indigo-300 font-semibold"> React</span> & 
            <span className="text-indigo-300 font-semibold"> Tailwind CSS</span>.
          </p>
        </motion.section>

        {/* About Me Section */}
        <motion.section 
          className="bg-slate-800 text-white rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I'm currently pursuing a degree in Electronics and Communication at VNRVJIET, with a deep passion for UI/UX and web development.
            I enjoy building elegant, responsive interfaces using 
            <span className="text-indigo-300 font-medium"> React</span> and 
            <span className="text-indigo-300 font-medium"> Tailwind CSS</span>.
          </p>
          <p className="mt-4">
            I'm always learning, exploring new tech, and building side projects. I'm also passionate about open-source and crafting great user experiences.
          </p>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 pt-4">
          <Projects />
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24 pt-4">
          <Education />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 pt-4">
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default Home;
