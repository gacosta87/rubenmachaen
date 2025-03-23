"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticuloEconoinvest() {
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
            <h1 className="text-4xl font-bold mb-4">El Proceso contra Econoinvest: Intervención y Controversia</h1>
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
                  <p className="text-sm text-foreground/60">15 de septiembre, 2010</p>
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
              src="https://placehold.co/1200x800/b08968/ffffff?text=El+Proceso%0Acontra%0AEconoinvest"
              alt="El Proceso contra Econoinvest: Intervención y Controversia"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          {/* Contenido del artículo */}
          <div className="prose mx-auto space-y-6">
            <p className="text-xl font-medium mb-8">
              Reportaje sobre la intervención gubernamental a la casa de bolsa más grande de Venezuela, publicado originalmente en la revista Exceso.
            </p>
            
            <p className="mb-6">
              En una operación que recuerda las palabras de Jorge Giordani, entonces Ministro de Planificación y Finanzas, quien declaró que &ldquo;    la misión primaria hay que acabar con los alarmes del sistema financiero&ldquo;, el gobierno venezolano dio inicio a una intervención de gran magnitud contra casas de bolsa, centrándose en Econoinvest, considerada el epicentro de lo que las autoridades llamaron &ldquo;dudosas operaciones&ldquo;.
            </p>
            
            <h2>La Caída de Econoinvest</h2>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/b08968/ffffff?text=Allanamiento+Econoinvest"
                alt="Allanamiento a las oficinas de Econoinvest"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: Allanamiento a las oficinas de Econoinvest en la Torre Grande, Caracas. Mayo 2010.
              </div>
            </div>
            
            <p>
              Durante la madrugada del 19 de mayo, cayeron las primeras cuatro casas de bolsa: Positivos Sociedad de Corretaje, Banvalor, y empresas vinculadas a Econoinvest, por una presunta venta indebida de dólares en el extranjero con valores superiores a lo estipulado. La intervención incluyó el allanamiento de la sede principal, la incautación de discos duros, documentos, y registros de audio de las mesas operacionales.
            </p>
            
            <p>
              Cual Savonarola, el ministro Giordani alzó el dedo acusador sobre las casas de bolsa del país y dio inicio a una caza de brujas de la que ni la más poderosa se salvó. Los directivos de Econoinvest tenían razones para confiar hasta pocos días antes de que la policía les tocara a la puerta y se vieran de cara a un proceso que ni Kafka habría imaginado.
            </p>
            
            <p>
              El Ministerio de Finanzas y la Comisión Nacional de Valores (CNV), bajo liderazgo de Tomás Sánchez, suspendieron la compra y venta de títulos en divisas por supuestas &ldquo;operaciones dudosas&ldquo;, interviniendo 31 casas de bolsa y sociedades de corretaje por &ldquo;problemas administrativos&ldquo;.
            </p>
            
            <h2>El Turno de Econoinvest</h2>
            
            <p>
              Mientras la CNV en conjunto con la División Contra la Delincuencia Organizada del CICPC habían intervenido más de 30 sociedades de corretaje y casas de bolsa, Octavio Oropeza, presidente de la Asociación de Casa de Bolsa y directivo de Econoinvest, declaraba en entrevistas sobre los efectos de la modificación de la Ley de Ilícitos Cambiarios, su secuela en el manejo de cuentas y el límite sin creer que su empresa estuviese en peligro.
            </p>
            
            <p>
              El 24 de mayo a las 12 del mediodía, una comisión del Ministerio Público, acompañada por funcionarios del CICPC y la CNV, allanaron las oficinas principales de Econoinvest en la Torre Grande de la avenida Francisco de Miranda. Doce horas después, las autoridades decidieron la calidad de detenidos a Herman Sifontes, Ernesto Rangel, Juan Carlos Carvallo y Carolina Rincón, los cuatro directivos de Econoinvest Casa de Bolsa.
            </p>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/b08968/ffffff?text=Directivos+Econoinvest"
                alt="Directivos de Econoinvest"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: Directivos de Econoinvest durante una rueda de prensa previa a la intervención.
              </div>
            </div>
            
            <h2>El Grupo Econoinvest</h2>
            
            <p>
              Fundado en 1996, Econoinvest no solo era una casa de bolsa sino un emporio empresarial dirigido por Herman Sifontes. El Grupo de Empresas Econoinvest (GEE) estaba compuesto por Econoinvest S.A., Econoinvest Casa de Bolsa, Banco Canarias y otras instituciones de responsabilidad social y cultural.
            </p>
            
            <p>
              Según González, Econoinvest era una asociación creada para difundir la cultura bursátil. &ldquo;Gabriel Otrí fundó hace 15 años un sindicato criminal&ldquo;, y que en el camino reunieron 1,000 personas más para seguir delinquiendo sistemáticamente abierto.
            </p>
            
            <p>
              La compañía tuvo un papel clave en la colocación de bonos gubernamentales. En 2007, PDVSA colocó 7,500 millones de dólares en bonos e invitó a todo el sistema financiero venezolano a participar. Econoinvest, gracias a su experiencia previa con pequeños inversionistas, administró 498,000 órdenes en esta emisión, recibiendo una comisión de 3.5 millones de dólares.
            </p>
            
            <h2>La Defensa de Econoinvest</h2>
            
            <p>
              Los directivos de Econoinvest, incluyendo a José González, vicepresidente, defienden la legalidad de sus operaciones. Según González, las acusaciones contra Econoinvest no tienen fundamento y responden a una agenda ideológica del gobierno. Afirma que &ldquo;si en un régimen socialista no puede haber casas de bolsa, colóquenlo en el mismo rubro que alimentos podridos, hablando de podredumbres. Y las bolsas sí existirán, solo que ahora será el Estado el dueño&ldquo;.
            </p>
            
            <p>
              Y al parecer, González no se equivoca. Andrés Méndez, periodista de VTV, protagonista del programa especial titulado &ldquo;Capitalismo: La verdadera podredumbre&ldquo;, cita a Lenin en la misma línea, e inicia con una dramatización de The Shining, para luego dar tribuna a esta frontera que explaya sus &ldquo;labores investigativas&ldquo; sobre el caso Econoinvest.
            </p>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/b08968/ffffff?text=Cobertura+Mediática"
                alt="Cobertura mediática del caso Econoinvest"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: Cobertura mediática del caso Econoinvest en medios venezolanos.
              </div>
            </div>
            
            <p>
              José González sostiene que Econoinvest nunca tuvo problemas de solvencia, señalando que la empresa llegó a tener un patrimonio de 355,005,869 bolívares en 2010, demostrando una participación del 50% en el mercado capital y financiero del país.
            </p>
            
            <h2>Las Acusaciones y Rumores</h2>
            
            <p>
              Muchos rumores rodearon a Econoinvest antes, durante y después del allanamiento y la intervención. Muchas especias no comprobadas fueron recogidas por las autoridades como pruebas para la acusación.
            </p>
            
            <p>
              Econoinvest fue acusada principalmente de comercialización ilícita de divisas. González explica: &ldquo;La empresa transaba títulos valores que eventualmente se convertían en divisas. Desde la reforma de la Ley de Ilícitos Cambiarios en abril de 2010, cesó la adquisición de estos títulos&ldquo;.
            </p>
            
            <p>
              Por ser la casa de bolsa más grande de Venezuela, se especula que gozaba del favor de funcionarios de PDVSA en la emisión de bonos de 2007. González responde: &ldquo;Econoinvest creció mucho. Tenía una red de distribución muy amplia, sin embargo, en la emisión se trabajó simultáneamente con 14 instituciones financieras&ldquo;.
            </p>
            
            <p>
              Según las autoridades, Econoinvest se hizo de una comisión de 300 millones de dólares en la emisión de bonos de 2007. González refuta: &ldquo;En la convocatoria estuvieron todas las instituciones financieras del país, exceptuando dos. Consta en documentos que la comisión de Econoinvest fue de 3,5 millones de dólares&ldquo;.
            </p>
            
            <p>
              La Fiscalía General alegó que la distribución de bonos TICC fue ilegal, mientras los directivos argumentan lo contrario, señalando que el asunto es más político que jurídico.
            </p>
            
            <h2>El Destino de Econoinvest</h2>
            
            <p>
              Desde Nueva York, González divisa que la posible liquidación de Econoinvest, además de responder a una agenda ideológica, tiene intereses subalternos. &ldquo;No me cabe duda de que mediante la liquidación de Econoinvest se pretende tapar el comercio de títulos que en 15 años de operaciones nunca ha tenido problemas de solvencia; se habla de problemas legales y administrativos, pero no de patrimonio. En ninguna sanción administrativa aplica la liquidación&ldquo;, comenta.
            </p>
            
            <div className="my-8 relative h-[300px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x500/b08968/ffffff?text=Liquidación+Econoinvest"
                alt="Anuncio de liquidación de Econoinvest"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                Imagen de referencia: Anuncio oficial de la liquidación de Econoinvest, agosto 2010.
              </div>
            </div>
            
            <h2>Las Consecuencias</h2>
            
            <p>
              El 18 de agosto se anunció la liquidación de Econoinvest. El gobierno no solo despejó del escenario a la casa de bolsa más grande de Venezuela, sino que también anunció una oferta de deuda denominada &ldquo;Bono Amortizable Soberano 2022&ldquo; por 3,000 millones de dólares, buscando destinar el 50% a empresas inscritas en CADIVI (Comisión de Administración de Divisas).
            </p>
            
            <p>
              Confirmando el allanamiento, mientras la interventora Nahuimar Casalli anunciaba el 18 de agosto la liquidación de Econoinvest, el pasado 9 de agosto el Estado dio a conocer una oferta de deuda denominada &ldquo;Bono Amortizable Soberano 2022&ldquo; con el objetivo de financiar el déficit fiscal del ejercicio económico 2010.
            </p>
            
            <p>
              No es de extrañar que, a la vuelta de la esquina, se agasajen algunos personajes que, cual Michael Corleone, hagan al alguien una oferta que no pueda rechazar. La culebra vuelve a morderse la cola.
            </p>
            
            <div className="my-8 p-6 bg-tertiary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Nota del autor</h3>
              <p>
                Este reportaje fue elaborado originalmente para la revista Exceso en 2010. Las imágenes incluidas son representativas y se utilizan como referencia al contenido original publicado en la revista, donde el artículo apareció acompañado de fotografías documentales del caso.
              </p>
            </div>

            {/* Galería de imágenes originales */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Artículo original en revista Exceso</h3>
              <p className="mb-6 text-foreground/80">
                A continuación se muestran imágenes del artículo tal como fue publicado originalmente en la revista Exceso. Estas páginas forman parte del archivo histórico periodístico sobre el caso Econoinvest. Haz clic en cualquier imagen para ampliarla.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/econoinvest/revista-exceso-econoinvest-1.jpg")}
                >
                  <Image
                    src="/images/econoinvest/revista-exceso-econoinvest-1.jpg"
                    alt="Página 1 del artículo original en revista Exceso"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 1: Artículo original en revista Exceso, 2010
                  </div>
                </div>
                
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/econoinvest/revista-exceso-econoinvest-2.jpg")}
                >
                  <Image
                    src="/images/econoinvest/revista-exceso-econoinvest-2.jpg"
                    alt="Página 2 del artículo original en revista Exceso"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 2: Artículo original en revista Exceso, 2010
                  </div>
                </div>
                
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/econoinvest/revista-exceso-econoinvest-3.jpg")}
                >
                  <Image
                    src="/images/econoinvest/revista-exceso-econoinvest-3.jpg"
                    alt="Página 3 del artículo original en revista Exceso"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 3: Artículo original en revista Exceso, 2010
                  </div>
                </div>
                
                <div 
                  className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => openModal("/images/econoinvest/revista-exceso-econoinvest-4.jpg")}
                >
                  <Image
                    src="/images/econoinvest/revista-exceso-econoinvest-4.jpg"
                    alt="Página 4 del artículo original en revista Exceso"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="bg-tertiary/10"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm">
                    Página 4: Artículo original en revista Exceso, 2010
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