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
      pregunta: '¿Cuál es la capacidad de alojamiento de la quinta?',
      respuesta: 'La capacidad es de 8 personas; contamos con tres camas matrimoniales y dos individuales.'
    },
    {
      pregunta: '¿Es posible realizar eventos durante la estadía?',
      respuesta: 'Sí, es posible realizar eventos durante la estadía, siempre con previa coordinación y bajo condiciones específicas según el tipo de celebración.'
    },
    {
      pregunta: '¿Qué incluye el alquiler?',
      respuesta: 'El alquiler incluye el uso exclusivo del predio y de los espacios habilitados según la modalidad contratada. Los servicios adicionales se cotizan de manera personalizada.'
    },
    {
      pregunta: '¿La quinta cuenta con pileta?',
      respuesta: 'Sí, contamos con pileta al aire libre.'
    },
    {
      pregunta: '¿Se permite el ingreso de proveedores externos para eventos?',
      respuesta: 'Trabajamos con una selección de proveedores exclusivos que garantizan la calidad y el nivel de cada evento. Para catering, técnica y barra de tragos contamos con alianzas con Ana Borrel, Martha Cura, VCA, Pepe Brandy y Ley Seca. En caso de requerir un proveedor diferente, evaluamos la posibilidad de manera personalizada.'
    },
    {
      pregunta: '¿Se aceptan mascotas?',
      respuesta: 'Por el momento no se aceptan mascotas. Esta decisión nos permite cuidar cada espacio y asegurar una experiencia confortable para todos nuestros huéspedes.'
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
