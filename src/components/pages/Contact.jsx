import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_cxoxvfa', 'template_f4osk9d', form.current, '1mstnJaxfyXyK3jGM')
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="pt-20 pb-10 bg-[#0D1B2A] text-white px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
          Contact Me
        </h2>
        <p className="mt-2 text-cyan-100 text-sm sm:text-base">
          I'd love to hear from you! Whether it's a project, opportunity, or just a hello.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#1E2A3A] p-8 rounded-2xl max-w-2xl mx-auto space-y-6 shadow-lg"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-2">
          <label className="block text-sm text-cyan-100">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-cyan-100">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-cyan-100">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full font-semibold py-3 rounded-lg transition ${
            isSending
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white hover:opacity-90'
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
  );
};

export default Contact;
