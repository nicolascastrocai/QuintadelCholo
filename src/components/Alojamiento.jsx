import React, { useState } from 'react'
import './Alojamiento.css'
import PIC06935 from '../../assets/PIC06935.webp'
import PIC06951 from '../../assets/PIC06951.webp'

const addDaysISO = (dateString, days) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

function Alojamiento({ onAgregarReserva }) {
  const hoyISO = new Date().toISOString().split('T')[0]

  const alojamientos = [
    {
      id: 'casona-completa',
      nombre: 'Casona Completa',
      descripcion: 'La casa principal con todas sus habitaciones y espacios comunes',
      capacidad: '8-10 personas',
      servicios: ['4 habitaciones', 'Cocina equipada', 'Living comedor', 'Parrillero', 'Jardín privado'],
      imagen: PIC06935
    },
    {
      id: 'suite-campo',
      nombre: 'Suite del Campo',
      descripcion: 'Habitación independiente con vista al campo',
      capacidad: '2-3 personas',
      servicios: ['Baño privado', 'Terraza', 'Desayuno incluido', 'Acceso a jardines'],
      imagen: PIC06951
    }
  ]

  const [formData, setFormData] = useState({})

  const handleInputChange = (alojamientoId, field, value) => {
    setFormData(prev => {
      const prevData = prev[alojamientoId] || {}
      const updatedData = { ...prevData, [field]: value }

      if (field === 'fechaEntrada' && value) {
        const minSalida = addDaysISO(value, 2)
        if (updatedData.fechaSalida && updatedData.fechaSalida < minSalida) {
          updatedData.fechaSalida = minSalida
        }
      }

      return {
        ...prev,
        [alojamientoId]: updatedData
      }
    })
  }

  const handleAgregar = (alojamiento) => {
    const datos = formData[alojamiento.id] || {}
    const fechaEntrada = datos.fechaEntrada || ''
    const fechaSalida = datos.fechaSalida || ''
    const rangoFechas = fechaEntrada && fechaSalida
      ? `${fechaEntrada} al ${fechaSalida}`
      : fechaEntrada || fechaSalida || ''

    if (onAgregarReserva) {
      onAgregarReserva({
        tipo: 'alojamiento',
        nombre: alojamiento.nombre,
        personas: datos.personas || '',
        fechas: rangoFechas,
        id: alojamiento.id
      })
    }
    setFormData(prev => ({
      ...prev,
      [alojamiento.id]: { personas: '', fechaEntrada: '', fechaSalida: '' }
    }))
  }

  return (
    <section id="alojamiento" className="alojamiento">
      <div className="alojamiento-container">
        <h2 className="alojamiento-titulo">Alojamiento</h2>
        
        <div className="alojamiento-grid">
          {alojamientos.map(alojamiento => (
            <div key={alojamiento.id} className="alojamiento-card">
              <div
                className="alojamiento-imagen"
                style={{
                  backgroundImage: `url(${alojamiento.imagen})`
                }}
                role="presentation"
              ></div>
              
              <div className="alojamiento-info">
                <h3 className="alojamiento-nombre">{alojamiento.nombre}</h3>
                <p className="alojamiento-descripcion">{alojamiento.descripcion}</p>
                
                <div className="alojamiento-detalles">
                  <span className="alojamiento-capacidad">
                    <strong>Capacidad:</strong> {alojamiento.capacidad}
                  </span>
                  
                  <div className="alojamiento-servicios">
                    <strong>Incluye:</strong>
                    <ul>
                      {alojamiento.servicios.map((servicio, idx) => (
                        <li key={idx}>{servicio}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="alojamiento-form">
                  <div className="form-group">
                    <label>Cantidad de personas</label>
                    <input 
                      type="number" 
                      placeholder="Ej: 4"
                      value={formData[alojamiento.id]?.personas || ''}
                      onChange={(e) => handleInputChange(alojamiento.id, 'personas', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group fechas-grid">
                    <div>
                      <label>Fecha de entrada</label>
                      <input 
                        type="date"
                        value={formData[alojamiento.id]?.fechaEntrada || ''}
                        onChange={(e) => handleInputChange(alojamiento.id, 'fechaEntrada', e.target.value)}
                        onFocus={(e) => e.target.showPicker?.()}
                        onClick={(e) => e.target.showPicker?.()}
                        min={hoyISO}
                      />
                    </div>
                    <div>
                      <label>Fecha de salida</label>
                      <input 
                        type="date"
                        value={formData[alojamiento.id]?.fechaSalida || ''}
                        onChange={(e) => handleInputChange(alojamiento.id, 'fechaSalida', e.target.value)}
                        onFocus={(e) => e.target.showPicker?.()}
                        onClick={(e) => e.target.showPicker?.()}
                        min={
                          formData[alojamiento.id]?.fechaEntrada
                            ? addDaysISO(formData[alojamiento.id]?.fechaEntrada, 2)
                            : addDaysISO(hoyISO, 2)
                        }
                      />
                    </div>
                  </div>
                  
                  <button 
                    className="alojamiento-btn"
                    onClick={() => handleAgregar(alojamiento)}
                  >
                    Agregar a la reserva
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Alojamiento
