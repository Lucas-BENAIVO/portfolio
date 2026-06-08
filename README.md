# Portfolio — Lucas RABENAIVO

Site portfolio personnel de **Lucas RABENAIVO**, développeur full-stack basé à Madagascar.

**En ligne :** [lucas-rabenaivo.vercel.app](https://lucas-rabenaivo.vercel.app/)

Application Angular (thème sombre, glassmorphism) présentant mon profil, mes projets, mon parcours et mes compétences.

## Contenu

| Section | Contenu |
|---------|---------|
| **Accueil** | Présentation, contacts, téléchargement du CV |
| **Réalisations** | Projets phares, compétitions & récompenses, formation & certificats |
| **Expérience** | Stages NextHope (Talentago, Mass In) et Digital Afrique Telecom (BI/IA) |
| **Compétences** | Stack technique, savoir-être, langues, centres d'intérêt |

Chaque carte projet propose deux actions :
- **Voir** — site en ligne ou page détail du projet
- **Code** — dépôt GitHub (sauf Solution IoT/IA, pas de code public)

### Projets phares

- **Rush School — K Beauty Academy** — site vitrine (formations beauté, boutique, rendez-vous) · [Code](https://github.com/Lucas-BENAIVO/rushschool)
- **Plateforme web — centre commercial** — application MEAN (Master 1) · [Code](https://github.com/Lucas-BENAIVO/ShoppingMall_boutique_front)

### Compétitions

- **Jeu RPG 2D en pixel art** — [Jeu](https://maki-2d-pixel-rpg.vercel.app/) · [Code](https://github.com/Lucas-BENAIVO/maki-2d-pixel-rpg)
- **Solution IoT/IA pour l'agriculture** — page détail uniquement (pas de dépôt public)

### Pages détail projet

| Route | Projet |
|-------|--------|
| `/project/rush-school` | Rush School — K Beauty Academy |
| `/project/mean-centre-commercial` | Plateforme web — centre commercial |
| `/project/bi-ia-digital-afrique` | Plateforme BI augmentée par l'IA |
| `/project/plateforme-recrutement` | Talentago — Plateforme de recrutement |
| `/project/hackathon-redshalk` | Solution IoT/IA pour l'agriculture |

## Lancer en local

```bash
npm install
npm start
```

→ [http://localhost:4200](http://localhost:4200)

## Personnalisation

Éditez `src/app/data/portfolio.data.ts` (nom, contacts, expériences, projets, liens GitHub, compétences, formation…).

## Structure

```
src/app/
├── components/work-card/   cartes projet (Voir + Code)
├── data/portfolio.data.ts
├── layout/                 shell + bottom-nav
└── pages/                  home (page unique), project-detail
```
