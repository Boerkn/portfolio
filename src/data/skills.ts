interface Skill {
    name: string;
    level: number;
    yearsOfExperience: number;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

export const skills: SkillCategory[] = [
    {
        name: 'Programmiersprachen',
        skills: [
            {name: 'Java', level: 5, yearsOfExperience: 10},
            {name: 'JavaScript/TypeScript', level: 5, yearsOfExperience: 8},
            {name: 'Python', level: 4, yearsOfExperience: 5},
            {name: 'C++', level: 4, yearsOfExperience: 6},
            {name: '.NET', level: 3, yearsOfExperience: 3},
            {name: 'PHP', level: 3, yearsOfExperience: 4}
        ]
    },
    {
        name: 'Frameworks & Tools',
        skills: [
            {name: 'Spring Boot', level: 5, yearsOfExperience: 7},
            {name: 'React', level: 4, yearsOfExperience: 5},
            {name: 'Next.js', level: 4, yearsOfExperience: 3},
            {name: 'Docker', level: 4, yearsOfExperience: 5},
            {name: 'React Native', level: 3, yearsOfExperience: 2}
        ]
    },
    {
        name: 'Datenbanken',
        skills: [
            {name: 'MySQL/MariaDB', level: 5, yearsOfExperience: 10},
            {name: 'MongoDB', level: 4, yearsOfExperience: 5},
            {name: 'SQL', level: 5, yearsOfExperience: 10}
        ]
    },
    {
        name: 'Cloud & DevOps',
        skills: [
            {name: 'AWS', level: 4, yearsOfExperience: 4},
            {name: 'Firebase', level: 3, yearsOfExperience: 3},
            {name: 'CI/CD', level: 4, yearsOfExperience: 5},
            {name: 'GitLab CI', level: 4, yearsOfExperience: 4}
        ]
    }
]