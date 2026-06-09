import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

interface SectionProps {
  id: string;
  title: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Section: React.FC<SectionProps> = ({ id, title, projects, onProjectClick }) => {
  return (
    <section id={id} className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{title}</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={onProjectClick} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
