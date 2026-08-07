'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import AmbientBackground from './AmbientBackground';

function BrowserScreen({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-md bg-offwhite ${className}`}>
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center justify-between bg-white px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="h-2 w-12 rounded-full bg-navy-700 sm:h-2.5 sm:w-16" />
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-1.5 w-6 rounded-full bg-navy-100 sm:h-2 sm:w-8" />
            <div className="h-1.5 w-6 rounded-full bg-navy-100 sm:h-2 sm:w-8" />
            <div className="h-1.5 w-8 rounded-full bg-gold-500 sm:h-2 sm:w-10" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center gap-2 bg-gradient-to-br from-navy-700 to-navy-900 px-4 sm:gap-3 sm:px-6">
          <div className="h-1.5 w-16 rounded-full bg-gold-400/80 sm:h-2 sm:w-24" />
          <div className="h-3 w-36 rounded-full bg-white/90 sm:h-4 sm:w-52" />
          <div className="h-3 w-28 rounded-full bg-white/60 sm:h-4 sm:w-40" />
          <div className="mt-1 h-6 w-20 rounded-full bg-gold-500 sm:mt-2 sm:h-8 sm:w-28" />
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col gap-2 bg-gradient-to-b from-navy-700 to-navy-900 p-3">
      <div className="h-1.5 w-10 rounded-full bg-gold-400/80" />
      <div className="h-2.5 w-16 rounded-full bg-white/90" />
      <div className="mt-2 h-14 w-full rounded-lg bg-white/10" />
      <div className="h-14 w-full rounded-lg bg-white/10" />
      <div className="mt-auto h-6 w-full rounded-full bg-gold-500" />
    </div>
  );
}

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

        {/* Mockups em cascata */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-[100px]" />
          <div className="absolute left-1/3 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-navy-400/20 blur-[90px]" />

          <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
            {/* Camada 3 — fundo (mais atrás, menor, deslocada) */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -28, rotate: -6 }}
              animate={{
                opacity: 0.55,
                y: [0, -8, 0],
                x: -28,
                rotate: -6,
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.15 },
                y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
              }}
              className="absolute left-[4%] top-[8%] z-0 w-[72%]"
            >
              <div className="rounded-t-lg border-[3px] border-navy-800/80 bg-navy-800/80 p-1.5 shadow-lg">
                <div className="mb-1 flex gap-1 pl-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                </div>
                <BrowserScreen className="aspect-[16/10] opacity-90" />
              </div>
            </motion.div>

            {/* Camada 2 — meio */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: 20, rotate: 4 }}
              animate={{
                opacity: 0.75,
                y: [0, -12, 0],
                x: 20,
                rotate: 4,
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.28 },
                y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
              }}
              className="absolute right-[2%] top-[2%] z-[1] w-[78%]"
            >
              <div className="rounded-t-lg border-[3px] border-navy-800 bg-navy-800 p-1.5 shadow-xl">
                <div className="mb-1 flex gap-1 pl-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                </div>
                <BrowserScreen className="aspect-[16/10]" />
              </div>
            </motion.div>

            {/* Camada 1 — notebook principal (frente) */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{
                opacity: 1,
                y: [0, -14, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute bottom-[6%] left-[8%] z-[2] w-[84%]"
            >
              <div className="rounded-t-xl border-4 border-navy-800 bg-navy-800 p-2 shadow-premium">
                <div className="flex items-center gap-1.5 pb-2 pl-1">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <BrowserScreen className="aspect-[16/10]" />
              </div>
              <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-navy-700" />
              <div className="mx-auto h-1.5 w-[40%] rounded-b-lg bg-navy-900" />
            </motion.div>

            {/* Celular — cascata na frente/direita */}
            <motion.div
              initial={{ opacity: 0, y: 70, x: 30 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                x: 0,
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.55 },
                x: { duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
              }}
              className="absolute -bottom-2 right-0 z-[3] w-[26%] min-w-[5.5rem] sm:min-w-[7rem] lg:right-[-2%]"
            >
              <div className="rounded-[1.4rem] border-4 border-navy-800 bg-navy-800 p-1.5 shadow-premium sm:rounded-[1.6rem]">
                <div className="aspect-[9/19] w-full overflow-hidden rounded-[1rem] bg-offwhite sm:rounded-[1.1rem]">
                  <PhoneScreen />
                </div>
              </div>
            </motion.div>

            {/* Celular menor atrás (eco da cascata) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 0.5,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.7 },
                y: { duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
              }}
              className="absolute bottom-[18%] right-[22%] z-[1] w-[18%] min-w-[3.5rem] rotate-[-8deg] sm:min-w-[4.5rem]"
            >
              <div className="rounded-[1rem] border-[3px] border-navy-800/70 bg-navy-800/70 p-1 shadow-lg">
                <div className="aspect-[9/19] w-full overflow-hidden rounded-[0.7rem] bg-offwhite opacity-90">
                  <PhoneScreen />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
