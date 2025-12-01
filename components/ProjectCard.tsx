import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group flex flex-col h-full bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-5">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
              <Github size={20} />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;