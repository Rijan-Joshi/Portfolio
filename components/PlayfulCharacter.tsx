import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Hi! Welcome to my world! ✨",
  "I run on coffee & code! ☕",
  "Don't forget to hydrate! 💧",
  "Check out the projects! 🚀",
  "Have a wonderful day! ☀️",
  "Click me again! 🤖",
  "Design is intelligence made visible.",
  "Learning something new today?",
];

const PlayfulCharacter: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Auto-hide message after a few seconds
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [showMessage, messageIndex]);

  const handleClick = () => {
    // Cycle to next message
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setShowMessage(true);

    // Trigger jump animation
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 500);
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    setShowMessage(true);
  };

  return (
    <motion.div
      // Mobile: Fixed Bottom Right
      // Desktop (lg): Fixed Top Right
      // Print: Hidden
      className="fixed z-[60] right-6 bottom-6 lg:top-6 lg:bottom-auto block print:hidden touch-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
    >
      <div
        className="relative cursor-pointer cursor-grab active:cursor-grabbing group"
        onMouseEnter={handleHoverStart}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Speech Bubble */}
        <AnimatePresence mode="wait">
          {showMessage && (
            <motion.div
              key={messageIndex} // Re-animate on new message
              initial={{ opacity: 0, scale: 0.8, x: -20, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: -10, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20, y: 10 }}
              className="absolute right-full top-0 mr-4 w-48 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-xl border border-neutral-100 dark:border-neutral-700 pointer-events-none"
            >
              <p className="text-sm font-bold leading-tight">
                {messages[messageIndex]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Body Robot Character */}
        <motion.div
          animate={
            isClicking
              ? { y: -30, rotate: 360 }
              : { y: [0, -8, 0], rotate: [0, 2, -2, 0] }
          }
          transition={
            isClicking
              ? { duration: 0.5 }
              : { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }
          whileHover={{ scale: 1.1 }}
          className="w-24 h-28 relative filter drop-shadow-2xl"
        >
          <svg viewBox="0 0 100 120" className="w-full h-full overflow-visible">
            {/* Shadow */}
            <motion.ellipse
              cx="50"
              cy="115"
              rx="30"
              ry="5"
              fill="black"
              opacity="0.3"
              animate={{ rx: [30, 25, 30], opacity: [0.3, 0.2, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />

            {/* Legs */}
            <motion.g
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <rect
                x="35"
                y="90"
                width="8"
                height="20"
                rx="4"
                fill="#64748b"
                className="dark:fill-slate-400"
              />
              <rect
                x="57"
                y="90"
                width="8"
                height="20"
                rx="4"
                fill="#64748b"
                className="dark:fill-slate-400"
              />
            </motion.g>

            {/* Left Arm (Waving) */}
            <motion.g
              animate={
                isHovered
                  ? { rotate: [0, -25, 10, -25, 0] }
                  : { rotate: [0, 5, -5, 0] }
              }
              transition={
                isHovered
                  ? { duration: 1.2, repeat: Infinity }
                  : { duration: 4, repeat: Infinity }
              }
              style={{ originX: "80px", originY: "65px" }} // Pivot at shoulder
            >
              {/* Arm Connector */}
              <circle cx="80" cy="65" r="4" fill="#94a3b8" />
              <rect
                x="75"
                y="55"
                width="22"
                height="9"
                rx="4.5"
                fill="#64748b"
                className="dark:fill-slate-400"
                transform="rotate(30 75 55)"
              />
              <circle
                cx="95"
                cy="45"
                r="7"
                fill="#3b82f6"
                className="dark:fill-blue-500"
              />
            </motion.g>

            {/* Right Arm (Idle/Balancing) */}
            <motion.g
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "20px", originY: "65px" }}
            >
              <circle cx="20" cy="65" r="4" fill="#94a3b8" />
              <rect
                x="5"
                y="60"
                width="22"
                height="9"
                rx="4.5"
                fill="#64748b"
                className="dark:fill-slate-400"
                transform="rotate(-30 25 60)"
              />
              <circle
                cx="5"
                cy="49"
                r="6"
                fill="#94a3b8"
                className="dark:fill-slate-500"
              />
            </motion.g>

            {/* Body */}
            <rect
              x="25"
              y="50"
              width="50"
              height="45"
              rx="14"
              fill="white"
              stroke="#e2e8f0"
              strokeWidth="2"
              className="dark:fill-slate-200 dark:stroke-slate-500"
            />

            {/* Body Details (Chest Plate) */}
            <rect
              x="38"
              y="60"
              width="24"
              height="25"
              rx="6"
              fill="#f1f5f9"
              className="dark:fill-slate-300"
            />
            {/* Core Reactor */}
            <motion.circle
              cx="50"
              cy="72"
              r="6"
              fill="#3b82f6"
              className="dark:fill-blue-500"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Head Group */}
            <motion.g
              animate={
                isHovered ? { y: -4, rotate: [0, 2, -2, 0] } : { y: [0, -3, 0] }
              }
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.2,
              }}
              style={{ originX: "50px", originY: "50px" }}
            >
              {/* Neck */}
              <rect
                x="45"
                y="45"
                width="10"
                height="10"
                fill="#cbd5e1"
                className="dark:fill-slate-400"
              />

              {/* Head Shape */}
              <rect
                x="20"
                y="10"
                width="60"
                height="42"
                rx="16"
                fill="white"
                stroke="#e2e8f0"
                strokeWidth="2"
                className="dark:fill-slate-200 dark:stroke-slate-500"
              />

              {/* Face Screen */}
              <rect
                x="26"
                y="18"
                width="48"
                height="26"
                rx="10"
                fill="#1e293b"
                className="dark:fill-black"
              />

              {/* Eyes */}
              <motion.g
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1, 1, 1] }} // Blink animation
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  times: [0, 0.05, 0.1, 0.9, 1],
                }}
                style={{ originY: "30px" }}
              >
                {isHovered ? (
                  // Happy Eyes on Hover
                  <>
                    <path
                      d="M 36 32 Q 40 26 44 32"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                      className="dark:stroke-blue-400"
                    />
                    <path
                      d="M 56 32 Q 60 26 64 32"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                      className="dark:stroke-blue-400"
                    />
                  </>
                ) : (
                  // Normal Eyes
                  <>
                    <circle
                      cx="40"
                      cy="30"
                      r="5"
                      fill="#3b82f6"
                      className="dark:fill-blue-400"
                    />
                    <circle
                      cx="60"
                      cy="30"
                      r="5"
                      fill="#3b82f6"
                      className="dark:fill-blue-400"
                    />
                  </>
                )}
              </motion.g>

              {/* Antenna */}
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="0"
                stroke="#94a3b8"
                strokeWidth="3"
                className="dark:stroke-slate-400"
              />
              <motion.circle
                cx="50"
                cy="0"
                r="3.5"
                fill="#ef4444"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlayfulCharacter;
