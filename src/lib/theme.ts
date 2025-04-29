export type Theme = 'light' | 'dark';

export const themeConfig = {
  light: {
    primary: '#0A192F',
    secondary: '#112240',
    accent: '#64FFDA',
    background: '#F8F9FA',
    text: '#1A1A1A',
  },
  dark: {
    primary: '#0A192F',
    secondary: '#112240',
    accent: '#64FFDA',
    background: '#0A192F',
    text: '#E6F1FF',
  },
} as const;

export const defaultTheme: Theme = 'light';