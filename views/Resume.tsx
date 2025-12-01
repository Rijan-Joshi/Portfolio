import React from 'react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, EDUCATION, SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Globe } from 'lucide-react';
import Tooltip from '../components/Tooltip';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 shadow-sm print:shadow-none print:border-none print:p-0">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 border-neutral-900 dark:border-neutral-100 pb-6 mb-6"
      >
        <h1 className="text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-2">
          {PERSONAL_INFO.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center hover:text-primary transition-colors">
            <Mail size={14} className="mr-1.5" />
            {PERSONAL_INFO.email}
          </a>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="flex items-center">
            <Phone size={14} className="mr-1.5" />
            {PERSONAL_INFO.phone}
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="flex items-center">
            {PERSONAL_INFO.location}
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors">
             <Github size={14} className="mr-1.5" />
             GitHub
          </a>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="space-y-8">
        
        {/* Experience */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 mb-4 pb-1">
            Work Experience
          </h2>
          <div className="space-y-5">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-neutral-500 font-medium italic">
                    {exp.period}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 italic">
                    {exp.role}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 leading-normal pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 mb-4 pb-1">
            Projects
          </h2>
          <div className="space-y-5">
            {PROJECTS.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {proj.title}
                  </h3>
                  {proj.github && (
                    <a href={proj.github} className="text-xs text-primary dark:text-blue-400 hover:underline">
                      GitHub
                    </a>
                  )}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-normal">
                   <span className="text-neutral-900 dark:text-white mr-1">✓</span>
                   {proj.description}
                </p>
                {/* Simplified bullet for technical aspect if needed, mirroring resume style */}
                {proj.techStack && (
                    <ul className="list-disc list-outside ml-5 mt-1">
                       <li className="text-sm text-neutral-600 dark:text-neutral-400">
                         Tools: {proj.techStack.join('; ')}
                       </li>
                    </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certification / Skills */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 mb-4 pb-1">
            Certifications, Skills & Interests
          </h2>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li>
              <strong className="text-neutral-900 dark:text-white">Certifications:</strong> {SKILLS.certifications.join('; ')}
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-white">Technologies:</strong> {SKILLS.technologies.join('; ')}
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-white">Skills:</strong> {SKILLS.core.join('; ')}
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-white">Interests:</strong> {SKILLS.interests.join('; ')}
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 mb-4 pb-1">
            Education
          </h2>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="flex justify-between items-end">
              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                  {edu.degree}
                </p>
                <p className="text-sm text-neutral-900 dark:text-white font-medium mt-1">
                  GPA: {edu.gpa}
                </p>
              </div>
              <span className="text-sm text-neutral-500 font-medium">
                {edu.year}
              </span>
            </div>
          ))}
        </section>

      </div>

      <div className="mt-12 text-center print:hidden">
        <Tooltip content="Save as PDF">
            <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
            <Download size={18} />
            Print / Download PDF
            </button>
        </Tooltip>
      </div>

    </div>
  );
};

export default Resume;