import React, { useState } from 'react'
import './Eventos.css'

function Eventos({ onAgregarReserva }) {
  const evento = {
    id: 'evento-general',
    nombre: 'Evento',
    descripcion: 'Contanos cómo imaginás tu celebración y lo organizamos junto a vos',
    capacidad: 'Hasta 80 personas',
    servicios: [
      'Espacios abiertos y cerrados preparados',
      'Servicio de catering personalizado',
      'Coordinación dedicada durante todo el evento'
    ],
    imagen: '/assets/PIC06883.jpg'
  }

  const [formData, setFormData] = useState({})

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [evento.id]: {
        ...prev[evento.id],
        [field]: value
      }
    }))
  }

  const handleAgregar = () => {
    const datos = formData[evento.id] || {}
    if (onAgregarReserva) {
      onAgregarReserva({
        tipo: 'evento',
        nombre: evento.nombre,
        personas: datos.personas || '',
        fechas: datos.fechas || '',
        observaciones: datos.observaciones || datos.eventoSolicitado || '',
        eventoSolicitado: datos.eventoSolicitado || '',
        tipoEvento: datos.tipoEvento || '',
        id: evento.id
      })
    }
    setFormData(prev => ({
      ...prev,
      [evento.id]: { personas: '', fechas: '', observaciones: '', eventoSolicitado: '', tipoEvento: '' }
    }))
  }

  return (
    <section id="eventos" className="eventos">
      <div className="eventos-hero">
        <div className="eventos-hero-content">
          <span className="eventos-eyebrow">Eventos privados</span>
          <h2 className="eventos-titulo">Celebrá en La Quinta del Cholo</h2>
          <p className="eventos-texto">
            Un espacio versátil rodeado de naturaleza, perfecto para crear recuerdos inolvidables en tus celebraciones más importantes.
          </p>
        </div>
        <div className="eventos-hero-card">
          <div className="evento-card-hero">
            <div
              className="evento-card-hero-media"
              style={{ backgroundImage: `url(${evento.imagen})` }}
            ></div>
            <div className="evento-card-hero-body">
              <h3 className="evento-nombre">{evento.nombre}</h3>
              <p className="evento-descripcion">{evento.descripcion}</p>
              <div className="evento-detalles">
                <span className="evento-capacidad">
                  <strong>Capacidad:</strong> {evento.capacidad}
                </span>
                <div className="evento-servicios">
                  <strong>Incluye:</strong>
                  <ul className="evento-card-list">
                    {evento.servicios.map((servicio, index) => (
                      <li key={index}>{servicio}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="evento-form">
                <div className="form-group">
                  <label>Tipo de evento</label>
                  <input
                    type="text"
                    placeholder="Ej: Cena íntima"
                    value={formData[evento.id]?.tipoEvento || ''}
                    onChange={(e) => handleInputChange('tipoEvento', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Elige tu fecha</label>
                  <input
                    type="text"
                    placeholder="Ej: 20 de febrero"
                    value={formData[evento.id]?.fechas || ''}
                    onChange={(e) => handleInputChange('fechas', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Cantidad de personas</label>
                  <input
                    type="number"
                    placeholder="Ej: 30"
                    value={formData[evento.id]?.personas || ''}
                    onChange={(e) => handleInputChange('personas', e.target.value)}
                  />
                </div>
                <button
                  className="evento-btn"
                  onClick={handleAgregar}
                >
                  Agregar a la reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eventos
