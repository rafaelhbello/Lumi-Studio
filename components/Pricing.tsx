'use client';

import { motion } from 'framer-motion';
import { FileText, Building2, Vote, ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { pricing } from '@/lib/data';

const icons = [FileText, Building2, Vote];

export default function Pricing() {
  return (
    <section id="valores" className="relative bg-offwhite py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Valores
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Quanto custa, por tipo de entrega
          </h2>
          <p className="mt-4 text-navy-500">
            O valor muda conforme o que você precisa: uma página, várias páginas ou um site de
            campanha. Sem rótulos genéricos — só o que entra em cada entrega.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricing.map((item, i) => {
            const Icon = icons[i] ?? FileText;
            return (
              <SectionReveal key={item.type} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-premium"
                >
                  <div className="border-b border-navy-700/8 bg-navy-800 px-7 py-6">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
                      <Icon size={22} className="text-gold-400" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{item.type}</h3>
                    <p className="mt-1 text-sm text-gold-300">{item.pages}</p>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm leading-relaxed text-navy-500">{item.description}</p>

                    <ul className="mt-6 flex flex-col gap-4">
                      {item.ranges.map((range) => (
                        <li
                          key={range.value}
                          className="border-t border-navy-700/8 pt-4 first:border-0 first:pt-0"
                        >
                          <p className="text-xs leading-snug text-navy-400">{range.label}</p>
                          <p className="mt-1 font-display text-lg font-bold text-navy-800">
                            {range.value}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#cta"
                      className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      Solicitar orçamento
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-navy-400">
            Os valores são faixas de referência. O orçamento final depende do escopo e do prazo.
            Fale com a gente no WhatsApp para um valor sob medida.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
