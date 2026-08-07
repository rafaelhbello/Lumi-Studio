import { cn } from '@/lib/cn';
import { buttonVariants } from '@/lib/design-tokens';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = keyof typeof buttonVariants;
type Size = 'sm' | 'md' | 'lg';

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300',
    buttonVariants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
