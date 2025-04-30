interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js 13, TypeScript, and TailwindCSS. Features internationalization and dark mode support.',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/ozberkantkaya/portfolio',
    demo: 'https://berkanoeztuerk.dev',
    featured: true
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with microservices architecture, featuring real-time inventory, payment processing, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['NestJS', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com/ozberkantkaya/ecommerce',
    demo: 'https://demo-ecommerce.berkanoeztuerk.dev',
    featured: true
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'A collaborative task management application with real-time updates, file sharing, and team chat functionality.',
    image: '/images/projects/taskmanager.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/ozberkantkaya/task-manager',
    demo: 'https://tasks.berkanoeztuerk.dev',
    featured: true
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with location detection, historical data visualization, and severe weather alerts.',
    image: '/images/projects/weather.jpg',
    tags: ['React', 'TypeScript', 'D3.js', 'OpenWeather API'],
    github: 'https://github.com/ozberkantkaya/weather-app',
    demo: 'https://weather.berkanoeztuerk.dev',
    featured: false
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application supporting multiple rooms, file sharing, and message history.',
    image: '/images/projects/chat.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/ozberkantkaya/chat-app',
    featured: false
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, image optimization, and SEO features.',
    image: '/images/projects/blog.jpg',
    tags: ['Next.js', 'MDX', 'TailwindCSS', 'Prisma'],
    github: 'https://github.com/ozberkantkaya/blog-platform',
    demo: 'https://blog.berkanoeztuerk.dev',
    featured: false
  }
];