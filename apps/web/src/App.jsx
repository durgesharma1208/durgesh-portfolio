import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Durgesh Sharma - Full Stack Developer | MERN Stack | DSA Problem Solver</title>
        <meta
          name="description"
          content="Portfolio of Durgesh Sharma, a Full Stack Developer specializing in MERN stack (MongoDB, Express, React, Node.js) and Data Structures & Algorithms. Explore my projects and get in touch."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;