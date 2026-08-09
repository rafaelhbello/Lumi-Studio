'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { projects } from '@/lib/data';

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative bg-white py-28 dark:bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            Portfólio
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 dark:text-white sm:text-4xl">
            Projetos que já transformamos em resultado
          </h2>
          <p className="mt-4 text-navy-500 dark:text-navy-100/70">
            Uma seleção de trabalhos desenvolvidos para profissionais e empresas de diferentes
            segmentos.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.07}>
              <motion.button
                onClick={() => setActive(i)}
                whileHover={{ y: -6 }}
                className="group relative block w-full overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-300 hover:shadow-premium"
              >
                <div className="relative overflow-hidden rounded-2xl border border-navy-700/10 bg-navy-900 dark:border-white/10">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-navy-800 px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="ml-2 flex-1 truncate rounded-md bg-white/10 px-3 py-1 text-[11px] text-white/60">
                      {project.liveUrl?.replace(/^https?:\/\//, '') ?? 'projeto.lumi'}
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-offwhite dark:bg-navy-800">
                    {project.liveUrl ? (
                      <iframe
                        src={project.liveUrl}
                        title={project.title}
                        className="pointer-events-none absolute inset-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                    )}
                    <div className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/20" />
                  </div>

                  <div className="flex items-end justify-between gap-4 bg-navy-900 p-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                        {project.category}
                      </span>
                      <h3 className="mt-1 font-display text-base font-semibold text-white sm:text-lg">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/70 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-premium dark:bg-navy-800"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 shadow-sm dark:bg-navy-900 dark:text-white"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-navy-900">
                {projects[active].liveUrl ? (
                  <iframe
                    src={projects[active].liveUrl}
                    title={projects[active].title}
                    className="h-full w-full border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${projects[active].color}`} />
                )}
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                  {projects[active].category}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-navy-800 dark:text-white">
                  {projects[active].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-navy-100/70">
                  {projects[active].description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {projects[active].liveUrl && (
                    <a
                      href={projects[active].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 px-6 py-3 text-sm font-semibold text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-white/15 dark:text-navy-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
                    >
                      Ver site ao vivo
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href="#cta"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-900 dark:hover:bg-gold-400"
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
