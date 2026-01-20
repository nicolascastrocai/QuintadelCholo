import React, { useState } from 'react'
import './Carrito.css'

function Carrito({ reservas, onEliminarReserva, onEnviarSolicitud }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [datosContacto, setDatosContacto] = useState({
    nombre: '',
    email: '',
    telefono: '',
    observaciones: ''
  })

  const handleInputChange = (field, value) => {
    setDatosContacto(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleEnviar = () => {
    if (reservas.length === 0) {
      alert('No hay items en la reserva')
      return
    }
    
    if (!datosContacto.nombre || !datosContacto.email) {
      alert('Por favor completá tu nombre y email')
      return
    }

    if (onEnviarSolicitud) {
      onEnviarSolicitud({
        reservas,
        contacto: datosContacto
      })
    }
    
    setDatosContacto({ nombre: '', email: '', telefono: '', observaciones: '' })
    setMostrarCarrito(false)
    setModalAbierto(true)
  }

  const cerrarModal = () => setModalAbierto(false)

  return (
    <>
      {reservas.length > 0 && (
        <button 
          className="carrito-flotante"
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
        >
          <span className="carrito-icono">🛒</span>
          <span className="carrito-contador">{reservas.length}</span>
        </button>
      )}

      {mostrarCarrito && (
        <div className="carrito-overlay" onClick={() => setMostrarCarrito(false)}>
          <div className="carrito-panel" onClick={(e) => e.stopPropagation()}>
            <div className="carrito-header">
              <h3>Resumen de Reserva</h3>
              <button 
                className="carrito-cerrar"
                onClick={() => setMostrarCarrito(false)}
              >
                ✕
              </button>
            </div>

            <div className="carrito-contenido">
              {reservas.length === 0 ? (
                <p className="carrito-vacio">No hay items en la reserva</p>
              ) : (
                <div className="carrito-items">
                  {reservas.map((reserva, index) => (
                    <div key={index} className="carrito-item">
                      <div className="item-info">
                        <span className="item-tipo">
                          {reserva.tipo === 'alojamiento' ? '🏠' : '🎉'} {reserva.tipo}
                        </span>
                        <h4>{reserva.nombre}</h4>
                        {reserva.personas && (
                          <p>👥 {reserva.personas} personas</p>
                        )}
                        {reserva.fechas && (
                          <p>📅 {reserva.fechas}</p>
                        )}
                        {reserva.observaciones && (
                          <p className="item-obs">💬 {reserva.observaciones}</p>
                        )}
                      </div>
                      <button 
                        className="item-eliminar"
                        onClick={() => onEliminarReserva && onEliminarReserva(index)}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="carrito-contacto">
                <h4>Datos de contacto</h4>
                
                <div className="form-group">
                  <label>Nombre completo *</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    value={datosContacto.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    value={datosContacto.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="+598 99 123 456"
                    value={datosContacto.telefono}
                    onChange={(e) => handleInputChange('telefono', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Observaciones adicionales</label>
                  <textarea 
                    placeholder="Cualquier información adicional..."
                    rows="3"
                    value={datosContacto.observaciones}
                    onChange={(e) => handleInputChange('observaciones', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="carrito-footer">
              <button 
                className="carrito-enviar"
                onClick={handleEnviar}
              >
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      )}

      {modalAbierto && (
        <div className="solicitud-modal-overlay" onClick={cerrarModal}>
          <div className="solicitud-modal" onClick={(e) => e.stopPropagation()}>
            <h4>¡Solicitud enviada!</h4>
            <p>Gracias por escribirnos. Te contactaremos a la brevedad.</p>
            <button className="solicitud-modal-btn" onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Carrito
