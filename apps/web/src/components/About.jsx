import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React and modern CSS frameworks',
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and MongoDB',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: 'Problem Solving',
      description: 'Passionate about Data Structures & Algorithms and solving complex coding challenges',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). 
                I love building scalable web applications that solve real-world problems and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in software development is driven by curiosity and a constant desire to learn. I specialize in 
                creating responsive frontends with React and Tailwind CSS, while building robust backends with Node.js and Express.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond web development, I'm deeply invested in Data Structures and Algorithms, regularly solving problems 
                to sharpen my problem-solving skills. I believe that strong fundamentals in DSA are crucial for writing 
                efficient and optimized code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;