import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Code2, Terminal, Globe, ChevronDown, Sparkles, TrendingUp, Award, Clock, Download } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: 'Publicis Re:Sources',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2026 – Apr 2026',
      duration: '4 months',
      location: 'Remote / Delhi NCR',
      status: 'Upcoming',
      statusColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Worked on frontend development tasks using React, Angular, HTML, CSS, and JavaScript, with a focus on building responsive and user-friendly interfaces. Also gained exposure to backend API integration and full-stack development workflows.',
      extendedDescription: 'Contributed to web application development by creating and improving responsive UI components across React and Angular projects. Worked with HTML, CSS, and JavaScript to refine layouts for different screen sizes, while also learning how frontend interfaces connect with backend APIs in a real development environment.',
      color: 'from-cyan-500 to-blue-500',
      glowColor: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'border-cyan-500/20',
      accentColor: 'text-cyan-400',
      bgAccent: 'bg-cyan-500/10',
      dotColor: 'bg-cyan-400',
      icon: Globe,
      techStack: ['React', 'AngularJS', 'Express.js', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
      highlights: [
        { icon: Code2, text: 'Built responsive UI components' },
        { icon: Globe, text: 'Worked with React & Angular' },
        { icon: TrendingUp, text: 'Integrated frontend with APIs' }
      ]
    },
    {
      company: 'Vrinda Solutions',
      role: 'Python Intern',
      period: 'May 2025 – Jul 2025',
      duration: '3 months',
      location: 'Delhi NCR',
      status: 'Completed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Worked on Python-based development tasks involving basic automation, data handling, and backend logic. Gained hands-on experience with writing scripts, working with structured data, and understanding how Python is used in real-world workflows.',
      extendedDescription: 'During this internship, I worked with Python to create small automation scripts and practice data processing tasks. I also explored backend development concepts using Flask and learned how APIs, databases, and Python scripts can work together in application workflows.',
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.1)',
      borderColor: 'border-purple-500/20',
      accentColor: 'text-purple-400',
      bgAccent: 'bg-purple-500/10',
      dotColor: 'bg-purple-400',
      icon: Terminal,
      techStack: ['Python', 'Flask', 'Pandas', 'MySQL', 'REST APIs', 'Automation'],
      highlights: [
        { icon: Terminal, text: 'Created Python automation scripts' },
        { icon: TrendingUp, text: 'Worked with data handling' },
        { icon: Code2, text: 'Explored Flask & APIs' }
      ]
    },
    {
      company: 'Ecarter Technologies Pvt. Ltd.',
      role: 'Web Development Intern',
      period: 'Jun 2024 – Jul 2024',
      duration: '2 months',
      location: 'Delhi NCR',
      status: 'Completed',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      description: 'Worked on beginner-to-intermediate web development tasks using HTML, CSS, JavaScript, Bootstrap, jQuery, and SQL. Practiced building responsive page layouts, improving UI structure, and understanding how frontend pages connect with basic data workflows.',
      extendedDescription: 'During this experience, I focused on strengthening my frontend development skills by creating responsive web pages and improving layouts for different screen sizes. I worked with HTML, CSS, JavaScript, Bootstrap, and jQuery, while also gaining basic exposure to SQL and how data can support web applications.',
      color: 'from-emerald-500 to-teal-500',
      glowColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'border-emerald-500/20',
      accentColor: 'text-emerald-400',
      bgAccent: 'bg-emerald-500/10',
      dotColor: 'bg-emerald-400',
      icon: Code2,
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'SQL'],
      highlights: [
        { icon: Globe, text: 'Built responsive page layouts' },
        { icon: Briefcase, text: 'Practiced frontend development' },
        { icon: Award, text: 'Worked with HTML, CSS & JavaScript' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-slate-800 text-teal-400 text-sm backdrop-blur-sm mb-6"
          >
            <Sparkles size={14} />
            Professional Journey
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Work <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Roles and projects where I've built, learned, and grown</p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            {[
              { label: 'Experience', value: '1+ Years', icon: Clock, color: 'text-cyan-400' },
              { label: 'Companies', value: '3', icon: Briefcase, color: 'text-purple-400' },
              { label: 'Roles', value: '3', icon: Award, color: 'text-emerald-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-4 py-3 bg-white/[0.03] border border-slate-800/50 rounded-xl backdrop-blur-sm hover:border-teal-500/20 transition-all duration-300"
              >
                <stat.icon size={16} className={stat.color} />
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Cards */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-cyan-500 to-emerald-500 opacity-20 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  animate={{ scale: hoveredIndex === index ? 1.3 : 1 }}
                  className={`absolute left-4 md:left-5 top-8 w-4 h-4 rounded-full ${exp.dotColor} border-4 border-black z-10 hidden md:block transition-all duration-300`}
                >
                  {exp.status === 'Upcoming' && (
                    <span className="absolute inset-0 rounded-full animate-pulse bg-cyan-400" />
                  )}
                </motion.div>

                {/* Card */}
                <div
                  className={`relative group rounded-2xl bg-white/[0.03] backdrop-blur-sm border transition-all duration-500 overflow-hidden cursor-pointer ${
                    expandedIndex === index
                      ? `${exp.borderColor} border border-slate-800`
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                  style={{
                    boxShadow: hoveredIndex === index || expandedIndex === index ? `0 0 30px ${exp.glowColor}` : 'none'
                  }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Top Gradient Bar */}
                  <motion.div
                    animate={{ scaleX: hoveredIndex === index || expandedIndex === index ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} origin-left`}
                  />

                  {/* Left Accent Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color}`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-12 h-12 rounded-xl ${exp.bgAccent} border ${exp.borderColor} flex items-center justify-center ${exp.accentColor} shrink-0`}
                      >
                        <exp.icon size={24} />
                      </motion.div>

                      <div className="flex-grow">
                        {/* Header Row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.statusColor}`}>
                                {exp.status}
                              </span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-300 flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${exp.dotColor}`} />
                              {exp.company}
                            </h4>
                          </div>

                          {/* Date & Location */}
                          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                            <span className={`flex items-center gap-1.5 px-3 py-1 ${exp.bgAccent} border ${exp.borderColor} rounded-full text-xs font-medium ${exp.accentColor}`}>
                              <Calendar size={12} />
                              {exp.period}
                            </span>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                              <Clock size={12} />
                              {exp.duration}
                              <span className="mx-1">•</span>
                              <MapPin size={12} />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-sm mb-5">{exp.description}</p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {exp.highlights.map((highlight, hIdx) => (
                            <motion.div
                              key={hIdx}
                              whileHover={{ scale: 1.05 }}
                              className={`flex items-center gap-1.5 text-xs ${exp.accentColor} ${exp.bgAccent} border ${exp.borderColor} px-3 py-1.5 rounded-full font-medium`}
                            >
                              <highlight.icon size={12} />
                              {highlight.text}
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.techStack.map((tech, tIdx) => (
                            <motion.span
                              key={tIdx}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-xs font-mono text-gray-400 bg-slate-800/50 border border-slate-700 px-2.5 py-1 rounded-lg hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-800">
                      <span className={`text-xs ${exp.accentColor} font-medium`}>
                        {expandedIndex === index ? 'Show less' : 'Read more'}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        className={`w-8 h-8 rounded-lg ${exp.bgAccent} border ${exp.borderColor} flex items-center justify-center ${exp.accentColor}`}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`mx-6 md:mx-8 mb-6 md:mb-8 p-5 rounded-xl ${exp.bgAccent} border ${exp.borderColor}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={14} className={exp.accentColor} />
                            <h5 className={`text-sm font-bold ${exp.accentColor}`}>Detailed Overview</h5>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{exp.extendedDescription}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-slate-800/50 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-bold text-base">Looking for my full resume?</p>
              <p className="text-gray-400 text-sm">Download my CV for a complete overview</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="shadow-btn shrink-0"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;