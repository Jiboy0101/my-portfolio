// Global Color Scheme for Portfolio with Theme Support
export const colors = {
  // Light Theme
  light: {
    primary: {
      main: '#000000',
      secondary: '#71717A',
    },
    background: {
      default: '#FFFFFF',
      alt: '#F4F4F5',
    },
    text: {
      primary: '#000000',
      secondary: '#71717A',
    },
    border: '#E4E4E7',
    hover: '#F4F4F5',
    
    // Component specific
    card: {
      bg: '#FFFFFF',
      border: '#E4E4E7',
    },
    button: {
      primary: {
        bg: '#000000',
        text: '#FFFFFF',
      },
      secondary: {
        bg: '#E4E4E7',
        text: '#000000',
      },
    },
    input: {
      bg: '#F4F4F5',
      border: '#E4E4E7',
      text: '#000000',
    },
    badge: {
      bg: '#F4F4F5',
      text: '#000000',
    },
  },

  // Dark Theme
  dark: {
    primary: {
      main: '#FFFFFF',
      secondary: '#A1A1AA',
    },
    background: {
      default: '#09090B',
      alt: '#18181B',
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#A1A1AA',
    },
    border: '#27272A',
    hover: '#27272A',
    
    // Component specific
    card: {
      bg: '#18181B',
      border: '#27272A',
    },
    button: {
      primary: {
        bg: '#FFFFFF',
        text: '#000000',
      },
      secondary: {
        bg: '#27272A',
        text: '#FFFFFF',
      },
    },
    input: {
      bg: '#18181B',
      border: '#27272A',
      text: '#FAFAFA',
    },
    badge: {
      bg: '#27272A',
      text: '#FAFAFA',
    },
  },

  // Accent Colors (Same in both themes, but styled for contrast)
  accent: {
    // Light mode
    light: {
      blue: '#3B82F6',
      purple: '#A855F7',
      green: '#10B981',
      orange: '#F97316',
      pink: '#EC4899',
      teal: '#14B8A6',
      red: '#EF4444',
      yellow: '#FBBF24',
      indigo: '#6366F1',
    },
    // Dark mode (brighter for better contrast)
    dark: {
      blue: '#60A5FA',
      purple: '#C084FC',
      green: '#34D399',
      orange: '#FB923C',
      pink: '#F472B6',
      teal: '#2DD4BF',
      red: '#F87171',
      yellow: '#FCD34D',
      indigo: '#818CF8',
    },
  },
};

// CSS Color Variables for direct usage
export const colorVariables = {
  // Light theme
  light: {
    '--color-primary': colors.light.primary.main,
    '--color-secondary': colors.light.primary.secondary,
    '--color-background': colors.light.background.default,
    '--color-background-alt': colors.light.background.alt,
    '--color-border': colors.light.border,
    '--color-hover': colors.light.hover,
    '--color-text': colors.light.text.primary,
    '--color-text-muted': colors.light.text.secondary,
    '--color-card-bg': colors.light.card.bg,
    '--color-card-border': colors.light.card.border,
    '--color-button-primary': colors.light.button.primary.bg,
    '--color-button-primary-text': colors.light.button.primary.text,
    '--color-accent-blue': colors.accent.light.blue,
    '--color-accent-purple': colors.accent.light.purple,
    '--color-accent-green': colors.accent.light.green,
  },
  // Dark theme
  dark: {
    '--color-primary': colors.dark.primary.main,
    '--color-secondary': colors.dark.primary.secondary,
    '--color-background': colors.dark.background.default,
    '--color-background-alt': colors.dark.background.alt,
    '--color-border': colors.dark.border,
    '--color-hover': colors.dark.hover,
    '--color-text': colors.dark.text.primary,
    '--color-text-muted': colors.dark.text.secondary,
    '--color-card-bg': colors.dark.card.bg,
    '--color-card-border': colors.dark.card.border,
    '--color-button-primary': colors.dark.button.primary.bg,
    '--color-button-primary-text': colors.dark.button.primary.text,
    '--color-accent-blue': colors.accent.dark.blue,
    '--color-accent-purple': colors.accent.dark.purple,
    '--color-accent-green': colors.accent.dark.green,
  },
} as const;
