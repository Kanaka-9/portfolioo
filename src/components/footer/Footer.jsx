import React from 'react';

function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-indigo-800 via-indigo-700 to-cyan-700/80
      backdrop-blur-md border-t border-white/10 py-6 text-center text-sm text-cyan-100 shadow-2xl">
      <p>
        © {new Date().getFullYear()} Kanaka's Portfolio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
