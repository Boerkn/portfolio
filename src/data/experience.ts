interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate?: string;
    achievements: string[];
    technologies: string[];
}

export const experience: Experience[] = [
    {
        company: 'Current Company',
        role: 'Senior Software Engineer',
        location: 'Düsseldorf, Germany',
        startDate: '2022-03',
        achievements: [
            'Led the development of a microservices-based e-commerce platform using Next.js and NestJS',
            'Improved application performance by 40% through code optimization and caching strategies',
            'Mentored junior developers and conducted technical interviews'
        ],
        technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'AWS']
    },
    {
        company: 'Previous Company',
        role: 'Full Stack Developer',
        location: 'Berlin, Germany',
        startDate: '2020-01',
        endDate: '2022-02',
        achievements: [
            'Developed and maintained multiple client projects using React and Node.js',
            'Implemented CI/CD pipelines reducing deployment time by 50%',
            'Collaborated with UX team to improve user experience and accessibility'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'GraphQL']
    },
    {
        company: 'First Company',
        role: 'Frontend Developer',
        location: 'Istanbul, Turkey',
        startDate: '2018-06',
        endDate: '2019-12',
        achievements: [
            'Built responsive web applications using React and Redux',
            'Reduced bundle size by 35% through code splitting and lazy loading',
            'Participated in daily stand-ups and sprint planning meetings'
        ],
        technologies: ['JavaScript', 'React', 'Redux', 'HTML', 'CSS', 'Git']
    }
];