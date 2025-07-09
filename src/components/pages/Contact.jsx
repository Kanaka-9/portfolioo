import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
    <section id="contact" className="pt-10 pb-10 bg-[#0D1B2A] text-white px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#06B6D4]">
          Contact Me
        </h2>
        <p className="mt-2 text-cyan-100 text-sm sm:text-base">
          I'd love to hear from you! Whether it's a project, opportunity, or just a hello.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 bg-[#1E2A3A] p-8 rounded-2xl shadow-lg space-y-6 border border-cyan-400"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>

          <div className="space-y-2">
            <label className="text-sm text-cyan-100">Your Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-cyan-100">Your Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-cyan-100">Your Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-[#2D3A4A] text-white outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full font-semibold py-3 rounded-lg transition text-white ${
              isSending
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#06B6D4] hover:bg-[#0891b2]'
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

        {/* Right: Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex flex-col justify-between h-full"
        >
          <div className="bg-[#1E2A3A] rounded-2xl p-8 shadow-lg border border-cyan-400 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-cyan-100 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lg mt-1" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-lg mt-1" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+91-8988034999</p>
                </div>
              </div>
              <div className="flex items-start gap-3">

              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
