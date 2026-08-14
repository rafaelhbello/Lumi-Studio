'use client';

import { cn } from '@/lib/cn';

export default function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200',
        selected
          ? 'border-gold-500 bg-gold-500 text-navy-900 shadow-sm'
          : 'border-navy-700/10 bg-white text-navy-700 hover:border-gold-400/50 dark:border-white/10 dark:bg-navy-800/50 dark:text-navy-100 dark:hover:border-gold-400/40',
      )}
    >
      {label}
    </button>
  );
}
