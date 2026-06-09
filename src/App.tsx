import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { projects } from './data/projects';

const App: React.FC = () => {
  const roboticsProjects = projects.filter(p => p.category === 'Robotics and Code');
  const materialsProjects = projects.filter(p => p.category === 'Materials and Conception');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Section 
          id="robotics" 
          title="Robotics and Code" 
          projects={roboticsProjects} 
        />
        <Section 
          id="materials" 
          title="Materials and Conception" 
          projects={materialsProjects} 
        />
      </main>
      
      <footer className="py-12 bg-slate-950 text-center border-t border-slate-800">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Vivian Szerement. Engineering Portfolio.
        </p>
      </footer>
    </div>
  );
};

export default App;
