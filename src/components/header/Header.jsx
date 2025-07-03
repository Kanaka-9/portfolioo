import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) setShowHeader(true);
      else if (currentScrollY > lastScrollY.current) setShowHeader(false);
      else setShowHeader(true);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-800 via-indigo-700 to-cyan-700/80
                     backdrop-blur-md shadow-xl border-b border-white/10"
          style={{ WebkitBackdropFilter: 'blur(12px)' }}
        >
          <div className="w-full px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight text-cyan-200 drop-shadow">
              Kanaka's Portfolio
            </div>
            <nav aria-label="Main navigation">
              <ul className="flex space-x-8 text-lg font-medium">
                {['home', 'projects', 'education', 'contact'].map((section, i) => (
                  <motion.li
                    key={section}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4, type: 'spring' }}
                  >
                    <a
                      href={`#${section}`}
                      className="relative px-2 py-1 hover:text-cyan-200 focus:text-cyan-200 transition-colors duration-200
                        after:content-[''] after:block after:h-0.5 after:bg-cyan-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Header;
