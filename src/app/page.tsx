import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Rubén Machaen"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            className="brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Rubén Machaen
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8">
              Periodista, escritor y docente venezolano/mexicano
            </h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                href="/biografia" 
                className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition shadow-lg"
              >
                Conocer más
              </Link>
              <Link 
                href="/portafolio" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition"
              >
                Ver portafolio
              </Link>
            </div>
            
            {/* YouTube Channel Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              {/* YouTube Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/images/logo.jpg"
                  alt="Breaking Mainstream"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full shadow-lg"
                />
              </div>
              
              {/* YouTube Channel Badge */}
              <a 
                href="https://www.youtube.com/@breakingmainstream4577" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 hover:bg-white/20 transition"
              >
                <div className="bg-red-600 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Breaking Mainstream</span>
                  <span className="text-white/70 text-xs">Ver canal de YouTube</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-tertiary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="quote max-w-3xl mx-auto text-xl md:text-2xl text-foreground/90 text-center">
            &ldquo;La escritura es un puente entre mundos, una forma de explorar la realidad a través de la imaginación y la observación crítica.&ldquo;
            <footer className="mt-4 text-right text-foreground/70 text-base">— Rubén Machaen</footer>
          </blockquote>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Trabajos destacados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Work 1 */}
            <div className="article-card bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/8b4513/ffffff?text=Soundtracks"
                  alt="Soundtracks (Rocolas que no existen)"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Soundtracks (Rocolas que no existen)</h3>
                <p className="text-foreground/70 mb-4">Novela publicada en 2017 con la editorial Ígneo, explorando la relación entre la música y la memoria.</p>
                <Link href="/articulos/soundtracks" className="text-accent hover:text-accent/80 font-medium">
                  Leer más →
                </Link>
              </div>
            </div>
            
            {/* Featured Work 2 */}
            <div className="article-card bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/a98467/ffffff?text=Venezolanos+en+Chile"
                  alt="Venezolanos en Chile: Tren al Sur"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Venezolanos en Chile: Tren al Sur</h3>
                <p className="text-foreground/70 mb-4">Reportaje sobre la migración venezolana hacia Chile, publicado en El Estímulo.</p>
                <Link href="/articulos/venezolanos-chile" className="text-accent hover:text-accent/80 font-medium">
                  Leer más →
                </Link>
              </div>
            </div>
            
            {/* Featured Work 3 */}
            <div className="article-card bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20">
              <div className="relative h-48">
                <Image
                  src="https://placehold.co/600x400/3a5a40/ffffff?text=Identidad+Latinoamericana"
                  alt="La identidad latinoamericana en tiempos de globalización"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fulanito y sus quejas domingueras</h3>
                <p className="text-foreground/70 mb-4">Relato publicado en la revista de la Biblioteca Nacional Argentina en Buenos Aires.</p>
                <Link href="/articulos/fulanito" className="text-accent hover:text-accent/80 font-medium">
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/portafolio" 
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition shadow-md inline-block"
            >
              Ver todo el portafolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-foreground/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <Image
                  src="/images/ruben-portrait.jpg"
                  alt="Rubén Machaen"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
              <p className="text-foreground/80 mb-4">
                Periodista, escritor y docente venezolano/mexicano. Cursé estudios literarios en Buenos Aires y he dictado cátedras de géneros periodísticos en la Universidad Monteávila, en Caracas, e Innovación y estructura periodística en la Universidad Anáhuac, en México.
              </p>
              <p className="text-foreground/80 mb-6">
                He colaborado en medios internacionales como El Espectador (Colombia), La Tempestad y Tercera Vía (México), ViceVersa (New York) y El Estímulo (Venezuela).
              </p>
              <Link 
                href="/biografia" 
                className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition shadow-md inline-block"
              >
                Biografía completa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
