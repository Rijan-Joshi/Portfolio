import React from "react";
import { Project } from "../types";
import { Github, Play } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 4 }}
      className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors pr-4">
            {project.title}
          </h3>
        </div>

        <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6 flex-grow whitespace-pre-line">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex md:flex-col items-center md:items-end justify-end gap-3 md:gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 md:pl-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
            aria-label="View on GitHub"
          >
            <Github size={20} />
          </a>
        )}
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-sm hover:shadow-md"
            aria-label="View live project"
          >
            <Play size={16} fill="currentColor" />
            <span className="text-sm">Live</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
