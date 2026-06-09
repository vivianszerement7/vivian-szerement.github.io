import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Folder, FileCode, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = () => {
    switch (project.type) {
      case 'folder': return <Folder className="text-blue-400" size={32} />;
      case 'docx': return <FileCode className="text-blue-400" size={32} />;
      default: return <FileText className="text-blue-400" size={32} />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex flex-col h-full"
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
      
      <a 
        href={project.filePath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors mt-auto"
      >
        {project.type === 'folder' ? 'View Directory' : 'View Document'} <ExternalLink size={16} />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
