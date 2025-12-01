import React from "react";
import { Experience } from "../types";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  // Helper to check if the logo string looks like a URL or file path
  const isLogoImage =
    experience.logo &&
    (experience.logo.includes("/") || experience.logo.includes("http"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ x: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative flex gap-6 group cursor-default"
    >
      {/* Timeline Line */}
      <div className="absolute left-[26px] top-12 bottom-[-40px] w-px bg-neutral-200 dark:bg-neutral-800 last:hidden" />

      {/* Logo Placeholder or Image */}
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-lg font-bold text-neutral-500 dark:text-neutral-400 shadow-sm z-10 relative group-hover:border-primary/50 dark:group-hover:border-blue-500/50 transition-colors overflow-hidden">
          {isLogoImage ? (
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span>{experience.logo || experience.company.substring(0, 2)}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
            {experience.role}
          </h3>
          <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
            {experience.period}
          </span>
        </div>

        <div className="text-base font-medium text-primary dark:text-blue-400 mb-4">
          {experience.company}
        </div>

        <ul className="space-y-3">
          {experience.description.map((item, index) => (
            <li
              key={index}
              className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
