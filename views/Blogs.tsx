import React from 'react';
import { BLOGS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blogs: React.FC = () => {
  return (
    <div className="space-y-10 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Writing
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed text-lg">
          Thoughts on AI, Design, and the future of software development.
        </p>
      </motion.div>

      <div className="space-y-6">
        {BLOGS.map((blog, index) => (
          <motion.div
             key={blog.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
          >
            <Link 
              to={`/blog/${blog.id}`}
              className="group block bg-transparent border-b border-neutral-200 dark:border-neutral-800 pb-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <ArrowUpRight size={24} className="text-neutral-400 group-hover:text-primary opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed max-w-3xl text-lg">
                {blog.excerpt}
              </p>
              <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                {blog.date}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;