interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    achievements: string[];
    technologies: string[];
}

export const experience: Experience[] = [
    {
        company: 'Mediengruppe Münchner Merkur tz',
        role: 'Senior Software Engineer',
        location: 'locations.muc',
        startDate: new Date(2022, 9), // '2022-10'
        achievements: [
            'achievements.fullstack-dev',
            'achievements.se-system-architecture',
            'achievements.api-design',
            'achievements.technical-projectmanagement'
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'AWS', 'Docker']
    },
    {
        company: 'Mediengruppe Münchner Merkur tz',
        role: 'Software Engineer',
        location: 'locations.muc',
        startDate: new Date(2020, 8), // '2020-09',
        endDate: new Date(2022, 9), // '2022-10',
        achievements: [
            'achievements.fullstack-dev',
            'achievements.se',
            'achievements.customer-support'
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker']
    },
    {
        company: 'SOFiSTiK AG',
        role: 'Software Engineer',
        location: 'locations.muc',
        startDate: new Date(2018, 6), // '2018-07',
        endDate: new Date(2020, 8), // '2020-09',
        achievements: [
            'achievements.win-linux-dev',
            'achievements.technical-projectmanagement',
            'achievements.effort-estimate',
            'achievements.customer-support'
        ],
        technologies: ['C++', 'Qt', 'OpenGL', 'Python']
    },
    {
        company: 'SOFiSTiK AG',
        role: 'Junior Software Engineer',
        location: 'locations.muc',
        startDate: new Date(2016, 8), // '2016-09',
        endDate: new Date(2018, 6), // '2018-07',
        achievements: [
            'achievements.db-dev',
            'achievements.gui-dev',
            'achievements.se',
            'achievements.it-management'
        ],
        technologies: ['C++', 'Qt', 'SQL', 'SVN']
    }
];