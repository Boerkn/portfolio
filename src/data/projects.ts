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
        title: 'Identity Governance & Administration (IGA)',
        description: 'Entwicklung eines Berechtigungsmanagementsystems mit integrierten API-Schnittstellen und spezialisierten Adaptern.',
        image: '/iga.png',
        tags: ['Midpoint', 'Java', 'Spring Boot', 'Docker', 'Keycloak'],
        featured: true
    },
    {
        id: 'dpa-import',
        title: 'Nachrichtenimport für dpa',
        description: 'Entwicklung eines Systems zur Verarbeitung von dpa-Nachrichtendaten mit komplexer businesslogikgesteuerter Verarbeitung.',
        image: '/dpa-import.png',
        tags: ['Java', 'Spring Boot', 'MongoDB', 'AWS Lambda', 'Prometheus'],
        featured: true
    },
    {
        id: 'news-processing',
        title: 'Nachrichtendatenverarbeitung',
        description: 'System für Import, Export und Verarbeitung von Nachrichtendaten mit komplexer Businesslogik.',
        image: '/news-web-media-hero.png',
        tags: ['Java', 'MySQL', 'MongoDB', 'Docker'],
        featured: true
    },
    {
        id: 'autocad-modeling',
        title: 'AutoCAD-Modellierung im CABD-Workflow',
        description: 'Entwicklung einer UI für die CAD-Modellierung im CABD-Workflow mit fortschrittlichen 3D-Visualisierungsfunktionen.',
        image: '/cabd_workflow.png',
        tags: ['C++', 'Qt', 'OpenGL'],
        featured: false
    },
    {
        id: 'distributor',
        title: 'Verteilerlinie im CABD-Workflow',
        description: 'Entwicklung und Implementierung eines Moduls zur Erstellung von Pfadgeometrien und Verteilerlinien im Computer Aided Bridge Design (CABD). Das Projekt umfasste komplexe Geometrieberechnungen, parametrisierte Pfaderstellung und nahtlose Integration in die SOFiSTiK-Umgebung für Brücken- und Tragwerksplanung.',
        image: '/make_path_system.png',
        tags: ['C++', 'Qt', 'ObjectARX'],
        featured: true
    },
    {
        id: 'automated-testing',
        title: 'Automated GUI Testing',
        description: 'Entwicklung einer automatisierten Test-Suite für GUI-Anwendungen mit Integration in CI/CD-Pipelines.',
        image: '/Squish-interface-simplified-01.webp',
        tags: ['Python', 'JavaScript', 'Squish', 'Bamboo CI'],
        featured: false
    },
    {
        id: 'cicd-web',
        title: 'CI/CD für Web Komponenten',
        description: 'Entwicklung einer CI/CD-Pipeline für Web-Komponenten mit automatisierten Tests und Build-Prozessen.',
        image: '/ci-cd.jpg',
        tags: ['JavaScript/TypeScript', 'Babel', 'Webpack', 'Docker', 'GitLab'],
        featured: false
    },
    {
        id: 'bakkal-usta',
        title: 'Plattform-App "Bakkal-Usta"',
        description: 'Entwicklung einer mobilen Plattform-App mit Fokus auf benutzerfreundlichem Design und nahtloser Backend-Integration.',
        image: '/bakkal-usta.png',
        tags: ['React Native', 'Expo', 'Firebase', 'Spring Boot'],
        featured: true
    }
]