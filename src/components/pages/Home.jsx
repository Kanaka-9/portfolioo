  import React from 'react';
  import { Link } from 'react-router-dom';
  import Projects from './Projects';
  import Education from './Education';
  import Contact from './Contact';
  function Home() {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Hero Section */}
          <section className="text-center py-10">
            <h1 className="text-5xl font-bold text-indigo-700 mb-4">Hi, I'm Sri Kanaka Vaishnavi</h1>
            <p className="text-xl text-gray-800">
              A passionate Frontend Developer crafting modern web experiences with React & Tailwind CSS.
            </p>
          </section>

          {/* About Me Section */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm an Electronics student but have a deep interest in web development and UI/UX design.
              I specialize in building responsive and performant user interfaces using modern tools like
              <span className="text-indigo-500 font-medium"> React</span> and 
              <span className="text-indigo-500 font-medium"> Tailwind CSS</span>.
            </p>
            <p className="text-gray-700 mt-4">
              I'm always learning and experimenting with new technologies. Outside of coding, I enjoy reading,
              working on side projects, and contributing to open-source.
            </p>
          </section>
          <div>

            <section id="projects" className="pt-24 scroll-mt-24">
  <Projects />
</section>

          </div>
          <div>

            <section id='education'  className="pt-24 scroll-mt-24"><Education/></section>
          </div>
            <div>

            <section id='contact'  className="pt-24 scroll-mt-24"><Contact/></section>
          </div>
        </div>
      </div>
    );
  }

  export default Home;

