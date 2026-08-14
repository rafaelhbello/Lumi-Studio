import {
  businessTypes,
  pageOptions,
  featureOptions,
  styleOptions,
  colorPalettes,
  goalOptions,
  deadlineOptions,
  budgetOptions,
  segmentFeatures,
  type BusinessType,
} from './briefing-data';

export type BriefingAnswers = {
  businessType: BusinessType | null;
  areas: string[];
  pages: string[];
  features: string[];
  identidade: string | null;
  logo: string | null;
  fotos: string | null;
  textos: string | null;
  dominio: string | null;
  hospedagem: string | null;
  styles: string[];
  colors: string | null;
  goals: string[];
  deadline: string | null;
  budget: string | null;
  name: string;
  whatsapp: string;
  email: string;
  instagram: string;
  company: string;
};

export type CommercialSummary = {
  headline: string;
  priority: 'alta' | 'média' | 'baixa';
  complexity: 'simples' | 'média' | 'alta';
  score: number;
  tags: string[];
  text: string;
  whatsappMessage: string;
};

function labelOf(list: { id: string; label: string }[], id: string) {
  return list.find((x) => x.id === id)?.label ?? id;
}

export function buildCommercialSummary(a: BriefingAnswers): CommercialSummary {
  const tipo = a.businessType
    ? businessTypes.find((b) => b.id === a.businessType)?.label ?? a.businessType
    : 'Não informado';
  const areas = a.areas.length ? a.areas.join(', ') : '—';
  const pages = a.pages.map((id) => labelOf([...pageOptions], id));
  const allFeatures = [
    ...featureOptions,
    ...(a.businessType ? segmentFeatures[a.businessType] ?? [] : []),
  ];
  const features = a.features.map((id) => labelOf(allFeatures as { id: string; label: string }[], id));
  const styles = a.styles.map((id) => labelOf(styleOptions, id));
  const colors = a.colors ? labelOf(colorPalettes, a.colors) : '—';
  const goals = a.goals.map((id) => labelOf(goalOptions, id));
  const deadline = a.deadline ? labelOf(deadlineOptions, a.deadline) : '—';
  const budget = a.budget ? labelOf(budgetOptions, a.budget) : '—';

  // Complexidade heurística
  let score = 0;
  score += a.pages.length * 2;
  score += a.features.length;
  if (a.pages.includes('loja') || a.features.includes('pagamento') || a.features.includes('checkout'))
    score += 8;
  if (a.features.includes('agendamento') || a.features.includes('admin') || a.features.includes('clientes'))
    score += 5;
  if (a.pages.includes('membros') || a.features.includes('calendario')) score += 4;
  if (a.businessType === 'politico') score += 3;

  const complexity: CommercialSummary['complexity'] =
    score >= 20 ? 'alta' : score >= 10 ? 'média' : 'simples';

  const priority: CommercialSummary['priority'] =
    a.deadline === 'asap' || a.budget === 'acima-5000' || a.budget === '3000-5000'
      ? 'alta'
      : a.deadline === 'sem-prazo' || a.budget === 'nao-defini'
        ? 'baixa'
        : 'média';

  const tags = [
    tipo,
    a.areas[0],
    pages[0],
    features.includes('WhatsApp') ? 'WhatsApp' : null,
    features.includes('SEO') ? 'SEO' : null,
    features.includes('Agendamento online') ? 'Agendamento' : null,
    `prioridade ${priority}`,
    `complexidade ${complexity}`,
  ].filter(Boolean) as string[];

  const headline = [
    a.areas[0] || tipo,
    pages[0] || 'site',
    features.slice(0, 2).join(' + ') || null,
    `prioridade ${priority}`,
  ]
    .filter(Boolean)
    .join(' / ');

  const text = [
    `CLIENTE: ${a.name || '—'}`,
    `EMPRESA: ${a.company || '—'}`,
    `SEGMENTO: ${areas}`,
    `TIPO: ${tipo}`,
    `OBJETIVO: ${goals.join(', ') || '—'}`,
    `PÁGINAS: ${pages.join(', ') || '—'}`,
    `FUNCIONALIDADES: ${features.join(', ') || '—'}`,
    `ESTILO: ${styles.join(', ') || '—'}`,
    `CORES: ${colors}`,
    `MATERIAIS: identidade=${a.identidade || '—'} | logo=${a.logo || '—'} | fotos=${a.fotos || '—'} | textos=${a.textos || '—'} | domínio=${a.dominio || '—'} | hospedagem=${a.hospedagem || '—'}`,
    `PRAZO: ${deadline}`,
    `ORÇAMENTO: ${budget}`,
    `CONTATO: WhatsApp ${a.whatsapp || '—'} | E-mail ${a.email || '—'} | Instagram ${a.instagram || '—'}`,
    `RESUMO IA: ${headline}`,
    `COMPLEXIDADE: ${complexity} | PRIORIDADE: ${priority}`,
  ].join('\n');

  const whatsappMessage = encodeURIComponent(
    `Olá! Montei meu projeto no site da LUMI:\n\n${text}`,
  );

  return { headline, priority, complexity, score, tags, text, whatsappMessage };
}
