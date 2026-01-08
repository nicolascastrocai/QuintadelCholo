import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/p76aJwOV2mw?autoplay=1&mute=1&loop=1&playlist=p76aJwOV2mw&controls=0&modestbranding=1&playsinline=1&rel=0"
          title="Video de La Quinta del Cholo"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-cta-bar">
        <div className="hero-cta-copy hero-cta-copy--wide">
          <p className="hero-cta-title">El alma del campo, hecha hogar</p>
          <p className="hero-cta-description hero-cta-description--large">
            Un espacio donde la historia se encuentra con la naturaleza, y cada rincón invita al descanso y la celebración.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
