export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website built with Next.js, TypeScript, and TailwindCSS. Features dark mode, i18n support, and responsive design.',
    image: '/projects/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'i18n'],
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: '/projects/ecommerce.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/username/ecommerce',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, message translation, and voice support.',
    image: '/projects/chat.png',
    tags: ['React', 'Python', 'WebSocket', 'OpenAI'],
    demo: 'https://chat.example.com',
    featured: false,
  },
];