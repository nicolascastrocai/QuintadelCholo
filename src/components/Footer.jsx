import React from 'react'
import './Footer.css'
import FooterMap from '../../assets/ChatGPT Image 29 ene 2026, 06_41_26 p.m..png'
import FooterLogo from '../../assets/logo.svg'
import IsoLogo from '../../assets/iso.svg'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contacto" className="footer">
      <div className="footer-border-container">
        <div className="footer-border-line"></div>
        <img src={IsoLogo} alt="" className="footer-border-logo" />
      </div>
      <div className="footer-layout">
        <nav className="footer-column footer-column--nav">
          <ul>
            <li><button onClick={scrollToTop}>inicio</button></li>
            <li><a href="#alojamiento">alojamiento</a></li>
            <li><a href="#eventos">eventos</a></li>
            <li><a href="#galeria">galería</a></li>
            <li><a href="#historia">historia</a></li>
            <li><a href="#contacto">contacto</a></li>
          </ul>
        </nav>

        <div className="footer-column footer-column--map">
          <a
            href="https://www.google.com/maps/place/La+Quinta+del+Cholo/@-33.1206303,-60.5399497,17z/data=!3m1!4b1!4m6!3m5!1s0x95b709fa5ce734ab:0x2baa37198ae32bce!8m2!3d-33.1206348!4d-60.5373748!16s%2Fg%2F11ssxd23mn?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir mapa en Google Maps"
            className="footer-map-link"
          >
            <img src={FooterMap} alt="Mapa de La Quinta del Cholo" />
          </a>

          <div className="footer-mobile-card">
            <div className="footer-mobile-card__image">
              <img src={FooterMap} alt="Ubicación" />
            </div>
            <button className="footer-mobile-card__button">Suscribirse</button>
            <ul className="footer-mobile-card__contact">
              <li>+54 9 341 744 7516</li>
              <li><a href="mailto:info@laquintadelcholo.com">info@laquintadelcholo.com</a></li>
              <li>General Lagos, Santa Fe</li>
            </ul>
          </div>
        </div>

        <div className="footer-column footer-column--info">
          <div className="footer-info-block">
            <h4>UBICACIÓN</h4>
            <p>
              Estancia La Quinta<br />
              Av. del Rosario 539<br />
              General Lagos, Santa Fe
            </p>
          </div>
          <div className="footer-info-block">
            <h4>SEGUINOS</h4>
            <a
              href="https://www.instagram.com/laquintadelcholo?igsh=M3ZtNW0zOTIyMmxt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-branding" onClick={scrollToTop}>
        <img src={FooterLogo} alt="La Quinta del Cholo" className="footer-logo-img" />
      </div>
    </footer>
  )
}

export default Footer
