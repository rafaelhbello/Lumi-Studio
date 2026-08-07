'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { projects } from '@/lib/data';

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Portfólio
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Projetos que já transformamos em resultado
          </h2>
          <p className="mt-4 text-navy-500">
            Uma seleção de trabalhos desenvolvidos para profissionais e empresas de diferentes
            segmentos.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.07}>
              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ y: -6 }}
                className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-300 hover:shadow-premium"
              >
                <div
                  className={`relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden bg-gradient-to-br p-6 ${project.color}`}
                >
                  <div className="absolute inset-0 bg-navy-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-3 flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-white/40" />
                    <div className="h-2 w-2 rounded-full bg-white/40" />
                    <div className="h-2 w-2 rounded-full bg-white/40" />
                  </div>
                  <div className="mb-3 h-20 w-full rounded-lg bg-white/10 backdrop-blur-sm" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
              </motion.button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-premium"
            >
              <div className={`aspect-video w-full bg-gradient-to-br ${projects[active].color}`} />
              <button
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800"
              >
                <X size={18} />
              </button>
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {projects[active].category}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-navy-800">
                  {projects[active].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {projects[active].description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {projects[active].liveUrl && (
                    <a
                      href={projects[active].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700"
                    >
                      Ver site ao vivo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href="#cta"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    Quero um projeto assim
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
