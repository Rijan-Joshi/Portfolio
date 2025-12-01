import React from 'react';
import { EXPERIENCE, PROJECTS, BLOGS } from '../constants';
import ExperienceItem from '../components/ExperienceItem';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24 pb-20"
    >
      
      {/* About Section */}
      <motion.section variants={itemVariants}>
        <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">About</h2>
        <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl leading-relaxed font-light">
          <p>
             I am learning machine learning, deep learning, trying to implement a new paper every Friday.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={itemVariants}>
        <h2 
          className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-10"
        >
          Experience
        </h2>
        <div className="space-y-4">
          {EXPERIENCE.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
            Featured Projects
          </h2>
          <Link to="/projects" className="group flex items-center text-sm font-medium text-neutral-900 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors">
            View All
            <MoveRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      {/* Latest Writing Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
            Latest Writing
          </h2>
          <Link to="/blog" className="group flex items-center text-sm font-medium text-neutral-900 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors">
            Read More
            <MoveRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-col space-y-6">
          {BLOGS.slice(0, 2).map((blog) => (
            <Link 
              key={blog.id} 
              to={`/blog/${blog.id}`}
              className="group block p-6 -mx-6 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
            >
              <motion.div
                 whileHover={{ x: 10 }}
                 transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <span className="text-sm font-medium text-neutral-400 flex-shrink-0">
                    {blog.date}
                  </span>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 line-clamp-2 max-w-3xl leading-relaxed">
                  {blog.excerpt}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

    </motion.div>
  );
};

export default Home;