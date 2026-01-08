import React, { useState, useEffect, useRef } from 'react'
import './Galeria.css'
import PIC06964 from '../../assets/PIC06964.webp'
import PIC06959 from '../../assets/PIC06959.webp'
import PIC06957 from '../../assets/PIC06957.webp'
import PIC06954 from '../../assets/PIC06954.webp'
import PIC06951 from '../../assets/PIC06951.webp'
import PIC06944 from '../../assets/PIC06944.webp'
import PIC06927 from '../../assets/PIC06927.webp'
import PIC06918 from '../../assets/PIC06918.webp'
import PIC06896 from '../../assets/PIC06896.webp'
import PIC06864 from '../../assets/PIC06864.webp'
import PIC06855 from '../../assets/PIC06855.webp'
import PIC06833 from '../../assets/PIC06833.webp'
import PIC06815 from '../../assets/PIC06815.webp'
import PIC06807 from '../../assets/PIC06807.webp'
import PIC06800 from '../../assets/PIC06800.webp'

function Galeria() {
  const [currentIndexAlojamiento, setCurrentIndexAlojamiento] = useState(0)
  const [currentIndexEventos, setCurrentIndexEventos] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const imagenesAlojamiento = [
    { id: 1, alt: 'Alojamiento 1', src: PIC06964 },
    { id: 2, alt: 'Alojamiento 2', src: PIC06959 },
    { id: 3, alt: 'Alojamiento 3', src: PIC06957 },
    { id: 4, alt: 'Alojamiento 4', src: PIC06954 },
    { id: 5, alt: 'Alojamiento 5', src: PIC06951 },
    { id: 6, alt: 'Alojamiento 6', src: PIC06944 },
    { id: 7, alt: 'Alojamiento 7', src: PIC06927 }
  ]

  const imagenesEventos = [
    { id: 8, alt: 'Evento 1', src: PIC06918 },
    { id: 9, alt: 'Evento 2', src: PIC06896 },
    { id: 10, alt: 'Evento 3', src: PIC06864 },
    { id: 11, alt: 'Evento 4', src: PIC06855 },
    { id: 12, alt: 'Evento 5', src: PIC06833 },
    { id: 13, alt: 'Evento 6', src: PIC06815 },
    { id: 14, alt: 'Evento 7', src: PIC06807 },
    { id: 15, alt: 'Evento 8', src: PIC06800 }
  ]

  // Auto-scroll carrusel Alojamiento (infinito)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexAlojamiento((prevIndex) => prevIndex + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll carrusel Eventos (infinito)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexEventos((prevIndex) => prevIndex + 1)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  // Reset sin animación cuando llega al final (Alojamiento)
  useEffect(() => {
    if (currentIndexAlojamiento === imagenesAlojamiento.length) {
      setTimeout(() => {
        setCurrentIndexAlojamiento(0)
      }, 500)
    }
  }, [currentIndexAlojamiento])

  // Reset sin animación cuando llega al final (Eventos)
  useEffect(() => {
    if (currentIndexEventos === imagenesEventos.length) {
      setTimeout(() => {
        setCurrentIndexEventos(0)
      }, 500)
    }
  }, [currentIndexEventos])

  const siguienteAlojamiento = () => {
    setCurrentIndexAlojamiento((prevIndex) => prevIndex + 1)
  }

  const anteriorAlojamiento = () => {
    setCurrentIndexAlojamiento((prevIndex) => 
      prevIndex === 0 ? 0 : prevIndex - 1
    )
  }

  const siguienteEventos = () => {
    setCurrentIndexEventos((prevIndex) => prevIndex + 1)
  }

  const anteriorEventos = () => {
    setCurrentIndexEventos((prevIndex) => 
      prevIndex === 0 ? 0 : prevIndex - 1
    )
  }

  const abrirLightbox = (imagenes, index) => {
    setLightboxImages(imagenes)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const cerrarLightbox = () => {
    setLightboxOpen(false)
  }

  const siguienteLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prevIndex) => 
      prevIndex === lightboxImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const anteriorLightbox = (e) => {
    e.stopPropagation()
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? lightboxImages.length - 1 : prevIndex - 1
    )
  }

  // Navegación con teclado en lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') siguienteLightbox(e)
      if (e.key === 'ArrowLeft') anteriorLightbox(e)
      if (e.key === 'Escape') cerrarLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id="galeria" className="galeria">
      <div className="galeria-container">
        <h2 className="galeria-titulo">Galería</h2>

        {/* Carrusel Alojamiento */}
        <div className="galeria-seccion">
          <h3 className="galeria-subtitulo">Alojamiento</h3>
          <div className="carrusel-wrapper-mini">
            <button className="carrusel-btn-mini" onClick={anteriorAlojamiento}>‹</button>
            
            <div className="carrusel-mini">
              <div 
                className="carrusel-track-mini"
                style={{ 
                  transform: `translateX(-${currentIndexAlojamiento * 33.33}%)`,
                  transition: currentIndexAlojamiento === 0 ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {[...imagenesAlojamiento, ...imagenesAlojamiento].map((imagen, index) => (
                  <div 
                    key={`aloj-${index}`}
                    className="carrusel-slide-mini"
                    onClick={() => abrirLightbox(imagenesAlojamiento, index % imagenesAlojamiento.length)}
                  >
                    <div
                      className="carrusel-imagen-mini"
                      style={{ backgroundImage: `url(${imagen.src})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carrusel-btn-mini" onClick={siguienteAlojamiento}>›</button>
          </div>
        </div>

        {/* Carrusel Eventos */}
        <div className="galeria-seccion">
          <h3 className="galeria-subtitulo">Eventos</h3>
          <div className="carrusel-wrapper-mini">
            <button className="carrusel-btn-mini" onClick={anteriorEventos}>‹</button>
            
            <div className="carrusel-mini">
              <div 
                className="carrusel-track-mini"
                style={{ 
                  transform: `translateX(-${currentIndexEventos * 33.33}%)`,
                  transition: currentIndexEventos === 0 ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {[...imagenesEventos, ...imagenesEventos].map((imagen, index) => (
                  <div 
                    key={`event-${index}`}
                    className="carrusel-slide-mini"
                    onClick={() => abrirLightbox(imagenesEventos, index % imagenesEventos.length)}
                  >
                    <div
                      className="carrusel-imagen-mini"
                      style={{ backgroundImage: `url(${imagen.src})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carrusel-btn-mini" onClick={siguienteEventos}>›</button>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={cerrarLightbox}>
          <button className="lightbox-cerrar" onClick={cerrarLightbox}>✕</button>
          
          <button className="lightbox-btn lightbox-btn-prev" onClick={anteriorLightbox}>
            ‹
          </button>

          <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>
            <div
              className="lightbox-imagen"
              style={{ backgroundImage: `url(${lightboxImages[lightboxIndex]?.src})` }}
            ></div>
            <div className="lightbox-info">
              <span>{lightboxIndex + 1} / {lightboxImages.length}</span>
            </div>
          </div>

          <button className="lightbox-btn lightbox-btn-next" onClick={siguienteLightbox}>
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Galeria
