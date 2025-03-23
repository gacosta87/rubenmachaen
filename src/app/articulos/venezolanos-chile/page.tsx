import Image from "next/image";
import Link from "next/link";

export default function ArticuloVenezolanos() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Venezolanos en Chile: Tren al Sur</h1>
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
                  <p className="text-sm text-foreground/60">17 de agosto, 2015</p>
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
              src="https://placehold.co/1200x800.jpg/a98467/ffffff?text=Venezolanos+en+Chile"
              alt="Venezolanos en Chile: Tren al Sur"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto space-y-6">
            <p className="text-xl font-medium mb-8">
              Reportaje sobre la migración venezolana hacia Chile, publicado originalmente en El Estímulo en agosto de 2015.
            </p>
            
            <p className="mb-6">
              Santiago de Chile, agosto de 2015. En la estación central, entre el bullicio de los viajeros y vendedores ambulantes, Carlos Mendoza espera el tren que lo llevará al sur del país. Tiene 34 años y hace apenas tres meses dejó atrás Caracas, la ciudad que lo vio nacer y crecer.
            </p>
            
            <p className="mb-6">
              &ldquo;Nunca pensé que terminaría aquí&rdquo;, confiesa mientras observa el tablero de salidas. &ldquo;En Venezuela era ingeniero petrolero, tenía un buen trabajo, pero la situación se volvió insostenible. La inseguridad, la escasez... llegó un punto en que no veía futuro&rdquo;.
            </p>
            
            <p className="mb-6">
              Carlos forma parte de una ola migratoria que ha transformado el panorama demográfico de Chile en los últimos años. Según cifras del Departamento de Extranjería y Migración, la comunidad venezolana en el país austral ha crecido exponencialmente, pasando de apenas 2.000 residentes en 2014 a más de 20.000 en 2015.
            </p>
            
            <h2>El nuevo destino</h2>
            
            <p className="mb-6">
              Históricamente, los venezolanos que emigraban elegían Estados Unidos o España como destinos principales. Sin embargo, la estabilidad económica de Chile, sumada a políticas migratorias relativamente accesibles, ha convertido al país en una alternativa atractiva para profesionales venezolanos.
            </p>
            
            <blockquote className="quote">
              &ldquo;Chile representa lo que Venezuela fue hace décadas: un país con oportunidades, donde el esfuerzo se traduce en progreso&rdquo;, explica María Gabriela Ponce, socióloga de la Universidad Católica Andrés Bello.
            </blockquote>
            
            <p className="mb-6">
              En el barrio Providencia de Santiago, las voces con acento caribeño se multiplican. Restaurantes de comida venezolana han comenzado a aparecer, ofreciendo arepas, tequeños y pabellón criollo a una clientela mixta de chilenos curiosos y venezolanos nostálgicos.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Datos sobre la migración venezolana en Chile</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>En 2015, las solicitudes de residencia por parte de venezolanos aumentaron un 209% respecto al año anterior.</li>
                <li>El 74% de los inmigrantes venezolanos en Chile tienen estudios universitarios.</li>
                <li>Las principales áreas de inserción laboral son ingeniería, salud, educación y comercio.</li>
                <li>Santiago concentra el 85% de la población venezolana en Chile, aunque ciudades como Concepción y Valparaíso comienzan a recibir migrantes.</li>
              </ul>
            </div>
            
            <p className="mb-6">
              De vuelta en la estación, Carlos revisa su teléfono. Tiene un mensaje de su nuevo empleador en Concepción, donde comenzará a trabajar en una empresa de servicios petroleros. &ldquo;No es lo mismo que tenía en PDVSA, pero es un comienzo&rdquo;, dice con una mezcla de resignación y esperanza.
            </p>
            
            <p className="mb-6">
              A su lado, una maleta contiene las pocas pertenencias que pudo traer consigo. Entre ellas, una pequeña bandera venezolana y un álbum de fotos familiares. &ldquo;Lo más difícil es dejar atrás a la familia. Mis padres son mayores y no quisieron venir. Espero poder traerlos pronto&rdquo;.
            </p>
            
            <h2>Adaptación e identidad</h2>
            
            <p className="mb-6">
              La integración de los venezolanos en la sociedad chilena presenta desafíos particulares. Si bien comparten el idioma, las diferencias culturales son notables. El carácter reservado de los chilenos contrasta con la extroversión caribeña, y el clima frío del sur representa un shock para quienes están acostumbrados al calor tropical.
            </p>
            
            <p className="mb-6">
              &ldquo;Al principio todo es difícil&rdquo;, explica Verónica Martínez, psicóloga venezolana que dirige un grupo de apoyo para inmigrantes en Santiago. &ldquo;Muchos llegan con altas expectativas y se enfrentan a una realidad donde, a pesar de sus calificaciones, deben comenzar desde cero&rdquo;.
            </p>
            
            <p className="mb-6">
              Sin embargo, la resiliencia parece ser un rasgo común entre estos nuevos migrantes. Organizaciones como &ldquo;Venezolanos en Chile&rdquo; han surgido para facilitar la adaptación, ofreciendo desde asesoría legal hasta espacios de encuentro donde mantener vivas las tradiciones.
            </p>
            
            <p className="mb-6">
              El tren de Carlos está a punto de partir. Mientras aborda, reflexiona sobre su futuro: &ldquo;Venezuela siempre será mi hogar, pero ahora debo construir una nueva vida aquí. Quizás algún día pueda regresar, cuando las cosas cambien&rdquo;.
            </p>
            
            <p className="mb-6">
              El tren comienza a moverse, llevándolo hacia el sur, hacia un destino incierto pero lleno de posibilidades. Como él, miles de venezolanos emprenden cada día un viaje similar, dejando atrás un país en crisis pero llevando consigo la esperanza de un futuro mejor.
            </p>
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
              <Link href="/articulos/19-septiembre-sismo" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="https://placehold.co/200x200/c68c53/ffffff?text=Sismo"
                      alt="19 de septiembre: Sismo"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-accent transition">19 de septiembre: Sismo</h4>
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
                    <p className="text-sm text-foreground/60">Periodismo</p>
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