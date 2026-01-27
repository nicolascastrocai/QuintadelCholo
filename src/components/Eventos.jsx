import React, { useState, useRef, useEffect } from 'react'
import './Eventos.css'
import EventoHero from '../../assets/Quinta 124.jpg'
import EventoImagen from '../../assets/Eventos/Quinta 152.webp'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Eventos({ onAgregarReserva }) {
  const hoy = new Date().toISOString().split('T')[0]
  const evento = {
    id: 'evento-general',
    nombre: 'Evento',
    descripcion: 'Contanos cómo imaginás tu celebración y lo organizamos junto a vos',
    imagen: EventoHero
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
      <h3 className="evento-form-titulo">Cotizá tu evento</h3>
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
          Enviar solicitud
        </button>
      </div>
    </>
  )

  return (
    <section ref={ref} id="eventos" className={`eventos scroll-animate ${isVisible ? 'visible' : ''}`}>
      <div className="eventos-container">
        <div className="eventos-panel">
          <div className="eventos-panel-content">
            <span className="eventos-eyebrow">Eventos privados</span>
            <h2 className="eventos-titulo">Celebrá en La Quinta del Cholo</h2>
            <p className="eventos-texto">
Un espacio versátil rodeado de naturaleza, perfecto para crear recuerdos inolvidables en tus celebraciones más importantes.            </p>
            <button className="eventos-cta-btn" onClick={() => setShowForm(!showForm)}>
              Eventos
            </button>
          </div>

          <div className="eventos-form-inline">
            <div className="eventos-form-card eventos-form-card--inline">
              <div
                className="eventos-form-card-media"
                style={{ backgroundImage: `url("${evento.imagen}")` }}
              />
              <div className="eventos-form-card-body">
                <FormFields />
              </div>
            </div>
          </div>
        </div>

        <div className="eventos-imagen-wrapper">
          <img src={EventoImagen} alt="Celebrá en Aguaverde" className="eventos-imagen" />
        </div>
      </div>

      {showForm && (
        <>
          <div className="eventos-modal-backdrop" onClick={() => setShowForm(false)} />
          <div className="eventos-form-modal">
            <div className="eventos-form-card">
              <button className="eventos-form-close" onClick={() => setShowForm(false)}>
                ×
              </button>
              <div
                className="eventos-form-card-media"
                style={{ backgroundImage: `url("${evento.imagen}")` }}
              />
              <div className="eventos-form-card-body">
                <FormFields />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Eventos
