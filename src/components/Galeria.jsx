import React, { useState, useEffect, useRef } from 'react'
import './Galeria.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PIC06800_2 from '../../assets/alojamiento/PIC06800 (2).webp'
import PIC06815 from '../../assets/alojamiento/PIC06815.webp'
import PIC06871_2 from '../../assets/alojamiento/PIC06871 (2).webp'
import PIC06912_3 from '../../assets/alojamiento/PIC06912 (3).webp'
import PIC06927_1 from '../../assets/alojamiento/PIC06927 (1).webp'
import PIC06954_1 from '../../assets/alojamiento/PIC06954 (1).webp'
import PIC06964_1 from '../../assets/alojamiento/PIC06964 (1).webp'
import PIC06972_2 from '../../assets/alojamiento/PIC06972 (2).webp'
import PIC06991 from '../../assets/alojamiento/PIC06991.webp'
import PIC07005 from '../../assets/alojamiento/PIC07005.webp'
import PIC07023_2 from '../../assets/alojamiento/PIC07023 (2).webp'
import PIC07039_1 from '../../assets/alojamiento/PIC07039 (1).webp'
import PIC07088_1 from '../../assets/alojamiento/PIC07088 (1).webp'
import PIC07014 from '../../assets/alojamiento/PIC07014.webp'
import PIC06839_1 from '../../assets/alojamiento/PIC06839 (1).jpg'
import PIC06813 from '../../assets/alojamiento/PIC06813.webp'
import Dron2 from '../../assets/Eventos/Dron 2.jpg'
import Quinta17 from '../../assets/Eventos/Quinta 17.jpg'
import Quinta138 from '../../assets/Eventos/Quinta 138.webp'
import Quinta15_1 from '../../assets/Eventos/Quinta 15 (1).webp'
import Quinta152 from '../../assets/Eventos/Quinta 152.webp'
import Quinta159_1 from '../../assets/Eventos/Quinta 159 (1).webp'
import Quinta16 from '../../assets/Eventos/Quinta 16.webp'
import Quinta20_1 from '../../assets/Eventos/Quinta 20 (1).webp'
import Quinta25_1 from '../../assets/Eventos/Quinta 25 (1).webp'
import Quinta117 from '../../assets/Eventos/Quinta 117.jpg'
import Quinta67 from '../../assets/Eventos/Quinta 67.webp'
import Quinta68_1 from '../../assets/Eventos/Quinta 68 (1).webp'
import Quinta7_1 from '../../assets/Eventos/Quinta 7 (1).webp'
import Quinta80_1 from '../../assets/Eventos/Quinta 80 (1).webp'
import Quinta83 from '../../assets/Eventos/Quinta 83.webp'
import EventoVideo from '../../assets/D&F (Final) (1).mp4'

