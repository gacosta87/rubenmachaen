import Image from "next/image";
import Link from "next/link";

export default function Articulos() {
  // Categorías de artículos
  const categories = [
    { id: "all", name: "Todos" },
    { id: "journalism", name: "Periodismo" },
    { id: "literature", name: "Literatura" },
    { id: "opinion", name: "Opinión" },
  ];

  // Artículos destacados
  const articles = [
    {
      id: 1,
      title: "Soundtracks (Rocolas que no existen)",
      category: "literature",
      image: "/images/article1.jpg",
      date: "15 de junio, 2017",
      excerpt: "Fragmento de la novela publicada con la editorial Ígneo, explorando la relación entre la música y la memoria.",
      link: "/articulos/soundtracks",
    },
    {
      id: 2,
      title: "Venezolanos en Chile: Tren al Sur",
      category: "journalism",
      image: "/images/article2.jpg",
      date: "17 de agosto, 2015",
      excerpt: "Reportaje sobre la migración venezolana hacia Chile, publicado en El Estímulo.",
      link: "/articulos/venezolanos-chile",
    },
    {
      id: 3,
      title: "Fulanito y sus quejas domingueras",
      category: "literature",
      image: "/images/article3.jpg",
      date: "10 de marzo, 2012",
      excerpt: "Relato publicado en la revista de la Biblioteca Nacional Argentina en Buenos Aires.",
      link: "/articulos/fulanito",
    },
    {
      id: 4,
      title: "19 de septiembre: Sismo",
      category: "journalism",
      image: "/images/article4.jpg",
      date: "19 de septiembre, 2018",
      excerpt: "Crónica sobre el terremoto en México, publicada en La Tempestad.",
      link: "/articulos/19-septiembre-sismo",
    },
    {
      id: 5,
      title: "Silencios: Otra historia que nunca fue",
      category: "opinion",
      image: "/images/article5.jpg",
      date: "5 de septiembre, 2018",
      excerpt: "Ensayo sobre las historias no contadas, publicado en Tercera Vía.",
      link: "/articulos/silencios",
    },
    {
      id: 6,
      title: "La identidad latinoamericana en tiempos de globalización",
      category: "opinion",
      image: "/images/article10.jpg",
      date: "23 de abril, 2021",
      excerpt: "Reflexiones sobre la identidad cultural en un mundo interconectado.",
      link: "/articulos/identidad-latinoamericana",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Artículos</h1>
        
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
        
        {/* Lista de artículos */}
        <div className="space-y-12">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="article-card flex flex-col md:flex-row bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20"
            >
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold">{article.title}</h3>
                  <span className="text-sm text-foreground/60">{article.date}</span>
                </div>
                <p className="text-foreground/70 mb-4">{article.excerpt}</p>
                <Link href={article.link} className="text-accent hover:text-accent/80 font-medium">
                  Leer artículo completo →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 