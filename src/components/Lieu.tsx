import FadeIn from './FadeIn';
import { wedding } from '@/config/wedding';

const GALLERY = [
  { src: '/images/chateau-aerien.jpg', alt: 'Vue aérienne du Château du Poët-Célard' },
  { src: '/images/chateau-panorama.jpg', alt: 'Panorama depuis le château' },
  { src: '/images/chateau-interieur.jpg', alt: 'Grande salle en pierres apparentes' },
  { src: '/images/chateau-domaine.jpg', alt: 'Le domaine et les jardins' },
];

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Château historique',
    desc: 'Un écrin de pierres au cœur de la Drôme Provençale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Vue panoramique',
    desc: 'Vue imprenable sur les montagnes de la Drôme.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Jardin & esplanade',
    desc: 'Espaces extérieurs pour la cérémonie et le cocktail.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Grande salle',
    desc: 'Salle de réception en pierres et poutres apparentes.',
  },
];

export default function Lieu() {
  return (
    <section id="lieu" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* En-tête */}
        <FadeIn className="text-center mb-16">
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-terracotta mb-3">
            Le Lieu
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dark tracking-wide">
            {wedding.venue.name}
          </h2>
          <p className="mt-3 font-serif text-xl italic text-dark/60 font-light">
            Un écrin de pierres au cœur de la Drôme Provençale
          </p>
          <div className="ornament-terracotta mt-5" />
        </FadeIn>

        {/* Galerie photos */}
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {GALLERY.map((img, i) => (
            <div key={i} className="gallery-item aspect-[4/3] bg-dark/10 rounded-sm overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </FadeIn>

        {/* Features */}
        <FadeIn delay={100} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="info-card flex flex-col items-center text-center p-5 bg-white border border-terracotta/10 rounded-sm"
            >
              <div className="mb-3 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                {f.icon}
              </div>
              <p className="font-serif text-base font-medium text-dark mb-1">{f.title}</p>
              <p className="font-sans text-xs text-dark/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </FadeIn>

        {/* Adresse + bouton carte */}
        <FadeIn delay={150} className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white border border-terracotta/10 rounded-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 text-terracotta flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-dark">{wedding.venue.name}</p>
              <p className="font-sans text-sm text-dark/65 mt-0.5">{wedding.venue.address}</p>
              <p className="font-sans text-sm text-dark/65">{wedding.venue.city}</p>
            </div>
          </div>
          <a
            href={wedding.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0"
          >
            Voir sur Google Maps
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
