import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom':
        return { top: '100%', left: '50%', x: '-50%', y: 10 };
      case 'left':
        return { right: '100%', top: '50%', y: '-50%', x: -10 };
      case 'right':
        return { left: '100%', top: '50%', y: '-50%', x: 10 };
      case 'top':
      default:
        return { bottom: '100%', left: '50%', x: '-50%', y: -10 };
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center z-50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, ...getPositionStyles() }}
            animate={{ opacity: 1, scale: 1, ...getPositionStyles() }}
            exit={{ opacity: 0, scale: 0.8, ...getPositionStyles() }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute whitespace-nowrap px-3 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-xl pointer-events-none"
            style={{ 
                // We use style for positioning to leverage Framer Motion's automatic layout handling combined with our offsets
                position: 'absolute'
            }}
          >
            {content}
            {/* Tiny triangle pointer */}
            <div 
                className={`absolute w-2 h-2 bg-neutral-900 dark:bg-white rotate-45 transform
                    ${position === 'top' ? 'bottom-[-3px] left-1/2 -translate-x-1/2' : ''}
                    ${position === 'bottom' ? 'top-[-3px] left-1/2 -translate-x-1/2' : ''}
                    ${position === 'left' ? 'right-[-3px] top-1/2 -translate-y-1/2' : ''}
                    ${position === 'right' ? 'left-[-3px] top-1/2 -translate-y-1/2' : ''}
                `} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;