import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BriefingWizard from '@/components/briefing/BriefingWizard';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Monte seu projeto',
  description:
    'Conte como você imagina seu site em poucos passos. Briefing interativo da LUMI Studio — rápido, visual e sem burocracia.',
};

export default function MonteSeuProjetoPage() {
  return (
    <main className="min-h-screen bg-offwhite dark:bg-navy-900">
      <Navbar />

      <section className="pb-24 pt-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
              Briefing interativo
            </p>
            <h1 className="font-display text-3xl font-bold text-navy-800 dark:text-white sm:text-4xl">
              Monte seu projeto
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-navy-500 dark:text-navy-100/70">
              Conte como você imagina seu site. Responda com cliques — a gente transforma em
              proposta.
            </p>
          </div>

          <BriefingWizard />

          <p className="mt-10 text-center text-xs text-navy-400 dark:text-navy-100/40">
            <Link href="/" className="hover:text-gold-600">
              ← Voltar para o site
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
