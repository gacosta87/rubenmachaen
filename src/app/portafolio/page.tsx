import Image from "next/image";
import Link from "next/link";

export default function Portafolio() {
  // Categorías de trabajo
  const categories = [
    { id: "all", name: "Todos" },
    { id: "journalism", name: "Periodismo" },
    { id: "literature", name: "Literatura" },
    { id: "academic", name: "Académico" },
  ];

  // Trabajos destacados con URLs de placeholder
  const works = [
    {
      id: 1,
      title: "Soundtracks (Rocolas que no existen)",
      category: "literature",
      image: "https://placehold.co/600x400/8b4513/ffffff?text=Soundtracks",
      year: "2017",
      publisher: "Editorial Ígneo",
      link: "/articulos/soundtracks",
    },
    {
      id: 2,
      title: "Venezolanos en Chile: Tren al Sur",
      category: "journalism",
      image: "https://placehold.co/600x400/a98467/ffffff?text=Venezolanos+en+Chile",
      year: "2015",
      publisher: "El Estímulo",
      link: "/articulos/venezolanos-chile",
    },
    {
      id: 3,
      title: "La identidad latinoamericana en tiempos de globalización",
      category: "opinion",
      image: "https://placehold.co/600x400/3a5a40/ffffff?text=Identidad+Latinoamericana",
      year: "2021",
      publisher: "Revista Nexos",
      link: "/articulos/identidad-latinoamericana",
    },
    {
      id: 4,
      title: "19 de septiembre: Sismo",
      category: "journalism",
      image: "https://placehold.co/600x400/c68c53/ffffff?text=19+de+Septiembre",
      year: "2018",
      publisher: "El Universal",
      link: "/articulos/19-septiembre-sismo",
    },
    {
      id: 5,
      title: "El Proceso contra Econoinvest: Intervención y Controversia",
      category: "journalism",
      image: "https://placehold.co/600x400/b08968/ffffff?text=Econoinvest",
      year: "2010",
      publisher: "Revista Exceso",
      link: "/articulos/econoinvest",
    },
    {
      id: 6,
      title: "Silencios: Otra historia que nunca fue",
      category: "journalism",
      image: "https://placehold.co/600x400/4a7c59/ffffff?text=Silencios",
      year: "2019",
      publisher: "Gatopardo",
      link: "/articulos/silencios",
    },
    {
      id: 7,
      title: "Fulanito y sus quejas domingueras",
      category: "literature",
      image: "https://placehold.co/600x400/c9ada7/ffffff?text=Fulanito",
      year: "2012",
      publisher: "Biblioteca de Babel",
      link: "/articulos/fulanito",
    },
    {
      id: 8,
      title: "La Tigresa del Oriente: De Garras Tomar",
      category: "journalism",
      image: "https://placehold.co/600x400/d9a679/ffffff?text=La+Tigresa+del+Oriente",
      year: "2011",
      publisher: "Revista Cultural",
      link: "/articulos/tigresa-oriente",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Portafolio</h1>
        
        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 rounded-md bg-background border border-tertiary/30 hover:bg-tertiary/10 transition"
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Grid de trabajos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div 
              key={work.id}
              className="article-card bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20"
            >
              <div className="relative h-48">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <span className="text-sm text-foreground/60">{work.year}</span>
                </div>
                <p className="text-foreground/70 mb-4">{work.publisher}</p>
                <Link href={work.link} className="text-accent hover:text-accent/80 font-medium">
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 