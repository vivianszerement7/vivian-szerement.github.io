import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { language } = useLanguage();
  const t = translations[language].projectCard;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group cursor-pointer bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col h-full transition-all hover:bg-slate-800/80 hover:border-slate-600 hover:shadow-xl hover:shadow-blue-500/10"
      onClick={() => onClick(project)}
    >
      <div className="h-48 w-full overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title[language]} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium text-slate-400 bg-slate-400/10 px-2 py-1 rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title[language]}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
          {project.context[language]}
        </p>
        
        <div className="flex items-center text-sm font-semibold text-white mt-auto group-hover:text-blue-400 transition-colors">
          <span>{t.readCaseStudy}</span>
          <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
