import { cn } from '@/lib/cn';
import { badgeVariants } from '@/lib/design-tokens';
import type { ReactNode } from 'react';

type Variant = keyof typeof badgeVariants;

export default function Badge({
  children,
  variant = 'gold',
  className,
  dot = false,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider',
        badgeVariants[variant],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />}
      {children}
    </span>
  );
}
