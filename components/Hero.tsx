'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import AmbientBackground from './AmbientBackground';

function BrowserScreen({ variant = 0 }: { variant?: number }) {
  const themes = [
    'from-navy-700 to-navy-900',
    'from-navy-800 to-navy-900',
    'from-navy-600 to-navy-800',
  ];
  const theme = themes[variant % themes.length];

  return (
    <div className="overflow-hidden rounded-md bg-offwhite">
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center justify-between bg-white px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="h-2 w-12 rounded-full bg-navy-700 sm:h-2.5 sm:w-16" />
          <div className="flex gap-1.5 sm:gap-2">
            <div className="h-1.5 w-6 rounded-full bg-navy-100 sm:h-2 sm:w-8" />
            <div className="h-1.5 w-6 rounded-full bg-navy-100 sm:h-2 sm:w-8" />
            <div className="h-1.5 w-8 rounded-full bg-gold-500 sm:h-2 sm:w-10" />
          </div>
        </div>
        <div
          className={`flex flex-1 flex-col items-start justify-center gap-2 bg-gradient-to-br ${theme} px-4 sm:gap-3 sm:px-6`}
        >
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

        {/* Cascata + rotação contínua (estilo órbita) */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-[100px]" />
          <div className="absolute left-1/3 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-navy-400/20 blur-[90px]" />

          <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center lg:max-w-[480px]">
            {/* Anel externo — gira devagar no sentido horário */}
            <motion.div
              className="absolute inset-[6%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {/* Tela traseira esquerda */}
              <div className="absolute left-0 top-[18%] w-[58%] -translate-x-[8%] -rotate-12">
                <div className="rounded-t-lg border-[3px] border-navy-800/70 bg-navy-800/70 p-1.5 opacity-60 shadow-lg">
                  <div className="mb-1 flex gap-1 pl-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  </div>
                  <div className="aspect-[16/10]">
                    <BrowserScreen variant={1} />
                  </div>
                </div>
              </div>

              {/* Tela traseira direita */}
              <div className="absolute right-0 top-[8%] w-[62%] translate-x-[6%] rotate-[10deg]">
                <div className="rounded-t-lg border-[3px] border-navy-800/80 bg-navy-800/80 p-1.5 opacity-70 shadow-xl">
                  <div className="mb-1 flex gap-1 pl-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  </div>
                  <div className="aspect-[16/10]">
                    <BrowserScreen variant={2} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Anel interno — gira no sentido contrário (mais lento) */}
            <motion.div
              className="absolute inset-[18%]"
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            >
              {/* Celular orbitando atrás */}
              <div className="absolute bottom-[5%] left-[5%] w-[28%] -rotate-[14deg] opacity-50">
                <div className="rounded-[1rem] border-[3px] border-navy-800/70 bg-navy-800/70 p-1 shadow-lg">
                  <div className="aspect-[9/19] overflow-hidden rounded-[0.7rem] bg-offwhite">
                    <PhoneScreen />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Centro fixo — notebook principal (não gira o conteúdo, só flutua) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.35 },
                scale: { duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative z-20 w-[78%]"
            >
              <div className="rounded-t-xl border-4 border-navy-800 bg-navy-800 p-2 shadow-premium">
                <div className="flex items-center gap-1.5 pb-2 pl-1">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <div className="aspect-[16/10]">
                  <BrowserScreen variant={0} />
                </div>
              </div>
              <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-navy-700" />
              <div className="mx-auto h-1.5 w-[40%] rounded-b-lg bg-navy-900" />
            </motion.div>

            {/* Celular na frente — flutua, contra-rota sutil no anel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 },
                x: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
              }}
              className="absolute -bottom-1 right-0 z-30 w-[26%] min-w-[5.5rem] sm:min-w-[6.5rem]"
            >
              <div className="rounded-[1.4rem] border-4 border-navy-800 bg-navy-800 p-1.5 shadow-premium sm:rounded-[1.6rem]">
                <div className="aspect-[9/19] w-full overflow-hidden rounded-[1rem] bg-offwhite sm:rounded-[1.1rem]">
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
