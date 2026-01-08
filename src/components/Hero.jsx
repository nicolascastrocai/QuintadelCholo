import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          className="hero-video"
          src="/assets/Video QC.mp4"
          autoPlay
          loop
          muted
          playsInline
          draggable="false"
          aria-hidden="true"
        ></video>
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
