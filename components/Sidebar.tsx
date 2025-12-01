import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PERSONAL_INFO, BLOGS } from "../constants";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Home,
  LayoutGrid,
  BookOpen,
  FileText,
} from "lucide-react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isMobileOpen?: boolean;
  closeMobileMenu?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isDarkMode,
  toggleTheme,
  isMobileOpen,
  closeMobileMenu,
}) => {
  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Projects", path: "/projects", icon: LayoutGrid },
    { label: "Blogs", path: "/blog", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col h-full p-6 pt-32 lg:p-10 lg:pt-10 relative overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
      {/* Profile Header - Hidden on Mobile, Visible on Desktop */}
      <div className="hidden lg:flex flex-col items-start mb-8">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-neutral-800 shadow-lg cursor-pointer group relative"
        >
          <img
            src="https://picsum.photos/seed/rijan/300/300"
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-2xl">👋</span>
          </div>
        </motion.div>
        <h1 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
          {PERSONAL_INFO.name}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 mb-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMobileMenu}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${
                isActive
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              }
            `}
          >
            <item.icon size={18} className="stroke-[2.5]" />
            <span className="text-base font-medium">{item.label}</span>
          </NavLink>
        ))}

        {/* Resume Link */}
        <NavLink
          to="/resume"
          onClick={closeMobileMenu}
          className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group mt-4
              ${
                isActive
                  ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              }
            `}
        >
          <FileText size={18} className="stroke-[2.5]" />
          <span className="text-base font-medium">Resume</span>
        </NavLink>
      </nav>

      {/* Music Widget */}
      <div className="mb-8">
        <MusicPlayer />
      </div>

      {/* Recent Blogs Widget (Sidebar specific, Desktop Only) */}
      <div className="mb-8 hidden lg:block">
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3 px-4">
          Latest Writing
        </h3>
        <ul className="space-y-1">
          {BLOGS.slice(0, 2).map((blog) => (
            <li key={blog.id}>
              <Link
                to={`/blog/${blog.id}`}
                className="block px-4 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 group transition-colors"
              >
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {blog.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Socials */}
      <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex gap-4">
          <Tooltip content="GitHub Profile">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200 block"
            >
              <Github size={18} />
            </a>
          </Tooltip>
          <Tooltip content="Send Email">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200 block"
            >
              <Mail size={18} />
            </a>
          </Tooltip>
          <Tooltip content="LinkedIn Profile">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200 block"
            >
              <Linkedin size={18} />
            </a>
          </Tooltip>
        </div>

        <Tooltip
          content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          position="left"
        >
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors focus:outline-none hover:rotate-12 transform duration-200"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
