import React from 'react'
import './Presentacion.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Socalo3 from '../../assets/Socalo3.png'

function Presentacion() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section 
      ref={ref} 
      className={`presentacion scroll-animate ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${Socalo3})` }}
    >
      <div className="presentacion-content">
        <p className="presentacion-descripcion">
          La Quinta del Cholo es una casona restaurada con más de un siglo de historia.
          <br />
          Un espacio que combina la calidez de lo familiar con la belleza de la naturaleza,
          <br />
          ideal para descansar o celebrar momentos únicos.
        </p>
        <div className="presentacion-cta">
          <span className="presentacion-cta-line"></span>
          <span className="presentacion-cta-text">Conocé La Quinta del Cholo</span>
          <span className="presentacion-cta-line"></span>
        </div>
      </div>
    </section>
  )
}

export default Presentacion
