import Image from "next/image";
import Link from "next/link";

export default function ArticuloFulanito() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Fulanito y sus quejas domingueras</h1>
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
                  <p className="text-sm text-foreground/60">10 de marzo, 2019</p>
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
              src="https://placehold.co/1200x800/c9ada7/ffffff?text=Fulanito+y+sus+quejas+domingueras"
              alt="Fulanito y sus quejas domingueras"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Relato publicado en la revista de la Biblioteca Nacional Argentina en Buenos Aires.
            </p>
            
            <p>
              Fulanito se despertó como cada domingo: malhumorado. No era para menos. Los domingos eran, para él, el recordatorio semanal de que el lunes estaba a la vuelta de la esquina, acechando con su rutina implacable y sus obligaciones tediosas.
            </p>
            
            <p>
              —¡Qué desgracia! —exclamó mientras se servía café en una taza desportillada que se negaba a reemplazar por pura obstinación—. Otro domingo más en esta ciudad infernal.
            </p>
            
            <p>
              La ciudad, por supuesto, no tenía nada de infernal. De hecho, era bastante agradable, con sus parques bien cuidados y sus cafeterías de esquina donde el aroma del pan recién horneado se mezclaba con las conversaciones matutinas. Pero Fulanito había decidido, hacía ya tiempo, que todo a su alrededor era motivo de queja.
            </p>
            
            <p>
              Encendió la radio. El locutor anunciaba un día soleado y perfecto para actividades al aire libre.
            </p>
            
            <p>
              —¡Bah! Sol... lo que faltaba —gruñó—. Ahora todos los vecinos saldrán con sus risas escandalosas y sus niños gritones.
            </p>
            
            <p>
              Se asomó a la ventana. Efectivamente, el parque frente a su edificio comenzaba a llenarse de familias con canastas de picnic y perros juguetones. Fulanito frunció el ceño como si aquella escena de felicidad dominical fuera una ofensa personal.
            </p>
            
            <p>
              Decidió salir a comprar el periódico, no porque le interesara realmente la actualidad, sino porque era otra oportunidad para coleccionar motivos de indignación. En el camino, una vecina lo saludó con una sonrisa.
            </p>
            
            <p>
              —¡Buenos días, don Fulanito! ¡Qué hermoso día!
            </p>
            
            <p>
              —Hmm —respondió él, como si el simple acto de devolver el saludo fuera un esfuerzo sobrehumano.
            </p>
            
            <p>
              En el quiosco, el titular principal anunciaba el descubrimiento de una cura para una enfermedad hasta entonces intratable. Fulanito resopló.
            </p>
            
            <p>
              —Seguro es mentira. Y si es verdad, será carísima y solo para ricos.
            </p>
            
            <p>
              El quiosquero, acostumbrado ya a su cliente dominical más gruñón, sonrió con resignación mientras le daba el cambio.
            </p>
            
            <p>
              De regreso a casa, Fulanito se detuvo frente a una panadería. El olor a medialunas recién hechas invadió sus sentidos. Por un momento, un brevísimo instante, algo parecido a la felicidad se asomó en su interior. Pero rápidamente lo sofocó con un pensamiento: &ldquo;Seguro están crudas por dentro o demasiado caras&rdquo;.
            </p>
            
            <p>
              Sin embargo, entró y compró media docena. Ya en casa, mordió una y, para su sorpresa, estaba deliciosa. Perfectamente horneada, con el punto justo de dulzor.
            </p>
            
            <p>
              —Bueno —murmuró para sí mismo—, al menos algo sale bien en este domingo infernal.
            </p>
            
            <p>
              Y por un momento, solo por un momento, Fulanito dejó de quejarse y disfrutó del simple placer de una medialuna con café en un domingo soleado. Aunque, por supuesto, jamás lo admitiría.
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