import React, { useState, useRef } from 'react'
import './Eventos.css'
import PIC06883 from '../../assets/PIC06883.webp'

function Eventos({ onAgregarReserva }) {
  const hoy = new Date().toISOString().split('T')[0]
  const evento = {
    id: 'evento-general',
    nombre: 'Evento',
    descripcion: 'Contanos cómo imaginás tu celebración y lo organizamos junto a vos',
    imagen: PIC06883
  }

  const [formData, setFormData] = useState({})
  const fechaInputRef = useRef(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [evento.id]: {
        ...prev[evento.id],
        [field]: value
      }
    }))
  }

  const abrirCalendario = () => {
    if (fechaInputRef.current) {
      if (typeof fechaInputRef.current.showPicker === 'function') {
        fechaInputRef.current.showPicker()
      } else {
        fechaInputRef.current.focus()
      }
    }
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
                <span className="evento-capacidad" />
              </div>

              <div className="evento-form">
                <div className="form-group">
                  <label>Tipo de evento</label>
                  <input
                    type="text"
                    placeholder="Ej: Casamiento"
                    value={formData[evento.id]?.tipoEvento || ''}
                    onChange={(e) => handleInputChange('tipoEvento', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Elegí tu fecha</label>
                  <input
                    type="date"
                    min={hoy}
                    ref={fechaInputRef}
                    onClick={abrirCalendario}
                    onFocus={abrirCalendario}
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
                  Cotizá tu evento
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
