import React from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="space-y-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A collection of projects exploring Deep Learning, Speech Synthesis,
          Distributed Systems, and User Experience Design.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
