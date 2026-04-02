'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="md:hidden">
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="icon"
        aria-label="Toggle menu"
        className="hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200"
      >
        {isOpen ? <FiX size={24} className="text-accent-blue" /> : <FiMenu size={24} className="text-light-text dark:text-dark-text" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-screen w-64 bg-light-bg dark:bg-dark-bg border-l border-light-border dark:border-dark-border shadow-2xl z-50 animate-in slide-in-from-right-80 duration-300 ease-out">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-light-border dark:border-dark-border bg-light-border dark:bg-dark-border">
              <span className="text-lg font-bold text-light-text dark:text-dark-text">Menu</span>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="hover:bg-light-border dark:hover:bg-dark-border transition-colors"
              >
                <FiX size={24} />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="px-6 py-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group px-4 py-3 rounded-lg text-light-text dark:text-dark-text font-medium hover:bg-light-border dark:hover:bg-dark-border transition-all duration-200 hover:translate-x-2 hover:text-accent-blue dark:hover:text-accent-blue border-l-2 border-transparent hover:border-accent-blue animate-in slide-in-from-left"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationDuration: '300ms',
                      animationFillMode: 'both'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Separator */}
              <div className="my-6 h-px bg-light-border dark:bg-dark-border"></div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-medium text-light-text dark:text-dark-text">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
