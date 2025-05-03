'use client';

import {useState} from 'react';
import {Link,} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';
import LocaleSwitcher from "@/components/LocaleSwitcher";

export function Navbar() {
    const t = useTranslations();
    const {theme, setTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        {name: t('navigation.home'), href: `/`},
        {name: t('navigation.skills'), href: `#skills`},
        {name: t('navigation.experience'), href: `#experience`},
        {name: t('navigation.projects'), href: `#projects`},
        {name: t('navigation.contact'), href: `#contact`}
    ];

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 64; // 4rem (h-16)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const isHashLink = href.includes('#');
        if (isHashLink) {
            e.preventDefault();
            const id = href.split('#')[1];
            scrollToElement(id);
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={`/`} className="text-2xl font-bold text-accent">
                            Berkan Öztürk
                        </Link>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-center space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="px-3 py-2 rounded-md text-sm font-medium hover:text-accent transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <LocaleSwitcher/>

                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-md hover:bg-secondary/10 transition-colors"
                            aria-label={t('common.toggleTheme')}
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                    </div>

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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
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
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-between px-3 py-2">
                        <LocaleSwitcher/>
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-md hover:bg-secondary/10 transition-colors"
                            aria-label={t('common.toggleTheme')}
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}