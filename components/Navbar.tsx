'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-premium py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-navy-700">
            <span className="absolute inset-0 rounded-full bg-gold-500/40 blur-md animate-pulseGlow" />
            <span className="relative font-display text-sm font-bold text-gold-300">L</span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy-800">
            LUMI <span className="text-gold-600">Studio</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-navy-600 transition-colors hover:text-navy-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden rounded-full bg-navy-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-navy-800 hover:shadow-gold lg:inline-flex"
        >
          Solicitar orçamento
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
          className="text-navy-800 lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-navy-700 hover:bg-navy-700/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-navy-700 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Solicitar orçamento
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
