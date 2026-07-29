import { TECH_ICONS } from './tech-icons';
import type { PortfolioData } from './portfolio.data';

export const PORTFOLIO_FR: PortfolioData = {
  openToWork: true,
  name: 'Lucas RABENAIVO',
  role: 'Développeur Full-Stack',
  cvUrl: '/CV.pdf',
  cvDownloadName: 'Lucas-RABENAIVO-CV.pdf',
  contacts: [
    {
      label: 'Courriel',
      value: 'rabenaivolucas@gmail.com',
      href: 'mailto:rabenaivolucas@gmail.com',
      icon: 'email',
    },
    {
      label: 'GitHub',
      value: 'Lucas-BENAIVO',
      href: 'https://github.com/Lucas-BENAIVO',
      icon: 'github',
    },
    {
      label: 'Téléphone',
      value: '+261 38 19 502 21',
      href: 'tel:+261381950221',
      whatsappHref: 'https://wa.me/261381950221',
      icon: 'phone',
    },
    {
      label: 'Localisation',
      value: 'Ambohimanambola, Antananarivo, Madagascar',
      href: '#',
      icon: 'location',
    },
  ],
  nav: [
    { label: 'Accueil', path: '', section: 'home', icon: 'home' },
    { label: 'Réalisations', path: 'realisations', section: 'realisations', icon: 'summary' },
    { label: 'Expérience', path: 'experience', section: 'experience', icon: 'experience' },
    { label: 'Compétences', path: 'skills', section: 'skills', icon: 'skills' },
  ],
  summary:
    'Curieux, rigoureux et créatif, je me spécialise en développement full-stack avec une passion pour l’intelligence artificielle appliquée. Mon approche méthodique et mon engagement dans l’apprentissage continu visent à transformer les défis techniques en solutions concrètes et innovantes.',
  experience: [
    {
      role: 'Stagiaire en Développement Full-Stack',
      company: 'NextHope',
      period: 'Février 2026 à Mai 2026',
      missions: [
        {
          title: 'Développement d’une plateforme de recrutement : Talentago',
          image: '/projects/talentago.png',
          href: 'https://talentago.serenity.mg/',
          linkLabel: 'Voir Talentago',
          details: [
            { label: 'Front-end', value: 'Vue.js' },
            { label: 'Back-end et API', value: 'Node.js, API REST' },
            { label: 'Base de données', value: 'PostgreSQL' },
            { label: 'Gestion de version', value: 'Git, Bitbucket' },
            { label: 'Stockage / Cloud', value: 'AWS S3' },
          ],
        },
        {
          title: 'Refonte du site e-commerce : Mass In',
          inProgress: true,
          details: [
            { label: 'Plateforme', value: 'Shopify' },
            { label: 'Gestion des stocks (ERP)', value: 'Odoo' },
            { label: 'Modèle commercial', value: 'Dropshipping' },
            { label: 'Gestion de version', value: 'Git, Bitbucket' },
          ],
        },
      ],
    },
    {
      role: 'Stagiaire en Développement Full-Stack',
      company: 'Digital Afrique Telecom',
      period: 'Juillet 2025 à Octobre 2025',
      missions: [
        {
          title:
            'Conception et développement d’une plateforme MVP de Business Intelligence augmentée par l’IA',
          details: [
            { label: 'Front-end', value: 'Next.js, Tailwind CSS' },
            { label: 'Back-end', value: 'Node.js, ETL' },
            {
              label: 'IA / Data',
              value: 'Python, prédiction des revenus, détection d’anomalies, chatbot',
            },
            { label: 'Base de données', value: 'PostgreSQL, DWH' },
            { label: 'Outils', value: 'Postman' },
          ],
        },
      ],
    },
  ],
  technicalSkills: [
    {
      id: 'languages',
      label: 'Langages',
      skills: [
        { name: 'HTML', icon: TECH_ICONS.html },
        { name: 'CSS', icon: TECH_ICONS.css },
        { name: 'JavaScript', icon: TECH_ICONS.javascript },
        { name: 'TypeScript', icon: TECH_ICONS.typescript },
        { name: 'Python', icon: TECH_ICONS.python },
        { name: 'Java', icon: TECH_ICONS.java },
      ],
    },
    {
      id: 'frontend',
      label: 'Frameworks front-end',
      skills: [
        { name: 'React', icon: TECH_ICONS.react },
        { name: 'Next.js', icon: TECH_ICONS.nextjs },
        { name: 'Vue.js', icon: TECH_ICONS.vuejs },
        { name: 'Angular', icon: TECH_ICONS.angular },
      ],
    },
    {
      id: 'backend',
      label: 'Frameworks back-end',
      skills: [
        { name: 'Express', icon: TECH_ICONS.express },
        { name: 'FastAPI', icon: TECH_ICONS.fastapi },
        { name: 'Spring', icon: TECH_ICONS.spring },
        { name: 'Django', icon: TECH_ICONS.django },
        { name: '.NET', icon: TECH_ICONS.dotnet },
      ],
    },
    {
      id: 'cms',
      label: 'E-commerce / CMS',
      skills: [{ name: 'Shopify', icon: TECH_ICONS.shopify }],
    },
    {
      id: 'database',
      label: 'Bases de données',
      skills: [
        { name: 'PostgreSQL', icon: TECH_ICONS.postgresql },
        { name: 'MySQL', icon: TECH_ICONS.mysql },
        { name: 'SQL Server', icon: TECH_ICONS.sqlserver },
        { name: 'DWH', icon: TECH_ICONS.dwh },
      ],
    },
    {
      id: 'tools',
      label: 'Outils',
      skills: [
        { name: 'Postman', icon: TECH_ICONS.postman },
        { name: 'Docker', icon: TECH_ICONS.docker },
        { name: 'Notion', icon: TECH_ICONS.notion },
      ],
    },
    {
      id: 'vcs',
      label: 'Gestion de version',
      skills: [
        { name: 'Git', icon: TECH_ICONS.git },
        { name: 'GitHub', icon: TECH_ICONS.github },
        { name: 'GitLab', icon: TECH_ICONS.gitlab },
        { name: 'Bitbucket', icon: TECH_ICONS.bitbucket },
      ],
    },
    {
      id: 'cloud',
      label: 'Stockage / Cloud',
      skills: [
        { name: 'Cloudinary', icon: TECH_ICONS.cloudinary },
        { name: 'AWS S3', icon: TECH_ICONS.aws, wide: true },
      ],
    },
    {
      id: 'methodology',
      label: 'Méthodologie',
      skills: [{ name: 'Agile Scrum', icon: TECH_ICONS.scrum }],
    },
  ],
  softSkills: [
    'Rigueur',
    'Autonomie',
    "Écoute active et esprit d'équipe",
    'Adaptabilité',
    "Facilité d'intégration",
  ],
  interests: [
    { label: 'Bénévolat', icon: 'volunteer' },
    { label: 'Sport et randonnée', icon: 'sport' },
    { label: 'Voyage', icon: 'travel' },
    { label: 'Musique et cinéma', icon: 'culture' },
  ],
  languages: [
    { name: 'Malgache', level: 100, label: 'Langue maternelle' },
    { name: 'Français', level: 95, label: 'DELF B2 / DALF C1' },
    { name: 'Anglais', level: 75, label: 'Intermédiaire' },
  ],
  education: [
    {
      title: 'Master 1 en Informatique (en cours)',
      period: 'Depuis décembre 2025',
      detail: 'IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Licence en Informatique · Major de promotion',
      period: 'Juin 2026',
      detail: 'IT University, Andoharanofotsy, Madagascar',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1785255928/licence_ITU_ororot.pdf',
      linkLabel: 'Diplôme',
    },
    {
      title: 'Certification en ingénierie IA pour le développement logiciel',
      period: 'Mai 2026',
      detail: 'DataCamp (niveau associé)',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781343228/AIEDA0013345900251_a5yyen.pdf',
      linkLabel: 'Certificat',
    },
    {
      title: 'Certification en développement Python',
      period: 'Mai 2026',
      detail: 'freeCodeCamp',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1785348288/freecodecamp.org_certification_lucasbenaivo_python-v9_jzgvho.pdf',
      linkLabel: 'Certificat',
    },
    {
      title: 'Certification en développement JavaScript',
      period: 'Avril 2026',
      detail: 'freeCodeCamp',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1785348271/Profile___freeCodeCamp_quzpso.pdf',
      linkLabel: 'Certificat',
    },
    {
      title: "Certification en Fondamentaux de l'Intelligence Artificielle",
      period: 'Avril 2026',
      detail: 'DataCamp',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781343228/AIF0022310660944_c59lne.pdf',
      linkLabel: 'Certificat',
    },
    {
      title: 'Certification en Culture des Données',
      period: 'Avril 2026',
      detail: 'DataCamp',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781343228/DL0033079384813_j8wtjt.pdf',
      linkLabel: 'Certificat',
    },
    {
      title: 'Formation en neuromarketing',
      period: '2024',
      detail: 'Free Sell, Antananarivo, Madagascar',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781344266/formation_neuro_marketing_yngqc5.pdf',
      linkLabel: 'Attestation',
    },
    {
      title: 'Baccalauréat Technologique',
      period: '2022',
      detail: 'Collège Saint Michel, Amparibe, Madagascar',
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781344267/diplome_bac_fhy9xs.pdf',
      linkLabel: 'Diplôme',
    },
  ],
  competitions: [
    {
      title: 'Jeu RPG 2D en pixel art sur la déforestation',
      period: 'Hackathon Game (Devpost) · Mai 2026',
      image: '/projects/jeu-rpg-2d.png',
      description:
        'Conception et développement d’un jeu narratif 2D en pixel art, sensibilisant à la déforestation, où les choix du joueur impactent l’état de la forêt en temps réel.',
      details: [
        { label: 'Moteur et gameplay', value: 'JavaScript, Maki, Phaser.js' },
        { label: 'Front-end et build', value: 'HTML5, CSS, Vite, npm' },
        { label: 'Gestion de version', value: 'Git, GitHub' },
      ],
      href: 'https://maki-2d-pixel-rpg.vercel.app/',
      linkLabel: 'Jeu',
      projectSlug: 'maki-2d-pixel-rpg',
      githubUrl: 'https://github.com/Lucas-BENAIVO/maki-2d-pixel-rpg',
    },
    {
      title: 'Solution IoT/IA pour l’agriculture',
      period: 'Hackathon RedShalk — 2e place · Décembre 2024',
      image: '/projects/hackathon-redshalk.png',
      description:
        'Architecture IoT/IA : collecte de données environnementales et recommandations intelligentes.',
      details: [
        { label: 'Back-end et API', value: 'Java, Servlets, API REST, CRUD, RBAC' },
        { label: 'Intelligence Artificielle', value: 'Python' },
        { label: 'Base de données', value: 'PostgreSQL' },
      ],
      href: 'https://res.cloudinary.com/dx7gsk0vi/image/upload/v1781344267/PRIX_LUCAS_smsbnm.pdf',
      linkLabel: 'Prix',
      projectSlug: 'hackathon-redshalk',
    },
  ],
  projects: [
    {
      slug: 'mean-centre-commercial',
      title: 'Plateforme web — centre commercial',
      category: 'Projet MEAN — Master 1',
      image: '/projects/mean-centre-commercial.png',
      preview:
        'Application web MEAN pour un centre commercial : profils Admin, Boutique et Acheteurs, API REST et base MongoDB.',
      githubUrl: 'https://github.com/Lucas-BENAIVO/ShoppingMall_boutique_front',
      about:
        'Application web de gestion pour un centre commercial, centralisant les parcours des administrateurs, des boutiques et des acheteurs.',
      achievements: [
        'Développement full stack avec Angular, TypeScript, Node.js, Express, MongoDB, API REST, Git et GitHub.',
        'Mise en place d’une architecture multi-rôles pour les administrateurs, boutiques et acheteurs.',
        'Projet réalisé dans le cadre du Master 1 en mars 2026.',
      ],
    },
    {
      slug: 'rush-school',
      title: 'Rush School — K Beauty Academy',
      category: 'Site vitrine — Formations beauté',
      image: '/projects/rush-school.png',
      preview:
        'Site vitrine pour une académie beauté : formations ongles & cils, boutique, avis élèves et prise de rendez-vous.',
      externalUrl: 'https://rushschool.vercel.app/',
      githubUrl: 'https://github.com/Lucas-BENAIVO/rushschool',
      about:
        'Site vitrine d’une académie de formations en prothésie ongulaire et extensions de cils, avec catalogue des offres, boutique professionnelle, témoignages d’élèves et prise de rendez-vous.',
      achievements: [
        'Développement du front-end avec Next.js, React, TypeScript et Tailwind CSS.',
        'Mise en place du catalogue des formations, de la boutique en ligne, des avis élèves et de la réservation d’appel.',
        'Conception d’une interface responsive et orientée conversion.',
        'Déploiement en production sur Vercel avec Git et GitHub.',
      ],
    },
    {
      slug: 'bi-ia-digital-afrique',
      title: 'Plateforme BI augmentée par l’IA',
      category: 'Stage — Digital Afrique Telecom',
      about:
        'MVP de Business Intelligence intégrant prédiction des revenus, détection d’anomalies et chatbot pour accompagner la prise de décision métier.',
      achievements: [
        'Développement du front-end avec Next.js et Tailwind CSS.',
        'Mise en place du back-end et des pipelines de données avec Node.js, ETL et Python.',
        'Stockage et exploitation des données avec PostgreSQL et un entrepôt de données.',
        'Intégration de pipelines ETL et d’API testées avec Postman.',
        'Fonctionnalités IA pour l’aide à la décision métier.',
      ],
    },
    {
      slug: 'plateforme-recrutement',
      title: 'Talentago — Plateforme de recrutement',
      category: 'Stage — NextHope',
      image: '/projects/talentago.png',
      externalUrl: 'https://talentago.serenity.mg/',
      about:
        'Plateforme de recrutement dédiée au traitement des candidatures et à la gestion des profils candidats et recruteurs.',
      achievements: [
        'Développement du front-end avec Vue.js.',
        'Conception du back-end et des API avec Node.js, API REST et PostgreSQL.',
        'Gestion des fichiers et du stockage cloud avec AWS S3.',
        'Suivi de version avec Git et Bitbucket.',
        'En parallèle, participation à la refonte e-commerce « Mass In » avec Shopify et Odoo.',
      ],
    },
    {
      slug: 'maki-2d-pixel-rpg',
      title: 'Jeu RPG 2D en pixel art sur la déforestation',
      category: 'Hackathon Game (Devpost) · Mai 2026',
      image: '/projects/jeu-rpg-2d.png',
      about:
        'Jeu narratif 2D en pixel art sur la déforestation, où les choix du joueur modifient en temps réel l’état de la forêt.',
      achievements: [
        'Conception du moteur et du gameplay avec JavaScript, Maki et Phaser.js.',
        'Développement du front-end et du pipeline de build avec HTML5, CSS, Vite et npm.',
        'Gestion de version avec Git et GitHub.',
      ],
    },
    {
      slug: 'hackathon-redshalk',
      title: 'Solution IoT/IA pour l’agriculture',
      category: 'Hackathon RedShalk — 2e place',
      image: '/projects/hackathon-redshalk.png',
      about:
        'Solution IoT et IA pour l’agriculture, combinant collecte de données environnementales et recommandations intelligentes pour les exploitants.',
      achievements: [
        '2e place au Hackathon RedShalk en décembre 2024.',
        'Développement du back-end et des API avec Java, Servlets, API REST, CRUD et RBAC.',
        'Intégration de modules d’intelligence artificielle avec Python.',
        'Modélisation et persistance des données avec PostgreSQL.',
      ],
    },
  ],
  featuredProjectSlugs: ['rush-school', 'mean-centre-commercial'],
};
