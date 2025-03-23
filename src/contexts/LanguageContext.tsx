'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  // Detectar el idioma del navegador al cargar la página
  useEffect(() => {
    const detectBrowserLanguage = (): Language => {
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'en' ? 'en' : 'es';
    };

    // Verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const detectedLanguage = detectBrowserLanguage();
      setLanguage(detectedLanguage);
      localStorage.setItem('language', detectedLanguage);
    }
  }, []);

  // Guardar el idioma seleccionado en localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 