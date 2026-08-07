'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import AmbientBackground from './AmbientBackground';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-offwhite pt-28"
    >
      <AmbientBackground />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Texto */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Digital Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-800 sm:text-5xl lg:text-[3.4rem]"
          >
            Seu studio que o seu site{' '}
            <span className="text-gradient-gold">precisa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600"
          >
            Do negócio local para uma presença profissional online. Criamos sites modernos,
            rápidos e estratégicos para empresas e profissionais que querem vender mais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition-all duration-300 hover:bg-navy-800"
            >
              Solicitar orçamento
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy-700 transition-all duration-300 hover:border-gold-400 hover:text-gold-700"
            >
              <PlayCircle size={16} />
              Ver projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 border-t border-navy-700/10 pt-6"
          >
            <div>
              <p className="font-display text-2xl font-bold text-navy-800">+80</p>
              <p className="text-xs text-navy-400">projetos entregues</p>
            </div>
            <div className="h-8 w-px bg-navy-700/10" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-800">98%</p>
              <p className="text-xs text-navy-400">clientes satisfeitos</p>
            </div>
            <div className="h-8 w-px bg-navy-700/10" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-800">5.0</p>
              <p className="text-xs text-navy-400">avaliação média</p>
            </div>
          </motion.div>
        </div>

        {/* Mockups */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-[100px]" />
          <div className="absolute left-1/3 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-navy-400/20 blur-[90px]" />

          <div className="relative mx-auto w-full animate-float">
            <div className="rounded-t-xl border-4 border-navy-800 bg-navy-800 p-2 shadow-premium">
              <div className="flex items-center gap-1.5 pb-2 pl-1">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-md bg-offwhite">
                <div className="flex h-full w-full flex-col">
                  <div className="flex items-center justify-between bg-white px-4 py-2.5">
                    <div className="h-2.5 w-16 rounded-full bg-navy-700" />
                    <div className="flex gap-2">
                      <div className="h-2 w-8 rounded-full bg-navy-100" />
                      <div className="h-2 w-8 rounded-full bg-navy-100" />
                      <div className="h-2 w-10 rounded-full bg-gold-500" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-center gap-3 bg-gradient-to-br from-navy-700 to-navy-900 px-6">
                    <div className="h-2 w-24 rounded-full bg-gold-400/80" />
                    <div className="h-4 w-52 rounded-full bg-white/90" />
                    <div className="h-4 w-40 rounded-full bg-white/60" />
                    <div className="mt-2 h-8 w-28 rounded-full bg-gold-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-navy-700" />
            <div className="mx-auto h-1.5 w-[40%] rounded-b-lg bg-navy-900" />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-2 w-28 animate-floatSlow sm:w-32 lg:-right-6 lg:w-36"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="rounded-[1.6rem] border-4 border-navy-800 bg-navy-800 p-1.5 shadow-premium">
              <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.1rem] bg-offwhite">
                <div className="flex h-full flex-col gap-2 bg-gradient-to-b from-navy-700 to-navy-900 p-3">
                  <div className="h-1.5 w-10 rounded-full bg-gold-400/80" />
                  <div className="h-2.5 w-16 rounded-full bg-white/90" />
                  <div className="mt-2 h-16 w-full rounded-lg bg-white/10" />
                  <div className="h-16 w-full rounded-lg bg-white/10" />
                  <div className="mt-auto h-6 w-full rounded-full bg-gold-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
