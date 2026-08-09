'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-navy-700/10 bg-white/80 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-white/10 dark:bg-navy-800/80 dark:text-gold-300 dark:hover:border-gold-400 dark:hover:text-gold-400 ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
