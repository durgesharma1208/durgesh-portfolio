import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing responsive web applications using the MERN stack. Collaborating with clients to deliver custom solutions.',
      skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
    },
    {
      type: 'education',
      role: 'Bachelor of Technology',
      company: 'Computer Science & Engineering',
      period: '2021 - 2025',
      description: 'Focusing on Data Structures, Algorithms, and Web Technologies. Active participant in coding clubs and hackathons.',
      skills: ['DSA', 'System Design', 'OS', 'DBMS']
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-cyan-900/10 blur-[80px]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-cyan-400">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A timeline of my professional experience and educational background.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-20 mt-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className={`
                      bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 
                      hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] 
                      transition-all duration-300 group
                      ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}
                    `}>
                      <div className={`flex items-center gap-3 mb-2 ${
                        index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-cyan-400" />
                        )}
                        <span className="text-sm font-medium text-cyan-300 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
                          {exp.company}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-slate-400 text-sm mb-4 ${
                         index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-sm mb-4">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'
                      }`}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
