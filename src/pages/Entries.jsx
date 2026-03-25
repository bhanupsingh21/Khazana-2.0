import React, { useState } from 'react';

const entriesData = [];

const categories = ['All', 'Adult', 'Poetry', 'Kids'];

const Entries = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? entriesData
    : entriesData.filter(e => e.category === activeCategory);

  return (
    <div className="page-wrapper">
      <section className="page-hero" style={{ minHeight: '45vh' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-eyebrow">Talent Hunt</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            <em>Entries</em>
          </h1>
          <p className="section-desc">
            Watch performances from talented artists across India.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="section-inner">
          {/* Category Filter Tabs */}
          <div className="entries-filter reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`entries-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="filter-count">
                    {entriesData.filter(e => e.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Video Entries Grid */}
          <div className="entries-grid">
            {filtered.map((entry, idx) => (
              <div
                key={entry.id}
                className="entry-video-card reveal"
                style={{ transitionDelay: `${(idx % 6) * 0.06}s` }}
              >
                <div className="entry-thumb-wrap">
                  <img
                    src={entry.thumbnail}
                    alt={entry.title}
                    className="entry-thumb"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 340%22%3E%3Crect fill=%22%231A1410%22 width=%22600%22 height=%22340%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23C9A84C%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-size=%2256%22%3E🎤%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="entry-play-overlay">
                    <div className="entry-play-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="entry-category-badge">{entry.category}</span>
                </div>
                <div className="entry-card-info">
                  <h4 className="entry-card-title">{entry.title}</h4>
                  <p className="entry-card-name">{entry.name}</p>
                  <p className="entry-card-meta">
                    {entry.age} yrs &nbsp;|&nbsp; {entry.city}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="entries-empty reveal" style={{ textAlign: 'center', padding: '120px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px dashed rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', opacity: 0.5 }}>🎵</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '12px' }}>Check back soon!</h3>
              <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto' }}>Approved participant entries for the 9th Edition 2026 will be displayed here once the Talent Hunt begins.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Entries;
