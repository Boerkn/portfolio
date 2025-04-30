interface Skill {
    name: string;
    level: number; // 1-5
    yearsOfExperience: number;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

export const skills: SkillCategory[] = [
    {
        name: 'Frontend',
        skills: [
            {name: 'TypeScript', level: 5, yearsOfExperience: 5},
            {name: 'React', level: 5, yearsOfExperience: 5},
            {name: 'Next.js', level: 4, yearsOfExperience: 3},
            {name: 'TailwindCSS', level: 4, yearsOfExperience: 3},
            {name: 'HTML/CSS', level: 5, yearsOfExperience: 7}
        ]
    },
    {
        name: 'Backend',
        skills: [
            {name: 'Node.js', level: 5, yearsOfExperience: 5},
            {name: 'Express', level: 4, yearsOfExperience: 4},
            {name: 'NestJS', level: 4, yearsOfExperience: 2},
            {name: 'GraphQL', level: 4, yearsOfExperience: 3},
            {name: 'REST APIs', level: 5, yearsOfExperience: 5}
        ]
    },
    {
        name: 'Database',
        skills: [
            {name: 'PostgreSQL', level: 4, yearsOfExperience: 4},
            {name: 'MongoDB', level: 4, yearsOfExperience: 3},
            {name: 'Redis', level: 3, yearsOfExperience: 2},
            {name: 'Prisma', level: 4, yearsOfExperience: 2}
        ]
    },
    {
        name: 'DevOps & Tools',
        skills: [
            {name: 'Git', level: 5, yearsOfExperience: 7},
            {name: 'Docker', level: 4, yearsOfExperience: 3},
            {name: 'AWS', level: 3, yearsOfExperience: 2},
            {name: 'CI/CD', level: 4, yearsOfExperience: 4},
            {name: 'Linux', level: 4, yearsOfExperience: 5}
        ]
    }
];