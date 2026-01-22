import React from 'react'
import './CTAPrincipal.css'
import PIC06871 from '../../assets/PIC06871.webp'

function CTAPrincipal() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="cta-principal">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-titulo">La Quinta del Cholo</h2>
          <p className="cta-texto">
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
              className="cta-boton cta-boton--ghost"
              onClick={() => scrollToSection('eventos')}
            >
              Eventos
            </button>
          </div>
        </div>
        <div className="cta-visuales">
          <img src={PIC06871} alt="Ambientación La Quinta del Cholo" />
        </div>
      </div>
    </section>
  )
}

export default CTAPrincipal
