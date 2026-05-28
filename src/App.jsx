import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden bg-transparent">
      {/* 3D Background covers the entire app */}
      <Background3D />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
