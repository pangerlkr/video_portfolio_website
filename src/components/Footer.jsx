import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white py-10 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-black tracking-widest uppercase text-white">
            Pangerkumzuk Longkumer
          </span>
          <span className="text-white/40 text-xs">Cybersecurity · Full-Stack · Open Source</span>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-white/50 uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Work</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li>
              <a href="https://github.com/pangerlkr" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2a2a] transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-white/30 text-xs text-center md:text-right">
          &copy; {currentYear} Pangerkumzuk Longkumer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
