import React from 'react'
import './Historia.css'
import HistoriaImagen from '../../assets/upscalemedia-transformed.jpeg'

function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="historia-container">
        <div className="historia-imagen">
          <img src={HistoriaImagen} alt="Historia de La Quinta del Cholo" />
        </div>
        
        <div className="historia-texto">
          <h2 className="historia-titulo">Historia</h2>
          <div className="historia-contenido">
            <p>
              La Quinta del Cholo nació del sueño de crear un espacio donde la historia y la naturaleza 
              se encuentran. Un refugio que honra las raíces del campo santafesino, donde cada rincón 
              cuenta una historia y cada momento invita a la contemplación.
            </p>
            <p>
              Desde sus orígenes, este lugar ha sido testigo de celebraciones, encuentros y momentos 
              inolvidables. Hoy, abre sus puertas para que nuevas historias se escriban entre sus paredes 
              y bajo sus árboles centenarios.
            </p>
            <p>
              Un legado de tradición, hospitalidad y amor por la tierra que se transmite de generación 
              en generación, manteniendo vivo el espíritu del campo argentino.
            </p>
            <p className="firma">
              El abrazo de una familia, el aroma del campo, la pasión de lo nuestro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Historia
