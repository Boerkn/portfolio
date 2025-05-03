export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    featured: boolean;
    demo?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        id: 'iga',
        title: 'iga.title',
        description: 'iga.description',
        image: '/iga.png',
        tags: ['Midpoint', 'Java', 'Spring Boot', 'Docker', 'Keycloak'],
        featured: true
    },
    {
        id: 'dpa-import',
        title: 'dpa-import.title',
        description: 'dpa-import.description',
        image: '/dpa-import.png',
        tags: ['Java', 'Spring Boot', 'MongoDB', 'AWS Lambda', 'Prometheus'],
        featured: true
    },
    {
        id: 'news-processing',
        title: 'news-processing.title',
        description: 'news-processing.description',
        image: '/news-web-media-hero.png',
        tags: ['Java', 'MySQL', 'MongoDB', 'Docker'],
        featured: true
    },
    {
        id: 'autocad-modeling',
        title: 'autocad-modeling.title',
        description: 'autocad-modeling.description',
        image: '/cabd_workflow.png',
        tags: ['C++', 'Qt', 'OpenGL'],
        featured: false
    },
    {
        id: 'distributor',
        title: 'distributor.title',
        description: 'distributor.description',
        image: '/make_path_system.png',
        tags: ['C++', 'Qt', 'ObjectARX'],
        featured: true
    },
    {
        id: 'automated-testing',
        title: 'automated-testing.title',
        description: 'automated-testing.description',
        image: '/Squish-interface-simplified-01.webp',
        tags: ['Python', 'JavaScript', 'Squish', 'Bamboo CI'],
        featured: false
    },
    {
        id: 'cicd-web',
        title: 'cicd-web.title',
        description: 'cicd-web.description',
        image: '/ci-cd.jpg',
        tags: ['JavaScript/TypeScript', 'Babel', 'Webpack', 'Docker', 'GitLab'],
        featured: true
    },
    {
        id: 'bakkal-usta',
        title: 'bakkal-usta.title',
        description: 'bakkal-usta.description',
        image: '/bakkal-usta.png',
        tags: ['React Native', 'Expo', 'Firebase', 'Spring Boot'],
        featured: true
    }
]