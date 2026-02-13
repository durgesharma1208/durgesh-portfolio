import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Travel Booking App',
      description: 'A comprehensive travel booking platform featuring real-time availability, secure payments, and interactive destination guides.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with dynamic product catalog, shopping cart functionality, and admin dashboard for inventory management.',
      techStack: ['Next.js', 'Redux', 'PostgreSQL', 'Tailwind'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative productivity tool enabling teams to organize tasks, track progress, and communicate in real-time.',
      techStack: ['React', 'Firebase', 'Material UI'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Real Estate Marketplace',
      description: 'Property listening platform with map integration, advanced filtering, and virtual tour capabilities for prospective buyers.',
      techStack: ['Vue.js', 'Express', 'MongoDB', 'Mapbox'],
      liveDemo: '#',
      github: '#',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Showcasing some of my best work and technical achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.liveDemo} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
