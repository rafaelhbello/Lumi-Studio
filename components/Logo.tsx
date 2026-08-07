type LogoProps = {
  className?: string;
  light?: boolean;
};

export default function Logo({ className = 'h-8 w-8', light = false }: LogoProps) {
  const navy = light ? '#FFFFFF' : '#0F2744';
  const gold = '#C8A24C';
  const goldMid = '#B8943F';
  const goldDark = '#9A7A30';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Navy open hexagon / C shape */}
      <path
        d="M68 14
           H36
           L16 38
           V62
           L36 86
           H68
           V70
           H42
           L30 58
           V42
           L42 30
           H68
           Z"
        fill={navy}
      />
      {/* Gold ribbon - left panel */}
      <path
        d="M52 10
           L66 10
           L78 34
           L66 58
           L52 58
           L62 34
           Z"
        fill={gold}
      />
      {/* Gold ribbon - right panel (darker for depth) */}
      <path
        d="M66 10
           L80 10
           L92 34
           L80 58
           L66 58
           L76 34
           Z"
        fill={goldDark}
      />
      {/* Gold ribbon highlight */}
      <path
        d="M62 34
           L76 34
           L66 58
           L52 58
           Z"
        fill={goldMid}
        opacity="0.85"
      />
    </svg>
  );
}
