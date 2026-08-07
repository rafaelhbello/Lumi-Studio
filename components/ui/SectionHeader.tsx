import { cn } from '@/lib/cn';
import Badge from './Badge';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-navy-500">{description}</p>}
    </div>
  );
}
