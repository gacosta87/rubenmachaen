import Image from "next/image";
import Link from "next/link";

export default function ArticuloSismo() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">19 de septiembre: Sismo</h1>
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
                  <p className="text-sm text-foreground/60">25 de septiembre, 2017</p>
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
              src="https://placehold.co/1200x800/c68c53/ffffff?text=19+de+septiembre:+Sismo"
              alt="19 de septiembre: Sismo"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Crónica sobre el terremoto del 19 de septiembre de 2017 en Ciudad de México, publicada originalmente en El Universal.
            </p>
            
            <p>
              Ciudad de México, 19 de septiembre de 2017, 13:14 horas. La tierra comienza a moverse. Al principio, como siempre, hay incredulidad. ¿Es realmente un sismo o solo mi imaginación? Pero segundos después, la duda se disipa cuando el movimiento se intensifica. Las alarmas sísmicas, que deberían haber sonado antes, comienzan a aullar cuando el temblor ya es innegable.
            </p>
            
            <p>
              Me encontraba en un café del centro histórico cuando ocurrió. La coincidencia no escapa a nadie: exactamente 32 años después del devastador terremoto de 1985, en el mismo día en que, horas antes, se había realizado un simulacro nacional. Como si la tierra tuviera memoria y quisiera recordarnos su poder precisamente en esta fecha.
            </p>
            
            <p>
              El café se vacía en segundos. Todos saben qué hacer: alejarse de ventanas y objetos que puedan caer, buscar las columnas, mantener la calma. Pero mantener la calma es casi imposible cuando el suelo bajo tus pies, eso que das por sentado como lo más estable en tu vida, se mueve como si fuera líquido.
            </p>
            
            <p>
              En la calle, el caos. Edificios que se balancean visiblemente, cristales que estallan, alarmas de autos que se activan simultáneamente creando una cacofonía siniestra. Y la gente, mucha gente, en medio de las calles, algunos de rodillas, otros abrazados, muchos con el teléfono en la mano intentando comunicarse con sus seres queridos.
            </p>
            
            <p>
              &ldquo;¡Se cayó un edificio en la Condesa!&rdquo;, grita alguien. Las noticias comienzan a llegar de boca en boca, luego por redes sociales, después por los medios. Edificios colapsados en Álvaro Obregón, en Chimalpopoca, en Bolívar. Personas atrapadas. Llamados desesperados de ayuda.
            </p>
            
            <p>
              Y entonces ocurre algo extraordinario: la ciudad, a menudo criticada por su individualismo y prisa, se transforma. De repente, miles de personas se organizan espontáneamente. Cadenas humanas pasan cubetas con escombros. Jóvenes con cascos y guantes improvisan rescates. Vecinos abren sus casas para ofrecer baños, agua, electricidad para cargar teléfonos. Restaurantes se convierten en centros de acopio. Médicos y enfermeras acuden voluntariamente a los puntos críticos.
            </p>
            
            <p>
              En las horas siguientes, recorro varios puntos afectados. En cada uno, la misma escena: cientos de voluntarios, muchos de ellos jóvenes, trabajando incansablemente. &ldquo;¡Silencio!&rdquo;, gritan de pronto, y todos callan, intentando escuchar voces bajo los escombros. Cuando alguien es rescatado con vida, aplausos y lágrimas. Cuando se recupera un cuerpo sin vida, un silencio respetuoso y doloroso.
            </p>
            
            <p>
              La noche cae sobre una ciudad herida pero no derrotada. Las luces de los rescatistas iluminan los puntos donde aún hay esperanza de encontrar sobrevivientes. Nadie quiere irse a casa. &ldquo;Si alguien está ahí abajo, no lo vamos a abandonar&rdquo;, me dice un joven estudiante de ingeniería que lleva horas removiendo escombros.
            </p>
            
            <p>
              Los días siguientes son una mezcla de dolor y solidaridad. Las historias de heroísmo cotidiano se multiplican: el taquero que alimenta gratis a rescatistas, la señora que prepara café toda la noche para quienes trabajan en los escombros, los ciclistas que recorren la ciudad llevando medicinas, los traductores voluntarios que ayudan a los equipos internacionales de rescate.
            </p>
            
            <p>
              También hay historias desgarradoras: padres que esperan días enteros frente a escuelas colapsadas, mensajes de texto enviados desde bajo los escombros que poco a poco dejan de responderse, la impotencia de saber que hay personas con vida atrapadas a las que no se puede llegar a tiempo.
            </p>
            
            <p>
              Una semana después, mientras escribo estas líneas, la ciudad intenta recuperar cierta normalidad, aunque nada será igual. Hay un antes y un después del 19S. En medio del dolor, sin embargo, queda una certeza: la extraordinaria capacidad de esta ciudad para levantarse, para tender la mano, para convertir la tragedia en un recordatorio de nuestra humanidad compartida.
            </p>
            
            <p>
              Como dijo una rescatista voluntaria: &ldquo;La tierra nos sacudió para recordarnos que estamos todos juntos en esto&rdquo;. Y vaya que lo recordamos.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/venezolanos-chile" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/a98467/ffffff?text=Venezolanos"
                      alt="Venezolanos en Chile: Tren al Sur"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">Venezolanos en Chile: Tren al Sur</h4>
                    <p className="text-sm text-foreground/60">Periodismo</p>
                  </div>
                </div>
              </Link>
              <Link href="/articulos/silencios" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/4a7c59/ffffff?text=Silencios"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 