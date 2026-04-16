import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="w-5 h-5" />;
      case 'dark': return <Moon className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light': return 'Light Mode';
      case 'dark': return 'Dark Mode';
      default: return 'System Mode';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50 transition-colors duration-300 group flex items-center gap-2 overflow-hidden"
      aria-label="Toggle theme"
      title={getLabel()}
    >
      <div className="relative w-5 h-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-neutral-700 dark:text-neutral-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
          >
            {getIcon()}
          </motion.div>
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeToggle;
