import FadeIn from './FadeIn';
import { wedding } from '@/config/wedding';

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        {/* En-tête */}
        <FadeIn>
          <p className="font-sans text-[0.65rem] font-bold tracking-[0.28em] uppercase text-gold mb-3">
            Une question ?
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-dark tracking-wide">
            Contact
          </h2>
          <div className="ornament mt-5" />
          <p className="mt-6 font-serif text-xl italic text-dark/60 font-light leading-relaxed">
            N&apos;hésitez pas à nous écrire pour toute question.
          </p>
        </FadeIn>

        {/* Bloc email */}
        <FadeIn delay={100} className="mt-10">
          <div className="inline-flex flex-col items-center gap-5 p-10 bg-white border border-gold/20 rounded-sm shadow-[0_2px_24px_rgba(44,42,37,0.06)]">
            <div className="w-14 h-14 rounded-full bg-gold/15 text-gold flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-dark mb-1">Suzon &amp; Paul</p>
              <a
                href={`mailto:${wedding.contact.email}`}
                className="font-sans text-sm text-dark/60 hover:text-gold transition-colors"
              >
                {wedding.contact.email}
              </a>
            </div>
            <a href={`mailto:${wedding.contact.email}`} className="btn-gold">
              Nous écrire
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
