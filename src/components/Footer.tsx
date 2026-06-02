import { wedding } from '@/config/wedding';

export default function Footer() {
  return (
    <footer className="bg-dark py-14 px-6 text-center">
      {/* Noms en grand */}
      <p className="font-serif text-4xl md:text-5xl font-light text-white tracking-[0.08em] mb-3">
        {wedding.names.bride}
        <span className="text-gold mx-3">&amp;</span>
        {wedding.names.groom}
      </p>

      {/* Date et lieu */}
      <p className="font-sans text-[0.65rem] font-bold tracking-[0.24em] uppercase text-gold/80 mb-1">
        {wedding.date}
      </p>
      <p className="font-sans text-xs text-white/40 tracking-widest uppercase">
        {wedding.venue.name} · {wedding.venue.region}
      </p>

      {/* Séparateur */}
      <div className="flex items-center justify-center gap-3 my-7">
        <span className="block h-px w-12 bg-gold/30" />
        <span className="font-serif text-lg text-gold/50 italic">❧</span>
        <span className="block h-px w-12 bg-gold/30" />
      </div>

      {/* Liens nav */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
        {['#programme', '#lieu', '#infos', '#contact'].map((href, i) => (
          <a
            key={href}
            href={href}
            className="font-sans text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/30 hover:text-gold transition-colors"
          >
            {['Programme', 'Le Lieu', 'Infos pratiques', 'Contact'][i]}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p className="font-sans text-[0.6rem] text-white/20 tracking-widest">
        © 2026 {wedding.names.full}
      </p>
    </footer>
  );
}
