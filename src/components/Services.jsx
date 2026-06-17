import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const services = [
    {
      number: '01',
      title: 'Penetration Testing',
      text: 'Full-scope offensive security assessments — web application pentests, network intrusion detection, and vulnerability scanning using industry-standard methodologies.',
      className: 'md:absolute md:top-[180px] md:right-[40px]',
      aosDelay: '100',
    },
    {
      number: '02',
      title: 'Full-Stack Development',
      text: 'End-to-end web application development with React, Node.js, Python, and Java — from architecture design to CI/CD deployment on Netlify, Render, and GitHub Pages.',
      className: 'md:absolute md:top-[420px] md:left-[220px]',
      aosDelay: '200',
    },
    {
      number: '03',
      title: 'Open-Source Tools',
      text: 'Building and maintaining open-source security tools, developer utilities, and Android applications — all publicly available on GitHub with full documentation.',
      className: 'md:absolute md:top-[680px] md:right-[60px]',
      aosDelay: '300',
    },
    {
      number: '04',
      title: 'Community & Events',
      text: 'Technical community management, Discord server moderation, tournament hosting (Mobile Legends), and facilitating developer events across Nagaland.',
      className: 'md:absolute md:top-[940px] md:left-[180px]',
      aosDelay: '400',
    },
  ];

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        
        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            What I do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Security, code, and community — all in one place
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            From ethical hacking engagements to full-stack builds and open-source contributions — here's how I work.
          </p>
        </div>

        {/* Desktop animated SVG line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" 
          viewBox="0 0 1000 1350" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
            fill="none" 
            stroke="#e5e7eb" 
            strokeWidth="2" 
            strokeDasharray="8 6"
          />
          <motion.path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
            fill="none" 
            stroke="#ff2a2a" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeDasharray="0 1"
            style={{ pathLength }}
          />
        </svg>

        {/* Mobile stacked cards */}
        <div className="md:hidden flex flex-col gap-8 mt-8">
          {services.map((s) => (
            <TagCard
              key={s.number}
              {...s}
              aosType="fade-up"
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Desktop positioned cards */}
        {services.map((s) => (
          <TagCard
            key={s.number + '-desktop'}
            {...s}
            aosType="fade-up"
            pathLength={pathLength}
            containerRef={containerRef}
          />
        ))}

      </div>
    </section>
  );
};

export default Services;
