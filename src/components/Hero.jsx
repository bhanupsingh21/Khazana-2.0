import React from 'react';

/* ─── Figma Asset URLs ─── */
import imgKhazanaBackground from '../assets/hero_banner.png';
import imgBannerLogo        from '../assets/banner_logo.png';
import imgCenterElement     from '../assets/center_element.png';
import imgPowered           from '../assets/powered.png';

const Hero = () => {
  return (
    <section id="hero" className="hero-figma-banner">

      {/* ─── Full-bleed background image ─── */}
      <img
        className="hero-figma-bg-img"
        src={imgKhazanaBackground}
        alt=""
        aria-hidden="true"
      />

      {/* ─── Stacked content: logo → center → powered ─── */}
      <div className="hero-figma-content">
        <div className="hero-figma-logo-wrap">
          <img src={imgBannerLogo} alt="Khazana" className="hero-figma-logo" />
        </div>
        <div className="hero-figma-center">
          <img src={imgCenterElement} alt="" aria-hidden="true" className="hero-figma-center-element" />
        </div>
        <div className="hero-figma-bottom-bar">
          <img src={imgPowered} alt="Powered by Hungama" className="hero-figma-powered-img" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
