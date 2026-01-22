import React, { useEffect, useState } from 'react'
import './Alojamiento.css'
import PIC06897 from '../../assets/PIC06897 (1) (1).jpg'

const AIRBNB_URL = 'https://www.airbnb.com.ar/rooms/725190658039888448?check_in=2026-02-06&check_out=2026-02-08&location=Pueblo%20Esther%2C%20Santa%20Fe&search_mode=regular_search&source_impression_id=p3_1768602388_P3lNQEqlWSd8OaJ1&previous_page_section_name=1001&federated_search_id=636691a9-3b29-49ae-baa6-8e840eba59f7'

function Alojamiento() {

  const alojamiento = {
    id: 'alojamiento-general',
    nombre: 'Casona Completa',
    descripcion: 'La casa principal con todas sus habitaciones y espacios comunes, preparada para que desconectes del ritmo diario.',
    imagen: PIC06897
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
    <section id="alojamiento" className="alojamiento">
      <div className="alojamiento-hero">
        <div className="alojamiento-hero-content">
          <span className="alojamiento-eyebrow">Alojamiento privado</span>
          <h2 className="alojamiento-hero-titulo">
            Alojamiento en <span style={{ whiteSpace: isMobile ? 'normal' : 'nowrap' }}>La Quinta del Cholo</span>
          </h2>
          <p className="alojamiento-hero-texto">
            Un refugio en el corazón del campo, pensado para descansar, reconectar y disfrutar del tiempo sin apuro, rodeado de naturaleza y calma.
          </p>
        </div>

        <div className="alojamiento-hero-card">
          <div className="alojamiento-card-hero">
            <div
              className="alojamiento-card-hero-media"
              style={{ backgroundImage: `url("${alojamiento.imagen}")` }}
            ></div>
            <div className="alojamiento-card-hero-body">
              <h3 className="alojamiento-card-nombre">{alojamiento.nombre}</h3>
              <p className="alojamiento-card-descripcion">{alojamiento.descripcion}</p>

              <div className="alojamiento-cta">
                <button className="alojamiento-btn" onClick={irAAirbnb}>
                  Cotizá tu estadía
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alojamiento
