import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors that change with theme - Modern Black & Dirty White
        primary: {
          light: '#1a1a1a',
          dark: '#f8f8f6',
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
        
        // Semantic colors - Modern
        'light-bg': '#f8f8f6',
        'light-bg-alt': '#efefed',
        'light-border': '#e0e0de',
        'light-text': '#1a1a1a',
        'light-text-muted': '#71717A',
        
        'dark-bg': '#0f0f0e',
        'dark-bg-alt': '#1a1a19',
        'dark-border': '#27272A',
        'dark-text': '#f8f8f6',
        'dark-text-muted': '#A1A1AA',
      },
      backgroundColor: {
        'card-light': '#f8f8f6',
        'card-dark': '#18181B',
        'input-light': '#efefed',
        'input-dark': '#18181B',
      },
      borderColor: {
        'light': '#e0e0de',
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
