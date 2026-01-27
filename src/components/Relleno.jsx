import React from 'react'
import './Relleno.css'
import ImagenRelleno from '../../assets/Eventos/Dron 2.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Relleno() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })

  return (
    <section ref={ref} className={`relleno scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="relleno-imagen-container">
        <img src={ImagenRelleno} alt="La Quinta del Cholo" className="relleno-imagen" />
      </div>
      
      <div className="relleno-footer">
        <div className="relleno-contenido">
          <h2 className="relleno-titulo">En La Quinta del Cholo, cada detalle cuenta.</h2>
          <p className="relleno-texto">
            Y así como celebramos momentos únicos, también abrimos nuestras puertas para quienes buscan detener el tiempo y conectar con lo esencial.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Relleno
