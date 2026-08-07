import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export default function Container({
  children,
  className,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        'mx-auto px-6 lg:px-10',
        narrow ? 'max-w-5xl' : 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
