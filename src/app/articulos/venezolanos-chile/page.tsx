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
                    src="/images/ruben-avatar.jpg"
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
              src="/images/article2-full.jpg"
              alt="Venezolanos en Chile: Tren al Sur"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Reportaje sobre la migración venezolana hacia Chile, publicado en El Estímulo.
            </p>
            
            <p>
              SANTIAGO DE CHILE — A más de 4.600 kilómetros de Caracas, una comunidad creciente de venezolanos ha encontrado en Chile un nuevo hogar. Lejos de ser una migración temporal, muchos han decidido echar raíces en este país austral, atraídos por su estabilidad económica y oportunidades laborales.
            </p>
            
            <p>
              "Cuando llegué en 2012, éramos pocos los venezolanos en Santiago. Ahora, es común escuchar el acento venezolano en el metro, en los restaurantes, en todas partes", comenta María Gabriela Hernández, ingeniera de 34 años que trabaja en una empresa de telecomunicaciones.
            </p>
            
            <h2>Un éxodo en crecimiento</h2>
            
            <p>
              Según cifras del Departamento de Extranjería y Migración de Chile, la comunidad venezolana ha experimentado un crecimiento exponencial en los últimos años. Si en 2010 apenas se contabilizaban unos 2.000 venezolanos residiendo en Chile, para 2015 la cifra supera los 15.000, y las proyecciones indican que seguirá aumentando.
            </p>
            
            <p>
              Las razones de este éxodo son múltiples, pero la inseguridad y la crisis económica en Venezuela aparecen como los principales motivos. "No me fui de Venezuela, me sacaron", afirma contundente Pedro Ramírez, chef de 29 años que llegó a Santiago hace dos años después de que su restaurante en Caracas quebrara por la escasez de insumos.
            </p>
            
            <blockquote className="quote">
              "Chile representa lo que Venezuela fue alguna vez: un país de oportunidades, donde el trabajo duro se traduce en progreso."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="relative h-64">
                <Image
                  src="/images/article2-img1.jpg"
                  alt="Venezolanos en Santiago"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/article2-img2.jpg"
                  alt="Comunidad venezolana en Chile"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <h2>Adaptación e integración</h2>
            
            <p>
              La adaptación a la cultura chilena no siempre es sencilla. El acento, las expresiones locales y hasta el clima representan desafíos para los recién llegados. Sin embargo, la mayoría coincide en que la acogida ha sido positiva.
            </p>
            
            <p>
              "Los chilenos son más reservados que nosotros, pero una vez que rompes esa barrera inicial, son muy solidarios", explica Carolina Méndez, psicóloga venezolana que ha creado un grupo de apoyo para inmigrantes en Santiago.
            </p>
            
            <p>
              La gastronomía ha sido uno de los principales vehículos de integración. En los últimos años han proliferado los restaurantes de comida venezolana en Santiago, Valparaíso y Concepción. Las arepas, los tequeños y las cachapas ya forman parte del paisaje culinario chileno.
            </p>
            
            <h2>Desafíos y oportunidades</h2>
            
            <p>
              A pesar de las oportunidades, los venezolanos en Chile enfrentan desafíos significativos. La convalidación de títulos universitarios es un proceso largo y costoso, lo que obliga a muchos profesionales a trabajar inicialmente en áreas distintas a su formación.
            </p>
            
            <p>
              "Soy abogada, pero aquí comencé como camarera. Ahora trabajo como asistente legal mientras espero la convalidación de mi título", cuenta Verónica Blanco, quien llegó a Chile hace tres años.
            </p>
            
            <p>
              El acceso a la vivienda también representa un obstáculo, especialmente en Santiago, donde los precios de alquiler son elevados y se requieren garantías que los recién llegados difícilmente pueden ofrecer.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Datos clave</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>La comunidad venezolana en Chile creció más de 500% entre 2010 y 2015.</li>
                <li>El 65% de los venezolanos en Chile tiene formación universitaria.</li>
                <li>Santiago, Valparaíso y Concepción son las ciudades con mayor presencia venezolana.</li>
                <li>El 78% de los venezolanos en Chile tiene entre 25 y 45 años.</li>
              </ul>
            </div>
            
            <h2>Mirando al futuro</h2>
            
            <p>
              A pesar de la nostalgia por Venezuela, muchos de los entrevistados para este reportaje ven su futuro en Chile. Han comprado propiedades, han formado familias o han iniciado emprendimientos.
            </p>
            
            <p>
              "Chile me dio lo que Venezuela me negó: estabilidad y la posibilidad de planificar a largo plazo", reflexiona Roberto Andrade, ingeniero que llegó hace cuatro años y ahora dirige su propia empresa de consultoría.
            </p>
            
            <p>
              La comunidad venezolana ha enriquecido el tejido social y económico de Chile, aportando profesionales calificados, emprendedores y una cultura vibrante que se fusiona con la local, creando nuevas expresiones y dinámicas sociales.
            </p>
            
            <p>
              Como dice la popular canción de Los Prisioneros que da título a este reportaje, muchos venezolanos han tomado ese "Tren al Sur" en busca de un nuevo comienzo, llevando consigo sus sueños, su cultura y la esperanza de un futuro mejor.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/articulos/19-septiembre-sismo" className="group">
                <div className="flex items-center">
                  <div className="relative w-20 h-20 rounded overflow-hidden mr-4">
                    <Image
                      src="/images/article4.jpg"
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
                      src="/images/article5.jpg"
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