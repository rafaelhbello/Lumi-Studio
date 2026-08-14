'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  User,
  Heart,
  Stethoscope,
  Scale,
  Store,
  Utensils,
  Wrench,
  Landmark,
  MoreHorizontal,
  Rocket,
  Image,
  ShoppingCart,
  Briefcase,
  Newspaper,
  Rss,
  Users,
  MessageSquare,
  Mail,
  Calendar,
  Headphones,
  Lock,
  MessageCircle,
  ClipboardList,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Music,
  BarChart3,
  Target,
  Search,
  Phone,
  Settings,
  CreditCard,
  Folder,
  FileText,
  Eye,
  Megaphone,
  Video,
  Building,
  CheckCircle2,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import OptionCard from './OptionCard';
import Chip from './Chip';
import {
  businessTypes,
  areasByType,
  pageOptions,
  featureOptions,
  segmentFeatures,
  materialOptions,
  styleOptions,
  colorPalettes,
  goalOptions,
  deadlineOptions,
  budgetOptions,
  STEP_TITLES,
  TOTAL_STEPS,
} from '@/lib/briefing-data';
import { buildCommercialSummary, type BriefingAnswers } from '@/lib/briefing-summary';

const WHATSAPP = '5586981302894';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  User,
  HeartPulse: Heart,
  Heart,
  Stethoscope,
  Scale,
  Store,
  UtensilsCrossed: Utensils,
  Utensils,
  Wrench,
  Landmark,
  MoreHorizontal,
  Rocket,
  Images: Image,
  Image,
  ShoppingCart,
  Briefcase,
  Newspaper,
  Rss,
  Users,
  MessageSquareQuote: MessageSquare,
  MessageSquare,
  Mail,
  Calendar,
  CalendarCheck: Calendar,
  Headphones,
  Lock,
  MessageCircle,
  ClipboardList,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Music2: Music,
  Music,
  BarChart3,
  Target,
  Search,
  MessagesSquare: MessageSquare,
  Phone,
  Settings,
  CreditCard,
  ShoppingBag: ShoppingCart,
  FolderKanban: Folder,
  Folder,
  FileText,
  Eye,
  Megaphone,
  Video,
  Building,
};

const initial: BriefingAnswers = {
  businessType: null,
  areas: [],
  pages: [],
  features: [],
  identidade: null,
  logo: null,
  fotos: null,
  textos: null,
  dominio: null,
  hospedagem: null,
  styles: [],
  colors: null,
  goals: [],
  deadline: null,
  budget: null,
  name: '',
  whatsapp: '',
  email: '',
  instagram: '',
  company: '',
};

function toggleInList(list: string[], id: string, max?: number) {
  if (list.includes(id)) return list.filter((x) => x !== id);
  if (max && list.length >= max) return [...list.slice(1), id];
  return [...list, id];
}

