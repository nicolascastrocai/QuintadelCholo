import React, { useEffect, useState } from 'react'
import './Alojamiento.css'
import AlojamientoBackground from '../../assets/Socalo 2.png'
import AlojamientoCardImagen from '../../assets/PIC06897 (1) (1).jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AIRBNB_URL = 'https://www.airbnb.com.ar/rooms/725190658039888448?check_in=2026-02-06&check_out=2026-02-08&location=Pueblo%20Esther%2C%20Santa%20Fe&search_mode=regular_search&source_impression_id=p3_1768602388_P3lNQEqlWSd8OaJ1&previous_page_section_name=1001&federated_search_id=636691a9-3b29-49ae-baa6-8e840eba59f7'

function Alojamiento() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  const alojamiento = {
    id: 'alojamiento-general',
    nombre: 'Casona Completa',
    descripcion: 'La casa principal con todas sus habitaciones y espacios comunes, preparada para que desconectes del ritmo diario.',
    imagen: AlojamientoCardImagen
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)')
    const updateMatch = (event) => setIsMobile(event.matches)

    setIsMobile(mq.matches)
    mq.addEventListener('change', updateMatch)

    return () => mq.removeEventListener('change', updateMatch)
  }, [])

  const irAAirbnb = () => {
    window.open(AIRBNB_URL, '_blank')
  }

  return (
    <section
      ref={ref}
      id="alojamiento"
      className={`alojamiento scroll-animate ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${AlojamientoBackground})` }}
    >
      <div className="alojamiento-wrapper">
        <div className="alojamiento-background">
          <div className="alojamiento-text-content">
            <span className="alojamiento-eyebrow">Eventos privados</span>
            <h2 className="alojamiento-titulo">Celebrá en La Quinta del Cholo</h2>
            <p className="alojamiento-texto">
              Un espacio versátil rodeado de naturaleza, perfecto para crear recuerdos inolvidables en tus celebraciones más importantes.
            </p>
          </div>
        </div>
        <div className="alojamiento-card-panel">
          <div className="alojamiento-card">
            <img
              src={alojamiento.imagen}
              alt="Vista de la casona principal"
              className="alojamiento-card-media"
            />
            <div className="alojamiento-card-body">
              <h3 className="alojamiento-card-titulo">{alojamiento.nombre}</h3>
              <p className="alojamiento-card-descripcion">{alojamiento.descripcion}</p>
              <button className="alojamiento-card-btn" onClick={irAAirbnb}>
                Cotizá tu estadía
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alojamiento
