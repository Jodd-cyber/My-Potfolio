import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Sparkles, X, FileText, ArrowDown, Code2, Brain, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    { text: 'Full Stack Developer', icon: Code2 },
    { text: 'AI Enthusiast', icon: Brain },
    { text: 'Problem Solver', icon: Zap }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Jodd-cyber', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/akshat-batra25', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@akshatbatra.com', label: 'Email' }
  ];

  const stats = [
    { value: '1+', label: 'Year Learning' },
    { value: '3', label: 'Featured Projects' },
    { value: '15+', label: 'Tech Skills' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Letter stagger animation for the name
  const nameLetters = 'Akshat Batra'.split('');

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 relative overflow-hidden bg-transparent">

      {/* Centered Layout */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

        {/* Profile Image - Small circular at top */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="relative mb-8"
        >
          <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse rounded-full" />
              )}
              <img
                src="/Photo.jpeg"
                alt="Akshat Batra"
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
          {/* Available dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center"
          >
            <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/60 border border-teal-500/20 text-teal-400 text-sm backdrop-blur-md mb-10"
        >
          <Sparkles size={14} />
          <span className="font-medium">Open to opportunities</span>
        </motion.div>

        {/* Giant Name with letter stagger */}
        <motion.div className="mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base md:text-lg tracking-widest uppercase mb-4 font-mono"
          >
            Hello, I'm
          </motion.p>
          <h1 className="flex flex-wrap justify-center">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 100 }}
                className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight ${
                  letter === ' ' ? 'w-3 sm:w-4 md:w-8' : 'text-white hover:text-teal-400 transition-colors duration-300 cursor-default'
                }`}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Animated Role Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-14 flex items-center justify-center mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {React.createElement(roles[currentRole].icon, { size: 24, className: 'text-teal-400' })}
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                {roles[currentRole].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* One-liner Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
        >
          I create web applications that combine <span className="text-teal-400 font-semibold">thoughtful design</span>, <span className="text-cyan-300 font-semibold">reliable code</span>, and <span className="text-emerald-400 font-semibold">practical AI features</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="shadow-btn"
          >
            <FileText size={18} />
            View CV
          </button>
        </motion.div>

        {/* Stats + Socials Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="w-full max-w-3xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-slate-800/50 backdrop-blur-sm">
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-slate-800" />
            <div className="w-full h-px bg-slate-800 md:hidden" />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="social-btn w-10 h-10 md:w-12 md:h-12"
                  aria-label={social.label}
                >
                  <span className="svgContainer">
                    <social.icon size={18} />
                  </span>
                  <span className="BG"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-gray-600 text-xs uppercase tracking-[0.2em] group-hover:text-teal-400 transition-colors">Scroll</span>
          <ArrowDown size={16} className="text-gray-600 group-hover:text-teal-400 transition-colors" />
        </motion.div>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#0d0a07] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText size={18} className="text-teal-400" />
                  My Resume
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download
                    className="shadow-btn"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full bg-black/50 p-4">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full rounded-lg border border-slate-800"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;