# Portfolio — Lucas RABENAIVO

Site portfolio personnel de **Lucas RABENAIVO**, développeur full-stack basé à Madagascar.

**En ligne :** [lucas-rabenaivo.vercel.app](https://lucas-rabenaivo.vercel.app/)

Application Angular (thème sombre, glassmorphism) présentant mon profil, mes projets, mon parcours et mes compétences.

## Contenu

| Section | Contenu |
|---------|---------|
| **Accueil** | Présentation, contacts, téléchargement du CV |
| **Résumé** | Projets phares, compétitions & récompenses, formation & certificats |
| **Expérience** | Stages NextHope (Talentago, Mass In) et Digital Afrique Telecom (BI/IA) |
| **Compétences** | Stack technique, savoir-être, langues, centres d'intérêt |

### Projets phares

- **Rush School — K Beauty Academy** — site vitrine (formations beauté, boutique, rendez-vous)
- **Plateforme web — centre commercial** — application MEAN (Master 1)

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

Éditez `src/app/data/portfolio.data.ts` (nom, contacts, expériences, projets, compétences, formation…).

## Structure

```
src/app/
├── data/portfolio.data.ts
├── layout/          shell + bottom-nav
└── pages/           home (page unique), project-detail
```
