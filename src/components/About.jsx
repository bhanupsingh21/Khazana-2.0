import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
      <div className="section-inner" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="section-header reveal">
          <div className="section-eyebrow">Our Story</div>
          <h2 className="section-title">Where <em>Ghazal</em> Meets Compassion</h2>
        </div>
        <div className="about-grid">
          <div className="about-visual reveal">
            <img className="about-img-main" src="https://legacy.hungamaartistaloud.com/khazana2025/images/Khazana1.gif" alt="Khazana Festival" onError={(e) => { e.target.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect fill=%22%2315101A%22 width=%22400%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23C9A84C%22 text-anchor=%22middle%22 font-size=%2248%22%3E🎵%3C/text%3E%3C/svg%3E' }} />
            <div className="about-stat-bubble">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Participants across 8 editions</div>
            </div>
          </div>
          <div className="about-content reveal reveal-delay-2">
            <blockquote className="about-quote">"Khazana is on a quest to find the next ghazal stars for its 9th edition this year."</blockquote>
            <p className="about-text">Khazana is an initiative started in 2002 by Padma Bhushan Pankaj Udhas, Talat Aziz and Anup Jalota in partnership with CPAA and PATUT — a Festival of Ghazals that supports and funds cancer and Thalassemic patients across India.</p>
            <p className="about-text">CPAA works alongside the medical fraternity, focusing on education, awareness, early detection, support to treatment, guidance, counselling, and rehabilitation. PATUT is the national non-profit organization dedicated to serving patients afflicted with Thalassemia.</p>
            <div className="about-stats-row">
              <div className="mini-stat">
                <div className="mini-stat-num">200+</div>
                <div className="mini-stat-label">Cities Reached</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-num">8</div>
                <div className="mini-stat-label">Editions</div>
              </div>
              <div className="mini-stat">
                <div className="mini-stat-num">2002</div>
                <div className="mini-stat-label">Est.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-hunt reveal" style={{ marginTop: '100px' }}>
          <div>
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>The Talent Hunt</div>
            <h3 className="hunt-title">Find Your Stage. <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Sing with Legends.</em></h3>
            <p className="hunt-text">KHAZANA ARTIST ALOUD TALENT HUNT is a unique, Pan-India talent hunt that seeks to amalgamate the magic of Ghazals. Winners get an exclusive chance to perform with legends like Talat Aziz, Anup Jalota, Rekha Bhardwaj, Sudeep Banerjee and many more.</p>
            <br />
            <Link to={localStorage.getItem('khazanaUser') ? '/dashboard' : '/login'} className="btn-primary" style={{ display: 'inline-flex', marginTop: '16px' }}>
              <span>Enter the Talent Hunt</span>
            </Link>
          </div>
          <div className="hunt-infographic">
            <div className="hunt-step">
              <div className="hunt-step-icon">🎤</div>
              <div className="hunt-step-title">Record</div>
              <div className="hunt-step-text">Submit your ghazal performance</div>
            </div>
            <div className="hunt-step">
              <div className="hunt-step-icon">⭐</div>
              <div className="hunt-step-title">Shortlist</div>
              <div className="hunt-step-text">Jury evaluates top entries</div>
            </div>
            <div className="hunt-step">
              <div className="hunt-step-icon">🎭</div>
              <div className="hunt-step-title">Perform</div>
              <div className="hunt-step-text">Take the Khazana stage live</div>
            </div>
            <div className="hunt-step">
              <div className="hunt-step-icon">🏆</div>
              <div className="hunt-step-title">Win</div>
              <div className="hunt-step-text">Sing alongside ghazal legends</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
