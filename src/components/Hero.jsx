import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import poweredByImg from '../poweredby.png';
import celebratingImg from '../Celebrating 25th years of Khazana a festival of Ghazals.png';
import logoImg from '../logo.png';
import heroBgVideo from '../Background_3.mp4';

const Hero = ({ onOpenModal }) => {
  const [particles] = useState(() => {
    const pts = [];
    for(let i=0; i<28; i++) {
      pts.push({
        id: i,
        left: Math.random() * 100,
        top: 20 + Math.random() * 80,
        dur: 6 + Math.random() * 8,
        delay: Math.random() * 8,
        op: 0.2 + Math.random() * 0.5
      });
    }
    return pts;
  });

  return (
    <section id="hero">
      {/* Background Video */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      <div className="hero-particles" id="particles">
        {particles.map(p => (
          <div 
            key={p.id} 
            className="particle" 
            style={{ 
              left: `${p.left}%`, 
              top: `${p.top}%`, 
              '--dur': `${p.dur}s`, 
              '--delay': `${p.delay}s`, 
              '--op': p.op 
            }} 
          />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-year-badge">9th Edition &nbsp;·&nbsp; 2026</div>
        <img src={logoImg} alt="Khazana Festival" className="hero-main-logo" />
        <p className="hero-subtitle">Pankaj Udhas &nbsp;&amp;&nbsp; Y.K. Sapru</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onOpenModal}>
            <span className="play-icon"></span>
            <span>Watch Theme Song</span>
          </button>
          <Link to="/login" className="btn-ghost">
            Submit Your Entry
          </Link>
        </div>
      </div>
      
      {/* Added User Logos */}
      <div className="hero-logos-container">
        <img src={poweredByImg} alt="Powered By" className="hero-powered-logo" />
        <img src={celebratingImg} alt="Celebrating 25th years of Khazana" className="hero-celebrating-logo" />
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