function Galeria() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })
  const [currentIndexAlojamiento, setCurrentIndexAlojamiento] = useState(0)
  const [currentIndexEventos, setCurrentIndexEventos] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 768) return 1
    if (window.innerWidth <= 968) return 2
    return 3
  }
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow)

  const imagenesAlojamiento = [
    { id: 1, alt: 'Alojamiento 1', src: PIC06800_2 },
    { id: 2, alt: 'Alojamiento 2', src: PIC06815 },
    { id: 3, alt: 'Alojamiento 3', src: PIC06871_2 },
    { id: 4, alt: 'Alojamiento 4', src: PIC06912_3 },
    { id: 5, alt: 'Alojamiento 5', src: PIC06927_1 },
    { id: 6, alt: 'Alojamiento 6', src: PIC06954_1 },
    { id: 7, alt: 'Alojamiento 7', src: PIC06964_1 },
    { id: 8, alt: 'Alojamiento 8', src: PIC06972_2 },
    { id: 9, alt: 'Alojamiento 9', src: PIC06991 },
    { id: 10, alt: 'Alojamiento 10', src: PIC07005 },
    { id: 11, alt: 'Alojamiento 11', src: PIC07023_2 },
    { id: 12, alt: 'Alojamiento 12', src: PIC07039_1 },
    { id: 13, alt: 'Alojamiento 13', src: PIC07088_1 },
    { id: 14, alt: 'Alojamiento 14', src: PIC07014 },
    { id: 15, alt: 'Alojamiento 15', src: PIC06839_1 },
    { id: 16, alt: 'Alojamiento 16', src: PIC06813 }
  ]

  const imagenesEventos = [
    { id: 101, alt: 'Evento 1', src: Dron2 },
    { id: 102, alt: 'Evento 2', src: Quinta17 },
    { id: 103, alt: 'Evento 3', src: Quinta138 },
    { id: 104, alt: 'Evento 4', src: Quinta15_1 },
    { id: 105, alt: 'Evento 5', src: Quinta152 },
    { id: 106, alt: 'Evento 6', src: Quinta159_1 },
    { id: 107, alt: 'Evento 7', src: Quinta16 },
    { id: 108, alt: 'Evento 8', src: Quinta20_1 },
    { id: 109, alt: 'Evento 9', src: Quinta25_1 },
    { id: 110, alt: 'Evento 10', src: Quinta117 },
    { id: 111, alt: 'Evento 11', src: Quinta67 },
    { id: 112, alt: 'Evento 12', src: Quinta68_1 },
    { id: 113, alt: 'Evento 13', src: Quinta7_1 },
    { id: 114, alt: 'Evento 14', src: Quinta80_1 },
    { id: 115, alt: 'Evento 15', src: Quinta83 },
    {
      id: 116,
      alt: 'Video evento',
      video: EventoVideo
    }
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

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slideWidth = 100 / slidesToShow

  return (
    <section ref={ref} id="galeria" className={`galeria scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="galeria-container">
        <h2 className="galeria-titulo">Galería</h2>

        {/* Carrusel Alojamiento */}
        <div className="galeria-seccion">
          <h3 className="galeria-subtitulo">Alojamiento</h3>
          <div className="carrusel-wrapper-mini">
            <button className="carrusel-btn-mini carrusel-btn-mini--prev" onClick={anteriorAlojamiento}>‹</button>
            
            <div className="carrusel-mini">
              <div 
                className="carrusel-track-mini"
                style={{ 
                  transform: `translateX(-${currentIndexAlojamiento * slideWidth}%)`,
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
                      style={{ backgroundImage: `url("${imagen.src}")` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carrusel-btn-mini carrusel-btn-mini--next" onClick={siguienteAlojamiento}>›</button>
          </div>
        </div>

        {/* Carrusel Eventos */}
        <div className="galeria-seccion">
          <h3 className="galeria-subtitulo">Eventos</h3>
          <div className="carrusel-wrapper-mini">
            <button className="carrusel-btn-mini carrusel-btn-mini--prev" onClick={anteriorEventos}>‹</button>
            
            <div className="carrusel-mini">
              <div 
                className="carrusel-track-mini"
                style={{ 
                  transform: `translateX(-${currentIndexEventos * slideWidth}%)`,
                  transition: currentIndexEventos === 0 ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {[...imagenesEventos, ...imagenesEventos].map((imagen, index) => {
                  const baseIndex = index % imagenesEventos.length
                  const item = imagenesEventos[baseIndex]
                  const isVideo = Boolean(item.video)
                  const clickHandler = () => abrirLightbox(imagenesEventos, baseIndex)

                  return (
                    <div 
                      key={`event-${index}`}
                      className={`carrusel-slide-mini ${isVideo ? 'carrusel-slide-mini--video' : ''}`}
                      onClick={clickHandler}
                      role={isVideo ? 'presentation' : 'button'}
                    >
                      {isVideo ? (
                        <div className="carrusel-video-mini">
                          <video
                            src={item.video}
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="metadata"
                          ></video>
                          <div className="carrusel-video-overlay" aria-hidden="true"></div>
                        </div>
                      ) : (
                        <div
                          className="carrusel-imagen-mini"
                          style={{ backgroundImage: `url("${item.src}")` }}
                        ></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <button className="carrusel-btn-mini carrusel-btn-mini--next" onClick={siguienteEventos}>›</button>
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
            {lightboxImages[lightboxIndex]?.video ? (
              <div className="lightbox-video">
                <video
                  src={lightboxImages[lightboxIndex].video}
                  autoPlay
                  controls
                  preload="auto"
                ></video>
              </div>
            ) : (
              <div
                className="lightbox-imagen"
                style={{ backgroundImage: `url("${lightboxImages[lightboxIndex]?.src}")` }}
              ></div>
            )}
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
