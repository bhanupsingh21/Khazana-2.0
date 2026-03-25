import React from 'react';

const Founders = () => {
  return (
    <section id="founders">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow">The Visionaries</div>
          <h2 className="section-title">Founded with <em>Purpose</em></h2>
          <p className="section-desc">Two luminaries united by their devotion to music and humanity — giving ghazals a stage that changes lives.</p>
        </div>
        <div className="founders-grid">
          <div className="founder-card reveal">
            <div className="founder-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/pankaj-udhas.png" alt="Pankaj Udhas" onError={(e) => {e.target.style.display='none'}} />
            </div>
            <div className="founder-body">
              <div className="founder-number">01</div>
              <div className="founder-name">Pankaj Udhas</div>
              <div className="founder-role">Padma Bhushan &nbsp;·&nbsp; Past President</div>
              <div className="founder-org">Parents Association Thalassemic Unit Trust (PATUT)</div>
              <p className="founder-desc">PATUT, headed by Padma Bhushan Pankaj Udhas for over 25 years, provides end-to-end solutions on Thalassaemia — including awareness, detection, prevention, and bone marrow transplant funding. PATUT has successfully fully funded 30 bone marrow transplants and partly funded more than 260 in the last 5 years.</p>
            </div>
          </div>
          <div className="founder-card reveal reveal-delay-2">
            <div className="founder-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/sapru.png" alt="Y.K. Sapru" onError={(e) => {e.target.style.display='none'}} />
            </div>
            <div className="founder-body">
              <div className="founder-number">02</div>
              <div className="founder-name">Y. K. Sapru</div>
              <div className="founder-role">Founder Chairman</div>
              <div className="founder-org">Cancer Patients Aid Association (CPAA)</div>
              <p className="founder-desc">CPAA is a 54-year-old non-profit addressing cancer through 'Total Management of Cancer' — encompassing awareness, early detection, treatment support, counselling, rehabilitation, and advocacy. Mr. Sapru's vision has transformed a gem of an idea into India's most respected cancer support organization.</p>
            </div>
          </div>
        </div>
        <div className="ornament-divider">
          <div className="ornament-diamond"></div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
