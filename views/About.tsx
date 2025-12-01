import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../constants';
import ExperienceItem from '../components/ExperienceItem';
import { Mail, Github, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-20">
      
      {/* Intro Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          About Me
        </h2>
        <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
          <p className="leading-relaxed text-2xl font-light">
            I am learning machine learning, deep learning, trying to implement a new paper every Friday.
          </p>
        </div>
        
        {/* Quick Contacts */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <Mail size={18} />
            Contact Me
          </a>
          <a href="https://github.com/rijan-shrestha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
            <Github size={18} />
            GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
            <Database size={18} />
            Kaggle
          </a>
        </div>
      </div>

      <hr className="border-neutral-200 dark:border-neutral-800" />

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-10">
          Work Experience
        </h3>
        <div className="pl-2">
          {EXPERIENCE.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;