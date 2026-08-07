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

const cardGradients = [
  'from-gold-500/20 to-gold-500/5',
  'from-emerald-500/20 to-emerald-500/5',
  'from-sky-500/20 to-sky-500/5',
  'from-violet-500/20 to-violet-500/5',
  'from-rose-500/20 to-rose-500/5',
  'from-amber-500/20 to-amber-500/5',
  'from-cyan-500/20 to-cyan-500/5',
  'from-indigo-500/20 to-indigo-500/5',
  'from-teal-500/20 to-teal-500/5',
  'from-orange-500/20 to-orange-500/5',
  'from-pink-500/20 to-pink-500/5',
];

const iconColors = [
  'text-gold-400',
  'text-emerald-400',
  'text-sky-400',
  'text-violet-400',
  'text-rose-400',
  'text-amber-400',
  'text-cyan-400',
  'text-indigo-400',
  'text-teal-400',
  'text-orange-400',
  'text-pink-400',
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-navy-800 py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,162,76,0.18),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
            const gradient = cardGradients[i % cardGradients.length];
            const iconColor = iconColors[i % iconColors.length];
            return (
              <SectionReveal key={item.label} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} px-4 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold-400/40 hover:shadow-lg hover:shadow-gold-500/10`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/15 group-hover:ring-gold-400/30">
                    <Icon size={24} className={iconColor} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.2} className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-10 backdrop-blur-sm">
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
