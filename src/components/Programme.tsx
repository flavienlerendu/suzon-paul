import FadeIn from './FadeIn';

interface Event {
  time?: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface Day {
  day: string;
  date: string;
  color: string;
  events: Event[];
}

const PROGRAMME: Day[] = [
  {
    day: 'Vendredi',
    date: '7 Août',
    color: 'cobalt',
    events: [
      {
        time: 'Dès 18h',
        title: 'Arrivée & Installation',
        description:
          'Famille et ami·e·s logé·e·s sur place : retrouvez-nous pour une soirée décontractée au château. Les chambres sont disponibles à partir de 18h.',
      },
      {
        title: 'Dîner',
        description: 'Dîner dans un restaurant à Bourdeaux.',
      },
    ],
  },
  {
    day: 'Samedi',
    date: '8 Août',
    color: 'gold',
    events: [
      {
        time: '16h15',
        title: 'Cérémonie Laïque',
        description: 'Dans le jardin du château',
        highlight: true,
      },
      {
        time: '18h',
        title: 'Cocktail',
        description: 'Sur l\'esplanade panoramique avec vue sur les montagnes.',
      },
      {
        time: '20h30 – 21h',
        title: 'Dîner',
        description: 'Dans la grande salle en pierres et poutres apparentes.',
      },
      {
        title: 'Soirée Dansante',
        description: 'Musique et danse jusqu\'au bout de la nuit.',
        highlight: true,
      },
    ],
  },
  {
    day: 'Dimanche',
    date: '9 Août',
    color: 'terracotta',
    events: [
      {
        time: 'À partir de 11h',
        title: 'Brunch',
        description: 'Matinée détente et brunch ensemble.',
      },
      {
        title: 'Au revoir',
        description: 'Départ dans l\'après-midi.',
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; dot: string; badge: string }> = {
  gold: {
    bg: 'bg-gold/10',
    border: 'border-gold/30',
    dot: 'bg-gold',
    badge: 'bg-gold text-dark',
  },
  terracotta: {
    bg: 'bg-terracotta/10',
    border: 'border-terracotta/30',
    dot: 'bg-terracotta',
    badge: 'bg-terracotta text-white',
  },
  cobalt: {
    bg: 'bg-cobalt/10',
    border: 'border-cobalt/30',
    dot: 'bg-cobalt',
    badge: 'bg-cobalt text-white',
  },
};

export default function Programme() {
  return (
    <section id="programme" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* En-tête de section */}
        <FadeIn className="text-center mb-16">
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-gold mb-3">
            Le Week-end
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dark tracking-wide">
            Programme
          </h2>
          <div className="ornament mt-5" />
        </FadeIn>

        {/* Grille des 3 jours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PROGRAMME.map((day, i) => {
            const colors = colorMap[day.color];
            return (
              <FadeIn key={day.day} delay={i * 120} className="flex flex-col">
                {/* En-tête du jour */}
                <div className="mb-6 text-center">
                  <p className="font-sans text-[0.6rem] font-bold tracking-[0.24em] uppercase text-dark/50 mb-1">
                    {day.day}
                  </p>
                  <h3
                    className={`font-serif text-3xl font-light ${
                      day.color === 'gold'
                        ? 'text-gold'
                        : day.color === 'terracotta'
                        ? 'text-terracotta'
                        : 'text-cobalt'
                    }`}
                  >
                    {day.date}
                  </h3>
                  {/* Ligne décorative */}
                  <div
                    className={`mx-auto mt-3 h-px w-16 ${
                      day.color === 'gold'
                        ? 'bg-gold'
                        : day.color === 'terracotta'
                        ? 'bg-terracotta'
                        : 'bg-cobalt'
                    }`}
                  />
                </div>

                {/* Événements */}
                <div className="flex flex-col gap-3 flex-1">
                  {day.events.map((event, j) => (
                    <div
                      key={j}
                      className={`timeline-event relative p-5 border ${colors.border} ${colors.bg} rounded-sm`}
                    >
                      {/* Point décoratif */}
                      <div
                        className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full ${colors.dot}`}
                        style={{ display: 'none' }}
                      />

                      {event.time && (
                        <p
                          className={`font-sans text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-2 ${
                            day.color === 'gold'
                              ? 'text-gold'
                              : day.color === 'terracotta'
                              ? 'text-terracotta'
                              : 'text-cobalt'
                          }`}
                        >
                          {event.time}
                        </p>
                      )}
                      <p
                        className={`font-serif text-xl font-medium text-dark leading-snug ${
                          event.highlight ? 'text-2xl' : ''
                        }`}
                      >
                        {event.title}
                      </p>
                      <p className="mt-1.5 font-sans text-sm text-dark/65 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
