import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = BLOGS.find(b => b.id === id);

  useEffect(() => {
      window.scrollTo(0,0);
  }, [id]);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Blog Post Not Found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="text-primary hover:underline"
        >
          Return to Blogs
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pb-20 max-w-3xl mx-auto"
    >
      {/* Back Button */}
      <Link 
        to="/blog"
        className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Writing
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.map(tag => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight mb-4">
          {blog.title}
        </h1>
        <div className="text-neutral-500 dark:text-neutral-400 font-medium">
          {blog.date}
        </div>
      </header>

      {/* Demo Disclaimer Box */}
      <div className="mb-10 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 flex items-start gap-3">
        <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">Demo Content</h4>
          <p className="text-sm text-amber-700 dark:text-amber-400/80 leading-relaxed">
            This is a placeholder blog post for the portfolio. The content below is simulated to demonstrate layout and typography.
          </p>
        </div>
      </div>

      {/* Content */}
      <article 
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-primary dark:prose-a:text-blue-400 prose-strong:text-neutral-900 dark:prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: blog.content || '' }}
      />
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-neutral-500 text-center italic">
          Thanks for reading!
        </p>
      </div>

    </motion.div>
  );
};

export default BlogPost;