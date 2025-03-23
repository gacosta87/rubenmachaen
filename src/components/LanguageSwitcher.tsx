"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 text-sm rounded-md transition ${
          language === 'es' 
            ? 'bg-accent text-white' 
            : 'text-foreground/70 hover:text-accent'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <span className="text-foreground/40">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-sm rounded-md transition ${
          language === 'en' 
            ? 'bg-accent text-white' 
            : 'text-foreground/70 hover:text-accent'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
} 