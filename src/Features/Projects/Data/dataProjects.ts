import { IProject } from '../types'

export const dataProjects: IProject[] = [
  {
    id: 1,
    name: 'MyDrugs',
    img: '/projects/MyDrugs.png',
    description:
      'Sistema com cadastro e controle de dados. Frontend em React integrado a backend em Node.js para manipulação e persistência.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://my-drugs-front-end.vercel.app/menu',
  },
  {
    id: 2,
    name: 'Comeback Store',
    img: '/projects/ComebackStore.png',
    description:
      'Aplicação com listagem de produtos e navegação dinâmica. Estruturada para integração entre frontend e backend.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://come-back-store-front-end.vercel.app/',
  },
  {
    id: 3,
    name: 'FLP Foods',
    img: '/projects/FLPFoods.png',
    description:
      'Interface com exibição de itens e layout responsivo. Preparada para consumir dados de um backend.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://flp-foods-front-end.vercel.app/',
  },
];