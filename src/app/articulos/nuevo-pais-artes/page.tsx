import Image from "next/image";
import Link from "next/link";

export default function ArticuloNuevoPaisArtes() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Nuevo País de las Artes</h1>
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
                  <p className="text-sm text-foreground/60">7 de julio, 2018</p>
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
              src="https://placehold.co/1200x800/3a5a40/ffffff?text=Artes"
              alt="Nuevo País de las Artes"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto space-y-6">
            <p className="text-xl font-medium mb-8">
              Ensayo sobre la intersección entre arte, política y sociedad en América Latina contemporánea.
            </p>
            
            <p className="mb-6">
              En algún lugar entre la utopía y la realidad, entre el sueño colectivo y la creación individual, existe un territorio que podríamos llamar el Nuevo País de las Artes. No tiene fronteras físicas ni requiere pasaporte, pero su influencia se extiende por toda América Latina, reconfigurando nuestras formas de ver, sentir y pensar el mundo que habitamos.
            </p>
            
            <p className="mb-6">
              Este país imaginario pero tangible se construye cada vez que un artista latinoamericano decide que el arte no es solo contemplación sino también acción, no es solo belleza sino también verdad, no es solo expresión individual sino también construcción colectiva. Se edifica en murales urbanos que denuncian injusticias, en performances que cuestionan normas establecidas, en novelas que reimaginan nuestra historia, en canciones que se convierten en himnos de resistencia.
            </p>
            
            <p className="mb-6">
              Durante el último siglo, el arte latinoamericano ha oscilado entre dos polos aparentemente contradictorios: por un lado, la búsqueda de una identidad propia, arraigada en nuestras tradiciones indígenas, africanas y europeas; por otro, el diálogo con las corrientes globales y la participación en debates estéticos universales. Esta tensión, lejos de ser un obstáculo, ha sido el motor de una creatividad extraordinaria.
            </p>
            
            <p className="mb-6">
              En Venezuela, mi país natal, he sido testigo de cómo el arte ha servido como refugio y resistencia en tiempos de crisis. Cuando las instituciones fallan, cuando la política divide, cuando la economía colapsa, el arte sigue siendo un espacio donde es posible imaginar otros futuros, donde la dignidad humana se preserva incluso en las circunstancias más adversas.
            </p>
            
            <p className="mb-6">
              Los artistas venezolanos contemporáneos han respondido a la crisis con una vitalidad sorprendente. Desde la diáspora o desde dentro del país, han creado obras que documentan, cuestionan y trascienden la realidad inmediata. No es casualidad que en los últimos años hayan surgido tantas novelas, películas, canciones y obras visuales que abordan temas como la migración, la memoria, la identidad y la resistencia.
            </p>
            
            <p className="mb-6">
              Pero este fenómeno no es exclusivo de Venezuela. En toda América Latina, el arte ha sido históricamente un campo de batalla donde se disputan visiones de lo que somos y lo que podríamos ser. Desde los muralistas mexicanos hasta el boom literario, desde la nueva canción hasta el cine contemporáneo, los artistas latinoamericanos han asumido la responsabilidad de imaginar naciones más justas, más diversas, más libres.
            </p>
            
            <p className="mb-6">
              El Nuevo País de las Artes es, en este sentido, un proyecto colectivo en constante construcción. No es un territorio conquistado sino un horizonte hacia el cual avanzamos, un espacio donde las fronteras nacionales se diluyen para dar paso a identidades más fluidas y complejas, donde el pasado y el futuro dialogan en un presente siempre inacabado.
            </p>
            
            <p className="mb-6">
              Como escribió Octavio Paz: &ldquo;El arte es una forma de conocimiento que nos revela aspectos de la realidad que el pensamiento conceptual no puede captar&rdquo;. En tiempos de incertidumbre y polarización, el arte latinoamericano nos ofrece precisamente eso: una forma de conocimiento que va más allá de las certezas ideológicas, que abraza la complejidad y la contradicción, que nos permite reconocernos en el otro.
            </p>
            
            <p className="mb-6">
              El Nuevo País de las Artes no es, por tanto, una evasión de la realidad sino una inmersión más profunda en ella. Es un territorio donde la imaginación no está divorciada de la acción, donde la belleza no está reñida con la justicia, donde la tradición y la innovación no son fuerzas antagónicas sino complementarias.
            </p>
            
            <p className="mb-6">
              Habitar este país —como creadores o como espectadores— es un acto político en el sentido más amplio del término: un compromiso con la transformación de lo existente, una apuesta por la posibilidad de mundos más habitables, más humanos, más libres. En tiempos donde los discursos políticos tradicionales parecen agotados, el arte nos recuerda que otra América Latina es posible, que otro mundo es posible.
            </p>
            
            <p className="mb-6">
              Y esa posibilidad comienza, siempre, con un acto de imaginación.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/soundtracks" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/8b4513/ffffff?text=Soundtracks"
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
              <Link href="/articulos/identidad-latinoamericana" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/3a5a40/ffffff?text=Identidad"
                      alt="La identidad latinoamericana en tiempos de globalización"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">La identidad latinoamericana en tiempos de globalización</h4>
                    <p className="text-sm text-foreground/60">Opinión</p>
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