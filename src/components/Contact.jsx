import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Clock, ArrowRight, Sparkles, MessageSquare, Copy, Check, ExternalLink, ChevronUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'message') setCharCount(value.length);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('batra.akshat25@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 4000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 6000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'batra.akshat25@gmail.com',
      href: 'mailto:batra.akshat25@gmail.com',
      description: 'Best way to reach me',
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      copyable: true
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Jodd-cyber',
      href: 'https://github.com/Jodd-cyber',
      description: 'Check out my projects',
      iconColor: 'text-gray-300',
      bgColor: 'bg-slate-800/50',
      border: 'border-slate-700',
      external: true
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akshat-batra25',
      href: 'https://www.linkedin.com/in/akshat-batra25',
      description: "Let's connect professionally",
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      external: true
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi NCR, India',
      href: null,
      description: 'Open to remote',
      iconColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    }
  ];

  const inputClass = (field) => `w-full px-5 py-4 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 text-sm transition-all duration-300 outline-none backdrop-blur-sm ${
    focusedField === field
      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20'
      : 'border-slate-700 hover:border-slate-600'
  }`;

  return (
    <footer id="contact" className="relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Contact Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-slate-800 text-teal-400 text-sm font-medium backdrop-blur-sm mb-6"
            >
              <MessageSquare size={14} />
              Get In Touch
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
              Let's <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-teal-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Let's talk</h3>
                    <p className="text-gray-400 text-sm">I'm always open to new opportunities</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="group"
                    >
                      <div
                        className={`flex items-center gap-4 p-4 rounded-lg border ${info.border} ${info.bgColor} hover:border-slate-600 transition-all duration-300`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg ${info.bgColor} border ${info.border} flex items-center justify-center ${info.iconColor} group-hover:scale-110 transition-transform`}
                        >
                          <info.icon size={18} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-gray-500 text-xs font-medium mb-0.5">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.external ? '_blank' : undefined}
                              rel={info.external ? 'noopener noreferrer' : undefined}
                              className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors truncate block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-gray-300 truncate">{info.value}</p>
                          )}
                        </div>
                        {info.copyable && (
                          <motion.button
                            onClick={handleCopyEmail}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                              copiedEmail
                                ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                                : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30'
                            }`}
                          >
                            {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                          </motion.button>
                        )}
                        {info.external && (
                          <ExternalLink size={14} className="text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={14} className="text-cyan-400" />
                    <span className="text-sm font-semibold text-white">Availability</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Full-time', 'Freelance', 'Remote', 'Contract'].map((type) => (
                      <span
                        key={type}
                        className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-gray-400"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                    <span className="text-sm text-emerald-400 font-medium">Available for hire</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-teal-500/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Send size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Send a Message</h3>
                    <p className="text-gray-400 text-sm">Fill out the form below and I'll respond ASAP</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Name"
                        className={inputClass('name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Email"
                        className={inputClass('email')}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Message
                      </label>
                      <span
                        className={`text-xs ${
                          charCount > 400
                            ? 'text-yellow-400'
                            : charCount > 0
                            ? 'text-cyan-400'
                            : 'text-gray-500'
                        }`}
                      >
                        {charCount}/500
                      </span>
                    </div>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      rows="5"
                      maxLength={500}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      >
                        <CheckCircle size={18} />
                        <div>
                          <p className="font-semibold text-sm">Message sent successfully!</p>
                          <p className="text-xs text-emerald-400/70">I'll get back to you within 24 hours.</p>
                        </div>
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                      >
                        <AlertCircle size={18} />
                        <p className="font-semibold text-sm">Please fill in all fields before submitting.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="group relative w-full py-4 rounded-lg overflow-hidden text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow duration-300 disabled:opacity-70"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-600 to-teal-500 bg-[length:200%_100%] group-hover:bg-right transition-all duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-500/30">
                AB
              </div>
              <div>
                <p className="text-white font-bold text-base">Akshat Batra</p>
                <p className="text-gray-500 text-xs">Full Stack Developer & AI Enthusiast</p>
              </div>
            </div>

            {/* Nav */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: 'https://github.com/Jodd-cyber' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/akshat-batra25' },
                { icon: Mail, href: 'mailto:batra.akshat25@gmail.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-10 h-10"
                >
                  <span className="svgContainer">
                    <social.icon size={18} />
                  </span>
                  <span className="BG"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Akshat Batra</span>
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-xs">
                Built with <span className="text-red-500"></span> using React & Tailwind CSS
              </p>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ChevronUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;