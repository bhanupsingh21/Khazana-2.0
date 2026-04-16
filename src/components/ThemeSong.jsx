import React from 'react';

const ThemeSong = ({ onOpenModal }) => {
  return (
    <section id="theme-song" style={{ padding: '100px 0' }}>
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div className="section-header reveal">
          <div className="section-eyebrow">Official Anthem</div>
          <h2 className="section-title">Khazana Theme Song <em>2026</em></h2>
          <p className="section-desc">Penned by Ajay Sahaab</p>
        </div>
        
        <div className="video-frame-container reveal reveal-delay-1" onClick={onOpenModal}>
          <div className="video-frame-overlay">
            <div className="video-hover-glow"></div>
            <button className="video-play-btn">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSong;
