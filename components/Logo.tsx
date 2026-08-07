type LogoProps = {
  className?: string;
  markOnly?: boolean;
  light?: boolean;
};

export default function Logo({ className = 'h-8 w-8', markOnly = false, light = false }: LogoProps) {
  const navy = light ? '#FFFFFF' : '#0F2744';
  const gold = '#C8A24C';
  const goldDark = '#AD8838';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Navy geometric base */}
      <path
        d="M52 12 L28 12 L12 32 L12 48 L28 68 L52 68 L52 54 L34 54 L26 46 L26 34 L34 26 L52 26 Z"
        fill={navy}
      />
      {/* Gold accent */}
      <path d="M42 8 L54 8 L64 24 L54 40 L42 40 L50 24 Z" fill={gold} />
      <path d="M54 8 L66 8 L76 24 L66 40 L54 40 L62 24 Z" fill={goldDark} />
    </svg>
  );
}
