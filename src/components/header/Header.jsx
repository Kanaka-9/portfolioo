import React, { useEffect, useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up or near top
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#0D1B2A] text-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <a href="#hero" className="text-xl font-sans font-semibold text-white hover:text-cyan-300 transition">
          <span className="text-cyan-400">Vaishnavi</span>
        </a>
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <a href="#hero" className="hover:text-cyan-300 border-b-2 border-transparent hover:border-cyan-400 pb-1 transition">Home</a>
          <a href="#projects" className="hover:text-cyan-300 border-b-2 border-transparent hover:border-cyan-400 pb-1 transition">Projects</a>
          <a href="#education" className="hover:text-cyan-300 border-b-2 border-transparent hover:border-cyan-400 pb-1 transition">Education</a>
          <a href="#contact" className="hover:text-cyan-300 border-b-2 border-transparent hover:border-cyan-400 pb-1 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
