export const translations = {
  es: {
    // Navegación
    nav: {
      home: "Inicio",
      biography: "Biografía",
      portfolio: "Portafolio",
      articles: "Artículos",
      videos: "Videos",
      contact: "Contacto",
      new: "Nuevo"
    },
    // Página de inicio
    home: {
      hero: {
        subtitle: "Periodista, escritor y docente venezolano/mexicano",
        cta: {
          primary: "Conocer más",
          secondary: "Ver portafolio"
        }
      },
      quote: "La escritura es un puente entre mundos, una forma de explorar la realidad a través de la imaginación y la observación crítica.",
      featuredWorks: {
        title: "Trabajos destacados",
        cta: "Leer más →",
        viewAll: "Ver todo el portafolio"
      },
      about: {
        title: "Sobre mí",
        cta: "Biografía completa"
      }
    },
    // Otras secciones según sea necesario
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      biography: "Biography",
      portfolio: "Portfolio",
      articles: "Articles",
      videos: "Videos",
      contact: "Contact",
      new: "New"
    },
    // Home page
    home: {
      hero: {
        subtitle: "Venezuelan/Mexican journalist, writer and teacher",
        cta: {
          primary: "Learn more",
          secondary: "View portfolio"
        }
      },
      quote: "Writing is a bridge between worlds, a way to explore reality through imagination and critical observation.",
      featuredWorks: {
        title: "Featured Works",
        cta: "Read more →",
        viewAll: "View full portfolio"
      },
      about: {
        title: "About me",
        cta: "Full biography"
      }
    },
    // Other sections as needed
  }
};

export type Language = 'es' | 'en';

export function getTranslation(language: Language, path: string) {
  const keys = path.split('.');
  let current: any = translations[language];
  
  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation missing for path: ${path} in language: ${language}`);
      // Fallback to Spanish if translation is missing
      current = translations['es'];
      for (const fallbackKey of keys) {
        if (current[fallbackKey] === undefined) {
          return path; // Return the path itself as last resort
        }
        current = current[fallbackKey];
      }
      return current;
    }
    current = current[key];
  }
  
  return current;
} 