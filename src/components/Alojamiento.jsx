import React from 'react'
import './Alojamiento.css'
import PIC06935 from '../../assets/PIC06935.webp'

function Alojamiento({ onAgregarReserva }) {

  const alojamiento = {
    id: 'alojamiento-general',
    nombre: 'Casona Completa',
    descripcion: 'La casa principal con todas sus habitaciones y espacios comunes, preparada para que desconectes del ritmo diario.',
    imagen: PIC06935
  }

  const handleAgregar = () => {
    if (onAgregarReserva) {
      onAgregarReserva({
        tipo: 'alojamiento',
        nombre: alojamiento.nombre,
        personas: '',
        fechas: '',
        id: alojamiento.id
      })
    }
  }

  return (
    <section id="alojamiento" className="alojamiento">
      <div className="alojamiento-hero">
        <div className="alojamiento-hero-content">
          <span className="alojamiento-eyebrow">Alojamiento privado</span>
          <h2 className="alojamiento-hero-titulo">Alojamiento en La Quinta del Cholo</h2>
          <p className="alojamiento-hero-texto">
            Un refugio en el corazón del campo, pensado para descansar, reconectar y disfrutar del tiempo sin apuro, rodeado de naturaleza y calma.
          </p>
        </div>

        <div className="alojamiento-hero-card">
          <div className="alojamiento-card-hero">
            <div
              className="alojamiento-card-hero-media"
              style={{ backgroundImage: `url(${alojamiento.imagen})` }}
            ></div>
            <div className="alojamiento-card-hero-body">
              <h3 className="alojamiento-card-nombre">{alojamiento.nombre}</h3>
              <p className="alojamiento-card-descripcion">{alojamiento.descripcion}</p>

              <div className="alojamiento-cta">
                <button className="alojamiento-btn" onClick={handleAgregar}>
                  Cotizá tu estadía
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alojamiento
