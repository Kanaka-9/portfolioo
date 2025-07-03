import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.email.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
      alert('Please enter a valid .com email address');
      return;
    }

    emailjs
      .sendForm(
        'service_cxoxvfa',
        'template_f4osk9d',
        form.current,
        '1mstnJaxfyXyK3jGM'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.h1
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-300 to-cyan-400 text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        📞 Contact Me
      </motion.h1>
      <motion.div
        className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-cyan-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-white/20 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-cyan-200">Email (.com only)</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-white/20 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label className="block text-sm font-medium text-cyan-200">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 px-4 py-2 border border-white/20 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-white px-6 py-2 rounded-md hover:from-cyan-400 hover:to-indigo-400 transition font-semibold shadow-lg"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
