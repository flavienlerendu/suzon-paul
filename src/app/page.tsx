import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programme from '@/components/Programme';
import Lieu from '@/components/Lieu';
import InfosPratiques from '@/components/InfosPratiques';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programme />
        <Lieu />
        <InfosPratiques />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
