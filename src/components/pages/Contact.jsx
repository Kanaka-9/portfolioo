import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Contact = () => {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_cxoxvfa',
        'template_f4osk9d',
        form.current,
        '1mstnJaxfyXyK3jGM'
      )
      .then(
        (result) => {
          console.log(result.text)
          setMessageSent(true)
          setIsSending(false)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
          setIsSending(false)
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <section id="contact" className="space-y-12 py-12">
      <motion.h2
        className="text-3xl font-semibold text-black text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-black text-white p-8 rounded-2xl max-w-2xl mx-auto space-y-6 shadow-lg"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full font-semibold py-3 rounded-lg transition ${
            isSending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {messageSent && (
          <p className="text-green-400 text-sm text-center pt-2">
            Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  )
}

export default Contact
