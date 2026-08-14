export type BusinessType =
  | 'empresa'
  | 'profissional'
  | 'clinica'
  | 'consultorio'
  | 'advocacia'
  | 'loja'
  | 'restaurante'
  | 'servicos'
  | 'politico'
  | 'outro';

export const businessTypes: { id: BusinessType; label: string; icon: string }[] = [
  { id: 'empresa', label: 'Empresa', icon: 'Building2' },
  { id: 'profissional', label: 'Profissional liberal', icon: 'User' },
  { id: 'clinica', label: 'Clínica', icon: 'HeartPulse' },
  { id: 'consultorio', label: 'Consultório', icon: 'Stethoscope' },
  { id: 'advocacia', label: 'Escritório de advocacia', icon: 'Scale' },
  { id: 'loja', label: 'Loja', icon: 'Store' },
  { id: 'restaurante', label: 'Restaurante', icon: 'UtensilsCrossed' },
  { id: 'servicos', label: 'Prestador de serviços', icon: 'Wrench' },
  { id: 'politico', label: 'Político / Mandato', icon: 'Landmark' },
  { id: 'outro', label: 'Outro', icon: 'MoreHorizontal' },
];

export const areasByType: Record<BusinessType, string[]> = {
  clinica: [
    'Nutricionista',
    'Psicólogo',
    'Psiquiatra',
    'Médico',
    'Dentista',
    'Fisioterapeuta',
    'Clínica',
    'Esteticista',
    'Outro',
  ],
  consultorio: [
    'Nutricionista',
    'Psicólogo',
    'Psiquiatra',
    'Médico',
    'Dentista',
    'Fisioterapeuta',
    'Esteticista',
    'Outro',
  ],
  profissional: [
    'Nutricionista',
    'Psicólogo',
    'Psiquiatra',
    'Médico',
    'Dentista',
    'Fisioterapeuta',
    'Esteticista',
    'Coach',
    'Consultor',
    'Outro',
  ],
  advocacia: [
    'Advocacia',
    'Direito Previdenciário',
    'Direito Trabalhista',
    'Direito de Família',
    'Direito Empresarial',
    'Direito do Consumidor',
    'Direito Criminal',
    'Imobiliário',
    'Outro',
  ],
  politico: [
    'Vereador',
    'Prefeito',
    'Deputado Estadual',
    'Deputado Federal',
    'Senador',
    'Mandato',
    'Candidato',
    'Outro',
  ],
  empresa: [
    'Comércio',
    'Serviços',
    'Tecnologia',
    'Alimentação',
    'Educação',
    'Saúde',
    'Construção',
    'Imobiliário',
    'Outro',
  ],
  loja: ['Varejo', 'Moda', 'Eletrônicos', 'Cosméticos', 'Alimentação', 'Outro'],
  restaurante: ['Restaurante', 'Café', 'Delivery', 'Bar', 'Padaria', 'Outro'],
  servicos: ['Serviços gerais', 'Manutenção', 'Consultoria', 'Beleza', 'Educação', 'Outro'],
  outro: ['Outro'],
};

export const pageOptions = [
  { id: 'institucional', label: 'Site institucional', icon: 'Building2' },
  { id: 'landing', label: 'Landing Page', icon: 'Rocket' },
  { id: 'profissional', label: 'Página profissional', icon: 'User' },
  { id: 'portfolio', label: 'Portfólio', icon: 'Images' },
  { id: 'loja', label: 'Loja virtual', icon: 'ShoppingCart' },
  { id: 'servicos', label: 'Página de serviços', icon: 'Briefcase' },
  { id: 'blog', label: 'Blog', icon: 'Newspaper' },
  { id: 'noticias', label: 'Área de notícias', icon: 'Rss' },
  { id: 'equipe', label: 'Página de equipe', icon: 'Users' },
  { id: 'depoimentos', label: 'Página de depoimentos', icon: 'MessageSquareQuote' },
  { id: 'contato', label: 'Página de contato', icon: 'Mail' },
  { id: 'agendamento', label: 'Página de agendamento', icon: 'Calendar' },
  { id: 'atendimento', label: 'Área de atendimento', icon: 'Headphones' },
  { id: 'membros', label: 'Área de membros', icon: 'Lock' },
  { id: 'outro', label: 'Outro', icon: 'MoreHorizontal' },
] as const;

