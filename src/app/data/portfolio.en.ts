import { TECH_ICONS } from './tech-icons';
import type { PortfolioData } from './portfolio.data';

export const PORTFOLIO_EN: PortfolioData = {
  openToWork: true,
  name: 'Lucas RABENAIVO',
  role: 'Full-Stack Developer',
  cvUrl: '/CV.pdf',
  cvDownloadName: 'Lucas-RABENAIVO-CV.pdf',
  contacts: [
    {
      label: 'Email',
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
      label: 'Phone',
      value: '+261 38 19 502 21',
      href: 'tel:+261381950221',
      whatsappHref: 'https://wa.me/261381950221',
      icon: 'phone',
    },
    {
      label: 'Location',
      value: 'Ambohimanambola, Antananarivo, Madagascar',
      href: '#',
      icon: 'location',
    },
  ],
  nav: [
    { label: 'Home', path: '', section: 'home', icon: 'home' },
    { label: 'Work', path: 'realisations', section: 'realisations', icon: 'summary' },
    { label: 'Experience', path: 'experience', section: 'experience', icon: 'experience' },
    { label: 'Skills', path: 'skills', section: 'skills', icon: 'skills' },
  ],
  summary:
    'Curious, rigorous and creative, I specialize in full-stack development with a passion for applied artificial intelligence. My methodical approach and commitment to continuous learning aim to turn technical challenges into concrete, innovative solutions.',
  experience: [
    {
      role: 'Full-Stack Development Intern',
      company: 'NextHope',
      period: 'February 2026 to May 2026',
      missions: [
        {
          title: 'Recruitment platform development: Talentago',
          image: '/projects/talentago.png',
          href: 'https://talentago.serenity.mg/',
          linkLabel: 'View Talentago',
          details: [
            { label: 'Front-end', value: 'Vue.js' },
            { label: 'Back-end & API', value: 'Node.js, REST API' },
            { label: 'Database', value: 'PostgreSQL' },
            { label: 'Version control', value: 'Git, Bitbucket' },
            { label: 'Storage / Cloud', value: 'AWS S3' },
          ],
        },
        {
          title: 'E-commerce site redesign: Mass In',
          inProgress: true,
          details: [
            { label: 'Platform', value: 'Shopify' },
            { label: 'Inventory management (ERP)', value: 'Odoo' },
            { label: 'Business model', value: 'Dropshipping' },
            { label: 'Version control', value: 'Git, Bitbucket' },
          ],
        },
      ],
    },
    {
      role: 'Full-Stack Development Intern',
      company: 'Digital Afrique Telecom',
      period: 'July 2025 to October 2025',
      missions: [
        {
          title: 'Design and development of an AI-augmented Business Intelligence MVP platform',
          details: [
            { label: 'Front-end', value: 'Next.js, Tailwind CSS' },
            { label: 'Back-end', value: 'Node.js, ETL' },
            {
              label: 'AI / Data',
              value: 'Python, revenue forecasting, anomaly detection, chatbot',
            },
            { label: 'Database', value: 'PostgreSQL, DWH' },
            { label: 'Tools', value: 'Postman' },
          ],
        },
      ],
    },
  ],
  technicalSkills: [
    {
      id: 'languages',
      label: 'Languages',
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
      label: 'Front-end frameworks',
      skills: [
        { name: 'React', icon: TECH_ICONS.react },
        { name: 'Next.js', icon: TECH_ICONS.nextjs },
        { name: 'Vue.js', icon: TECH_ICONS.vuejs },
        { name: 'Angular', icon: TECH_ICONS.angular },
      ],
    },
    {
      id: 'backend',
      label: 'Back-end frameworks',
      skills: [
        { name: 'Express', icon: TECH_ICONS.express },
        { name: 'FastAPI', icon: TECH_ICONS.fastapi },
        { name: 'Spring', icon: TECH_ICONS.spring },
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
      label: 'Databases',
      skills: [
        { name: 'MySQL', icon: TECH_ICONS.mysql },
        { name: 'PostgreSQL', icon: TECH_ICONS.postgresql },
        { name: 'DWH', icon: TECH_ICONS.dwh },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      skills: [
        { name: 'Postman', icon: TECH_ICONS.postman },
        { name: 'Docker', icon: TECH_ICONS.docker },
        { name: 'Notion', icon: TECH_ICONS.notion },
      ],
    },
    {
      id: 'vcs',
      label: 'Version control',
      skills: [
        { name: 'Git', icon: TECH_ICONS.git },
        { name: 'GitHub', icon: TECH_ICONS.github },
        { name: 'Bitbucket', icon: TECH_ICONS.bitbucket },
      ],
    },
    {
      id: 'cloud',
      label: 'Storage / Cloud',
      skills: [
        { name: 'Cloudinary', icon: TECH_ICONS.cloudinary },
        { name: 'AWS S3', icon: TECH_ICONS.aws, wide: true },
      ],
    },
    {
      id: 'methodology',
      label: 'Methodology',
      skills: [{ name: 'Agile Scrum', icon: TECH_ICONS.scrum }],
    },
  ],
  softSkills: [
    'Rigor',
    'Autonomy',
    'Active listening and teamwork',
    'Adaptability',
    'Ease of integration',
  ],
  interests: [
    { label: 'Volunteering', icon: 'volunteer' },
    { label: 'Sports and hiking', icon: 'sport' },
    { label: 'Travel', icon: 'travel' },
    { label: 'Music and cinema', icon: 'culture' },
  ],
  languages: [
    { name: 'Malagasy', level: 100, label: 'Native language' },
    { name: 'French', level: 95, label: 'DELF B2 / DALF C1' },
    { name: 'English', level: 75, label: 'Intermediate' },
  ],
  education: [
    {
      title: 'Master 1 in Computer Science (in progress)',
      period: 'Since December 2025',
      detail: 'IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'AI Engineering for Software Development certification',
      period: 'May 2026',
      detail: 'DataCamp (associate level)',
    },
    {
      title: 'Python Development certification',
      period: 'May 2026',
      detail: 'freeCodeCamp',
    },
    {
      title: 'JavaScript Development certification',
      period: 'April 2026',
      detail: 'freeCodeCamp',
    },
    {
      title: 'Artificial Intelligence Fundamentals certification',
      period: 'April 2026',
      detail: 'DataCamp',
    },
    {
      title: 'Data Literacy certification',
      period: 'April 2026',
      detail: 'DataCamp',
    },
    {
      title: "Bachelor's degree in Computer Science",
      period: '2025',
      detail: 'IT University, Andoharanofotsy, Madagascar',
    },
    {
      title: 'Neuromarketing training',
      period: '2024',
      detail: 'Free Sell, Antananarivo, Madagascar',
    },
    {
      title: 'Technological Baccalaureate',
      period: '2022',
      detail: 'Collège Saint Michel, Amparibe, Madagascar',
    },
  ],
  competitions: [
    {
      title: '2D pixel art RPG game about deforestation',
      period: 'Hackathon Game (Devpost) · May 2026',
      image: '/projects/jeu-rpg-2d.png',
      description:
        'Design and development of a 2D pixel art narrative game raising awareness about deforestation, where player choices impact the forest state in real time.',
      details: [
        { label: 'Engine & gameplay', value: 'JavaScript, Maki, Phaser.js' },
        { label: 'Front-end & build', value: 'HTML5, CSS, Vite, npm' },
        { label: 'Version control', value: 'Git, GitHub' },
      ],
      href: 'https://maki-2d-pixel-rpg.vercel.app/',
      linkLabel: 'Play the game',
      projectSlug: 'maki-2d-pixel-rpg',
      githubUrl: 'https://github.com/Lucas-BENAIVO/maki-2d-pixel-rpg',
    },
    {
      title: 'IoT/AI solution for agriculture',
      period: 'RedShalk Hackathon — 2nd place · December 2024',
      image: '/projects/hackathon-redshalk.png',
      description:
        'IoT/AI architecture: environmental data collection and intelligent recommendations.',
      details: [
        { label: 'Back-end & API', value: 'Java, Servlets, REST API, CRUD, RBAC' },
        { label: 'Artificial Intelligence', value: 'Python' },
        { label: 'Database', value: 'PostgreSQL' },
      ],
      projectSlug: 'hackathon-redshalk',
    },
  ],
  projects: [
    {
      slug: 'mean-centre-commercial',
      title: 'Web platform — shopping mall',
      category: 'MEAN project — Master 1',
      image: '/projects/mean-centre-commercial.png',
      preview:
        'MEAN web application for a shopping mall: Admin, Store and Buyer profiles, REST API and MongoDB database.',
      githubUrl: 'https://github.com/Lucas-BENAIVO/ShoppingMall_boutique_front',
      about:
        'Web management application for a shopping mall, centralizing journeys for administrators, stores and buyers.',
      achievements: [
        'Full-stack development with Angular, TypeScript, Node.js, Express, MongoDB, REST API, Git and GitHub.',
        'Multi-role architecture for administrators, stores and buyers.',
        'Project completed as part of Master 1 in March 2026.',
      ],
    },
    {
      slug: 'rush-school',
      title: 'Rush School — K Beauty Academy',
      category: 'Showcase site — Beauty training',
      image: '/projects/rush-school.png',
      preview:
        'Showcase site for a beauty academy: nail & lash training, shop, student reviews and appointment booking.',
      externalUrl: 'https://rushschool.vercel.app/',
      githubUrl: 'https://github.com/Lucas-BENAIVO/rushschool',
      about:
        'Showcase site for an academy offering nail prosthetics and lash extension training, with course catalog, professional shop, student testimonials and appointment booking.',
      achievements: [
        'Front-end development with Next.js, React, TypeScript and Tailwind CSS.',
        'Course catalog, online shop, student reviews and call booking.',
        'Responsive, conversion-oriented interface design.',
        'Production deployment on Vercel with Git and GitHub.',
      ],
    },
    {
      slug: 'bi-ia-digital-afrique',
      title: 'AI-augmented BI platform',
      category: 'Internship — Digital Afrique Telecom',
      about:
        'Business Intelligence MVP integrating revenue forecasting, anomaly detection and chatbot to support business decision-making.',
      achievements: [
        'Front-end development with Next.js and Tailwind CSS.',
        'Back-end and data pipelines with Node.js, ETL and Python.',
        'Data storage and processing with PostgreSQL and a data warehouse.',
        'ETL pipelines and APIs tested with Postman.',
        'AI features for business decision support.',
      ],
    },
    {
      slug: 'plateforme-recrutement',
      title: 'Talentago — Recruitment platform',
      category: 'Internship — NextHope',
      image: '/projects/talentago.png',
      externalUrl: 'https://talentago.serenity.mg/',
      about:
        'Recruitment platform dedicated to application processing and candidate and recruiter profile management.',
      achievements: [
        'Front-end development with Vue.js.',
        'Back-end and API design with Node.js, REST API and PostgreSQL.',
        'File management and cloud storage with AWS S3.',
        'Version control with Git and Bitbucket.',
        'In parallel, participation in the « Mass In » e-commerce redesign with Shopify and Odoo.',
      ],
    },
    {
      slug: 'maki-2d-pixel-rpg',
      title: '2D pixel art RPG game about deforestation',
      category: 'Hackathon Game (Devpost) · May 2026',
      image: '/projects/jeu-rpg-2d.png',
      about:
        '2D pixel art narrative game about deforestation, where player choices change the forest state in real time.',
      achievements: [
        'Engine and gameplay design with JavaScript, Maki and Phaser.js.',
        'Front-end and build pipeline with HTML5, CSS, Vite and npm.',
        'Version control with Git and GitHub.',
      ],
    },
    {
      slug: 'hackathon-redshalk',
      title: 'IoT/AI solution for agriculture',
      category: 'RedShalk Hackathon — 2nd place',
      image: '/projects/hackathon-redshalk.png',
      about:
        'IoT and AI solution for agriculture, combining environmental data collection and intelligent recommendations for farmers.',
      achievements: [
        '2nd place at the RedShalk Hackathon in December 2024.',
        'Back-end and API development with Java, Servlets, REST API, CRUD and RBAC.',
        'Artificial intelligence modules integrated with Python.',
        'Data modeling and persistence with PostgreSQL.',
      ],
    },
  ],
  featuredProjectSlugs: ['rush-school', 'mean-centre-commercial'],
};
