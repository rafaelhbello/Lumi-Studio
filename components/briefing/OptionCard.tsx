'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';

export default function OptionCard({
  label,
  selected,
  onClick,
  icon: Icon,
  multi = false,
  colors,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
  multi?: boolean;
  colors?: string[];
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'relative flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-200 sm:px-5',
        selected
          ? 'border-gold-500 bg-gold-500/10 shadow-soft dark:bg-gold-500/15'
          : 'border-navy-700/10 bg-white hover:border-gold-400/50 dark:border-white/10 dark:bg-navy-800/50 dark:hover:border-gold-400/40',
      )}
    >
      {Icon && (
        <span
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
            selected ? 'bg-gold-500 text-navy-900' : 'bg-navy-700/5 text-navy-700 dark:bg-white/5 dark:text-navy-100',
          )}
        >
          <Icon size={20} strokeWidth={1.75} />
        </span>
      )}
      {colors && colors.length > 0 && (
        <span className="flex shrink-0 gap-1">
          {colors.map((c) => (
            <span
              key={c}
              className="h-6 w-6 rounded-full border border-navy-700/10 dark:border-white/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </span>
      )}
      <span
        className={cn(
          'flex-1 text-sm font-semibold sm:text-base',
          selected ? 'text-navy-800 dark:text-white' : 'text-navy-700 dark:text-navy-100',
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors',
          selected
            ? 'border-gold-500 bg-gold-500 text-navy-900'
            : multi
              ? 'border-navy-700/20 dark:border-white/20'
              : 'border-navy-700/20 dark:border-white/20',
        )}
      >
        {selected && <Check size={14} strokeWidth={3} />}
      </span>
    </motion.button>
  );
}
