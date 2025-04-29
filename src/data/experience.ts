export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Berlin, Germany',
    startDate: '2023-01',
    highlights: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored junior developers and conducted technical interviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations GmbH',
    location: 'Munich, Germany',
    startDate: '2021-03',
    endDate: '2022-12',
    highlights: [
      'Developed e-commerce platform with 500K+ monthly active users',
      'Optimized database queries reducing response time by 40%',
      'Implemented responsive design patterns and accessibility features'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL']
  },
  {
    title: 'Frontend Developer',
    company: 'WebTech Startup',
    location: 'Hamburg, Germany',
    startDate: '2019-06',
    endDate: '2021-02',
    highlights: [
      'Built and maintained multiple SPAs using React and TypeScript',
      'Improved website performance scores by 25 points on Lighthouse',
      'Integrated third-party APIs and payment gateways'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Sass', 'Jest']
  }
];