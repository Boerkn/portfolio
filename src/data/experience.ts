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
        company: 'Mediengruppe Münchner Merkur tz',
        role: 'Senior Software Engineer',
        location: 'München, Deutschland',
        startDate: '2023-01',
        achievements: [
            'Fullstack-Softwareentwicklung',
            'Software- und Systemarchitektur',
            'API- und Microservice-Design',
            'Technisches Projektmanagement'
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'AWS', 'Docker']
    },
    {
        company: 'Mediengruppe Münchner Merkur tz',
        role: 'Software Engineer',
        location: 'München, Deutschland',
        startDate: '2020-01',
        endDate: '2022-12',
        achievements: [
            'Fullstack-Entwicklung',
            'Software Engineering',
            'Kundensupport'
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker']
    },
    {
        company: 'SOFiSTiK AG',
        role: 'Software Engineer',
        location: 'München, Deutschland',
        startDate: '2018-01',
        endDate: '2019-12',
        achievements: [
            'Windows-/Linux-Entwicklung',
            'Technisches Projektmanagement',
            'Aufwandsschätzung & Kundensupport'
        ],
        technologies: ['C++', 'Qt', 'OpenGL', 'Python']
    },
    {
        company: 'SOFiSTiK AG',
        role: 'Junior Software Engineer',
        location: 'München, Deutschland',
        startDate: '2016-01',
        endDate: '2017-12',
        achievements: [
            'Datenbank- und GUI-Entwicklung',
            'Grundlagen Software Engineering',
            'IT-Management'
        ],
        technologies: ['C++', 'Qt', 'SQL', 'SVN']
    }
];