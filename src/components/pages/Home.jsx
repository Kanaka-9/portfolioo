import React from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function Home() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Hero Section */}
        <motion.section
          id="home"
          className="text-center pt-32 scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-400 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          >
            Hi, I'm Sri Kanaka Vaishnavi
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mt-6 max-w-2xl mx-auto text-indigo-100 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A frontend developer crafting beautiful web experiences with
            <span className="text-cyan-200 font-semibold"> React</span> &
            <span className="text-cyan-200 font-semibold"> Tailwind CSS</span>.
          </motion.p>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/20 scroll-mt-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h2
            className="text-3xl font-bold text-cyan-200 mb-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I'm currently pursuing a degree in Electronics and Communication at VNRVJIET, with a deep passion for UI/UX and web development.
            I enjoy building elegant, responsive interfaces using
            <span className="text-cyan-200 font-medium"> React</span> and
            <span className="text-cyan-200 font-medium"> Tailwind CSS</span>.
          </motion.p>
          <motion.p
            className="mt-4 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            I'm always learning, exploring new tech, and building side projects. I'm also passionate about open-source and crafting great user experiences.
          </motion.p>
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
