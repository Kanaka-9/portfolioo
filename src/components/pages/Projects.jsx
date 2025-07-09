import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPython,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
} from 'react-icons/si';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio showcasing projects, skills, and contact information using React and Tailwind CSS.',
    image: 'https://cdn.freebiesupply.com/logos/large/2x/portfolio-logo-black-and-white.png',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Web Scraping Tool',
    description:
      'Python-based web scraper that collects and processes data from public web pages using BeautifulSoup.',
    image: 'https://c8.alamy.com/comp/2H2TM4F/web-scraping-text-written-on-programming-code-abstract-technology-background-of-software-developer-and-computer-script-web-scraping-concept-of-code-o-2H2TM4F.jpg',
    link: 'https://github.com/yourusername/web-scraper',
  },
];

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500 text-xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-xl" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-400 text-xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-xl" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300 text-xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-xl" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400 text-xl" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500 text-xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400 text-xl" /> },
];

const Projects = () => {
  return (
    <section
    id="projects"
    className="py-20 px-6 bg-[#0D1B2A] text-white space-y-10"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-105"
          >
            <div className="w-full h-[22rem] bg-[#1E2A3A] rounded-xl p-4 border border-cyan-400/50 flex flex-col hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md border border-cyan-400/50 mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-[#CBD5E1]">{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto text-center mt-16">
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
      </div>
    </section>
  );
};

export default Projects;
