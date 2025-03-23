import Image from "next/image";
import Link from "next/link";

export default function ArticuloSilencios() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado del artículo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Silencios: Otra historia que nunca fue</h1>
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
                  <p className="text-sm text-foreground/60">5 de mayo, 2020</p>
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
              src="https://placehold.co/1200x800/4a7c59/ffffff?text=Silencios"
              alt="Silencios: Otra historia que nunca fue"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto">
            <p className="text-xl font-medium mb-6">
              Reflexión sobre los silencios históricos y las narrativas olvidadas en América Latina.
            </p>
            
            <p>
              La historia de América Latina está llena de silencios. Silencios impuestos, silencios cómplices, silencios que han borrado voces y narrativas enteras. Cuando hablamos de nuestra historia, ¿de qué historia hablamos realmente? ¿De la oficial, escrita por los vencedores? ¿O de aquella que permanece en las sombras, esperando ser contada?
            </p>
            
            <p>
              Los archivos históricos de nuestros países están repletos de documentos que narran una versión de los hechos, pero ¿qué hay de aquellos acontecimientos que nunca fueron registrados? ¿Qué hay de las voces que fueron silenciadas antes de poder dejar testimonio?
            </p>
            
            <p>
              En mi recorrido como periodista por distintos países de la región, he encontrado historias que existen en los márgenes, relatos transmitidos oralmente de generación en generación que contradicen la versión oficial. Comunidades enteras que guardan memoria de masacres nunca reconocidas, de resistencias heroicas nunca celebradas, de líderes cuyos nombres fueron borrados de los libros.
            </p>
            
            <p>
              El silencio ha sido una herramienta de poder. Silenciar al otro es negarlo, es convertirlo en no-existente. Y cuando ese silenciamiento se institucionaliza, cuando forma parte de una política sistemática, se convierte en una forma de violencia histórica que perdura en el tiempo.
            </p>
            
            <p>
              En Venezuela, mi país natal, he sido testigo de cómo la polarización política ha generado nuevos silencios. Dependiendo de quién cuente la historia reciente, ciertos hechos son amplificados mientras otros son minimizados o directamente negados. La verdad se fragmenta según la ideología, y en ese proceso, algo esencial se pierde: la complejidad de nuestra realidad.
            </p>
            
            <p>
              Lo mismo ocurre en Chile, mi país adoptivo, donde el silencio sobre ciertos aspectos de la dictadura sigue siendo un tema no resuelto. ¿Cómo construir un futuro común cuando partes fundamentales del pasado permanecen en disputa o en silencio?
            </p>
            
            <p>
              El periodismo tiene una responsabilidad fundamental en la ruptura de estos silencios. No se trata solo de informar sobre el presente, sino de contribuir a una comprensión más completa y honesta de nuestro pasado. Cada vez que damos voz a quienes fueron silenciados, cada vez que iluminamos un rincón oscurecido de nuestra historia, estamos contribuyendo a una narrativa más justa y verdadera.
            </p>
            
            <p>
              Porque los silencios no son vacíos; están llenos de historias no contadas, de verdades incómodas, de realidades que exigen ser reconocidas. Y solo reconociendo esos silencios, solo nombrando lo innombrado, podremos comenzar a construir una memoria colectiva que no excluya, que no niegue, que no borre.
            </p>
            
            <p>
              Esta es la otra historia, la que nunca fue oficialmente, pero que existe en los márgenes, en las memorias, en los testimonios que se resisten a desaparecer. Y es nuestra responsabilidad, como sociedad, escucharla.
            </p>
          </div>
          
          {/* Enlaces relacionados */}
          <div className="mt-12 pt-8 border-t border-tertiary/20">
            <h3 className="text-xl font-semibold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 