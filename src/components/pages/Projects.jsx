import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Web Scraping',
      description:
        'A Python-based scraper that collects data about different medical colleges present in India and plots the data.',
      tech: ['Python', 'Matplotlib', 'Pandas'],
      link: 'https://github.com/yourusername/web-scraper-ecommerce',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio built using React and Tailwind CSS showcasing projects, skills, and contact details..',
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
      {/* Projects Section */}
      <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 text-white rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-700/10 text-indigo-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-400 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="text-4xl font-bold text-indigo-400 mt-16 mb-6 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-indigo-700/10 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
