export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const profile: Profile = {
  name: 'John Doe',
  role: 'Full Stack Developer',
  bio: 'Passionate software engineer with expertise in modern web technologies. Building scalable and accessible applications with a focus on user experience.',
  avatar: '/profile.jpg',
  location: 'Berlin, Germany',
  email: 'contact@example.com',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
};