import React, { useState } from 'react';

const Jury = () => {
  const [activeTab, setActiveTab] = useState('singing');

  return (
    <section id="jury" style={{ padding: '120px 0' }}>
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow">Luminaries</div>
          <h2 className="section-title">The <em>Jury</em></h2>
          <p className="section-desc">India's most celebrated voices in ghazal and Urdu poetry come together to discover the next generation of talent.</p>
        </div>
        <div className="jury-tabs">
          <button className={`jury-tab ${activeTab === 'singing' ? 'active' : ''}`} onClick={() => setActiveTab('singing')}>Singing Jury</button>
          <button className={`jury-tab ${activeTab === 'poetry' ? 'active' : ''}`} onClick={() => setActiveTab('poetry')}>Poetry Jury</button>
        </div>

        {/* SINGING JURY */}
        <div id="singingPanel" className={`jury-grid ${activeTab === 'singing' ? '' : 'panel-hidden'}`}>
          <div className="jury-card reveal">
            <div className="jury-card-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/anup-jalota.png" alt="Anup Jalota" onError={(e) => {e.target.parentNode.innerHTML='<div class="jury-placeholder">🎵</div>'}} />
              <div className="jury-card-overlay">
                <div className="jury-card-name">Anup Jalota</div>
                <div className="jury-card-title">Padmashri &nbsp;·&nbsp; Bhajan Samrat</div>
                <p className="jury-card-bio">Son of Padmashri Pt. Purshottam Das Jalota, Anup Jalota has earned 100+ Gold & Platinum discs, performed 5000+ live concerts, and released 200+ albums over 30 illustrious years.</p>
              </div>
            </div>
          </div>
          <div className="jury-card reveal reveal-delay-1">
            <div className="jury-card-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/penaz-masani.png" alt="Penaz Masani" onError={(e) => {e.target.parentNode.innerHTML='<div class="jury-placeholder">🎵</div>'}} />
              <div className="jury-card-overlay">
                <div className="jury-card-name">Penaz Masani</div>
                <div className="jury-card-title">Shehzadi-e-Tarannum</div>
                <p className="jury-card-bio">Winner of the prestigious 'Shehzadi-e-Tarannum' title, Penaz has sung in 50+ Hindi films and over 10 languages, performing across Germany, South Africa, Nigeria, and Vietnam.</p>
              </div>
            </div>
          </div>
          <div className="jury-card reveal reveal-delay-2">
            <div className="jury-card-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/rekha.png" alt="Rekha Bhardwaj" onError={(e) => {e.target.parentNode.innerHTML='<div class="jury-placeholder">🎵</div>'}} />
              <div className="jury-card-overlay">
                <div className="jury-card-name">Rekha Bhardwaj</div>
                <div className="jury-card-title">National Award Winner</div>
                <p className="jury-card-bio">National Award winner for 'Badi Dheere Jali'. With 50+ superhit Bollywood songs and 500+ global concerts, Rekha's voice carries a rare, unforgettable distinction.</p>
              </div>
            </div>
          </div>
          <div className="jury-card reveal reveal-delay-3">
            <div className="jury-card-img-wrap">
              <img src="https://legacy.hungamaartistaloud.com/khazana2025/images/sudeep.png" alt="Sudeep Banerji" onError={(e) => {e.target.parentNode.innerHTML='<div class="jury-placeholder">🎵</div>'}} />
              <div className="jury-card-overlay">
                <div className="jury-card-name">Sudeep Banerji</div>
                <div className="jury-card-title">Vocalist &amp; Composer</div>
                <p className="jury-card-bio">Trained under Begum Akhtar's disciple Smt Shanti Hiranandji, Sudeep is a rare voice in Light Classical Music — Dadra, Thumri, and Ghazals — and Bollywood composer of acclaim.</p>
              </div>
            </div>
          </div>
        </div>

        {/* POETRY JURY */}
        <div id="poetryPanel" className={`poetry-jury-grid ${activeTab === 'poetry' ? 'active' : 'panel-hidden'}`}>
          <div className="poetry-card reveal">
            <img className="poetry-card-img" src="https://legacy.hungamaartistaloud.com/khazana2025/images/aalok-Srivastava.png" alt="Aalok Shrivastav" onError={(e) => {e.target.outerHTML='<div class="poetry-card-placeholder">✍️</div>'}} />
            <div>
              <div className="poetry-card-name">Aalok Shrivastav</div>
              <div className="poetry-card-role">Poet &amp; Lyricist</div>
              <p className="poetry-card-text">Renowned Indian poet and lyricist whose ghazals have been brought to life by Jagjit Singh, A.R. Rahman, and Amitabh Bachchan. Author of acclaimed works <em>Aameen</em> and <em>Afreen</em>, and recipient of the International Pushkin Award and Dushyant Kumar Award.</p>
            </div>
          </div>
          <div className="poetry-card reveal reveal-delay-2">
            <img className="poetry-card-img" src="https://legacy.hungamaartistaloud.com/khazana2025/images/ajay-Sahaab.png" alt="Ajay Sahaab" onError={(e) => {e.target.outerHTML='<div class="poetry-card-placeholder">✍️</div>'}} />
            <div>
              <div className="poetry-card-name">Ajay Sahaab</div>
              <div className="poetry-card-role">Poet &amp; Lyricist</div>
              <p className="poetry-card-text">Celebrated modern Urdu poet whose soulful ghazals have been composed by legends like Jagjit Singh, Pankaj Udhas, Anup Jalota, and Rekha Bhardwaj. Author of the poetry collection <em>Ummeed</em> and penner of Khazana's own theme songs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jury;
