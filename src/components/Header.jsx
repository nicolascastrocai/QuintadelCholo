import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <span>La Quinta del Cholo</span>
        </div>
        
        <button
          className={`header-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('alojamiento')}>Alojamiento</a>
          <a onClick={() => scrollToSection('eventos')}>Eventos</a>
          <a onClick={() => scrollToSection('galeria')}>Galería</a>
          <a onClick={() => scrollToSection('ubicacion')}>Ubicación</a>
          <a onClick={() => scrollToSection('contacto')}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
