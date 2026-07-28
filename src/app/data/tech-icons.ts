/** URLs d’icônes Devicon / Simple Icons */
const devicon = (folder: string, file = folder, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${folder}/${file}-${variant}.svg`;

const simple = (slug: string, color = 'ffffff') =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const TECH_ICONS = {
  html: devicon('html5', 'html5'),
  css: devicon('css3', 'css3'),
  javascript: devicon('javascript', 'javascript'),
  typescript: devicon('typescript', 'typescript'),
  python: devicon('python', 'python'),
  java: devicon('java', 'java'),
  react: devicon('react', 'react'),
  nextjs: devicon('nextjs', 'nextjs'),
  vuejs: devicon('vuejs', 'vuejs'),
  angular: devicon('angular', 'angular'),
  express: devicon('express', 'express', 'original'),
  fastapi: devicon('fastapi', 'fastapi'),
  spring: devicon('spring', 'spring'),
  django: devicon('django', 'django', 'plain'),
  dotnet: devicon('dot-net', 'dot-net'),
  shopify: simple('shopify', '96BF48'),
  mysql: devicon('mysql', 'mysql'),
  postgresql: devicon('postgresql', 'postgresql'),
  sqlserver: devicon('microsoftsqlserver', 'microsoftsqlserver'),
  dwh: devicon('azuresqldatabase', 'azuresqldatabase'),
  postman: simple('postman', 'FF6C37'),
  docker: devicon('docker', 'docker'),
  notion: simple('notion', '000000'),
  git: devicon('git', 'git'),
  github: devicon('github', 'github'),
  gitlab: devicon('gitlab', 'gitlab'),
  bitbucket: devicon('bitbucket', 'bitbucket'),
  cloudinary: simple('cloudinary', '3448C5'),
  /** Logo officiel AWS (texte + flèche orange) */
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  scrum: simple('scrumalliance', '0091D5'),
} as const;
