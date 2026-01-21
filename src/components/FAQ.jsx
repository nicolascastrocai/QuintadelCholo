import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      pregunta: '¿Cuál es el mínimo de días para alquilar la quinta para alojamiento?',
      respuesta: 'El mínimo de estadía es de dos noches, pensado para garantizar una experiencia de descanso y disfrute pleno del entorno.'
    },
    {
      pregunta: '¿La quinta se alquila únicamente para alojamiento?',
      respuesta: 'No. La Quinta del Cholo ofrece propuestas tanto de alojamiento como de eventos privados, con condiciones y valores personalizados según cada experiencia.'
    },
    {
      pregunta: '¿Se permite el ingreso de proveedores externos para eventos?',
      respuesta: 'Trabajamos con un abanico de proveedores de primera calidad, cuidadosamente seleccionados para garantizar el nivel y la excelencia de cada evento. Si desean conocer el detalle de los proveedores recomendados para cada servicio, pueden consultarnos y con gusto les enviaremos la información correspondiente. En caso de querer trabajar con un proveedor diferente, la posibilidad se evalúa de manera personalizada, cuidando siempre los estándares y la experiencia del lugar.'
    },
    {
      pregunta: '¿Cómo se confirma una reserva?',
      respuesta: 'La reserva se confirma mediante una seña previa. El saldo se abona según las condiciones acordadas al momento de la contratación.'
    },
    {
      pregunta: '¿Cómo realizar una consulta o solicitar disponibilidad?',
      respuesta: 'Para recibir asesoramiento personalizado y conocer disponibilidad, escribinos por WhatsApp:',
      whatsapp: 'https://wa.me/5493417447516'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-titulo">Preguntas Frecuentes</h2>
        
        <div className="faq-lista">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-pregunta"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.pregunta}</span>
                <span className="faq-icono">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-respuesta">
                <p>
                  {faq.respuesta}
                  {faq.whatsapp && (
                    <>
                      {' '}
                      <a href={faq.whatsapp} target="_blank" rel="noopener noreferrer">
                        {faq.whatsapp}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
