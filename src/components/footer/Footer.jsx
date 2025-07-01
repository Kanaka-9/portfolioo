import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-100 mt-10 py-5 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Kanaka's Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
