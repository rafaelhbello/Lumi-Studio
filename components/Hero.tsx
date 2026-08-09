'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import AmbientBackground from './AmbientBackground';
import Logo from './Logo';

function BrowserScreen({ variant = 0 }: { variant?: number }) {
  if (variant === 1) {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b border-navy-700/10 bg-white px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <Logo className="h-3.5 w-3.5" />
            <span className="font-display text-[7px] font-bold text-navy-800">
              LUMI <span className="text-gold-600">Studio</span>
            </span>
          </div>
          <div className="flex gap-2">
            <div className="h-1 w-6 rounded-full bg-navy-100" />
            <div className="h-1 w-6 rounded-full bg-navy-100" />
            <div className="h-1 w-8 rounded-full bg-navy-700" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 bg-offwhite p-3">
          <div className="h-1.5 w-12 rounded-full bg-gold-500/70" />
          <div className="h-2.5 w-28 rounded-full bg-navy-800/90" />
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-navy-700/8 bg-white p-1.5">
                <div className="mb-1 h-4 w-4 rounded bg-navy-700" />
                <div className="h-1 w-full rounded-full bg-navy-200" />
                <div className="mt-0.5 h-1 w-2/3 rounded-full bg-navy-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b border-navy-700/10 bg-white px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <Logo className="h-3.5 w-3.5" />
            <span className="font-display text-[7px] font-bold text-navy-800">
              LUMI <span className="text-gold-600">Studio</span>
            </span>
          </div>
          <div className="h-1 w-8 rounded-full bg-gold-500" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 bg-white p-3">
          <div className="h-1.5 w-10 rounded-full bg-gold-500/70" />
          <div className="h-2 w-24 rounded-full bg-navy-800" />
          <div className="mt-1 flex flex-col gap-1">
            {['Landing', 'Institucional', 'Campanha'].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-md border border-navy-700/8 bg-offwhite px-2 py-1.5"
              >
                <span className="text-[6px] font-semibold text-navy-700">{t}</span>
                <span className="text-[6px] font-bold text-navy-800">R$</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-offwhite">
      <div className="flex items-center justify-between border-b border-navy-700/10 bg-white/90 px-3 py-1.5 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <Logo className="h-3.5 w-3.5" />
          <span className="font-display text-[7px] font-bold text-navy-800">
            LUMI <span className="text-gold-600">Studio</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden gap-1.5 sm:flex">
            <div className="h-1 w-5 rounded-full bg-navy-100" />
            <div className="h-1 w-5 rounded-full bg-navy-100" />
            <div className="h-1 w-5 rounded-full bg-navy-100" />
          </div>
          <div className="h-3 w-12 rounded-full bg-navy-700" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 p-3">
        <div className="flex flex-col justify-center gap-1.5">
          <div className="inline-flex w-fit items-center gap-1 rounded-full border border-gold-300/50 bg-white px-1.5 py-0.5">
            <span className="h-1 w-1 rounded-full bg-gold-500" />
            <span className="text-[5px] font-semibold uppercase tracking-wide text-gold-700">
              Digital Agency
            </span>
          </div>
          <div className="space-y-0.5">
            <div className="h-2 w-full rounded-sm bg-navy-800" />
            <div className="h-2 w-4/5 rounded-sm bg-navy-800" />
            <div className="h-2 w-1/2 rounded-sm bg-gold-500" />
          </div>
          <div className="mt-0.5 h-1.5 w-full rounded-full bg-navy-200" />
          <div className="mt-1 flex gap-1">
            <div className="h-3.5 w-14 rounded-full bg-navy-700" />
            <div className="h-3.5 w-12 rounded-full border border-navy-700/20 bg-white" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-navy-700 to-navy-900 opacity-90" />
          <div className="relative z-10 flex w-[85%] flex-col gap-1 rounded border border-white/10 bg-navy-800/80 p-2">
            <div className="flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </div>
            <div className="h-8 rounded bg-gradient-to-br from-navy-600 to-navy-900" />
            <div className="h-1.5 w-10 rounded-full bg-gold-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-offwhite">
      <div className="flex items-center justify-between bg-white px-2 py-1.5">
        <div className="flex items-center gap-1">
          <Logo className="h-3 w-3" />
          <span className="font-display text-[6px] font-bold text-navy-800">LUMI</span>
        </div>
        <div className="h-2.5 w-2.5 rounded-sm bg-navy-700" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-2">
        <div className="inline-flex w-fit items-center gap-0.5 rounded-full border border-gold-300/40 bg-white px-1 py-0.5">
          <span className="h-0.5 w-0.5 rounded-full bg-gold-500" />
          <span className="text-[4px] font-semibold text-gold-700">AGENCY</span>
        </div>
        <div className="h-1.5 w-full rounded-sm bg-navy-800" />
        <div className="h-1.5 w-3/4 rounded-sm bg-navy-800" />
        <div className="h-1.5 w-1/2 rounded-sm bg-gold-500" />
        <div className="mt-0.5 h-1 w-full rounded-full bg-navy-200" />
        <div className="mt-1 h-4 w-full rounded-full bg-navy-700" />
        <div className="mt-auto grid grid-cols-3 gap-1 border-t border-navy-700/10 pt-1.5">
          <div className="text-center">
            <div className="mx-auto h-1.5 w-4 rounded-full bg-navy-800" />
            <div className="mx-auto mt-0.5 h-0.5 w-6 rounded-full bg-navy-200" />
          </div>
          <div className="text-center">
            <div className="mx-auto h-1.5 w-4 rounded-full bg-navy-800" />
            <div className="mx-auto mt-0.5 h-0.5 w-6 rounded-full bg-navy-200" />
          </div>
          <div className="text-center">
            <div className="mx-auto h-1.5 w-4 rounded-full bg-navy-800" />
            <div className="mx-auto mt-0.5 h-0.5 w-6 rounded-full bg-navy-200" />
          </div>
        </div>
      </div>
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
      className="relative flex min-h-screen items-center overflow-hidden bg-offwhite pt-28 dark:bg-navy-900"
    >
      <AmbientBackground />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700 shadow-sm dark:border-gold-500/40 dark:bg-navy-800 dark:text-gold-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Digital Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-800 dark:text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Seu studio que o seu site{' '}
            <span className="text-gradient-gold">precisa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600 dark:text-navy-100/70"
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
              className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy-700 px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition-all duration-300 hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-900 dark:hover:bg-gold-400"
            >
              Solicitar orçamento
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-navy-700/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy-700 transition-all duration-300 hover:border-gold-400 hover:text-gold-700 dark:border-white/15 dark:bg-navy-800 dark:text-navy-50 dark:hover:border-gold-400 dark:hover:text-gold-300"
            >
              <PlayCircle size={16} />
              Ver projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 border-t border-navy-700/10 pt-6 dark:border-white/10"
          >
            <div>
              <p className="font-display text-2xl font-bold text-navy-800 dark:text-white">+80</p>
              <p className="text-xs text-navy-400 dark:text-navy-100/50">projetos entregues</p>
            </div>
            <div className="h-8 w-px bg-navy-700/10 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-800 dark:text-white">98%</p>
              <p className="text-xs text-navy-400 dark:text-navy-100/50">clientes satisfeitos</p>
            </div>
            <div className="h-8 w-px bg-navy-700/10 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-navy-800 dark:text-white">5.0</p>
              <p className="text-xs text-navy-400 dark:text-navy-100/50">avaliação média</p>
            </div>
          </motion.div>
        </div>

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
            <motion.div
              className="absolute inset-[6%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute left-0 top-[18%] w-[58%] -translate-x-[8%] -rotate-12">
                <div className="rounded-t-lg border-[3px] border-navy-800/70 bg-navy-800/70 p-1.5 opacity-70 shadow-lg">
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

              <div className="absolute right-0 top-[8%] w-[62%] translate-x-[6%] rotate-[10deg]">
                <div className="rounded-t-lg border-[3px] border-navy-800/80 bg-navy-800/80 p-1.5 opacity-80 shadow-xl">
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

            <motion.div
              className="absolute inset-[18%]"
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute bottom-[5%] left-[5%] w-[28%] -rotate-[14deg] opacity-55">
                <div className="rounded-[1rem] border-[3px] border-navy-800/70 bg-navy-800/70 p-1 shadow-lg">
                  <div className="aspect-[9/19] overflow-hidden rounded-[0.7rem] bg-offwhite">
                    <PhoneScreen />
                  </div>
                </div>
              </div>
            </motion.div>

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
