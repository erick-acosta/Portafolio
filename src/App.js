import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import About from './components/About';

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}