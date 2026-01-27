import React from 'react'
import './Ubicacion.css'
import MapaImagen from '../../assets/Gemini_Generated_Image_faq1jafaq1jafaq1.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Ubicacion() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section ref={ref} id="ubicacion" className={`ubicacion scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="ubicacion-container">
        <div className="ubicacion-texto">
          <h2 className="ubicacion-titulo">Ubicación</h2>
          <div className="ubicacion-info">
            <p className="ubicacion-direccion">
              <strong>Dirección:</strong><br />
              Av. del Rosario 539<br />
              CP 2126, General Lagos<br />
              Santa Fe, Argentina
            </p>
          </div>
        </div>
        
        <a 
          href="https://maps.app.goo.gl/1dQJYb3KcP5CfU4DA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ubicacion-mapa-link"
        >
          <div className="ubicacion-mapa">
            <img 
              src={MapaImagen} 
              alt="Mapa de ubicación La Quinta del Cholo" 
              className="ubicacion-mapa-imagen"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Ubicacion
