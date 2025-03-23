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
        viewAll: "Ver todo el portafolio",
        articles: {
          soundtracks: {
            title: "Soundtracks (Rocolas que no existen)",
            description: "Novela publicada en 2017 con la editorial Ígneo, explorando la relación entre la música y la memoria."
          },
          venezolanos: {
            title: "Venezolanos en Chile: Tren al Sur",
            description: "Reportaje sobre la migración venezolana hacia Chile, publicado en El Estímulo."
          },
          fulanito: {
            title: "Fulanito y sus quejas domingueras",
            description: "Relato publicado en la revista de la Biblioteca Nacional Argentina en Buenos Aires."
          }
        }
      },
      about: {
        title: "Sobre mí",
        cta: "Biografía completa",
        bio: {
          part1: "Periodista, escritor y docente venezolano/mexicano. Cursé estudios literarios en Buenos Aires y he dictado cátedras de géneros periodísticos en la Universidad Monteávila, en Caracas, e Innovación y estructura periodística en la Universidad Anáhuac, en México.",
          part2: "He colaborado en medios internacionales como El Espectador (Colombia), La Tempestad y Tercera Vía (México), ViceVersa (New York) y El Estímulo (Venezuela)."
        }
      },
      youtube: {
        title: "Canal de YouTube",
        description: "Suscríbete a mi canal para ver entrevistas, análisis y más contenido sobre literatura y periodismo.",
        cta: "Ver canal"
      }
    },
    // Footer
    footer: {
      description: "Periodista, escritor y docente venezolano/mexicano. Colaborador en medios internacionales.",
      links: "Enlaces",
      biography: "Biografía",
      portfolio: "Portafolio",
      articles: "Artículos",
      videos: "Videos",
      contact: "Contacto",
      social: "Redes Sociales",
      follow: "Sígueme en",
      copyright: "© 2023 Rubén Machaen. Todos los derechos reservados."
    }
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
        viewAll: "View all portfolio",
        articles: {
          soundtracks: {
            title: "Soundtracks (Jukeboxes that don't exist)",
            description: "Novel published in 2017 with Ígneo publishing house, exploring the relationship between music and memory."
          },
          venezolanos: {
            title: "Venezuelans in Chile: Train to the South",
            description: "Report on Venezuelan migration to Chile, published in El Estímulo."
          },
          fulanito: {
            title: "Fulanito and his Sunday complaints",
            description: "Story published in the magazine of the Argentine National Library in Buenos Aires."
          }
        }
      },
      about: {
        title: "About me",
        cta: "Full biography",
        bio: {
          part1: "Venezuelan/Mexican journalist, writer and teacher. I studied literature in Buenos Aires and have taught journalistic genres at Monteávila University in Caracas, and Journalistic Innovation and Structure at Anáhuac University in Mexico.",
          part2: "I have collaborated with international media such as El Espectador (Colombia), La Tempestad and Tercera Vía (Mexico), ViceVersa (New York) and El Estímulo (Venezuela)."
        }
      },
      youtube: {
        title: "YouTube Channel",
        description: "Subscribe to my channel to watch interviews, analysis and more content about literature and journalism.",
        cta: "View channel"
      }
    },
    // Footer
    footer: {
      description: "Venezuelan/Mexican journalist, writer and teacher. Contributor to international media.",
      links: "Links",
      biography: "Biography",
      portfolio: "Portfolio",
      articles: "Articles",
      videos: "Videos",
      contact: "Contact",
      social: "Social Media",
      follow: "Follow me on",
      copyright: "© 2023 Rubén Machaen. All rights reserved."
    }
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