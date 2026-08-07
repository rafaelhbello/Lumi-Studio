import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        display: ['var(--font-jakarta)'],
        body: ['var(--font-inter)'],
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(15, 39, 68, 0.25)',
        gold: '0 0 30px rgba(200, 162, 76, 0.35)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
