type LogoProps = {
  className?: string;
  light?: boolean;
};

/** Logo mark LUMI Studio — hexágono aberto navy + fita dourada */
export default function Logo({ className = 'h-8 w-8', light = false }: LogoProps) {
  const navy = light ? '#FFFFFF' : '#0F2744';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Base navy — forma hexagonal aberta (estilo C) */}
      <path
        fill={navy}
        d="M70 12H34L12 38v24l22 26h36V72H40l-12-12V40l12-12h30V12z"
      />
      {/* Fita dourada — painel esquerdo */}
      <path
        fill="#C8A24C"
        d="M50 6h16l14 28-14 28H50l12-28L50 6z"
      />
      {/* Fita dourada — painel direito (sombra) */}
      <path
        fill="#9A7A30"
        d="M66 6h16l14 28-14 28H66l12-28L66 6z"
      />
      {/* Destaque central da fita */}
      <path
        fill="#DBC087"
        d="M62 34h16L66 62H50l12-28z"
        opacity="0.7"
      />
    </svg>
  );
}
