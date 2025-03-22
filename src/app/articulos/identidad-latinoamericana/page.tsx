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
                    src="/images/ruben-avatar.jpg"
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
              src="/images/article10-full.jpg"
              alt="Identidad latinoamericana"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Reflexiones sobre la identidad cultural latinoamericana en un mundo interconectado y en constante transformación.
            </p>
            
            <p>
              Hablar de identidad latinoamericana en el siglo XXI implica adentrarse en un laberinto de contradicciones, hibridaciones y resistencias. En tiempos donde la globalización ha difuminado fronteras y homogeneizado expresiones culturales, cabe preguntarse: ¿qué significa ser latinoamericano hoy?
            </p>
            
            <p>
              La respuesta, lejos de ser unívoca, se ramifica en múltiples direcciones, como las raíces de un árbol que se extienden bajo tierra, invisibles pero fundamentales para sostener lo que se muestra al exterior.
            </p>
            
            <h2>El espejo fragmentado</h2>
            
            <p>
              Nuestra identidad regional ha sido históricamente un espejo fragmentado donde conviven, no siempre en armonía, lo indígena, lo europeo, lo africano y, más recientemente, influencias globales que llegan a través de pantallas y algoritmos. Somos, como diría García Canclini, culturas híbridas en constante proceso de transformación.
            </p>
            
            <p>
              Esta hibridación, sin embargo, no debe confundirse con disolución. La globalización no ha borrado las particularidades culturales latinoamericanas, sino que ha creado nuevos espacios donde estas se reconfiguran y adquieren nuevos significados.
            </p>
            
            <blockquote className="quote">
              "Somos lo que recordamos, pero también lo que decidimos olvidar. La identidad latinoamericana se construye tanto en la memoria como en los silencios."
            </blockquote>
            
            <p>
              En mis viajes por diferentes países de la región, desde México hasta Chile, he observado cómo las nuevas generaciones reinterpretan tradiciones ancestrales a través de lenguajes contemporáneos. Un grafiti que incorpora iconografía maya en Ciudad de México, un festival de música electrónica que samplea ritmos andinos en Bogotá, o una novela que reescribe mitos guaraníes desde la ciencia ficción en Asunción.
            </p>
            
            <h2>La diáspora como espejo</h2>
            
            <p>
              Quizás sea en la diáspora donde la identidad latinoamericana adquiere contornos más definidos. Paradójicamente, es lejos de América Latina donde muchos descubren su "latinoamericanidad". En Nueva York, Madrid o Berlín, las diferencias entre un argentino y un colombiano se diluyen frente a experiencias compartidas de migración, nostalgia y adaptación.
            </p>
            
            <p>
              Como venezolano que ha vivido en Argentina, México y Estados Unidos, he experimentado esta metamorfosis identitaria. En Buenos Aires me descubrí caribeño, en Ciudad de México me reconocí sudamericano, y en Washington DC me asumí plenamente latinoamericano.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reflexión personal</h3>
              <p>
                La experiencia migratoria me ha enseñado que la identidad no es un pasaporte ni un acento, sino una forma de relacionarse con el mundo. Ser latinoamericano implica habitar múltiples temporalidades simultáneamente: lo ancestral y lo futurista, lo local y lo global, la tradición y la ruptura.
              </p>
            </div>
            
            <h2>Literatura como territorio</h2>
            
            <p>
              Si existe un espacio donde la identidad latinoamericana ha encontrado su expresión más profunda y compleja, es en la literatura. Desde el realismo mágico hasta las narrativas contemporáneas, nuestros escritores han construido un territorio imaginario donde conviven todas las Américas Latinas posibles.
            </p>
            
            <p>
              Cortázar, uno de mis faros literarios, entendió como pocos esta condición fronteriza. En "Rayuela", Horacio Oliveira deambula entre Buenos Aires y París, no solo como espacios geográficos sino como estados mentales, como posibilidades de ser. La identidad, nos sugiere Cortázar, es un juego de rayuela donde saltamos entre casillas, siempre en movimiento, siempre buscando un cielo que se desplaza.
            </p>
            
            <p>
              Bolaño, por su parte, creó en "Los detectives salvajes" un mapa literario donde México, Chile, España y otros territorios se conectan a través de personajes nómadas que llevan su latinoamericanidad como una marca invisible pero indeleble.
            </p>
            
            <h2>Hacia una identidad en movimiento</h2>
            
            <p>
              Quizás el error ha sido buscar una identidad latinoamericana estática, definida por esencialismos o estereotipos. La verdadera identidad regional reside precisamente en su capacidad de reinventarse, de absorber influencias sin perder un núcleo reconocible pero indefinible.
            </p>
            
            <p>
              En tiempos de polarización política y resurgimiento de nacionalismos, reivindicar esta identidad fluida y plural resulta no solo un acto cultural sino político. Ser latinoamericano hoy implica rechazar las simplificaciones, abrazar las contradicciones y reconocer que nuestra mayor fortaleza reside en la diversidad.
            </p>
            
            <p>
              Como escribió Octavio Paz: "La búsqueda de la modernidad nos llevó a descubrir nuestra antigüedad". Quizás la búsqueda de lo global nos está llevando a redescubrir lo que nos hace únicos, no como esencia inmutable sino como proceso creativo en constante evolución.
            </p>
            
            <p>
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
                      src="/images/article5.jpg"
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
                      src="/images/article1.jpg"
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