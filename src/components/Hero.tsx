'use client';

import { useEffect, useRef } from 'react';
import { wedding } from '@/config/wedding';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const offset = window.scrollY * 0.3;
      parallaxRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Arrière-plan parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -top-20 -bottom-20 hero-bg will-change-transform"
        aria-hidden="true"
      />

      {/* Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(44,42,37,0.55)] via-[rgba(44,42,37,0.4)] to-[rgba(44,42,37,0.6)]"
        aria-hidden="true"
      />

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-32 mt-10">
        {/* Médaillon photo */}
        <div
          className="mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden
                     border-[3px] border-gold ring-4 ring-gold/20
                     shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                     backdrop-blur-sm bg-[rgba(250,247,242,0.1)]"
          style={{ animation: 'fadeUp 1s ease-out 0.2s both' }}
        >
          <img
            src="/images/couple.jpg"
            alt="Suzon & Paul"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Noms */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.06em] leading-tight mb-4"
          style={{ animation: 'fadeUp 1s ease-out 0.4s both' }}
        >
          {wedding.names.bride}
          <span className="text-gold mx-3 font-light">&amp;</span>
          {wedding.names.groom}
        </h1>

        {/* Détails */}
        <div
          className="mt-2 space-y-1"
          style={{ animation: 'fadeUp 1s ease-out 0.6s both' }}
        >
          <p className="font-sans text-[0.7rem] font-bold text-gold tracking-[0.28em] uppercase">
            {wedding.date.toUpperCase()}
          </p>
          <div className="ornament my-3">
            <span className="font-serif text-sm italic text-white/80 tracking-wide">
              {wedding.venue.name}
            </span>
          </div>
          <p className="font-sans text-[0.65rem] text-white/70 tracking-[0.22em] uppercase">
            {wedding.venue.region}
          </p>
        </div>

        {/* Texte d'introduction */}
        <div
          className="mt-10 max-w-xl"
          style={{ animation: 'fadeUp 1s ease-out 0.8s both' }}
        >
          <p className="font-serif text-lg md:text-xl font-light text-white/90 leading-relaxed italic">
            Nous avons le plaisir de vous convier à célébrer notre mariage le{' '}
            <span className="text-gold not-italic font-normal">8 août 2026</span> au{' '}
            <span className="text-white not-italic font-normal">Château du Poët-Célard</span>,
            dans la Drôme Provençale.
          </p>
          <p className="mt-3 font-sans text-sm text-white/70 leading-relaxed">
            Un week-end entre amis et famille dans un lieu d&apos;exception,
            au cœur de la Provence.
          </p>
        </div>

        {/* Indicateur scroll */}
        <div
          className="mt-14 bounce-anim"
          style={{ animation: 'fadeUp 1s ease-out 1.1s both' }}
        >
          <a href="#programme" aria-label="Voir le programme">
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* keyframes inline pour l'animation des éléments hero */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
