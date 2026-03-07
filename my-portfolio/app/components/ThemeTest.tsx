'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeTest() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg z-50 text-sm">
      <p>Theme: {theme}</p>
      <p>Resolved: {resolvedTheme}</p>
      <button 
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="mt-2 bg-white text-blue-500 px-3 py-1 rounded"
      >
        Toggle
      </button>
    </div>
  );
}
