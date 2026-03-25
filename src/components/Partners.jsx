import React from 'react';

const Partners = () => {
  return (
    <section id="partners">
      <div className="section-inner" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="section-header reveal">
          <div className="section-eyebrow">In Partnership With</div>
          <h2 className="section-title">Our <em>Partners</em></h2>
        </div>
        <div className="partners-grid reveal">
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/hungama.png" alt="Hungama" />
          </div>
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/tridentnew.png" alt="Trident" />
          </div>
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/cpaa.png" alt="CPAA" />
          </div>
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/patt.png" alt="PATUT" />
          </div>
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/unionbank.png" alt="Union Bank" />
          </div>
          <div className="partner-item">
            <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/event.png" alt="Event Partner" />
          </div>
        </div>
        <div className="ornament-divider" style={{ marginTop: '64px' }}>
          <div className="ornament-diamond"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
