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
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900">Vaishnavi</h1>
        <nav className="space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-blue-600 transition">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
