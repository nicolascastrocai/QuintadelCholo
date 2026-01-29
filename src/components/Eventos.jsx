import React, { useState, useRef, useEffect } from 'react'
import './Eventos.css'
import EventoBackground from '../../assets/PIC06871.webp'
import EventoFormImagen from '../../assets/Quinta 124.jpg'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Eventos({ onAgregarReserva }) {
  const hoy = new Date().toISOString().split('T')[0]
  const evento = {
    id: 'evento-general',
    nombre: 'Evento',
    descripcion: 'Contanos cómo imaginás tu celebración y lo organizamos junto a vos',
    imagen: EventoFormImagen
  }

  const [formData, setFormData] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true })
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

  const FormFields = () => (
    <>
      <h3 className="evento-form-titulo">{evento.nombre}</h3>
      <p className="evento-form-descripcion">{evento.descripcion}</p>

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
    </>
  )

  return (
    <section ref={ref} id="eventos" className={`eventos scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="eventos-wrapper">
        <div className="eventos-background" style={{ backgroundImage: `url(${EventoBackground})` }}>
          <div className="eventos-text-card">
            <span className="eventos-eyebrow">Eventos privados</span>
            <h2 className="eventos-titulo">Celebrá en La Quinta del Cholo</h2>
            <p className="eventos-texto">
              Un espacio versátil rodeado de naturaleza, perfecto para crear recuerdos inolvidables en tus celebraciones más importantes.
            </p>
          </div>
        </div>
        <div className="eventos-form-panel">
          <div className="eventos-form-card">
            <div
              className="eventos-form-card-media"
              style={{ backgroundImage: `url(${evento.imagen})` }}
            />
            <div className="eventos-form-card-body">
              <FormFields />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eventos
