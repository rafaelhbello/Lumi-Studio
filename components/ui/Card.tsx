import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}) {
  const paddings = {
    none: '',
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border border-navy-700/8 bg-white shadow-sm',
        hover && 'transition-shadow duration-300 hover:shadow-premium',
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
