import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('about'); // Default section

  return (
    <div className="bg-white text-black min-h-screen">


      {/* Main content */}
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-24">
        <motion.section
          className="text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fade}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I’m Sri Kanaka Vaishnavi
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            A frontend developer crafting elegant & responsive experiences
          </motion.p>
        </motion.section>

        {/* Conditional Sections */}
        {activeSection === 'about' && (
          <section id="about">
            <motion.h2
              className="text-3xl font-semibold text-black mb-6"
              initial="hidden"
              whileInView="visible"
              variants={fade}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-700 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              variants={fade}
              transition={{ delay: 0.2 }}
            >
              I'm currently pursuing my B.Tech in Computer Science at XYZ University, where I focus on web development
              and UI/UX design. I enjoy building elegant, responsive interfaces using React and Tailwind CSS.
              I'm always learning, exploring new tech, and building side projects.
              I'm also passionate about open-source and crafting great user experiences.
            </motion.p>
          </section>
        )}

        {activeSection === 'projects' && <Projects />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'contact' && <Contact />}
        

      </main>
    </div>
  );
};

export default Home;
