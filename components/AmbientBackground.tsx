'use client';

import { motion } from 'framer-motion';

const particles = [
  { top: '12%', left: '18%', size: 3, delay: 0 },
  { top: '22%', left: '78%', size: 2, delay: 0.6 },
  { top: '38%', left: '8%', size: 2, delay: 1.2 },
  { top: '55%', left: '65%', size: 3, delay: 0.3 },
  { top: '68%', left: '30%', size: 2, delay: 1.6 },
  { top: '80%', left: '85%', size: 2, delay: 0.9 },
  { top: '30%', left: '48%', size: 2, delay: 2 },
  { top: '90%', left: '15%', size: 3, delay: 1.1 },
];

export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* linhas luminosas em azul */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="15%" x2="100%" y2="8%" stroke="#0F2744" strokeWidth="1" />
        <line x1="0" y1="65%" x2="100%" y2="78%" stroke="#0F2744" strokeWidth="1" />
        <line x1="20%" y1="0" x2="35%" y2="100%" stroke="#0F2744" strokeWidth="1" />
      </svg>

      {/* particulas douradas discretas */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold-500"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: 0.35 }}
          animate={{ opacity: [0.15, 0.5, 0.15], y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
