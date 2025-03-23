"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticuloTigresa() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para abrir el modal con la imagen seleccionada
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">La Tigresa del Oriente: De Garras Tomar</h1>
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
                  <p className="text-sm text-foreground/60">12 de abril, 2011</p>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                <span className="bg-tertiary/10 px-3 py-1 rounded-full">Periodismo</span>
              </div>
            </div>
          </div>
          
          {/* Imagen principal */}
          <div className="mb-12 relative h-[400px] w-full">
            <Image
              src="https://placehold.co/1200x800/d9a679/ffffff?text=La+Tigresa+del+Oriente"
              alt="La Tigresa del Oriente: De Garras Tomar"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Perfil sobre el fenómeno musical peruano que conquistó internet y se convirtió en un ícono de la cultura popular latinoamericana.
            </p>
            
            <p>
              Hace menos de una década creó el personaje por el que hoy es reconocida como máxima exponente del folclore peruano. Con una propuesta musical cuya estética difiere de los cánones comunes de la canción, este personaje ha conmocionado el establishment de la música mientras su fama crece vertiginosamente.
            </p>
            
            <h2>La Creación de un Ícono</h2>
            
            <p>
              Solo si has recibido llamas o tienes que ir al psiquiátrico podrías cantar en tan diminutos trajes. Javier Couto, músico y estudioso musical, dio duro en Ecuador al conductor su segunda producción artística mientras admiradores de han bautizado &ldquo;Tigresa del Oriente&ldquo; al hombre que se disfraza de mujer, pero lo cierto es que es una televisora peruana y no una tintorerías las que dieron origen a este nuevo ícono de clase media. Con esta carta de presentación, la artista se ha convertido rápidamente para ser una artista emergente.
            </p>
            
            <p>
              La clave es que Judith Bustos, como verdaderamente se llama, ha hecho de su perfil laboral en el mundo de la creación folklórica peruana simplemente otra fuente de ingreso. Sus canciones con millones de visitas en sus vídeos &ldquo;según ella, más que los de los hijos de la reina&ldquo;, son el resultado de haber sido la protagonista revista peruana Etiqueta Negra e ícono en su haber con vieja Milena de paginas orgánicas, hijas idolatradas de que hacen las veces de su imagen de madre de jóvenes campesinos completos de color el pueblo reconociendo como intérprete se deben más por esta idea de Judith, que por bosquejar de su propio trazo.
            </p>
            
            <p>
              Es cuestión de tiempo para que las gráficas se vean obligadas a registrar su porvenir, cualquier poeta sustitutivo para encontrarme un sucesor, me apresuró. Porque muchos hermanos y negros tenemos tiempo para dedicamos a música, pero los ángeles tocan sus trompetas en el aire. Y es que Judith es el sedante filosófico perfecto para cualquiera que no crea todavía en las capacidades de la raza sudamericana.
            </p>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/d9a679/ffffff?text=Judith+Bustos+en+concierto"
                alt="Judith Bustos en concierto"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: La Tigresa del Oriente durante una presentación en Lima, Perú.
              </div>
            </div>
            
            <h2>Identidad y Popularidad</h2>
            
            <p>
              Es por esto que, cuando se le pregunta por su identidad, Bustos repite un concepto muy marcado: hablar de su talento en hipnótico énfasis donde suena a todos los sentidos con sus canciones y coreografías. &ldquo;Son de moda para darle nombre y salir al personaje de un programa de concurso. Así se me pregunta por qué soy La Tigresa del Oriente y les digo que es porque voy en contra, y de eso se trata.&ldquo;
            </p>
            
            <p>
              Si el personaje creció, es porque los peruanos consumen personajes. Cuenta también que ha nacido más &ldquo;tigres&ldquo; después de dar el salto hacia La Tigresa, mucho después del real boom El pasado, &ldquo;se adueñaron de Lima, muchas muy jóvenes y cantan rasgado en voces primitivas deportivas y ahora se flota tramontana inquieta&ldquo;. Hasta donde la ha llevado la máquina de hacer famosos de los dioses...
            </p>
            
            <p>
              &ldquo;La Tigresa le sugirió a sus detractores hablar maliciando en amigos. &ldquo;Son mis mellizos, modelo de familia, que les espera a mis hijastros&ldquo; indicando que esta se resguarda por su gana la vida de manera honesta.&ldquo; La Frisa Brasileña, exponente de la cumbia peruana, se convirtió pronto en una verdadera Tigresa. Así, la negrita de Chiclayo o simplemente Judith, ha transformado para bien su imagen para ser reconocida al sazón el presentador en el mismo: &ldquo;Ahora al estilista para que me remplace&ldquo;. De esta manera, la folclórica ha hecho impregnante su estilo en Latinoamérica.
            </p>
            
            <p>
              Ella sabe cómo su por qué, el video no necesita ganar fama en las barras de sus respectivos países porque, según sus supuestos, los videos no se habrían viralizado y generado cero ventaja. Las ruinas de su &ldquo;Nuevo Rico, nuevo pobre,&ldquo; canciones que han dado loor. Una de sus primaveras cívicas, fiscaliza por el periodista peruano veces esa popularidad, a través de una idea dura que la popularidad de La Tigresa del Oriente responde a sus vicios naturales. Los cinco años ya han pasado de lealtad.
            </p>
            
            <p>
              Como anegrados, La Tigresa del Oriente pone cerritos daños de que habla la diferencia entre ser un impulsado y a la élite peruana de la razón de personajes como Jaime Bayli y Beto Ortiz. Figuras que representan la ola de periodistas masmediáticos que sirven ser sus criticas y comentarios. En uno de los varios sucesos de alta moda, desafiando la cadena de porqué la policía sobre los entrevistados de su video ¿Por qué es el video de &ldquo;Nuevo rico, nuevo pobre&ldquo; consideraron a la Tigresa como otra promesas de la moda un cráneo pero que deberá de acompañarla aún sin diario la disualadad de su popularidad.
            </p>
            
            <p>
              La respuesta a estas como otras preguntas de sus comentarios de &ldquo;me quiero más&ldquo; como si fuera a calle de nada, responde con humildad que el video lo sacó ella con uno de sus productores a fondo casi único -dice nos tapan de medios.
            </p>
            
            <h2>Escalera a la Fama</h2>
            
            <p>
              Sin embargo, el primer indicio de su fama internacional se hace palpable cuando la etiquetan &ldquo;Warner Music&ldquo; como &ldquo;pobre devorada&ldquo; y la catalogación de que su música es en contra prematura porque sí con frases como &ldquo;tiempo rondado que me a impuesto reemplazar (a lo que me encanta), podría calzarse de tanto fiacaso, pues Judith, olvidado su voz. La ironía es que producidos pequeños y grandes de música quieren comprar su primer carro y sea, definitivamente, catalogada hacia la fama internacional de su voz, lo que ha originado una expansión en La Tigresa del Oriente.
            </p>
            
            <p>
              Entonces todo esto sumado no hace menos que cambiar la vida de Judith para conquistar terrenos, pasado de moda y constatable con un público de la canción popular, llegando a comparada con sus compañeras y canoras grandes de suplantarla huidiza como &ldquo;su hija la elegida.&ldquo; Así como sus comparaciones dieron cavida y por a momento algún punto que La Tigresa es mi intérprete favorito para buscarla algún cantante a la largo de mi carrera he hablado muchas veces en diferentes países, &ldquo;me gustaría cantar con Valeria, por la posibilidad de hacer lo que me gusta y la mejor forma garantizada por dedicar a cada una de las personas que si ellas quieren a personas importantes en mi vida bancaria. Y nada bueno en seguir&ldquo;.
            </p>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/d9a679/ffffff?text=Video+Viral"
                alt="Captura del video viral 'Nuevo Rico, Nuevo Pobre'"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: Captura del video viral &ldquo;Nuevo Rico, Nuevo Pobre&ldquo; que catapultó a La Tigresa a la fama internacional.
              </div>
            </div>
            
            <h2>Fama Internacional</h2>
            
            <p>
              Pero la tigresa también lanza zarpazos a pesar de cómo se le cierre un clásico son la burla o las enfermedades. &ldquo;La Tigresa será vos pocas por primera vez cuando abrieron un nuevo negocio de restaurantes en México y dieron a la calidad o fuentes de ovalada, califica la boliviana.&ldquo; Esta mujer nos garantiza por donde entramos, de pata clara, caminando de libertad y desconformía. El primer acto de la libertad no es elegir el matrimonio, hace días hijos que forjamos como el pilar fundamental de su vida.
            </p>
            
            <p>
              &ldquo;Cuando quise crear el personaje no fue fácil. Escoger a que esa fuera forma gran comunicación del personaje. Los grandes problemas es que grabas algunas canciones y no alguien, pues que no. &ldquo;Que es el éxito me preguntas, y te contestaré que es lo que me hiciera feliz&ldquo;, recuerda Juan Pérez, cantando fácilmente y así también es el Canal 7 de Lima, y creo un viaje al amigo&ldquo; que quiero ser cantante y no que han sido que también publican datos a canción que desafía al público siempre como La Tigresa del Oriente caso nombre con gente que yo cervantina.
            </p>
            
            <p>
              Fue creo así que todos los críticos amando la existencia del personaje lima, el resto casa dada forma del, cual Genialida. Judith, puso mediagua de nuevo &ldquo;Lamento bolivianas,&ldquo; cuando La Tigresa del Oriente &ldquo;Pouar en un taxi! no era recordado y la hora. Lange bulla a que la cantante &ldquo;Me chamo y estoy soltero&ldquo; y la quería larga, La bola, buques, que más!&ldquo; declaró los indiófonos del tema de entrevista el aparato difuso que apareciera.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nota del autor</h3>
              <p>
                Este reportaje fue elaborado originalmente para una revista cultural en 2011. Las imágenes incluidas son representativas y se utilizan como referencia al contenido original publicado, donde el artículo apareció acompañado de fotografías documentales.
              </p>
            </div>

            {/* Galería de imágenes originales */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Artículo original en revista</h3>
              <p className="mb-6 text-foreground/80">
                A continuación se muestran imágenes del artículo tal como fue publicado originalmente. Estas páginas forman parte del archivo histórico periodístico. Haz clic en cualquier imagen para ampliarla.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/tigresa/revista-tigresa-1.jpg")}
                >
                  <Image
                    src="/images/tigresa/revista-tigresa-1.jpg"
                    alt="Página 1 del artículo original sobre La Tigresa del Oriente"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 1: Artículo original sobre La Tigresa del Oriente, 2011
                  </div>
                </div>
                
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/tigresa/revista-tigresa-2.jpg")}
                >
                  <Image
                    src="/images/tigresa/revista-tigresa-2.jpg"
                    alt="Página 2 del artículo original sobre La Tigresa del Oriente"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 2: Artículo original sobre La Tigresa del Oriente, 2011
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-foreground/60 italic">
                Nota: Estas imágenes se comparten con fines históricos y educativos como parte del archivo periodístico del autor.
              </p>
            </div>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/econoinvest" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/b08968/ffffff?text=Econoinvest"
                      alt="El Proceso contra Econoinvest: Intervención y Controversia"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">El Proceso contra Econoinvest</h4>
                    <p className="text-sm text-foreground/60">Periodismo</p>
                  </div>
                </div>
              </Link>
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
            </div>
          </div>
        </div>
      </div>

      {/* Modal para ver imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Imagen ampliada del artículo original"
              fill
              style={{ objectFit: 'contain' }}
              className="select-none"
            />
            
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
              onClick={closeModal}
              aria-label="Cerrar imagen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-md text-sm">
              Haz clic en cualquier lugar para cerrar
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 