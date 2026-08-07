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
import { Container, SectionHeader, Card } from './ui';
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
    <section id="servicos" className="ds-section bg-white">
      <Container>
        <SectionReveal>
          <SectionHeader
            eyebrow="O que fazemos"
            title="Soluções digitais completas para o seu negócio"
            description="Do primeiro contato ao suporte contínuo, cuidamos de cada etapa da sua presença digital com precisão e sofisticação."
          />
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                  <Card hover padding="lg" className="group relative h-full overflow-hidden">
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
                  </Card>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
