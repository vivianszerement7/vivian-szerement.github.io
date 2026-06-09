import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Section from './components/Section';
import ProjectModal from './components/ProjectModal';
import { projects, type Project } from './data/projects';
import { useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

const PortfolioApp: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const roboticsProjects = projects.filter(p => p.category === 'Robotics and Code');
  const materialsProjects = projects.filter(p => p.category === 'Materials and Conception');

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Section 
          id="robotics" 
          title={t.sections.robotics} 
          projects={roboticsProjects} 
          onProjectClick={setSelectedProject}
        />
        <Section 
          id="materials" 
          title={t.sections.materials} 
          projects={materialsProjects} 
          onProjectClick={setSelectedProject}
        />
      </main>
      
      <footer className="py-12 bg-slate-950 text-center border-t border-slate-800">
        <p className="text-slate-500 font-medium">
          © {new Date().getFullYear()} {t.footer.text}
        </p>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioApp;
