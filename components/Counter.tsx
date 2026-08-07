'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({
  to,
  suffix = '',
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, to, motionValue]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString();
    });
  }, [spring]);

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-navy-800 lg:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-navy-400">{label}</p>
    </div>
  );
}
