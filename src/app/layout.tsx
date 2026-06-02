import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mariage de Suzon & Paul – 8 août 2026',
  description:
    'Toutes les informations du mariage de Suzon & Paul au Château du Poët-Célard en Drôme Provençale.',
  keywords: ['mariage', 'Suzon', 'Paul', 'Château du Poët-Célard', 'Drôme Provençale', '2026'],
  openGraph: {
    title: 'Mariage de Suzon & Paul – 8 août 2026',
    description:
      'Toutes les informations du mariage de Suzon & Paul au Château du Poët-Célard en Drôme Provençale.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
