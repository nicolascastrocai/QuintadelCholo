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
import './App.css'

function App() {
  const [reservas, setReservas] = useState([])

  const agregarReserva = (reserva) => {
    setReservas(prev => [...prev, { ...reserva, id: Date.now() }])
  }

  const eliminarReserva = (index) => {
    setReservas(prev => prev.filter((_, i) => i !== index))
  }

  const enviarSolicitud = (datos) => {
    console.log('Solicitud enviada:', datos)
    setReservas([])
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Presentacion />
      <CTAPrincipal />
      <Alojamiento onAgregarReserva={agregarReserva} />
      <Eventos onAgregarReserva={agregarReserva} />
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
    </div>
  )
}

export default App
