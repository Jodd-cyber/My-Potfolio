import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, MapPin, Calendar, BookOpen, Code2, Brain, Rocket, Coffee } from 'lucide-react';

const About = () => {
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };

  const stats = [
    { label: 'Learning & Building', value: '1+', suffix: 'Year', color: 'from-teal-500 to-cyan-500' },
    { label: 'Featured', value: '3', suffix: 'Projects', color: 'from-cyan-500 to-emerald-500' },
    { label: 'Tools', value: '15+', suffix: 'Used in Projects', color: 'from-emerald-500 to-teal-500' },
  ];

  const educationData = [
    {
      degree: 'Bachelor of Computer Applications',
      short: 'BCA',
      institution: 'Christ (Deemed to be University)',
      location: 'Delhi NCR',
      period: '2023 – 2026',
      status: 'Ongoing',
      gradient: 'from-teal-500 to-cyan-500',
      highlights: ['Data Structures', 'Web Dev', 'AI & ML', 'Databases']
    },
    {
      degree: 'Commerce with Information Technology',
      short: 'Class XII',
      institution: 'VVDAV Public School',
      location: 'New Delhi',
      period: '2022 – 2023',
      status: 'Completed',
      gradient: 'from-cyan-500 to-emerald-500',
      highlights: ['Information Tech', 'Business Studies', 'Economics']
    }
  ];

  const interests = [
    { icon: Code2, label: 'Full Stack Dev', desc: 'React, Node.js, MongoDB' },
    { icon: Brain, label: 'AI / ML Projects', desc: 'Python, PyTorch, OpenCV' },
    { icon: Rocket, label: 'Product Building', desc: 'From idea to deployment' },
    { icon: Coffee, label: 'Version Control', desc: 'Git, GitHub, workflow' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-slate-800 text-teal-400 text-sm mb-6 backdrop-blur-sm"
          >
            <User size={14} />
            <span className="font-medium">About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            Who <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">I Am</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A developer passionate about building things that matter.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants} 
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {/* Bio Card - spans 4 columns */}
          <motion.div variants={itemVariants} className="md:col-span-4 group">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-teal-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <User size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">My Story</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  I’m a Full Stack Developer interested in building practical web applications and exploring how AI can make them smarter and more useful.
                </p>
                <p className="text-gray-400 leading-relaxed text-[15px]">
                  I enjoy working across the stack, from creating clean user interfaces to building reliable backend logic, with a focus on simple, usable products.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={14} className="text-teal-400" />
                  Delhi NCR, India
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card - spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-500 flex flex-col justify-between">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  className={`flex items-center justify-between py-5 ${
                    index !== stats.length - 1 ? 'border-b border-slate-800/50' : ''
                  }`}
                >
                  <div>
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{stat.suffix}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Grid - spans 3 columns */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-500">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Rocket size={16} className="text-teal-400" />
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-slate-800/30 hover:border-teal-500/20 transition-all duration-300 group/item"
                  >
                    <item.icon size={20} className="text-teal-400 mb-3 group-hover/item:scale-110 transition-transform" />
                    <div className="text-white text-sm font-semibold mb-1">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education - spans 3 columns */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="h-full bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-500">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <GraduationCap size={18} className="text-teal-400" />
                Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="relative pl-5 border-l-2 border-slate-800 hover:border-teal-500/50 transition-colors duration-300"
                  >
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-teal-400" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${edu.gradient} text-white font-bold`}>
                        {edu.short}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        edu.status === 'Ongoing' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{edu.degree}</h4>
                    <div className="flex items-center gap-3 text-gray-500 text-xs mb-2">
                      <span className="flex items-center gap-1"><BookOpen size={10} />{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-[11px] mb-3">
                      <span className="flex items-center gap-1"><MapPin size={10} />{edu.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{edu.period}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.highlights.map((subject, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] text-gray-500 bg-white/[0.03] border border-slate-800/50 px-2 py-0.5 rounded-md hover:text-teal-400 hover:border-teal-500/20 transition-all duration-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;