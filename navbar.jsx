import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow">
      <ul className="flex space-x-6 p-4 justify-center">
        <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
        <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
        <li><a href="#education" className="hover:text-indigo-400">Education</a></li>
        <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
