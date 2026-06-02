# Mariage Suzon & Paul — Site web

Site web élégant pour le mariage de Suzon & Paul, construit avec **Next.js 14**, **React 18** et **Tailwind CSS**.

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx        # Métadonnées SEO, import CSS global
│   ├── page.tsx          # Page principale (assemblage des sections)
│   └── globals.css       # Styles globaux, animations, polices
├── components/
│   ├── Header.tsx        # En-tête fixe + menu mobile
│   ├── Hero.tsx          # Section d'accueil plein écran
│   ├── Programme.tsx     # Timeline du week-end (3 jours)
│   ├── Lieu.tsx          # Présentation du château + galerie
│   ├── InfosPratiques.tsx # 4 cartes d'informations
│   ├── Contact.tsx       # Formulaire de contact (Formspree)
│   ├── Footer.tsx        # Pied de page
│   └── FadeIn.tsx        # Composant d'animation au scroll
└── config/
    └── wedding.ts        # ⭐ Toutes les variables configurables
```

---

## Installation

### Prérequis

- Node.js ≥ 18 ([nodejs.org](https://nodejs.org))
- npm ≥ 9

### Étapes

```bash
# 1. Cloner / se placer dans le dossier
cd /chemin/vers/suzon-paul

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

---

## Images à placer

Copier les images dans le dossier `public/images/` :

| Fichier                        | Description                       | Source                                                |
|-------------------------------|-----------------------------------|-------------------------------------------------------|
| `public/images/lavande-drome.jpg` | Photo de fond hero              | `https://flavienlerendu.github.io/mariage/images/lavande-drome.jpg` |
| `public/images/couple.jpg`    | Photo du couple (médaillon)       | Votre photo ou `https://flavienlerendu.github.io/mariage/images/couple.jpg` |
| `public/images/chateau-aerien.jpg` | Vue aérienne du château      | `https://flavienlerendu.github.io/mariage/images/chateau-aerien.jpg` |
| `public/images/chateau-panorama.jpg` | Vue panoramique            | `https://flavienlerendu.github.io/mariage/images/chateau-panorama.jpg` |
| `public/images/chateau-interieur.jpg` | Intérieur de la salle      | `https://flavienlerendu.github.io/mariage/images/chateau-interieur.jpg` |
| `public/images/chateau-domaine.jpg` | Le domaine extérieur        | `https://flavienlerendu.github.io/mariage/images/chateau-domaine.jpg` |

**Commande rapide pour télécharger les images de l'original :**

```bash
mkdir -p public/images
BASE="https://flavienlerendu.github.io/mariage/images"
for f in lavande-drome couple chateau-aerien chateau-panorama chateau-interieur chateau-domaine; do
  curl -L "$BASE/$f.jpg" -o "public/images/$f.jpg"
done
```

---

## Configuration

Toutes les variables modifiables sont centralisées dans `src/config/wedding.ts` :

- Noms des mariés, logo
- Date et lieu
- Adresse Google Maps
- Email de contact
- ID Formspree
- Lien liste de mariage

### Configurer le formulaire de contact (Formspree)

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire (email : `poluzon2024@gmail.com`)
3. Copier l'ID du formulaire (ex : `xpzgkwab`)
4. Le remplacer dans `src/config/wedding.ts` :

```ts
formspreeId: 'xpzgkwab',  // ← remplacer YOUR_FORMSPREE_ID
```

---

## Build de production

```bash
npm run build
```

Le site statique est généré dans le dossier `out/`.

---

## Déploiement GitHub Pages

### Option A — Déploiement manuel

```bash
# 1. Créer le dossier de build statique
npm run deploy
# (équivalent : next build && touch out/.nojekyll)

# 2. Initialiser un dépôt git dans out/ et pousser sur la branche gh-pages
cd out
git init
git add .
git commit -m "Deploy"
git push -f git@github.com:VOTRE_USER/VOTRE_REPO.git main:gh-pages
```

### Option B — GitHub Actions (recommandé)

Créer le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /VOTRE_REPO  # ex: /suzon-paul
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

> **Important :** si le site est publié à `username.github.io/nom-du-repo` (et non à la racine `username.github.io`), définir `NEXT_PUBLIC_BASE_PATH=/nom-du-repo` dans le workflow ou dans un fichier `.env.production`.

### Option C — Domaine personnalisé

Si vous avez un domaine (ex : `mariage.suzon-paul.fr`) :

1. Ajouter un fichier `public/CNAME` contenant uniquement le domaine :
   ```
   mariage.suzon-paul.fr
   ```
2. Ne pas définir `NEXT_PUBLIC_BASE_PATH` (laisser vide)

---

## Palette de couleurs

| Variable       | Hex       | Usage                           |
|---------------|-----------|----------------------------------|
| Or (`gold`)   | `#FFB41F` | Boutons, accents, titres         |
| Terracotta    | `#AF5746` | Section Lieu, icônes secondaires |
| Bleu (`cobalt`) | `#4774A1` | Infos pratiques, nav            |
| Crème         | `#FAF7F2` | Fond général                    |
| Sombre        | `#2C2A25` | Texte                           |

---

## Polices

- **Cormorant Garamond** — titres, citations (serif élégant)
- **Lato** — corps de texte, navigation (sans-serif lisible)

Chargées depuis Google Fonts dans `globals.css`.
