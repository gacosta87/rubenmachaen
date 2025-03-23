import Link from "next/link";

export default function Contacto() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-background rounded-lg shadow-md border border-tertiary/20 p-8">
                <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-tertiary/30 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-tertiary/30 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-md border border-tertiary/30 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-tertiary/30 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition shadow-md"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-8">
              <div className="bg-background rounded-lg shadow-md border border-tertiary/20 p-8">
                <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Correo electrónico</h3>
                      <p className="text-foreground/70">contacto@rubenmachaen.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-foreground/70">Washington DC, Estados Unidos</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-4">Redes sociales</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-lg shadow-md border border-tertiary/20 p-8">
                <h2 className="text-2xl font-semibold mb-6">Colaboraciones</h2>
                <p className="text-foreground/80 mb-4">
                  Estoy abierto a colaboraciones en proyectos periodísticos, literarios y académicos. Si tienes una propuesta interesante, no dudes en contactarme.
                </p>
                <Link 
                  href="mailto:colaboraciones@rubenmachaen.com" 
                  className="text-accent hover:text-accent/80 font-medium"
                >
                  colaboraciones@rubenmachaen.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 