import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div id="contact" className="bg-slate-800 text-white rounded-2xl shadow-lg p-8 sm:p-10 border border-slate-700">
      <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">📞 Contact Me</h1>

      <div className="max-w-2xl mx-auto bg-slate-700 p-6 rounded-xl shadow-md border border-slate-600">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-indigo-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border border-slate-500 bg-slate-800 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-slate-500 bg-slate-800 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-indigo-200">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-1 px-4 py-2 border border-slate-500 bg-slate-800 text-white rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
