"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// Tipo para los videos de YouTube
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

export default function Videos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextPageToken, setNextPageToken] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);
  
  // ID de la playlist de YouTube
  const playlistId = "PL6Os_2DZlAzf1JBBdQR4cdHkFbBU7hi1e";
  
  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para cargar videos desde la API de YouTube
  const fetchVideos = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    try {
      // Llamada a la API
      const response = await fetch(`/api/youtube?playlistId=${playlistId}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`);
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.videos && data.videos.length > 0) {
        setVideos(prev => [...prev, ...data.videos]);
        
        if (data.nextPageToken) {
          setNextPageToken(data.nextPageToken);
        } else {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error al cargar los videos:", error);
      // Si hay un error con la API, mostramos un mensaje
      alert(`Error al cargar videos: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, playlistId, nextPageToken]);

  // Configurar el observador de intersección para el scroll infinito
  const lastVideoElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchVideos();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, fetchVideos]);

  // Cargar videos iniciales
  useEffect(() => {
    fetchVideos();
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Videos</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-lg text-foreground/80">
            Una selección de entrevistas, conferencias y análisis sobre temas de actualidad, periodismo y literatura.
          </p>
        </div>
        
        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.length > 0 ? (
            videos.map((video, index) => {
              const isLastElement = index === videos.length - 1;
              
              return (
                <div 
                  key={video.id}
                  ref={isLastElement ? lastVideoElementRef : null}
                  className="video-card bg-background rounded-lg overflow-hidden shadow-md border border-tertiary/20 flex flex-col"
                >
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    {video.publishedAt && (
                      <p className="text-sm text-foreground/60 mb-3">{formatDate(video.publishedAt)}</p>
                    )}
                    {video.description && (
                      <p className="text-foreground/70 line-clamp-3">{video.description}</p>
                    )}
                  </div>
                  <div className="p-6 pt-0">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 font-medium flex items-center"
                    >
                      Ver en YouTube
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-1">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })
          ) : !loading && (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/70">No se encontraron videos en la playlist.</p>
            </div>
          )}
        </div>
        
        {/* Indicador de carga */}
        {loading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        )}
        
        {/* Mensaje cuando no hay más videos */}
        {!hasMore && videos.length > 0 && (
          <div className="text-center mt-12 p-6 bg-tertiary/5 rounded-lg">
            <p className="text-foreground/70">Has llegado al final de la lista de videos.</p>
            <a 
              href={`https://www.youtube.com/playlist?list=${playlistId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition"
            >
              Ver todos los videos en YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 