import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ThemeProvider } from '@/components/ThemeProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://lumistudio.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LUMI Studio | Criação de Sites Profissionais e Landing Pages',
    template: '%s | LUMI Studio',
  },
  description:
    'A LUMI Studio cria sites modernos, rápidos e estratégicos para empresas e profissionais que querem fortalecer sua presença digital e vender mais. Solicite um orçamento.',
  keywords: [
    'criação de sites',
    'landing page',
    'site institucional',
    'agência digital',
    'desenvolvimento web',
    'SEO',
    'site profissional',
  ],
  authors: [{ name: 'LUMI Studio' }],
  creator: 'LUMI Studio',
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'LUMI Studio',
    title: 'LUMI Studio | Transformamos ideias em experiências digitais',
    description:
      'Criamos sites modernos, rápidos e estratégicos para empresas e profissionais que desejam fortalecer sua presença digital.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LUMI Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMI Studio | Transformamos ideias em experiências digitais',
    description: 'Sites modernos, rápidos e estratégicos para o seu negócio vender mais.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F8FA' },
    { media: '(prefers-color-scheme: dark)', color: '#071626' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'LUMI Studio',
  description: 'Agência digital especializada em criação de sites, landing pages e soluções digitais.',
  slogan: 'Transformamos ideias em experiências digitais.',
  url: siteUrl,
  areaServed: 'BR',
  priceRange: 'R$3.000 - R$10.000',
  sameAs: [
    'https://www.instagram.com/lumistudiov/',
    'https://wa.me/5586981302894',
  ],
};

const themeInitScript = `
(function(){
  try {
    var k = 'lumi-theme';
    var s = localStorage.getItem(k);
    var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var t = s === 'light' || s === 'dark' ? s : (d ? 'dark' : 'light');
    if (t === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = t;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-white text-navy-800 antialiased transition-colors duration-300 selection:bg-gold-300 selection:text-navy-900 dark:bg-navy-900 dark:text-navy-50">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