export const featureOptions = [
  { id: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
  { id: 'formulario', label: 'Formulário de contato', icon: 'ClipboardList' },
  { id: 'agendamento', label: 'Agendamento online', icon: 'CalendarCheck' },
  { id: 'maps', label: 'Google Maps', icon: 'MapPin' },
  { id: 'instagram', label: 'Instagram', icon: 'Instagram' },
  { id: 'facebook', label: 'Facebook', icon: 'Facebook' },
  { id: 'youtube', label: 'YouTube', icon: 'Youtube' },
  { id: 'tiktok', label: 'TikTok', icon: 'Music2' },
  { id: 'analytics', label: 'Google Analytics', icon: 'BarChart3' },
  { id: 'pixel', label: 'Meta Pixel', icon: 'Target' },
  { id: 'seo', label: 'SEO', icon: 'Search' },
  { id: 'blog', label: 'Blog', icon: 'Newspaper' },
  { id: 'newsletter', label: 'Newsletter', icon: 'Mail' },
  { id: 'chat', label: 'Chat', icon: 'MessagesSquare' },
  { id: 'ligacao', label: 'Botão de ligação', icon: 'Phone' },
  { id: 'calendario', label: 'Integração com calendário', icon: 'Calendar' },
  { id: 'admin', label: 'Área administrativa', icon: 'Settings' },
  { id: 'clientes', label: 'Cadastro de clientes', icon: 'Users' },
  { id: 'pagamento', label: 'Pagamento online', icon: 'CreditCard' },
  { id: 'checkout', label: 'Checkout', icon: 'ShoppingBag' },
  { id: 'outro', label: 'Outro', icon: 'MoreHorizontal' },
] as const;

/** Recursos extras por segmento */
export const segmentFeatures: Partial<Record<BusinessType, { id: string; label: string; icon: string }[]>> = {
  politico: [
    { id: 'agenda-publica', label: 'Agenda pública', icon: 'Calendar' },
    { id: 'projetos', label: 'Projetos', icon: 'FolderKanban' },
    { id: 'noticias-pol', label: 'Notícias', icon: 'Newspaper' },
    { id: 'contas', label: 'Prestação de contas', icon: 'FileText' },
    { id: 'transparencia', label: 'Transparência', icon: 'Eye' },
    { id: 'canal-populacao', label: 'Canal para população', icon: 'Megaphone' },
    { id: 'galeria', label: 'Galeria', icon: 'Images' },
    { id: 'videos', label: 'Vídeos', icon: 'Video' },
    { id: 'gabinete', label: 'Informações do gabinete', icon: 'Building' },
  ],
  advocacia: [
    { id: 'areas-atuacao', label: 'Áreas de atuação', icon: 'Scale' },
    { id: 'equipe-adv', label: 'Equipe', icon: 'Users' },
    { id: 'cases', label: 'Cases', icon: 'Briefcase' },
    { id: 'blog-juridico', label: 'Blog jurídico', icon: 'Newspaper' },
  ],
  clinica: [
    { id: 'servicos-saude', label: 'Serviços', icon: 'HeartPulse' },
    { id: 'sobre-prof', label: 'Sobre o profissional', icon: 'User' },
    { id: 'depoimentos-saude', label: 'Depoimentos', icon: 'MessageSquareQuote' },
  ],
  consultorio: [
    { id: 'servicos-saude', label: 'Serviços', icon: 'HeartPulse' },
    { id: 'sobre-prof', label: 'Sobre o profissional', icon: 'User' },
    { id: 'depoimentos-saude', label: 'Depoimentos', icon: 'MessageSquareQuote' },
  ],
  profissional: [
    { id: 'servicos-saude', label: 'Serviços', icon: 'Briefcase' },
    { id: 'sobre-prof', label: 'Sobre o profissional', icon: 'User' },
    { id: 'depoimentos-saude', label: 'Depoimentos', icon: 'MessageSquareQuote' },
  ],
};

export const materialOptions = {
  identidade: [
    { id: 'sim', label: 'Sim, já tenho' },
    { id: 'parcial', label: 'Tenho parcialmente' },
    { id: 'nao', label: 'Ainda não' },
  ],
  logo: [
    { id: 'sim', label: 'Sim' },
    { id: 'nao', label: 'Não' },
  ],
  fotos: [
    { id: 'sim', label: 'Sim' },
    { id: 'algumas', label: 'Algumas' },
    { id: 'nao', label: 'Não' },
  ],
  textos: [
    { id: 'sim', label: 'Sim' },
    { id: 'parcial', label: 'Parcialmente' },
    { id: 'nao', label: 'Não' },
  ],
  dominio: [
    { id: 'sim', label: 'Sim' },
    { id: 'nao', label: 'Não' },
    { id: 'nao-sei', label: 'Não sei o que é' },
  ],
  hospedagem: [
    { id: 'sim', label: 'Sim' },
    { id: 'nao', label: 'Não' },
    { id: 'nao-sei', label: 'Não sei o que é' },
  ],
};

export const styleOptions = [
  { id: 'minimalista', label: 'Minimalista' },
  { id: 'moderno', label: 'Moderno' },
  { id: 'premium', label: 'Premium' },
  { id: 'elegante', label: 'Elegante' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'criativo', label: 'Criativo' },
  { id: 'tecnologico', label: 'Tecnológico' },
  { id: 'sofisticado', label: 'Sofisticado' },
  { id: 'simples', label: 'Simples e direto' },
];

export const colorPalettes = [
  { id: 'azul-branco', label: 'Azul + Branco', colors: ['#0F2744', '#FFFFFF'] },
  { id: 'preto-dourado', label: 'Preto + Dourado', colors: ['#111111', '#C8A24C'] },
  { id: 'verde-branco', label: 'Verde + Branco', colors: ['#0F766E', '#FFFFFF'] },
  { id: 'azul-dourado', label: 'Azul + Dourado', colors: ['#0F2744', '#C8A24C'] },
  { id: 'preto-branco', label: 'Preto + Branco', colors: ['#111111', '#FFFFFF'] },
  { id: 'tons-claros', label: 'Tons claros', colors: ['#F7F8FA', '#CBDAEA', '#C8A24C'] },
  { id: 'lumi-escolhe', label: 'Quero que a LUMI escolha', colors: ['#0F2744', '#C8A24C', '#F7F8FA'] },
  { id: 'propria', label: 'Tenho uma identidade visual própria', colors: [] },
];

export const goalOptions = [
  { id: 'clientes', label: 'Conseguir mais clientes' },
  { id: 'apresentar', label: 'Apresentar minha empresa' },
  { id: 'credibilidade', label: 'Aumentar minha credibilidade' },
  { id: 'google', label: 'Aparecer no Google' },
  { id: 'whatsapp', label: 'Receber contatos pelo WhatsApp' },
  { id: 'servicos', label: 'Divulgar meus serviços' },
  { id: 'mandato', label: 'Divulgar meu mandato' },
  { id: 'trabalho', label: 'Apresentar meu trabalho' },
  { id: 'vender', label: 'Vender produtos' },
  { id: 'agendamentos', label: 'Receber agendamentos' },
  { id: 'nao-sei', label: 'Ainda não sei' },
];

export const deadlineOptions = [
  { id: 'asap', label: 'O quanto antes' },
  { id: 'semanas', label: 'Nas próximas semanas' },
  { id: 'mes', label: 'Este mês' },
  { id: 'pesquisando', label: 'Ainda estou pesquisando' },
  { id: 'sem-prazo', label: 'Sem prazo definido' },
];

export const budgetOptions = [
  { id: 'ate-1000', label: 'Até R$ 1.000' },
  { id: '1000-2000', label: 'R$ 1.000 a R$ 2.000' },
  { id: '2000-3000', label: 'R$ 2.000 a R$ 3.000' },
  { id: '3000-5000', label: 'R$ 3.000 a R$ 5.000' },
  { id: 'acima-5000', label: 'Acima de R$ 5.000' },
  { id: 'nao-defini', label: 'Ainda não defini' },
];

export const STEP_TITLES = [
  'Vamos conhecer seu negócio',
  'O que você gostaria de colocar no seu site?',
  'Quais recursos você gostaria de ter?',
  'Você já possui os materiais?',
  'Como você imagina seu site?',
  'O que você quer alcançar com o site?',
  'Para conseguirmos indicar a melhor solução',
  'Perfeito. Agora só precisamos saber como falar com você.',
];

export const TOTAL_STEPS = STEP_TITLES.length;
