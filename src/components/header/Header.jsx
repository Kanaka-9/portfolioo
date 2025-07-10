import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#0D1B2A] text-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-sans font-semibold text-white hover:text-cyan-300 transition"
          onClick={closeMenu}
        >
          <span className="text-cyan-400">Vaishnavi</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-sm sm:text-base font-medium">
          <a href="#hero" className="hover:text-cyan-300 pb-1 border-b-2 border-transparent hover:border-cyan-400 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-300 pb-1 border-b-2 border-transparent hover:border-cyan-400 transition">Projects</a>
          <a href="#education" className="hover:text-cyan-300 pb-1 border-b-2 border-transparent hover:border-cyan-400 transition">Education</a>
          <a href="#contact" className="hover:text-cyan-300 pb-1 border-b-2 border-transparent hover:border-cyan-400 transition">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A] px-6 py-4 space-y-4 text-center">
          <a href="#hero" onClick={closeMenu} className="block text-white hover:text-cyan-300 transition">Home</a>
          <a href="#projects" onClick={closeMenu} className="block text-white hover:text-cyan-300 transition">Projects</a>
          <a href="#education" onClick={closeMenu} className="block text-white hover:text-cyan-300 transition">Education</a>
          <a href="#contact" onClick={closeMenu} className="block text-white hover:text-cyan-300 transition">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
