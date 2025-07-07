import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center space-x-8 text-2xl">
          <a href="https://github.com/Kanaka-9" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-baliji-838000323/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="mailto:kanakavaishnavi9@gmail.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
        <a href="https://www.instagram.com/vaishnavibaliji/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram/>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sri Kanaka Vaishnavi. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
