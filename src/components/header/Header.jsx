import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <a href="#projects" className="hover:text-gray-200 transition">Projects</a>
          <a href="#education" className="hover:text-gray-200 transition">Education</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
