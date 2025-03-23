import Image from "next/image";

export default function Biografia() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Biografía</h1>
          
          <div className="mb-12 relative h-[400px] w-full">
            <Image
              src="https://placehold.co/1200x800/8b4513/ffffff?text=Rubén+Machaen+Biografía"
              alt="Rubén Machaen"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Rubén Machaen (Caracas, 1987)</h2>
            
            <p className="text-xl font-medium mb-8">
              Periodista, escritor y docente con una trayectoria que abarca Venezuela, México y Estados Unidos.
            </p>
            
            <p className="mb-6">
              Periodista, escritor y docente venezolano/mexicano. Cursó estudios literarios en Buenos Aires y dictó las cátedras de géneros periodísticos en la Universidad Monteávila, en Caracas, e Innovación y estructura periodística en la Universidad Anáhuac, en México.
            </p>
            
            <p className="mb-6">
              También ha colaborado en medios internacionales como El Espectador (Colombia), La Tempestad y Tercera Vía (México), ViceVersa (New York) y El Estímulo (Venezuela).
            </p>
            
            <blockquote className="my-8 pl-6 border-l-4 border-tertiary/60 italic">
              "La escritura es un puente entre culturas, una forma de conectar experiencias y preservar la memoria colectiva a través de las fronteras."
            </blockquote>
            
            <h3 className="text-2xl font-semibold mt-8 pb-2 border-b border-tertiary/20">Trayectoria profesional</h3>
            
            <p className="mb-6">
              En Caracas fue reportero de los diarios Tal Cual y El Mundo, y participó en la tercera entrega de la colección &ldquo;Los rostros de futuro&rdquo;, con el libro &ldquo;Nuevo País de las Artes&rdquo; (Fondo editorial Banesco).
            </p>
            
            <p className="mb-6">
              En México fue guionista de ADN40 y coordinador de comunicación y redes de Kybernus, asociación civil dedicada a identificar e impulsar liderazgos locales.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 pb-2 border-b border-tertiary/20">Obra literaria</h3>
            
            <p className="mb-6">
              En 2012 publicó el relato &ldquo;Fulanito y sus quejas domingueras&rdquo; en la revista de la Biblioteca Nacional Argentina, en Buenos Aires, y en 2017 publicó la novela &ldquo;Soundtracks (Rocolas que no existen)&rdquo; con la editorial Ígneo.
            </p>
            
            <div className="bg-tertiary/10 p-6 rounded-lg my-8">
              <h4 className="text-lg font-medium mb-3">Publicaciones destacadas</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>&ldquo;Fulanito y sus quejas domingueras&rdquo; (2012)</li>
                <li>&ldquo;Soundtracks (Rocolas que no existen)&rdquo; (2017)</li>
                <li>&ldquo;Nuevo País de las Artes&rdquo; - Colección "Los rostros de futuro"</li>
              </ul>
            </div>
            
            <p className="mb-6">
              Actualmente reside en Estados Unidos, donde fue colaborador de la Feria Internacional del Libro de la Ciudad de Nueva York (FILNYC) y fundó la organización sin fines de lucro Immigrants Beyond Immigration. También publicó un relato en el Volumen VI de la FILNYC y forma parte de los autores del Volumen 5 de Hispanic Rising Stars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 