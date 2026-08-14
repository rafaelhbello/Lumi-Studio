'use client';

import BriefingWizard from './briefing/BriefingWizard';
import SectionReveal from './SectionReveal';

export default function BriefingSection() {
  return (
    <section id="monte-seu-projeto" className="relative bg-offwhite py-28 dark:bg-navy-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionReveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            Briefing interativo
          </p>
          <h2 className="font-display text-3xl font-bold text-navy-800 dark:text-white sm:text-4xl">
            Monte seu projeto
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-navy-500 dark:text-navy-100/70">
            Conte como você imagina seu site. Responda com cliques — a gente transforma em proposta.
          </p>
        </SectionReveal>

        <BriefingWizard />
      </div>
    </section>
  );
}
