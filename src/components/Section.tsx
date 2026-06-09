import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

interface SectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const Section: React.FC<SectionProps> = ({ id, title, projects }) => {
  return (
    <section id={id} className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <div className="h-1.5 w-20 bg-blue-500 rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
