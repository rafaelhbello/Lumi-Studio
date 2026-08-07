'use client';

import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Rocket,
  Building2,
  Search,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import { services } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  LayoutTemplate,
  Rocket,
  Building2,
  Search,
  Server,
  Wrench,
};

export default function Services() {
  return (
    <section id="servicos" className="relative bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            O que fazemos
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Soluções digitais completas para o seu negócio
          </h2>
          <p className="mt-4 text-navy-500">
            Do primeiro contato ao suporte contínuo, cuidamos de cada etapa da sua presença
            digital com precisão e sofisticação.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-navy-700/8 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-premium"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-100/0 transition-all duration-500 group-hover:bg-gold-100/60" />
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 transition-colors duration-300 group-hover:bg-gold-500">
                    <Icon size={22} className="text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative font-display text-lg font-semibold text-navy-800">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-navy-500">
                    {service.description}
                  </p>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
