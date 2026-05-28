import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ChevronRight, Star, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'BiteTrack',
      subtitle: 'MERN-Stack Food Expense & Analytics',
      description: 'Full-stack tracking app with secure JWT & OAuth auth, interactive analytics dashboard for real-time expense visualization.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Chart.js'],
      github: 'https://github.com/Jodd-cyber/bitetrack-frontend',
      live: 'https://bitetrack-frontenddd.vercel.app/',
      gradient: 'from-emerald-500 to-teal-500',
      glowFrom: '#10b981',
      glowTo: '#14b8a6',
      image: '/bitetrack_preview.png',
      status: 'Live',
      category: 'MERN Stack',
      date: 'Apr - May 2026'
    },
    {
      title: 'Deepfake Detector',
      subtitle: 'Advanced Computer Vision AI',
      description: 'Deep learning application leveraging CNNs and transfer learning to detect manipulated images with 94% accuracy.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'Deep Learning'],
      github: 'https://github.com/Jodd-cyber/DEEPFAKE-IMAGE-DETECTOR-',
      live: null,
      gradient: 'from-purple-500 to-pink-500',
      glowFrom: '#a855f7',
      glowTo: '#ec4899',
      image: '/deepfake_preview.png',
      status: 'Complete',
      category: 'AI/ML',
      date: 'Sep - Oct 2025'
    },
    {
      title: 'Car Price Predictor',
      subtitle: 'AI-Powered Pricing Engine',
      description: 'ML-powered predictor analyzing 50+ features for the Indian automotive market using ensemble models.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'Pandas'],
      github: 'https://github.com/Jodd-cyber/Car-PricePrediction',
      live: 'https://car-price-predictor-phi.vercel.app',
      gradient: 'from-cyan-500 to-blue-500',
      glowFrom: '#06b6d4',
      glowTo: '#3b82f6',
      image: '/carprice_preview.png',
      status: 'Live',
      category: 'AI/ML',
      date: 'Nov - Dec 2025'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-slate-800 text-teal-400 text-sm backdrop-blur-sm mb-6"
          >
            <FolderGit2 size={14} />
            Featured Work
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Builds</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">A selection of projects that show my work across full-stack development, responsive UI, APIs, and AI-based features.</p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 pt-4"
          >
            {[
              { icon: FolderGit2, label: 'Projects', value: '3 Featured' },
              { icon: Star, label: 'Focus', value: 'Full Stack' },
              { icon: ExternalLink, label: 'Available', value: 'Live Demos & Code' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
              >
                <stat.icon size={16} className="text-teal-400" />
                <span className="text-sm">
                  <span className="font-bold text-white">{stat.value}</span> {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ width: '100%', paddingBottom: '130%' }}
                >
                  {/* Gradient Border + Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(315deg, ${project.glowFrom}, ${project.glowTo})`,
                    }}
                  />
                  {/* Glow Effect behind card */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(315deg, ${project.glowFrom}, ${project.glowTo})`,
                      filter: 'blur(30px)',
                      opacity: isHovered ? 0.6 : 0.2,
                    }}
                  />

                  {/* Inner Dark Background */}
                  <div className="absolute inset-[3px] rounded-2xl bg-[#0a0a0a]/80 z-[2]" />

                  {/* Project Image */}
                  <div
                    className="absolute inset-[3px] z-[3] flex items-center justify-center overflow-hidden rounded-2xl transition-all duration-500 ease-in-out"
                    style={{
                      transform: isHovered ? 'scale(0.55) translateY(-35%)' : 'scale(0.85)',
                      opacity: isHovered ? 0.95 : 0.35,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Content - slides up on hover */}
                  <div
                    className="absolute inset-[3px] z-[4] flex flex-col items-center justify-end pb-6 px-5 transition-all duration-500 ease-in-out"
                    style={{
                      transform: isHovered ? 'scale(1)' : 'scale(0)',
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    {/* Top Row: Category & Date */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className={`whitespace-nowrap px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </div>
                      <div className="whitespace-nowrap px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-slate-700 text-gray-400 bg-white/5 backdrop-blur-sm">
                        {project.date}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-black text-xl text-center leading-tight mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] font-medium text-center uppercase tracking-wider mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-xs text-center leading-relaxed mb-4 line-clamp-3 px-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] text-gray-500 px-1">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn !w-9 !h-9"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="svgContainer">
                          <FaGithub size={16} />
                        </span>
                        <span className="BG"></span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shadow-btn !px-4 !py-0 !h-9 !text-[11px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {project.status && (
                        <span className={`h-9 px-3 rounded-lg border flex items-center text-[10px] font-bold uppercase tracking-wider ${
                          project.status === 'Live'
                            ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                            : 'border-teal-500/30 text-teal-400 bg-teal-500/10'
                        }`}>
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12" />
          <div className="text-center">
            <p className="text-gray-400 mb-6">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/Jodd-cyber"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.06] rounded-xl border border-slate-800/50 hover:border-teal-500/30 text-white font-bold backdrop-blur-sm transition-all duration-300 group"
            >
              <FaGithub size={20} />
              <span>View All Projects on GitHub</span>
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;