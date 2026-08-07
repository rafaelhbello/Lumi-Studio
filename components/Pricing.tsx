'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { pricing } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="valores" className="relative bg-white py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionReveal className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Valores
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
            Quanto custa, por tipo de entrega
          </h2>
          <p className="mt-4 text-navy-500">
            Landing page, site institucional ou campanha. O valor segue o que entra em cada
            projeto — sem rótulos genéricos.
          </p>
        </SectionReveal>

        <div className="mt-16 flex flex-col gap-6">
          {pricing.map((item, i) => (
            <SectionReveal key={item.type} delay={i * 0.06}>
              <motion.article
                whileHover={{ borderColor: 'rgba(200, 162, 76, 0.45)' }}
                className="rounded-2xl border border-navy-700/10 bg-offwhite p-6 transition-colors duration-300 sm:p-8"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  {/* Esquerda: tipo + descrição + o que inclui */}
                  <div className="max-w-xl flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                        {item.type}
                      </h3>
                      <span className="text-sm font-medium text-gold-600">{item.pages}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-navy-500">
                      {item.description}
                    </p>
                    {item.includes && item.includes.length > 0 && (
                      <ul className="mt-5 flex flex-col gap-2">
                        {item.includes.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm text-navy-700"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 flex-shrink-0 text-gold-600"
                              strokeWidth={2.5}
                            />
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Direita: faixas de preço */}
                  <div className="w-full shrink-0 lg:w-64">
                    <ul className="flex flex-col gap-3">
                      {item.ranges.map((range) => (
                        <li
                          key={range.value}
                          className="rounded-xl border border-navy-700/8 bg-white px-4 py-3"
                        >
                          <p className="text-xs leading-snug text-navy-400">{range.label}</p>
                          <p className="mt-0.5 font-display text-lg font-bold text-navy-800">
                            {range.value}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#cta"
                      className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      Solicitar orçamento
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.15} className="mt-10">
          <p className="text-sm text-navy-400">
            Valores de referência. O orçamento final depende do escopo e do prazo — fale no
            WhatsApp para um valor sob medida.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
