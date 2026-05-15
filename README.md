# Portfolio — Angular (base)

Structure Angular minimale, **sans styles personnalisés** pour l’instant.

## Démarrage

```bash
npm install
npm start
```

## Structure

```
src/app/
├── data/portfolio.data.ts   # Données du site
├── layout/                  # header, footer
├── sections/                # hero, about, skills, projects, contact
├── pages/home/              # page d'accueil (assemble les sections)
├── app.ts                   # composant racine
└── app.routes.ts            # routing
```

## Concepts Angular utilisés

- Composants standalone
- Routing (`app.routes.ts`)
- `@for` dans les templates
- `@if` (si besoin)
- Property binding `[href]`
- Interpolation `{{ }}`
- Fichier de données partagé

## Styles

Ajoutez vos styles plus tard dans `src/styles.scss` ou dans les fichiers `.scss` des composants.
