"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Inicio
            </Link>
            <Link href="/biografia" className="nav-link text-foreground hover:text-accent transition">
              Biografía
            </Link>
            <Link href="/portafolio" className="nav-link text-foreground hover:text-accent transition">
              Portafolio
            </Link>
            <Link href="/articulos" className="nav-link text-foreground hover:text-accent transition">
              Artículos
            </Link>
            <Link href="/videos" className="nav-link text-foreground hover:text-accent transition flex items-center">
              Videos
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-white rounded-full">Nuevo</span>
            </Link>
            <Link href="/contacto" className="nav-link text-foreground hover:text-accent transition">
              Contacto
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-tertiary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/biografia" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Biografía
            </Link>
            <Link 
              href="/portafolio" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Portafolio
            </Link>
            <Link 
              href="/articulos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Artículos
            </Link>
            <Link 
              href="/videos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-white rounded-full">Nuevo</span>
            </Link>
            <Link 
              href="/contacto" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-tertiary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 