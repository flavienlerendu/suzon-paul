// ─── Configuration centrale du mariage ───────────────────────────────────────
// Modifier ce fichier pour adapter le contenu du site.

export const wedding = {
  // Identité
  names: {
    bride: 'Suzon',
    groom: 'Paul',
    full: 'Suzon & Paul',
    logo: 'P&S',
  },

  // Date & lieu
  date: '8 août 2026',
  dateISO: '2026-08-08',
  venue: {
    name: 'Château du Poët-Célard',
    region: 'Drôme Provençale',
    address: '121 Chemin de Notre-Dame',
    city: '26460 Le Poët-Célard',
    googleMapsUrl:
      'https://maps.google.com/?q=Château+du+Poët-Célard,+121+Chemin+de+Notre-Dame,+26460+Le+Poët-Célard',
  },

  // Contact & formulaire
  contact: {
    email: 'poluzon2024@gmail.com',
    // Créer un compte sur formspree.io et remplacer YOUR_FORMSPREE_ID
    formspreeId: 'YOUR_FORMSPREE_ID',
  },

  // Liens externes
  links: {
    weddingList: 'https://www.millemercismariage.com/suzonpaul2026/liste.html',
  },
} as const;
