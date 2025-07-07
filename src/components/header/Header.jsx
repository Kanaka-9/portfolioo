import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-black">Vaishnavi</h1>
        <nav className="space-x-6 hidden sm:block">
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#projects" className="text-gray-700 hover:text-black">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-black">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
