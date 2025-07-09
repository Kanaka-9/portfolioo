import React from 'react';
import { motion } from 'framer-motion';
import { PinContainer } from '../pincontainer';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio showcasing projects, skills, and contact information using React and Tailwind CSS.',
    image:
      'https://cdn.freebiesupply.com/logos/large/2x/portfolio-logo-black-and-white.png',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Web Scraping Tool',
    description:
      'Python-based web scraper that collects and processes data from public web pages using BeautifulSoup.',
    image:
      'https://c8.alamy.com/comp/2H2TM4F/web-scraping-text-written-on-programming-code-abstract-technology-background-of-software-developer-and-computer-script-web-scraping-concept-of-code-o-2H2TM4F.jpg',
    link: 'https://github.com/yourusername/web-scraper',
  },
];

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-400 text-xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-xl" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300 text-xl" /> },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0D1B2A] text-white space-y-16"
    >
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            <PinContainer
              title={project.title}
              href={project.link}
              containerClassName="w-full h-[22rem]"
              className="w-full h-full flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md border border-white/10 mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-[#CBD5E1]">{project.description}</p>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      {/* Skills Section with Icons */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#1E2A3A] text-white border border-white/10 hover:bg-[#2C3E50] transition duration-300"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
