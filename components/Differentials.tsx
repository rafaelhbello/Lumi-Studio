'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Gauge,
  Smartphone,
  TrendingUp,
  MessageCircle,
  MapPin,
  ClipboardList,
  Globe,
  BarChart3,
  Target,
  Headset,
  type LucideIcon,
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import Counter from './Counter';
import { differentials } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Gauge,
  Smartphone,
  TrendingUp,
  MessageCircle,
  MapPin,
  ClipboardList,
  Globe,
  BarChart3,
  Target,
  Headset,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-navy-800 py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,162,76,0.12),_transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Por que escolher a LUMI?
          </h2>
          <p className="mt-4 text-navy-100/70">
            Cada projeto é entregue com um conjunto completo de recursos que garantem
            performance, credibilidade e resultado real.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {differentials.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <SectionReveal key={item.label} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(200,162,76,0.5)' }}
                  className="flex h-full flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-7 text-center transition-colors duration-300"
                >
                  <Icon size={24} className="text-gold-400" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-white/90">{item.label}</span>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.2} className="mt-20 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <StatWhite to={80} suffix="+" label="projetos entregues" />
            <StatWhite to={98} suffix="%" label="clientes satisfeitos" />
            <StatWhite to={5} suffix=" anos" label="de experiência" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function StatWhite({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  return (
    <div className="text-center [&_p:first-child]:text-white [&_p:last-child]:text-navy-100/60">
      <Counter to={to} suffix={suffix} label={label} />
    </div>
  );
}
