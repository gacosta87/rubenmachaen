import Image from "next/image";

export default function Biografia() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Biografía</h1>
          
          <div className="mb-12 relative h-[400px] w-full">
            <Image
              src="/images/ruben-wide.jpg"
              alt="Rubén Machaen"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose mx-auto">
            <h2>Rubén Machaen (Caracas, 1987)</h2>
            
            <p>
              Periodista, escritor y docente venezolano/mexicano. Cursó estudios literarios en Buenos Aires y dictó las cátedras de géneros periodísticos en la Universidad Monteávila, en Caracas, e Innovación y estructura periodística en la Universidad Anáhuac, en México.
            </p>
            
            <p>
              También ha colaborado en medios internacionales como El Espectador (Colombia), La Tempestad y Tercera Vía (México), ViceVersa (New York) y El Estímulo (Venezuela).
            </p>
            
            <h3>Trayectoria profesional</h3>
            
            <p>
              En Caracas fue reportero de los diarios Tal Cual y El Mundo, y participó en la tercera entrega de la colección "Los rostros de futuro", con el libro Nuevo País de las Artes (Fondo editorial Banesco).
            </p>
            
            <p>
              En México fue guionista de ADN40 y coordinador de comunicación y redes de Kybernus, asociación civil dedicada a identificar e impulsar liderazgos locales.
            </p>
            
            <h3>Obra literaria</h3>
            
            <p>
              En 2012 publicó el relato "Fulanito y sus quejas domingueras" en la revista de la Biblioteca Nacional Argentina, en Buenos Aires, y en 2017 publicó la novela Soundtracks (Rocolas que no existen) con la editorial Ígneo.
            </p>
            
            <p>
              Actualmente reside en Washington DC, Estados Unidos, donde fue colaborador de la Feria Internacional del Libro de la Ciudad de Nueva York (FILNYC) y fundó la organización sin fines de lucro Immigrants Beyond Immigration. También publicó un relato en el Volumen VI de la FILNYC y forma parte de los autores del Volumen 5 de Hispanic Rising Stars.
            </p>
            
            <h3>Influencias y estilo</h3>
            
            <p>
              Con una fuerte influencia de Julio Cortázar, la obra de Rubén Machaen explora temas filosóficos y existenciales a través de una narrativa que mezcla lo cotidiano con lo extraordinario. Su estilo bohemio y reflexivo se refleja tanto en sus textos periodísticos como en su obra literaria.
            </p>
            
            <p>
              Además de su pasión por la literatura, Rubén es un entusiasta del cine de acción y series como Sons of Anarchy, influencias que ocasionalmente se filtran en su trabajo creativo, aportando dinamismo y tensión narrativa.
            </p>
            
            <blockquote className="quote">
              "La escritura es un acto de resistencia contra el olvido, una forma de preservar la memoria colectiva y personal en tiempos de cambio constante."
            </blockquote>
            
            <h3>Proyectos actuales</h3>
            
            <p>
              Actualmente, Rubén continúa su labor periodística mientras trabaja en nuevos proyectos literarios que exploran la identidad latinoamericana en contextos de migración y transformación cultural.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 