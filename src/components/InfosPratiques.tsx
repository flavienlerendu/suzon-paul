import FadeIn from './FadeIn';
import { wedding } from '@/config/wedding';

// ── Icônes ────────────────────────────────────────────────────────────────────
const IconTrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const IconGift = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const IconDress = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 3c-1.2 5.4-4.5 7.5-4.5 7.5H3l3 10.5h12L21 10.5h-4.5S13.2 8.4 12 3z" />
  </svg>
);

const CARDS = [
  {
    id: 'train',
    icon: <IconTrain />,
    color: 'cobalt',
    title: 'Venir en train',
    content: (
      <>
        <p className="font-sans text-sm text-dark/70 leading-relaxed">
          Le Château du Poët-Célard se situe en Drôme Provençale.
          Il est accessible en train&nbsp;+&nbsp;voiture, depuis&nbsp;:
        </p>
        <ul className="mt-3 space-y-1.5">
          {['Valence TGV', 'Montélimar'].map((gare) => (
            <li key={gare} className="flex items-center gap-2 font-sans text-sm text-dark/80">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt flex-shrink-0" />
              {gare}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-sans text-sm text-dark/70 leading-relaxed">
          Pour rallier le château, inscrivez-vous sur le planning covoiturage.
        </p>
      </>
    ),
  },
  {
    id: 'voiture',
    icon: <IconCar />,
    color: 'gold',
    title: 'Venir en voiture',
    content: (
      <>
        <p className="font-sans text-sm text-dark/70 leading-relaxed">
          Si vous aimez l&apos;aventure, suivez votre GPS&hellip; Sinon, nous vous recommandons&nbsp;:
        </p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-sans text-xs font-bold text-gold tracking-[0.14em] uppercase mb-1.5">
              Depuis le Nord — sortie 15
            </p>
            <p className="font-sans text-sm text-dark/70">
              Crest → Saou → Le Poët-Célard
            </p>
          </div>
          <div>
            <p className="font-sans text-xs font-bold text-gold tracking-[0.14em] uppercase mb-1.5">
              Depuis le Sud — sortie 18
            </p>
            <p className="font-sans text-sm text-dark/70">
              La-Bégude-de-Mazenc → Dieulefit → Le Poët-Célard
            </p>
          </div>
        </div>
        <p className="mt-3 font-sans text-xs text-dark/50 italic">
          Parking disponible sur place.
        </p>
      </>
    ),
  },
  {
    id: 'liste',
    icon: <IconGift />,
    color: 'terracotta',
    title: 'Liste de mariage',
    content: (
      <>
        <p className="font-sans text-sm text-dark/70 leading-relaxed">
          La liste de mariage est disponible en cliquant sur le lien ci-dessous.
        </p>
        <div className="mt-5">
          <a
            href={wedding.links.weddingList}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Voir la liste de mariage
          </a>
        </div>
      </>
    ),
  },
  {
    id: 'dresscode',
    icon: <IconDress />,
    color: 'cobalt',
    title: 'Dress Code',
    content: (
      <>
        <p className="font-sans text-sm font-bold text-dark/80 mb-3">
          Pas de noir, ni de blanc.
        </p>
        <p className="font-sans text-sm text-dark/70 leading-relaxed mb-3">
          Le blanc est réservé aux mariés. Laissez-vous inspirer par les plus belles couleurs de l&apos;été.
        </p>
        <ul className="space-y-1.5">
          {[
            'Il peut faire très chaud — prévoyez une tenue adaptée',
            'Le château est situé en hauteur',
            'L\'accès se fait par une route pavée',
            'Les talons aiguilles sont déconseillés',
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2 font-sans text-xs text-dark/65">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-cobalt flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const colorStyle: Record<string, { icon: string; header: string; divider: string }> = {
  gold: { icon: 'bg-gold/15 text-gold', header: 'text-gold', divider: 'bg-gold' },
  terracotta: { icon: 'bg-terracotta/15 text-terracotta', header: 'text-terracotta', divider: 'bg-terracotta' },
  cobalt: { icon: 'bg-cobalt/15 text-cobalt', header: 'text-cobalt', divider: 'bg-cobalt' },
};

export default function InfosPratiques() {
  return (
    <section id="infos" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* En-tête */}
        <FadeIn className="text-center mb-16">
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-cobalt mb-3">
            Tout ce qu&apos;il faut savoir
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dark tracking-wide">
            Infos Pratiques
          </h2>
          <div className="ornament mt-5" />
        </FadeIn>

        {/* Grille 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const styles = colorStyle[card.color];
            return (
              <FadeIn key={card.id} delay={i * 80}>
                <div className="info-card h-full bg-white border border-dark/8 p-7 rounded-sm shadow-[0_2px_16px_rgba(44,42,37,0.05)]">
                  {/* En-tête carte */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.icon}`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className={`font-serif text-xl font-medium ${styles.header}`}>
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  {/* Séparateur */}
                  <div className={`h-px w-10 mb-4 ${styles.divider}`} />
                  {/* Contenu */}
                  {card.content}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
