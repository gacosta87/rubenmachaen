import Image from "next/image";
import Link from "next/link";

export default function ArticuloSoundtracks() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Soundtracks (Rocolas que no existen)</h1>
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
                  <p className="text-sm text-foreground/60">15 de junio, 2017</p>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                <span className="bg-tertiary/10 px-3 py-1 rounded-full">Literatura</span>
              </div>
            </div>
          </div>
          
          {/* Imagen principal */}
          <div className="mb-12 relative h-[400px] w-full">
            <Image
              src="https://placehold.co/1200x800/8b4513/ffffff?text=Soundtracks+(Rocolas+que+no+existen)"
              alt="Soundtracks (Rocolas que no existen)"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Fragmento de la novela "Soundtracks (Rocolas que no existen)" publicada en 2017 con la editorial Ígneo.
            </p>
            
            <p>
              La música siempre ha sido una constante en mi vida. No recuerdo un solo momento en que no estuviera presente, como un telón de fondo para cada escena importante. Quizás por eso, cuando empecé a escribir esta historia, lo primero que vino a mi mente fue la banda sonora que la acompañaría.
            </p>
            
            <p>
              Hay canciones que no existen en ningún disco, en ninguna plataforma digital, pero que suenan con claridad en nuestra memoria. Son melodías personales, asociadas a momentos específicos, a personas que ya no están, a lugares que hemos dejado atrás.
            </p>
            
            <blockquote className="quote">
              "Las rocolas que no existen son aquellas que solo suenan en nuestra memoria, reproduciendo canciones que nadie más puede escuchar."
            </blockquote>
            
            <p>
              Carlos caminaba por las calles de Caracas con los auriculares puestos, pero no escuchaba música. Hacía años que había dejado de hacerlo. Prefería el sonido de la ciudad, el caos organizado de bocinas, conversaciones fragmentadas y vendedores ambulantes. Era su forma de mantenerse presente, de no perderse en los recuerdos.
            </p>
            
            <p>
              Sin embargo, aquella tarde de julio, mientras esperaba el autobús bajo la lluvia, escuchó claramente una melodía que creía olvidada. No venía de ninguna fuente externa, sino de su propia memoria. Era la canción que sonaba la primera vez que vio a Mariana, en aquel café de Buenos Aires donde se refugió de otra tormenta, años atrás.
            </p>
            
            <h2>La memoria musical</h2>
            
            <p>
              La memoria musical funciona de manera diferente a otros tipos de recuerdos. Es más visceral, más inmediata. Una simple melodía puede transportarnos instantáneamente a otro tiempo, otro lugar, otra versión de nosotros mismos.
            </p>
            
            <p>
              Para Carlos, cada etapa de su vida tenía una banda sonora específica. La adolescencia en Caracas estaba marcada por el rock latinoamericano de los 90. Sus años universitarios en Buenos Aires se mezclaban con tangos y milongas que nunca llegó a apreciar del todo. Y luego estaba la música que compartió con Mariana, una mezcla ecléctica que iba desde el jazz hasta la electrónica experimental.
            </p>
            
            <p>
              Pero había una canción en particular que no podía ubicar en ningún álbum, en ningún artista conocido. Una melodía que parecía haber compuesto su propia memoria, una rocola que no existía más que en su cabeza.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sobre la novela</h3>
              <p className="mb-4">
                "Soundtracks (Rocolas que no existen)" explora la relación entre la música, la memoria y la identidad a través de la historia de Carlos, un periodista venezolano que recorre diferentes ciudades latinoamericanas mientras lidia con los recuerdos de un amor perdido y un país que ya no existe como lo conocía.
              </p>
              <p>
                La novela fue publicada en 2017 por la editorial Ígneo y ha sido reconocida por su innovadora estructura narrativa, que se organiza como un álbum musical, con cada capítulo representando una canción diferente.
              </p>
            </div>
            
            <p>
              Cuando el autobús finalmente llegó, Carlos decidió no subir. En su lugar, comenzó a caminar bajo la lluvia, permitiéndose por primera vez en mucho tiempo escuchar aquella banda sonora personal que había intentado silenciar durante años.
            </p>
            
            <p>
              Quizás era hora de crear nuevas melodías, nuevas rocolas que, aunque no existieran para el resto del mundo, sonarían con claridad en su memoria.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/fulanito" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/c9ada7/ffffff?text=Fulanito"
                      alt="Fulanito y sus quejas domingueras"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">Fulanito y sus quejas domingueras</h4>
                    <p className="text-sm text-foreground/60">Literatura</p>
                  </div>
                </div>
              </Link>
              <Link href="/articulos/nuevo-pais-artes" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/3a5a40/ffffff?text=Artes"
                      alt="Nuevo País de las Artes"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">Nuevo País de las Artes</h4>
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