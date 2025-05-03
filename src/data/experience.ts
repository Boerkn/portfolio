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
        startDate: new Date(2022, 9), // '2022-10'
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
        startDate: new Date(2020, 8), // '2020-09',
        endDate: new Date(2022, 9), // '2022-10',
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
        startDate: new Date(2018, 6), // '2018-07',
        endDate: new Date(2020, 8), // '2020-09',
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
        startDate: new Date(2016, 8), // '2016-09',
        endDate: new Date(2018, 6), // '2018-07',
        achievements: [
            'Datenbank- und GUI-Entwicklung',
            'Grundlagen Software Engineering',
            'IT-Management'
        ],
        technologies: ['C++', 'Qt', 'SQL', 'SVN']
    }
];