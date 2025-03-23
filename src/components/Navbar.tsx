"use client";

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-tertiary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-accent hover:text-accent/80 transition">
              Rubén Machaen
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-foreground hover:text-accent transition">
              {t('nav.home')}
            </Link>
            <Link href="/biografia" className="nav-link text-foreground hover:text-accent transition">
              {t('nav.biography')}
            </Link>
            <Link href="/portafolio" className="nav-link text-foreground hover:text-accent transition">
              {t('nav.portfolio')}
            </Link>
            <Link href="/articulos" className="nav-link text-foreground hover:text-accent transition">
              {t('nav.articles')}
            </Link>
            <Link href="/videos" className="nav-link text-foreground hover:text-accent transition flex items-center">
              {t('nav.videos')}
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-white rounded-full">{t('nav.new')}</span>
            </Link>
            <Link href="/contacto" className="nav-link text-foreground hover:text-accent transition">
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-tertiary/10 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/biografia" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.biography')}
            </Link>
            <Link 
              href="/portafolio" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              href="/articulos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.articles')}
            </Link>
            <Link 
              href="/videos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.videos')}
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-white rounded-full">{t('nav.new')}</span>
            </Link>
            <Link 
              href="/contacto" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 