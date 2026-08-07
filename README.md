# LUMI Studio

Site institucional premium para a agência digital LUMI Studio — "Transformamos ideias em experiências digitais."

## Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura
- `app/` — rotas, layout, metadados de SEO, sitemap e robots
- `components/` — todas as seções e componentes de UI
- `lib/data.ts` — conteúdo do site (serviços, portfólio, depoimentos, FAQ, processo)

## Personalização
- Cores: `tailwind.config.ts` (paleta `navy` e `gold`)
- Textos e projetos: `lib/data.ts`
- WhatsApp: atualize o número em `components/WhatsAppButton.tsx`, `components/CTA.tsx` e `components/Footer.tsx`
- Domínio/SEO: atualize `siteUrl` em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`
