import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your preferred form backend here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-black text-white pt-24 pb-32 px-6 md:px-12 w-full font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left: Info */}
        <div data-aos="fade-right" className="flex-1">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8">
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-10">
            Whether it's a security assessment, a new web project, or a collaboration on open-source — I'm open to conversations.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#ff2a2a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white/70 text-sm font-medium">Kohima, Nagaland, India</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#ff2a2a] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/pangerlkr" target="_blank" rel="noopener noreferrer" className="text-white/70 text-sm font-medium hover:text-[#ff2a2a] transition-colors">
                github.com/pangerlkr
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 w-full">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4">
              <svg className="w-12 h-12 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-black text-white">Message sent!</h3>
              <p className="text-white/60">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                className="mt-4 text-sm text-[#ff2a2a] underline hover:text-red-400 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white/60 text-sm font-semibold uppercase tracking-widest">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white/60 text-sm font-semibold uppercase tracking-widest">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white/60 text-sm font-semibold uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-8 py-3 rounded-full bg-[#ff2a2a] text-white font-black text-sm tracking-wide hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-[0_8px_24px_rgba(255,42,42,0.4)] self-start"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
