
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
      className="p-3 bg-white/80 backdrop-blur-sm border border-emerald-200 hover:bg-emerald-50 data-[state=on]:bg-emerald-600 data-[state=on]:text-white transition-all duration-300"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Toggle>
  );
};

export default ThemeToggle;
