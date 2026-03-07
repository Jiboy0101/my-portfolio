import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors that change with theme
        primary: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        
        // Accent colors - Light theme
        'accent-blue': '#3B82F6',
        'accent-purple': '#A855F7',
        'accent-green': '#10B981',
        'accent-orange': '#F97316',
        'accent-pink': '#EC4899',
        'accent-teal': '#14B8A6',
        'accent-red': '#EF4444',
        'accent-yellow': '#FBBF24',
        'accent-indigo': '#6366F1',
        
        // Semantic colors
        'light-bg': '#FFFFFF',
        'light-bg-alt': '#F4F4F5',
        'light-border': '#E4E4E7',
        'light-text': '#000000',
        'light-text-muted': '#71717A',
        
        'dark-bg': '#09090B',
        'dark-bg-alt': '#18181B',
        'dark-border': '#27272A',
        'dark-text': '#FAFAFA',
        'dark-text-muted': '#A1A1AA',
      },
      backgroundColor: {
        'card-light': '#FFFFFF',
        'card-dark': '#18181B',
        'input-light': '#F4F4F5',
        'input-dark': '#18181B',
      },
      borderColor: {
        'light': '#E4E4E7',
        'dark': '#27272A',
      },
      textColor: {
        'light-primary': '#000000',
        'light-secondary': '#71717A',
        'dark-primary': '#FAFAFA',
        'dark-secondary': '#A1A1AA',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
