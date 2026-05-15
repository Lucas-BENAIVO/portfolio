# Portfolio — Tyrone Brooks (maquette UX/UI)

Site portfolio Angular inspiré de la maquette fournie : thème sombre, glassmorphism, accent jaune/orange, navigation en pilule.

## Lancer

```bash
npm install
npm start
```

→ [http://localhost:4200](http://localhost:4200)

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil — hero, contacts, silhouette |
| `/summary` | Résumé + lien projet |
| `/experience` | Parcours professionnel |
| `/skills` | Logiciels, langues, formation |
| `/links` | Liens externes |
| `/project/flowstate` | Détail projet Flowstate |

## Personnalisation

Éditez `src/app/data/portfolio.data.ts` (nom, contacts, compétences, projets…).

## Structure

```
src/app/
├── data/portfolio.data.ts
├── layout/          shell + bottom-nav
└── pages/           home, summary, experience, skills, links, project-detail
```
