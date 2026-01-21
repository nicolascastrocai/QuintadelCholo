import React from 'react'
import './Presentacion.css'
import IMG0765 from '../../assets/PIC06918.webp'
import PIC07074 from '../../assets/PIC07074 (3) (1).webp'

function Presentacion() {
  return (
    <section className="presentacion">
      <div className="presentacion-container">
        <div className="presentacion-texto">
          <span className="presentacion-eyebrow">Conocé La Quinta del Cholo</span>
          <h2 className="presentacion-titulo">Un lugar de encuentro, repleto de historia</h2>
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
