import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X, FileText, Folder, FileCode } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const getIcon = () => {
    switch (project.type) {
      case 'folder': case 'zip': return <Folder className="text-blue-400" size={24} />;
      case 'docx': return <FileCode className="text-blue-400" size={24} />;
      default: return <FileText className="text-blue-400" size={24} />;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-300 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto flex-grow">
          <div className="h-64 sm:h-80 w-full relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 -mt-20 relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-xl text-blue-400 mb-8 font-medium">{project.context}</p>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-white text-xl font-semibold mb-3 border-b border-slate-700 pb-2">Technical Overview</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                {project.explanation}
              </p>

              <h3 className="text-white text-xl font-semibold mb-3 border-b border-slate-700 pb-2">Visual Highlight</h3>
              <p className="text-slate-400 italic mb-8 border-l-4 border-slate-700 pl-4">
                "{project.visualDescription}"
              </p>
            </div>

            {project.filePath && (
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <a 
                  href={project.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {getIcon()}
                  <span>View Original Document</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
