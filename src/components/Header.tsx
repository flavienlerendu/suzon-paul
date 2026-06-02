'use client';

import { useState, useEffect } from 'react';
import { wedding } from '@/config/wedding';

const NAV_LINKS = [
  { href: '#programme', label: 'Programme' },
  { href: '#lieu', label: 'Le Lieu' },
  { href: '#infos', label: 'Infos pratiques' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le menu si on clique ailleurs
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_24px_rgba(44,42,37,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Retour à l'accueil"
          className={`font-serif text-2xl font-light tracking-[0.22em] transition-colors duration-300 select-none ${
            scrolled ? 'text-dark' : 'text-white'
          }`}
        >
          {wedding.names.logo}
        </a>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`relative text-[0.7rem] font-sans font-bold tracking-[0.18em] uppercase transition-colors duration-300 group ${
                scrolled ? 'text-dark hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50 ${
            scrolled || menuOpen ? 'text-dark' : 'text-white'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="bg-cream border-t border-gold/20 px-6 pb-4 pt-2 flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="py-3 text-dark text-[0.7rem] font-bold tracking-[0.18em] uppercase border-b border-gold/10 last:border-0 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
