import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Vaishnavi</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/education" className="hover:text-blue-600">Education</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
