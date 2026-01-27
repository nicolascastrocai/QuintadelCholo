import React from 'react'
import './Presentacion.css'
import ImagenPresentacion from '../../assets/PIC07074 (3) (1).webp'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PIC07074 from '../../assets/PIC07074 (3) (1).webp'
import IMG0765 from '../../assets/PIC06918.webp'

function Presentacion() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section ref={ref} className={`presentacion scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="presentacion-container">
        <div className="presentacion-texto">
          <span className="presentacion-eyebrow">Conocé La Quinta del Cholo</span>
          <h2 className="presentacion-titulo">
            Un lugar de encuentro, repleto
            <br />
             de historia
          </h2>
          <p className="presentacion-parrafo">
            La Quinta del Cholo es una casona restaurada con más de un siglo de historia. Un espacio que combina la calidez 
            de lo familiar con la belleza de la naturaleza, ideal para descansar o celebrar 
            momentos únicos.
          </p>
        </div>
        
        <div className="presentacion-imagenes">
          <img
            src={IMG0765}
            alt="Espacio histórico 1"
            className="presentacion-imagen"
          />
          <img
            src={PIC07074}
            alt="Espacio histórico 2"
            className="presentacion-imagen"
          />
        </div>
      </div>
    </section>
  )
}

export default Presentacion
