import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const WHATSAPP = '5586981302894';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 pb-8 pt-16 text-navy-100/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" light />
              <span className="font-display text-lg font-bold text-white">
                LUMI <span className="text-gold-400">Studio</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Transformamos ideias em experiências digitais que fortalecem marcas e geram
              resultado.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navegação</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#servicos" className="transition-colors hover:text-gold-400">Serviços</a></li>
              <li><a href="#processo" className="transition-colors hover:text-gold-400">Processo</a></li>
              <li><a href="#portfolio" className="transition-colors hover:text-gold-400">Portfólio</a></li>
              <li><a href="#valores" className="transition-colors hover:text-gold-400">Valores</a></li>
              <li><a href="#faq" className="transition-colors hover:text-gold-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={15} className="text-gold-400" /> (86) 98130-2894
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-gold-400" /> contato@lumistudio.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-gold-400" /> Brasil
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Redes sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lumistudiov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram size={17} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="mailto:contato@lumistudio.com.br"
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; {year} LUMI Studio. Todos os direitos reservados.</p>
          <p>Feito com precisão e sofisticação.</p>
        </div>
      </div>
    </footer>
  );
}
