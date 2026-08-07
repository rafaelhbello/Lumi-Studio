'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-offwhite py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Quem trabalhou com a LUMI recomenda
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy-700">5.0</span>
            <span className="text-sm text-navy-400">· avaliação média dos clientes</span>
          </div>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-full rounded-2xl border border-navy-700/8 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-premium"
              >
                <Quote size={28} className="mb-3 text-gold-300" strokeWidth={1.5} />
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-navy-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-navy-700/8 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-semibold text-gold-300">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">{t.name}</p>
                    <p className="text-xs text-navy-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
