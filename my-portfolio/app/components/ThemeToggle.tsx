'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === 'dark';

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="hover:bg-light-border dark:hover:bg-dark-border transition-all duration-200"
    >
      {isDark ? (
        <FiSun className="h-5 w-5 text-accent-yellow" />
      ) : (
        <FiMoon className="h-5 w-5 text-accent-purple" />
      )}
    </Button>
  );
}