export default function BriefingWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<BriefingAnswers>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [summaryPreview, setSummaryPreview] = useState<string | null>(null);

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const areas = useMemo(() => {
    if (!answers.businessType) return [];
    return areasByType[answers.businessType] ?? [];
  }, [answers.businessType]);

  const featuresList = useMemo(() => {
    const base = [...featureOptions];
    const extra = answers.businessType ? segmentFeatures[answers.businessType] ?? [] : [];
    const seen = new Set<string>(base.map((f) => f.id));
    const merged = [...base];
    for (const f of extra) {
      if (!seen.has(f.id)) {
        merged.push(f as (typeof featureOptions)[number]);
        seen.add(f.id);
      }
    }
    return merged;
  }, [answers.businessType]);

  const set = <K extends keyof BriefingAnswers>(key: K, value: BriefingAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };
  const back = () => {
    if (step > 0) setStep((s) => s - 1);
  };
  const skip = () => next();

  const submit = async () => {
    setError('');
    if (!answers.name.trim() || !answers.whatsapp.trim()) {
      setError('Preencha nome e WhatsApp para enviar.');
      return;
    }
    if (submitting) return;
    setSubmitting(true);

    try {
      const summary = buildCommercialSummary(answers);
      setSummaryPreview(summary.headline);

      const payload = {
        ...answers,
        summary,
        submittedAt: new Date().toISOString(),
      };

      try {
        const prev = JSON.parse(localStorage.getItem('lumi-briefings') || '[]');
        prev.push(payload);
        localStorage.setItem('lumi-briefings', JSON.stringify(prev));
      } catch {
        /* ignore */
      }

      window.open(`https://wa.me/${WHATSAPP}?text=${summary.whatsappMessage}`, '_blank');
      setDone(true);
    } catch {
      setError('Algo deu errado. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-xl rounded-3xl border border-navy-700/8 bg-white p-8 text-center shadow-soft dark:border-white/10 dark:bg-navy-800/60 sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15">
          <CheckCircle2 className="text-gold-600" size={32} />
        </div>
        <h2 className="font-display text-2xl font-bold text-navy-800 dark:text-white">
          Recebemos suas informações.
        </h2>
        <p className="mt-3 text-navy-500 dark:text-navy-100/70">
          Vamos analisar seu projeto e entraremos em contato para apresentar as melhores opções
          para você.
        </p>
        {summaryPreview && (
          <p className="mt-6 rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm font-medium text-navy-800 dark:text-gold-300">
            {summaryPreview}
          </p>
        )}
        <a
          href="/#top"
          className="mt-8 inline-flex rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white dark:bg-gold-500 dark:text-navy-900"
        >
          Voltar ao início
        </a>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-100/50">
          <span>
            Etapa {step + 1} de {TOTAL_STEPS}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-navy-700/10 dark:bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gold-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl font-bold text-navy-800 dark:text-white sm:text-3xl">
            {STEP_TITLES[step]}
          </h2>

          <div className="mt-8 space-y-8">
            {step === 0 && (
              <>
                <div>
                  <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                    Qual é o seu tipo de negócio?
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {businessTypes.map((b) => {
                      const Icon = iconMap[b.icon] ?? MoreHorizontal;
                      return (
                        <OptionCard
                          key={b.id}
                          label={b.label}
                          icon={Icon}
                          selected={answers.businessType === b.id}
                          onClick={() => {
                            set('businessType', b.id);
                            set('areas', []);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                {answers.businessType && areas.length > 0 && areas[0] !== 'Outro' && (
                  <div>
                    <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                      Qual é sua área? (pode marcar mais de uma)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {areas.map((area) => (
                        <Chip
                          key={area}
                          label={area}
                          selected={answers.areas.includes(area)}
                          onClick={() => set('areas', toggleInList(answers.areas, area))}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pageOptions.map((p) => {
                  const Icon = iconMap[p.icon] ?? MoreHorizontal;
                  return (
                    <OptionCard
                      key={p.id}
                      label={p.label}
                      icon={Icon}
                      multi
                      selected={answers.pages.includes(p.id)}
                      onClick={() => set('pages', toggleInList(answers.pages, p.id))}
                    />
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {featuresList.map((f) => {
                  const Icon = iconMap[f.icon] ?? MoreHorizontal;
                  return (
                    <OptionCard
                      key={f.id}
                      label={f.label}
                      icon={Icon}
                      multi
                      selected={answers.features.includes(f.id)}
                      onClick={() => set('features', toggleInList(answers.features, f.id))}
                    />
                  );
                })}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-7">
                {(
                  [
                    ['identidade', 'Você já tem identidade visual?', materialOptions.identidade],
                    ['logo', 'Você já possui logo?', materialOptions.logo],
                    ['fotos', 'Você já possui fotos profissionais?', materialOptions.fotos],
                    ['textos', 'Você já possui textos para o site?', materialOptions.textos],
                    ['dominio', 'Você já possui domínio?', materialOptions.dominio],
                    ['hospedagem', 'Você já possui hospedagem?', materialOptions.hospedagem],
                  ] as const
                ).map(([key, question, opts]) => (
                  <div key={key}>
                    <p className="mb-3 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                      {question}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {opts.map((o) => (
                        <Chip
                          key={o.id}
                          label={o.label}
                          selected={answers[key] === o.id}
                          onClick={() => set(key, o.id)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <>
                <div>
                  <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                    Qual estilo combina mais com sua marca? (até 3)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {styleOptions.map((s) => (
                      <Chip
                        key={s.id}
                        label={s.label}
                        selected={answers.styles.includes(s.id)}
                        onClick={() => set('styles', toggleInList(answers.styles, s.id, 3))}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                    Quais cores você gostaria de usar?
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {colorPalettes.map((p) => (
                      <OptionCard
                        key={p.id}
                        label={p.label}
                        colors={p.colors.length ? p.colors : undefined}
                        selected={answers.colors === p.id}
                        onClick={() => set('colors', p.id)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 5 && (
              <>
                <div>
                  <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                    O que você quer alcançar?
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {goalOptions.map((g) => (
                      <OptionCard
                        key={g.id}
                        label={g.label}
                        multi
                        selected={answers.goals.includes(g.id)}
                        onClick={() => set('goals', toggleInList(answers.goals, g.id))}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                    Quando você gostaria de colocar o site no ar?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {deadlineOptions.map((d) => (
                      <Chip
                        key={d.id}
                        label={d.label}
                        selected={answers.deadline === d.id}
                        onClick={() => set('deadline', d.id)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 6 && (
              <div>
                <p className="mb-4 text-sm font-medium text-navy-500 dark:text-navy-100/60">
                  Você já possui uma faixa de investimento definida? (opcional)
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {budgetOptions.map((b) => (
                    <OptionCard
                      key={b.id}
                      label={b.label}
                      selected={answers.budget === b.id}
                      onClick={() => set('budget', b.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-4">
                <Field
                  label="Nome *"
                  value={answers.name}
                  onChange={(v) => set('name', v)}
                  placeholder="Seu nome"
                  required
                />
                <Field
                  label="WhatsApp *"
                  value={answers.whatsapp}
                  onChange={(v) => set('whatsapp', v)}
                  placeholder="(86) 99999-9999"
                  required
                />
                <Field
                  label="E-mail"
                  value={answers.email}
                  onChange={(v) => set('email', v)}
                  placeholder="voce@email.com"
                  type="email"
                />
                <Field
                  label="Instagram"
                  value={answers.instagram}
                  onChange={(v) => set('instagram', v)}
                  placeholder="@seuinstagram"
                />
                <Field
                  label="Nome da empresa / profissional"
                  value={answers.company}
                  onChange={(v) => set('company', v)}
                  placeholder="Opcional"
                />
                {error && <p className="text-sm font-medium text-red-600">{error}</p>}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-navy-700/8 pt-6 dark:border-white/10">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-navy-600 transition-colors hover:text-navy-900 disabled:opacity-30 dark:text-navy-100/70 dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Voltar
        </button>

        <div className="flex flex-wrap gap-2">
          {step < TOTAL_STEPS - 1 && (
            <button
              type="button"
              onClick={skip}
              className="rounded-full border border-navy-700/10 px-5 py-3 text-sm font-semibold text-navy-500 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-white/10 dark:text-navy-100/60"
            >
              Pular esta etapa
            </button>
          )}
          {step < TOTAL_STEPS - 1 ? (
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 dark:bg-gold-500 dark:text-navy-900 dark:hover:bg-gold-400"
            >
              Continuar
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-navy-900 shadow-gold transition-colors hover:bg-gold-400 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Enviando…
                </>
              ) : (
                'Enviar meu projeto'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-600 dark:text-navy-100/70">
        {label}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-700/10 bg-white px-4 py-3.5 text-sm text-navy-800 outline-none transition-colors placeholder:text-navy-300 focus:border-gold-500 dark:border-white/10 dark:bg-navy-900 dark:text-white dark:placeholder:text-navy-100/30"
      />
    </label>
  );
}
