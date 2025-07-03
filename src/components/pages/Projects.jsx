import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" }
  })
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05 + 0.2, duration: 0.4 }
  })
};

function Projects() {
  const projects = [
    {
      title: 'Web Scraping',
      description:
        'A Python-based scraper that collects data about different medical colleges in India and visualizes the data.',
      tech: ['Python', 'Matplotlib', 'Pandas'],
      link: 'https://github.com/yourusername/web-scraper-ecommerce',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio built using React and Tailwind CSS showcasing projects, skills, and contact details.',
      tech: ['React', 'Vite', 'Tailwind CSS'],
      link: 'https://github.com/yourusername/portfolio-site',
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Python',
    'Vite',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-300 to-cyan-400 mb-10 text-center drop-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-cyan-200">{project.title}</h3>
            <p className="mt-2 text-indigo-100">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="bg-cyan-700/20 text-cyan-200 px-2 py-1 rounded text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-200 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-300 to-cyan-400 mt-16 mb-8 text-center drop-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="bg-cyan-700/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium shadow"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={skillVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
