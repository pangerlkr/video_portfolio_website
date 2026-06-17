import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <a
          href="#"
          className="text-white font-black text-sm tracking-widest uppercase hover:text-[#ff2a2a] transition-colors"
          aria-label="Pangerkumzuk Longkumer — home"
        >
          Pangerlkr
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/70 text-sm font-semibold hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/pangerlkr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs font-bold hover:border-[#ff2a2a] hover:text-white transition-all duration-300"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-5" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/70 text-base font-semibold hover:text-white transition-colors block uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/pangerlkr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm font-bold hover:border-[#ff2a2a] hover:text-white transition-all duration-300"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
