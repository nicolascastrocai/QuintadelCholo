import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Presentacion from './components/Presentacion'
import CTAPrincipal from './components/CTAPrincipal'
import Alojamiento from './components/Alojamiento'
import Eventos from './components/Eventos'
import Galeria from './components/Galeria'
import Ubicacion from './components/Ubicacion'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Carrito from './components/Carrito'
import WhatsAppButton from './components/Contacto'
import IntroSplash from '../assets/Gemini_Generated_Image_up0ukqup0ukqup0u (1).png'
import './App.css'

function App() {
  const [reservas, setReservas] = useState([])
  const [showIntro, setShowIntro] = useState(true)
  const [introActive, setIntroActive] = useState(true)
  const [contentReady, setContentReady] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 500)

    const contentTimer = setTimeout(() => {
      setContentReady(true)
    }, 1400)

    const fadeTimer = setTimeout(() => {
      setIntroActive(false)
    }, 4200)

    const hideTimer = setTimeout(() => {
      setShowIntro(false)
    }, 4800)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(contentTimer)
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const agregarReserva = (reserva) => {
    setReservas(prev => [...prev, { ...reserva, id: Date.now() }])
  }

  const eliminarReserva = (index) => {
    setReservas(prev => prev.filter((_, i) => i !== index))
  }

  const enviarSolicitud = (datos) => {
    const numeroWhatsApp = '5493417447516'
    const { reservas: reservasEnviadas, contacto } = datos

    const resumenReservas = reservasEnviadas
      .map((reserva, index) => {
        const partes = [`${index + 1}. ${reserva.tipo === 'alojamiento' ? 'Alojamiento' : 'Evento'}: ${reserva.nombre}`]

        if (reserva.personas) partes.push(`Personas: ${reserva.personas}`)
        if (reserva.fechas) partes.push(`Fechas: ${reserva.fechas}`)
        if (reserva.observaciones) partes.push(`Notas: ${reserva.observaciones}`)

        return partes.join(' | ')
      })
      .join('\n')

    const mensaje = `Hola, soy ${contacto.nombre}.%0AEmail: ${contacto.email || 'No informado'}%0ATeléfono: ${contacto.telefono || 'No informado'}%0A%0AReservas:%0A${resumenReservas || 'Sin detalle'}%0A%0AObservaciones generales: ${contacto.observaciones || 'Sin observaciones'}`

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank')

    setReservas([])
  }

  return (
    <div className="App">
      {showIntro && (
        <div className={`intro-overlay ${introActive ? 'intro-overlay--visible' : 'intro-overlay--hidden'}`}>
          <img
            className={`intro-overlay__img ${logoVisible ? 'intro-overlay__img--visible' : ''}`}
            src={IntroSplash}
            alt="La Quinta del Cholo"
          />
        </div>
      )}
      {contentReady && (
        <>
          <Header />
          <Hero />
          <CTAPrincipal />
          <Eventos onAgregarReserva={agregarReserva} />
          <Alojamiento onAgregarReserva={agregarReserva} />
          <Presentacion />
          <Galeria />
          <Ubicacion />
          <FAQ />
          <Footer />
          <WhatsAppButton />
          <Carrito 
            reservas={reservas}
            onEliminarReserva={eliminarReserva}
            onEnviarSolicitud={enviarSolicitud}
          />
        </>
      )}
    </div>
  )
}

export default App
