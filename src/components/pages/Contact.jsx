import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cxoxvfa',     // from EmailJS dashboard
        'template_f4osk9d',    // from EmailJS dashboard
        form.current,
        '1mstnJaxfyXyK3jGM'      // from EmailJS dashboard
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
    <div className="bg-gray-50 px-6 pt-6 pb-10 scroll-mt-24" id="contact">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">📞 Contact Me</h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div> 
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
