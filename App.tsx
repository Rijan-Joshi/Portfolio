import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Blogs from "./views/Blogs";
import BlogPost from "./views/BlogPost";
import Resume from "./views/Resume";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "./constants";
import { motion } from "framer-motion";
import PlayfulCharacter from "./components/PlayfulCharacter";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Signature: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 1, pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="font-signature text-3xl md:text-4xl text-neutral-800 dark:text-neutral-200"
      >
        Rijan
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  // Default to Dark Mode (true)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage or preference if needed, but here we force default Dark Mode
    // Add the dark class on mount
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans transition-colors duration-300">
        {/* Playful Bot Widget - Hidden when printing */}
        <PlayfulCharacter />

        {/* Mobile Header - Hidden when printing */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <img
                src="https://picsum.photos/seed/rijan/100/100"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg dark:text-white">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 -mr-2 text-neutral-600 dark:text-neutral-300"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Layout Container */}
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
          {/* Left Sidebar (Fixed width on Desktop, Sticky) - Hidden when printing */}
          <aside
            className={`
            fixed inset-0 z-40 bg-neutral-50 dark:bg-neutral-950 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-80 lg:h-screen lg:sticky lg:top-0 border-r border-neutral-200 dark:border-neutral-800/50 flex-shrink-0 print:hidden
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            <Sidebar
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              isMobileOpen={isMobileOpen}
              closeMobileMenu={() => setIsMobileOpen(false)}
            />
          </aside>

          {/* Right Content Area (Takes remaining space, wider container) */}
          <main className="flex-1 min-h-screen pt-24 lg:pt-0 print:pt-0 print:w-full">
            <div className="px-6 lg:px-16 lg:py-24 max-w-5xl mx-auto w-full print:px-0 print:py-0 print:max-w-none">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Home />} />
              </Routes>

              {/* Footer: Signature first, Copyright last */}
              <footer className="mt-20 pb-10 border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 print:mt-8 print:border-none">
                <div className="order-1 md:order-1 mb-4 md:mb-0">
                  <Signature />
                </div>
                <div className="order-2 md:order-2 print:hidden">
                  <p>&copy; {new Date().getFullYear()} Rijan Shrestha.</p>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
