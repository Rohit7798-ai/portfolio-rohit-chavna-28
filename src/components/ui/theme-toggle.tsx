
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from './toggle';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <Toggle
      pressed={isDark}
      onPressedChange={onToggle}
      className="relative p-2.5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 data-[state=on]:bg-emerald-100 dark:data-[state=on]:bg-emerald-900/60 data-[state=on]:border-emerald-300 dark:data-[state=on]:border-emerald-600 transition-all duration-300 rounded-full shadow-sm"
    >
      <div className="relative">
        {isDark ? (
          <Moon className="h-4 w-4 text-emerald-700 dark:text-emerald-300 transition-transform duration-300" />
        ) : (
          <Sun className="h-4 w-4 text-emerald-600 transition-transform duration-300" />
        )}
      </div>
    </Toggle>
  );
};

export default ThemeToggle;
