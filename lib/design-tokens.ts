/**
 * LUMI Design System — tokens de marca
 * Fonte única de verdade para cor, tipo, espaço e elevação.
 */

export const colors = {
  navy: {
    DEFAULT: '#0F2744',
    50: '#EAF0F7',
    100: '#CBDAEA',
    400: '#2C4A6E',
    600: '#16324F',
    700: '#0F2744',
    800: '#0B1D34',
    900: '#071626',
  },
  gold: {
    DEFAULT: '#C8A24C',
    100: '#F3E7C8',
    300: '#DBC087',
    500: '#C8A24C',
    600: '#AD8838',
    700: '#8C6D2C',
  },
  offwhite: '#F7F8FA',
  white: '#FFFFFF',
} as const;

export const typography = {
  display: 'var(--font-jakarta)',
  body: 'var(--font-inter)',
} as const;

export const radius = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const;

export const shadow = {
  premium: '0 20px 60px -15px rgba(15, 39, 68, 0.25)',
  gold: '0 0 30px rgba(200, 162, 76, 0.35)',
  soft: '0 4px 24px -4px rgba(15, 39, 68, 0.08)',
} as const;

export const spacing = {
  section: '7rem', // py-28
  container: '80rem', // max-w-7xl
} as const;

/** Variantes semânticas usadas pelos componentes UI */
export const buttonVariants = {
  primary:
    'bg-navy-700 text-white hover:bg-navy-800 shadow-sm hover:shadow-gold',
  secondary:
    'border border-navy-700/15 bg-white text-navy-700 hover:border-gold-400 hover:text-gold-700',
  gold: 'bg-gold-500 text-navy-900 shadow-gold hover:bg-gold-600',
  ghost: 'text-navy-600 hover:text-navy-900 hover:bg-navy-700/5',
} as const;

export const badgeVariants = {
  gold: 'border border-gold-300/60 bg-white text-gold-700',
  navy: 'border border-navy-700/10 bg-navy-50 text-navy-700',
  soft: 'bg-gold-100/80 text-gold-700',
} as const;
