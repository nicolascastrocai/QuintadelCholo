import React from 'react'
import './Ubicacion.css'

function Ubicacion() {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="ubicacion-container">
        <div className="ubicacion-texto">
          <h2 className="ubicacion-titulo">Ubicación</h2>
          <div className="ubicacion-info">
            <p className="ubicacion-direccion">
              <strong>Dirección:</strong><br />
              Av. del Rosario 539<br />
              CP 2126, General Lagos<br />
              Santa Fe, Argentina
            </p>
            <p className="ubicacion-descripcion">
              En el corazón del campo santafesino, un lugar de fácil acceso 
              rodeado de naturaleza y tranquilidad.
            </p>
          </div>
        </div>
        
        <a 
          href="https://maps.app.goo.gl/1dQJYb3KcP5CfU4DA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ubicacion-mapa-link"
        >
          <div className="ubicacion-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.560564615889!2d-60.537374799999995!3d-33.1206348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b709fa5ce734ab%3A0x2baa37198ae32bce!2sLa%20Quinta%20del%20Cholo!5e0!3m2!1ses-419!2sar!4v1766957448869!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación La Quinta del Cholo"
            ></iframe>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Ubicacion
