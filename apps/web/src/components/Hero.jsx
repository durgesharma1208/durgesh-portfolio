import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-cyan-500/30"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob w-[500px] h-[500px] rounded-full bg-cyan-500/20 top-[-100px] left-[-100px] animate-blob-1"></div>
        <div className="aurora-blob w-[400px] h-[400px] rounded-full bg-blue-500/20 bottom-[-50px] right-[-50px] animate-blob-2"></div>
        <div className="aurora-blob w-[300px] h-[300px] rounded-full bg-purple-500/20 top-[40%] left-[60%] animate-blob-3"></div>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
        >
          <span className="text-cyan-400 font-medium text-sm tracking-wide">Available for Freelance & Full-time</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
        >
          Building the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
            Future of Web
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          I'm <span className="font-semibold text-white">Durgesh Sharma</span>, a Full Stack Developer crafting exceptional digital experiences with high-performance code and stunning aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={scrollToContact}
            className="h-14 px-8 text-lg rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="h-14 px-8 text-lg rounded-full border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-all hover:border-cyan-500/50"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6 text-cyan-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
