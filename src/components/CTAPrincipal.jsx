import React from 'react'
import './CTAPrincipal.css'
import ImagenCTA1 from '../../assets/alojamiento/PIC06815.webp'
import ImagenCTA2 from '../../assets/alojamiento/PIC06954 (1).webp'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function CTAPrincipal() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className={`cta-principal scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="cta-container">
        <div className="cta-content">
          <p className="cta-eyebrow"></p>
          <h2 className="cta-titulo">La Quinta del Cholo</h2>
          <p className="cta-descripcion">
            Elegí tu experiencia ideal: un refugio tranquilo para descansar o el escenario perfecto para tu celebración.
          </p>
          <div className="cta-botones">
            <button 
              className="cta-boton"
              onClick={() => scrollToSection('alojamiento')}
            >
              Alojamiento
            </button>
            <button 
              className="cta-boton"
              onClick={() => scrollToSection('eventos')}
            >
              Eventos
            </button>
          </div>
        </div>
        <div className="cta-imagenes">
          <img src={ImagenCTA1} alt="Interior La Quinta del Cholo" className="cta-imagen cta-imagen-1" />
          <img src={ImagenCTA2} alt="Habitación La Quinta del Cholo" className="cta-imagen cta-imagen-2" />
        </div>
      </div>
    </section>
  )
}

export default CTAPrincipal
