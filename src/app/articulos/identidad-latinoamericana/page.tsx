import Image from "next/image";
import Link from "next/link";

export default function ArticuloIdentidad() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">La identidad latinoamericana en tiempos de globalización</h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://placehold.co/200x200/8b4513/ffffff?text=RM"
                    alt="Rubén Machaen"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="font-medium">Rubén Machaen</p>
                  <p className="text-sm text-foreground/60">23 de abril, 2021</p>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                <span className="bg-tertiary/10 px-3 py-1 rounded-full">Opinión</span>
              </div>
            </div>
          </div>
          
          {/* Imagen principal */}
          <div className="mb-12 relative h-[400px] w-full">
            <Image
              src="https://placehold.co/1200x800.jpg/3a5a40/ffffff?text=Identidad+Latinoamericana"
              alt="Identidad latinoamericana"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto space-y-6">
            <p className="text-xl font-medium mb-8">
              Reflexiones sobre la identidad cultural latinoamericana en un mundo interconectado y en constante transformación.
            </p>
            
            <p className="mb-6">
              Hablar de identidad latinoamericana en el siglo XXI implica adentrarse en un laberinto de contradicciones, hibridaciones y resistencias. En tiempos donde la globalización ha difuminado fronteras y homogeneizado expresiones culturales, cabe preguntarse: ¿qué significa ser latinoamericano hoy?
            </p>
            
            <p className="mb-6">
              La respuesta no es sencilla ni unívoca. América Latina, ese territorio imaginado que se extiende desde el Río Bravo hasta la Patagonia, nunca ha sido un espacio culturalmente homogéneo. Su riqueza radica precisamente en su diversidad, en ese mosaico de tradiciones indígenas, africanas y europeas que se han entrelazado a lo largo de siglos.
            </p>
            
            <blockquote className="quote">
              &ldquo;Somos lo que recordamos, pero también lo que decidimos olvidar. La identidad latinoamericana se construye tanto desde la memoria como desde el olvido selectivo.&rdquo;
            </blockquote>
            
            <p className="mb-6">
              En la era digital, donde las fronteras físicas parecen diluirse ante el avance de plataformas globales, surge una paradoja interesante: mientras más nos exponemos a contenidos culturales estandarizados, mayor es la necesidad de reafirmar lo local, lo propio, lo distintivo.
            </p>
            
            <h2>Entre lo global y lo local</h2>
            
            <p className="mb-6">
              El reggaetón, nacido en los márgenes urbanos de Puerto Rico y Panamá, se ha convertido en un fenómeno global que trasciende fronteras. Sin embargo, lejos de ser una simple adopción de modelos extranjeros, representa una apropiación creativa que dialoga tanto con tradiciones musicales latinoamericanas como con ritmos globales.
            </p>
            
            <p className="mb-6">
              Lo mismo ocurre con expresiones literarias, cinematográficas o gastronómicas. El realismo mágico, que alguna vez fue visto como la quintaesencia de lo latinoamericano, ha dado paso a narrativas urbanas que exploran las contradicciones de megalópolis como Ciudad de México, Bogotá o São Paulo, espacios donde lo global y lo local se entrelazan de formas complejas.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nota del autor</h3>
              <p>
                Este ensayo forma parte de una serie de reflexiones sobre la identidad cultural en América Latina, desarrolladas durante mi estancia como investigador visitante en la Universidad de Chile en 2021. Las ideas aquí expresadas han sido discutidas en diversos foros académicos y representan una invitación al diálogo más que conclusiones definitivas.
              </p>
            </div>
            
            <p className="mb-6">
              Quizás la clave para entender la identidad latinoamericana contemporánea no esté en buscar esencias inmutables, sino en reconocer su carácter procesual, dinámico y contradictorio. Somos resultado de múltiples mestizajes, no solo biológicos sino culturales, y nuestra riqueza radica precisamente en esa capacidad de incorporar elementos diversos sin perder cierto sentido de continuidad histórica.
            </p>
            
            <p className="mb-6">
              Como escribió Octavio Paz: &ldquo;La búsqueda de la modernidad nos llevó a descubrir nuestra antigüedad&rdquo;. Quizás la búsqueda de lo global nos está llevando a redescubrir lo que nos hace únicos, no como esencia inmutable sino como proceso creativo en constante evolución.
            </p>
            
            <p className="mb-6">
              La identidad latinoamericana no es un punto de llegada sino un camino. Y en ese andar, entre nostalgias y futuros imaginados, seguimos construyendo ese territorio compartido que llamamos América Latina.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/silencios" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200.jpg/4a7c59/ffffff?text=Silencios"
                      alt="Silencios: Otra historia que nunca fue"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">Silencios: Otra historia que nunca fue</h4>
                    <p className="text-sm text-foreground/60">Opinión</p>
                  </div>
                </div>
              </Link>
              <Link href="/articulos/soundtracks" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200.jpg/8b4513/ffffff?text=Soundtracks"
                      alt="Soundtracks (Rocolas que no existen)"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">Soundtracks (Rocolas que no existen)</h4>
                    <p className="text-sm text-foreground/60">Literatura</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 