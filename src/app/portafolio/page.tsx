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

  // Trabajos destacados
  const works = [
    {
      id: 1,
      title: "Soundtracks (Rocolas que no existen)",
      category: "literature",
      image: "/images/article1.jpg",
      year: "2017",
      publisher: "Editorial Ígneo",
      link: "/articulos/soundtracks",
    },
    {
      id: 2,
      title: "Venezolanos en Chile: Tren al Sur",
      category: "journalism",
      image: "/images/article2.jpg",
      year: "2015",
      publisher: "El Estímulo",
      link: "/articulos/venezolanos-chile",
    },
    {
      id: 3,
      title: "Fulanito y sus quejas domingueras",
      category: "literature",
      image: "/images/article3.jpg",
      year: "2012",
      publisher: "Biblioteca Nacional Argentina",
      link: "/articulos/fulanito",
    },
    {
      id: 4,
      title: "19 de septiembre: Sismo",
      category: "journalism",
      image: "/images/article4.jpg",
      year: "2018",
      publisher: "La Tempestad",
      link: "/articulos/19-septiembre-sismo",
    },
    {
      id: 5,
      title: "Silencios: Otra historia que nunca fue",
      category: "journalism",
      image: "/images/article5.jpg",
      year: "2018",
      publisher: "Tercera Vía",
      link: "/articulos/silencios",
    },
    {
      id: 6,
      title: "Recuerdan al jazzista que cantó boleros en español",
      category: "journalism",
      image: "/images/article6.jpg",
      year: "2019",
      publisher: "Contrarréplica",
      link: "/articulos/jazzista-boleros",
    },
    {
      id: 7,
      title: "Nuevo País de las Artes",
      category: "literature",
      image: "/images/article7.jpg",
      year: "2015",
      publisher: "Fondo editorial Banesco",
      link: "/articulos/nuevo-pais-artes",
    },
    {
      id: 8,
      title: "Pantallas de la locura ordinaria",
      category: "journalism",
      image: "/images/article8.jpg",
      year: "2019",
      publisher: "Contrarréplica",
      link: "/articulos/pantallas-locura",
    },
    {
      id: 9,
      title: "5 Things You Need to Know About the $2.6 Trillion Latino Market",
      category: "journalism",
      image: "/images/article9.jpg",
      year: "2020",
      publisher: "Culturizing Access",
      link: "/articulos/latino-market",
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