import React from 'react'
import { motion } from 'framer-motion'
import { PinContainer } from '../pincontainer' // adjust the path if needed

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and contact information using React and Tailwind CSS.',
    image: 'https://cdn.freebiesupply.com/logos/large/2x/portfolio-logo-black-and-white.png',
    link: 'https://your-portfolio-link.com'
  },
  {
    title: 'Web Scraping Tool',
    description: 'Python-based web scraper that collects and processes data from public web pages using BeautifulSoup.',
    image: 'https://c8.alamy.com/comp/2H2TM4F/web-scraping-text-written-on-programming-code-abstract-technology-background-of-software-developer-and-computer-script-web-scraping-concept-of-code-o-2H2TM4F.jpg',
    link: 'https://github.com/yourusername/web-scraper'
  }
]

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS',
  'Framer Motion', 'Git', 'Figma', 'Responsive Design'
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Projects = () => {
  return (
    <section id="projects" className="space-y-16 py-20 bg-white text-black px-6">
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid with 3D Effect */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
            className="flex justify-center"
          >
            <PinContainer title={project.title} href={project.link}>
              <div className="flex flex-col items-start gap-3 w-72 h-60 text-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-white/70 line-clamp-3">{project.description}</p>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects