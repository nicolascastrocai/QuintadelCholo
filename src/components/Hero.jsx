import React from 'react'
import './Hero.css'
import LogoHero from '../../assets/Gemini_Generated_Image_up0ukqup0ukqup0u (1).png'
import SocaloTexture from '../../assets/Socalo 1.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/POoDPe66008?autoplay=1&mute=1&loop=1&playlist=POoDPe66008&controls=0&modestbranding=1&playsinline=1&rel=0"
          title="Video de La Quinta del Cholo"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-cta-bar" style={{ backgroundImage: `url(${SocaloTexture})` }}>
        <div className="hero-cta-icon hero-cta-icon--left">
        </div>
        <div className="hero-cta-content">
          <h2 className="hero-cta-title">
            El alma del campo,
            <br />
            <span className="hero-cta-title-secondary">hecha hogar</span>
          </h2>
          <p className="hero-cta-description">
            Un espacio donde la historia se encuentra<br />
            con la naturaleza, y cada rincón invita al<br />
            descanso y la celebración.
          </p>
        </div>
        <div className="hero-cta-icon hero-cta-icon--right">
          
        </div>
      </div>
    </section>
  )
}

export default Hero
