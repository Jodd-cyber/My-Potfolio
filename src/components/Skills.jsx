import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Wrench, Sparkles, TrendingUp, Award, Zap, Brain, Globe, Lock, GitBranch, ChevronRight, Terminal } from 'lucide-react';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: Code2,
      description: 'Programming languages I use for web development and problem solving',
      focusStat: 'Web + Scripting',
      focusLabel: 'Focus',
      skills: [
        { name: 'HTML5', proficiency: 90, customLabel: 'Strong', icon: '🏗️' },
        { name: 'CSS3', proficiency: 88, customLabel: 'Strong', icon: '🎨' },
        { name: 'JavaScript', proficiency: 82, customLabel: 'Strong', icon: '⚡' },
        { name: 'Python', proficiency: 65, customLabel: 'Working Knowledge', icon: '🐍' },
        { name: 'SQL', proficiency: 60, customLabel: 'Basic to Intermediate', icon: '🗄️' }
      ],
      borderColor: 'border-cyan-500/20',
      accentColor: 'text-cyan-400',
      bgAccent: 'bg-cyan-500/10',
      gradient: 'from-cyan-500 to-blue-500',
      barColor: 'bg-cyan-400'
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Globe,
      description: 'Frameworks and libraries I use to build web applications',
      focusStat: 'Full Stack Focus',
      focusLabel: 'Focus',
      skills: [
        { name: 'React.js', proficiency: 90, customLabel: 'Strong', icon: '⚛️' },
        { name: 'Tailwind CSS', proficiency: 90, customLabel: 'Strong', icon: '💅' },
        { name: 'Node.js', proficiency: 75, customLabel: 'Comfortable', icon: '🟩' },
        { name: 'Flask', proficiency: 75, customLabel: 'Comfortable', icon: '🍶' },
        { name: 'Express.js', proficiency: 65, customLabel: 'Working Knowledge', icon: '🔗' },
        { name: 'AngularJS', proficiency: 65, customLabel: 'Working Knowledge', icon: '🔺' }
      ],
      borderColor: 'border-purple-500/20',
      accentColor: 'text-purple-400',
      bgAccent: 'bg-purple-500/10',
      gradient: 'from-purple-500 to-pink-500',
      barColor: 'bg-purple-400'
    },
    {
      id: 'tools',
      title: 'Databases & Tools',
      icon: Wrench,
      description: 'Databases, APIs, and development tools I have used in projects',
      focusStat: 'Project Experience',
      focusLabel: 'Experience',
      skills: [
        { name: 'MongoDB', proficiency: 75, customLabel: 'Comfortable', icon: '🍃' },
        { name: 'Firebase', proficiency: 75, customLabel: 'Comfortable', icon: '🔥' },
        { name: 'Git', proficiency: 90, customLabel: 'Strong', icon: '📂' },
        { name: 'GitHub', proficiency: 90, customLabel: 'Strong', icon: '🐙' },
        { name: 'REST APIs', proficiency: 90, customLabel: 'Strong', icon: '🌐' },
        { name: 'MySQL', proficiency: 60, customLabel: 'Basic to Intermediate', icon: '🐬' },
        { name: 'JWT', proficiency: 50, customLabel: 'Used in Projects', icon: '🔐' },
        { name: 'OpenCV', proficiency: 50, customLabel: 'Used in Projects', icon: '👁️' }
      ],
      borderColor: 'border-emerald-500/20',
      accentColor: 'text-emerald-400',
      bgAccent: 'bg-emerald-500/10',
      gradient: 'from-emerald-500 to-teal-500',
      barColor: 'bg-emerald-400'
    }
  ];

  const getLevel = (p) => {
    if (p >= 90) return { label: 'Expert', color: 'text-emerald-400', bar: 'bg-emerald-400' };
    if (p >= 80) return { label: 'Advanced', color: 'text-cyan-400', bar: 'bg-cyan-400' };
    if (p >= 70) return { label: 'Intermediate', color: 'text-yellow-400', bar: 'bg-yellow-400' };
    return { label: 'Beginner', color: 'text-orange-400', bar: 'bg-orange-400' };
  };

  const allSkills = skillCategories.flatMap(c => c.skills);
  const expertCount = allSkills.filter(s => s.proficiency >= 90).length;
  const advancedCount = allSkills.filter(s => s.proficiency >= 80 && s.proficiency < 90).length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

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
            <Code2 size={14} />
            My Expertise
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Technical <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">A comprehensive toolkit of modern technologies and frameworks</p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Terminal, label: 'Languages', value: '5', color: 'text-emerald-400' },
              { icon: Globe, label: 'Focus', value: 'Web + Scripting', color: 'text-cyan-400' },
              { icon: Code2, label: 'Total Tech', value: allSkills.length, color: 'text-purple-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-slate-800/50 rounded-xl backdrop-blur-sm hover:border-teal-500/20 transition-all duration-300"
              >
                <stat.icon size={16} className={stat.color} />
                <div className="text-left">
                  <p className={`font-bold text-lg ${stat.color}`}>{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((cat) => {
            const isExpanded = expandedCategory === cat.id;
            return (
              <motion.div key={cat.id} variants={categoryVariants} className="group h-full">
                <div className={`relative h-full rounded-2xl bg-white/[0.03] backdrop-blur-sm border transition-all duration-500 flex flex-col overflow-hidden ${
                  isExpanded ? `${cat.borderColor} border` : 'border-slate-800 hover:border-slate-700'
                }`}>
                  {/* Top Bar */}
                  <motion.div
                    animate={{ scaleX: isExpanded ? 1 : 0 }}
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient} origin-left`}
                  />

                  {/* Left Accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cat.gradient}`} />

                  <div className="relative p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className={`w-12 h-12 rounded-lg ${cat.bgAccent} border ${cat.borderColor} flex items-center justify-center ${cat.accentColor}`}
                        >
                          <cat.icon size={24} />
                        </motion.div>
                        <motion.button
                          onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-10 h-10 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                            isExpanded
                              ? `${cat.bgAccent} ${cat.borderColor} ${cat.accentColor}`
                              : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600'
                          }`}
                        >
                          <ChevronRight
                            size={16}
                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                          />
                        </motion.button>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                      <p className="text-gray-400 text-sm">{cat.description}</p>
                    </div>

                    {/* Skills Grid */}
                    <div className="flex-grow">
                      <div className="grid grid-cols-2 gap-3">
                        {cat.skills.map((skill, sIdx) => {
                          const level = getLevel(skill.proficiency);
                          const isHov = hoveredSkill === `${cat.id}-${sIdx}`;
                          return (
                            <motion.div
                              key={sIdx}
                              onHoverStart={() => setHoveredSkill(`${cat.id}-${sIdx}`)}
                              onHoverEnd={() => setHoveredSkill(null)}
                            >
                              <motion.div
                                animate={{ y: isHov ? -4 : 0 }}
                                className={`p-4 rounded-lg border ${cat.borderColor} bg-slate-800/50 backdrop-blur-sm transition-all duration-200 hover:bg-slate-800/70 cursor-default overflow-hidden`}
                              >
                                <div className="relative z-10">
                                  <div className="flex items-start justify-between mb-2">
                                    <span className="text-lg">{skill.icon}</span>
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${level.color}`}>
                                      {skill.proficiency}%
                                    </span>
                                  </div>
                                  <p className="text-white font-semibold text-sm mb-2">{skill.name}</p>
                                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${skill.proficiency}%` }}
                                      viewport={{ once: true }}
                                      transition={{ delay: sIdx * 0.08, duration: 0.8 }}
                                      className={`h-full rounded-full ${level.bar}`}
                                    />
                                  </div>
                                  <p className="text-gray-500 text-[10px] mt-1.5 uppercase tracking-wider font-medium">
                                    {skill.customLabel || level.label}
                                  </p>
                                </div>
                              </motion.div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Expand Button */}
                    <motion.button
                      onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                      className={`mt-6 py-2.5 px-4 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isExpanded
                          ? `${cat.bgAccent} ${cat.borderColor} ${cat.accentColor}`
                          : 'bg-slate-800/50 border-slate-700 text-gray-400 hover:border-slate-600'
                      }`}
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <ChevronRight size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </motion.button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-800"
                      >
                        <div className="p-6 space-y-4">
                          <div>
                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                              <Zap size={14} className={cat.accentColor} />
                              Quick Stats
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              <div className={`p-3 rounded-lg ${cat.bgAccent} border ${cat.borderColor}`}>
                                <p className={`text-xs font-bold ${cat.accentColor}`}>{cat.skills.length}</p>
                                <p className="text-gray-400 text-xs">Skills</p>
                              </div>
                              <div className={`p-3 rounded-lg ${cat.bgAccent} border ${cat.borderColor}`}>
                                <p className={`text-[11px] leading-tight font-bold ${cat.accentColor}`}>
                                  {cat.focusStat || 'Core Skills'}
                                </p>
                                <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">{cat.focusLabel || 'Focus'}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12" />
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: 'Full Stack Web',
                skills: ['React', 'Node.js', 'Express.js', 'MongoDB'],
                description: 'Building responsive web applications with frontend, backend, database, and API workflows',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Brain,
                title: 'AI & Machine Learning',
                skills: ['Python', 'PyTorch', 'OpenCV', 'ML'],
                description: 'Working with Python-based ML and deep learning concepts through projects and experimentation',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Database,
                title: 'Database & Backend',
                skills: ['MongoDB', 'MySQL', 'Firebase', 'REST APIs'],
                description: 'Creating backend logic, managing data, and connecting applications through APIs',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Sparkles,
                title: 'Frontend Development',
                skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
                description: 'Designing clean, responsive interfaces with modern frontend tools',
                gradient: 'from-cyan-500 to-emerald-500'
              },
              {
                icon: GitBranch,
                title: 'Version Control & Workflow',
                skills: ['Git', 'GitHub', 'Deployment'],
                description: 'Managing code, collaboration, and project versions using development tools',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Lock,
                title: 'Security & Auth',
                skills: ['JWT', 'OAuth', 'Auth Flows', 'Security Basics'],
                description: 'Implementing authentication and learning secure access patterns for web applications',
                gradient: 'from-yellow-500 to-orange-500'
              }
            ].map((specialty, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group/specialty relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-slate-800/50 hover:border-teal-500/20 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${specialty.gradient} opacity-0 group-hover/specialty:opacity-10 blur transition-opacity duration-300 -z-10`} />

                <specialty.icon size={24} className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">{specialty.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{specialty.description}</p>
                <div className="flex flex-wrap gap-2">
                  {specialty.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/50 border border-slate-700 text-gray-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;