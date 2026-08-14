'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy-800 py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,162,76,0.14),_transparent_65%)]"
      />
      <div aria-hidden className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
      <div aria-hidden className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-navy-400/20 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Vamos começar
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Vamos criar seu próximo site?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-navy-100/70">
            Monte seu projeto em poucos cliques — sem burocracia. A gente analisa e te apresenta
            as melhores opções.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="/monte-seu-projeto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-500 px-9 py-4 text-sm font-bold text-navy-900 shadow-gold"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Monte seu projeto</span>
              <ArrowRight
                size={16}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
