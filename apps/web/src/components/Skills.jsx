import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
      description: 'Building responsive, accessible, and performant user interfaces.',
      color: 'from-cyan-500 to-blue-500',
      bg: 'group-hover:bg-cyan-500/10',
      border: 'group-hover:border-cyan-500/50'
    },
    {
      category: 'Backend & Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'REST APIs'],
      description: 'Architecting robust server-side applications and database schemas.',
      color: 'from-green-500 to-emerald-500',
      bg: 'group-hover:bg-green-500/10',
      border: 'group-hover:border-green-500/50'
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'VS Code', 'Postman'],
      description: 'Streamlining development workflows and deployment pipelines.',
      color: 'from-purple-500 to-pink-500',
      bg: 'group-hover:bg-purple-500/10',
      border: 'group-hover:border-purple-500/50'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-cyan-400">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolset for building scalable and modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`
                  group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                  ${category.border}
                `}
              >
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 
                  bg-slate-800 text-white group-hover:scale-110 transition-transform duration-300
                  bg-gradient-to-br ${category.color}
                `}>
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {category.category}
                </h3>
                
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`
                        px-3 py-1.5 rounded-full text-xs font-medium 
                        bg-slate-800 text-slate-300 border border-slate-700
                        transition-all duration-300 hover:text-white hover:border-white/50
                        ${category.bg}
                      `}
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
