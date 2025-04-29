'use client';

import { useTheme } from './ThemeProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {routing} from '@/i18n/routing';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const navigation = [
    { name: 'Home', href: `/${currentLocale}` },
    { name: 'Skills', href: `/${currentLocale}#skills` },
    { name: 'Experience', href: `/${currentLocale}#experience` },
    { name: 'Projects', href: `/${currentLocale}#projects` },
    { name: 'Blog', href: `/${currentLocale}/blog` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href={`/${currentLocale}`}
              className="text-2xl font-bold text-accent"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Selector */}
              <div className="relative ml-4">
                <select
                  onChange={(e) => {
                    const newLocale = e.target.value;
                    window.location.href = pathname.replace(
                      `/${currentLocale}`,
                      `/${newLocale}`
                    );
                  }}
                  value={currentLocale}
                  className="appearance-none bg-secondary/10 rounded-md pl-3 pr-8 py-2 text-sm cursor-pointer hover:bg-secondary/20 transition-colors"
                >
                  {routing.locales.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-secondary/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 py-2">
              <select
                onChange={(e) => {
                  const newLocale = e.target.value;
                  window.location.href = pathname.replace(
                    `/${currentLocale}`,
                    `/${newLocale}`
                  );
                }}
                value={currentLocale}
                className="appearance-none bg-secondary/10 rounded-md pl-3 pr-8 py-2 text-sm cursor-pointer hover:bg-secondary/20 transition-colors"
              >
                {routing.locales.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-secondary/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}