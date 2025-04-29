export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5; // 1: Beginner, 5: Expert
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'TailwindCSS', level: 4 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 4 },
      { name: 'Python', level: 3 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'GraphQL', level: 3 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 4 },
      { name: 'AWS', level: 3 },
      { name: 'Linux', level: 4 },
    ],
  },
];