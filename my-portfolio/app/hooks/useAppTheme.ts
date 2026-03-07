'use client';

import { useTheme } from 'next-themes';

export function useAppTheme() {
  const { theme, setTheme } = useTheme();
  
  const isDark = theme === 'dark';
  const isLight = theme === 'light';
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return {
    theme,
    isDark,
    isLight,
    setTheme,
    toggleTheme,
  };
}
