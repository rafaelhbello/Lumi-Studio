'use client';

import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { process } from '@/lib/data';

export default function Process() {
  return (
    <section id="processo" className="relative bg-offwhite py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Como trabalhamos
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Um processo claro, do briefing à publicação
          </h2>
          <p className="mt-4 text-navy-500">
            Transparência em cada etapa, para que você acompanhe a evolução do seu projeto do
            início ao fim.
          </p>
        </SectionReveal>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-navy-700/10 lg:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold-500 lg:block"
          />

          <div className="flex flex-col gap-10 lg:gap-0">
            {process.map((step, i) => (
              <SectionReveal
                key={step.number}
                delay={i * 0.08}
                className={`relative lg:flex lg:items-center lg:gap-10 lg:py-6 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2">
                  <div
                    className={`rounded-2xl border border-navy-700/8 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-premium ${
                      i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <span className="font-display text-3xl font-bold text-gold-500">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-navy-800">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-offwhite bg-gold-500 lg:block" />

                <div className="hidden lg:block lg:w-1/2" />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
