import React from 'react'
import './CTAPrincipal.css'
import CTAImagen from '../../assets/PIC06871.webp'
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
      <div className="cta-wrapper">
        <div className="cta-card">
          <h2 className="cta-card-title">La Quinta del Cholo</h2>
          <p className="cta-card-description">
            Elegí tu experiencia ideal: Un refugio tranquilo para descansar o el escenario perfecto para tu celebración.
          </p>
          <div className="cta-card-buttons">
            <button className="cta-card-button" onClick={() => scrollToSection('alojamiento')}>
              Alojamiento
            </button>
            <button className="cta-card-button" onClick={() => scrollToSection('eventos')}>
              Eventos
            </button>
          </div>
        </div>
        <div className="cta-image-frame">
          <img src={CTAImagen} alt="Vista de La Quinta del Cholo" />
        </div>
      </div>
    </section>
  )
}

export default CTAPrincipal
