import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
