import React from 'react'

function Footer() {
  return (
    <footer className="bg-indigo-700 py-5 text-center text-sm text-white">
      <p>© {new Date().getFullYear()} Kanaka's Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
