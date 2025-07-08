import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0D1B2A] text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center space-x-8 text-2xl text-cyan-300">
          <a
            href="https://github.com/Kanaka-9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-baliji-838000323/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kanakavaishnavi9@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/vaishnavibaliji/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
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
