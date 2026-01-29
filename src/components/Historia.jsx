import React from 'react'
import './Historia.css'
import Socalo4 from '../../assets/Socalo 4.png'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Historia() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section 
      ref={ref} 
      id="historia" 
      className={`historia scroll-animate ${isVisible ? 'visible' : ''}`}
      style={{ backgroundImage: `url(${Socalo4})` }}
    >
      <div className="historia-content">
        <h2 className="historia-titulo">Historia</h2>
        <div className="historia-texto">
          <p>
            La Quinta del Cholo nació del sueño de crear un espacio donde la historia y la naturaleza se encuentran.
            <br />
            Un refugio que honra las raíces del campo santafesino, donde cada rincón cuenta una historia y cada momento invita a la contemplación.
          </p>
          <p>
            Desde sus orígenes, este lugar ha sido testigo de celebraciones, encuentros y momentos inolvidables.
            <br />
            Hoy, abre sus puertas para que nuevas historias se escriban entre sus paredes y bajo sus árboles centenarios.
          </p>
          <p>
            Un legado de tradición, hospitalidad y amor por la tierra que se transmite de generación en generación,
            <br />
            manteniendo vivo el espíritu del campo argentino.
          </p>
          <p className="historia-firma">
            El abrazo de una familia, el aroma del campo,
            <br />
            la pasión de lo nuestro.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Historia
