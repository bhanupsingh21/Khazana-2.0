import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const userStr = localStorage.getItem('khazanaUser');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserName(user.name || '');
      } catch (e) {}
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || (!file && !youtubeLink)) {
      setStatus('Please fill in all required fields and provide either a media file or a YouTube link.');
      return;
    }
    // Dummy upload simulation
    setStatus('Uploading...');
    setTimeout(() => {
      setStatus('Success! Your performance has been safely submitted for review.');
      setTitle('');
      setCategory('');
      setDescription('');
      setFile(null);
      setYoutubeLink('');
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero" style={{ minHeight: '35vh' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-eyebrow">Participant Portal</div>
          <h1 className="section-title">Your <em>Dashboard</em></h1>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="auth-card reveal" style={{ width: '100%', margin: '0 auto' }}>
            <h2 className="auth-title">Submit Your Performance</h2>
            <p className="auth-subtitle" style={{ marginBottom: '30px' }}>
              Upload your video/audio recording or provide a YouTube link for the Khazana 2026 Talent Hunt. Ensure the content is high quality.
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="participant-name">Participant Name</label>
                <input 
                  id="participant-name"
                  type="text" 
                  value={userName} 
                  disabled
                  style={{ opacity: 0.7, cursor: 'not-allowed' }}
                />
                <small style={{ color: 'var(--muted)', marginTop: '4px', display: 'block', fontSize: '0.8rem' }}>
                  Prefilled from your login credentials.
                </small>
              </div>

              <div className="auth-field">
                <label htmlFor="title">Performance Title *</label>
                <input 
                  id="title"
                  type="text" 
                  placeholder="e.g. Aaj Jaane Ki Zid Na Karo (Cover)" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                />
              </div>

              <div className="auth-field">
                <label htmlFor="category">Category *</label>
                <select 
                  id="category" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%', padding: '16px 20px', borderRadius: '12px',
                    background: 'rgba(201, 168, 76, 0.05)', border: '1px solid rgba(201, 168, 76, 0.2)',
                    color: 'var(--cream)', fontSize: '0.95rem', boxSizing: 'border-box',
                    appearance: 'none', cursor: 'pointer'
                  }}
                >
                  <option value="" disabled style={{color: '#000'}}>Select a Category...</option>
                  <option value="adult" style={{color: '#000'}}>Adult Category</option>
                  <option value="kids" style={{color: '#000'}}>Kids Category</option>
                  <option value="poet" style={{color: '#000'}}>Poetry / Spoken Word</option>
                </select>
              </div>

              <div className="auth-field">
                <label htmlFor="description">About the Performance</label>
                <textarea 
                  id="description"
                  placeholder="Tell us a little about your choice of Ghazal or your musical journey..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  style={{
                    width: '100%', padding: '16px 20px', borderRadius: '12px',
                    background: 'rgba(201, 168, 76, 0.05)', border: '1px solid rgba(201, 168, 76, 0.2)',
                    color: 'var(--cream)', fontSize: '0.95rem', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)', gap: '15px', alignItems: 'center', margin: '30px 0' }}>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(201, 168, 76, 0.2)' }} />
                <span style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Media Required</span>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(201, 168, 76, 0.2)' }} />
              </div>

              <div className="auth-field">
                <label htmlFor="youtube-link">YouTube Link (Alternative to direct upload)</label>
                <input 
                  id="youtube-link"
                  type="url" 
                  placeholder="https://www.youtube.com/watch?v=..." 
                  value={youtubeLink} 
                  onChange={(e) => setYoutubeLink(e.target.value)} 
                  disabled={file !== null}
                />
              </div>

              <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '15px' }}>— OR —</div>

              <div className="auth-field">
                <label htmlFor="file-upload">Direct Upload (Max 50MB)</label>
                <div style={{
                  border: '1px dashed rgba(201, 168, 76, 0.4)', borderRadius: '12px', padding: '30px',
                  textAlign: 'center', background: 'rgba(201, 168, 76, 0.02)', position: 'relative',
                  transition: 'background 0.3s ease',
                  opacity: youtubeLink ? 0.5 : 1,
                  cursor: youtubeLink ? 'not-allowed' : 'pointer'
                }}
                onMouseOver={(e) => { if (!youtubeLink) e.currentTarget.style.background = 'rgba(201, 168, 76, 0.06)' }}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(201, 168, 76, 0.02)'}>
                  <input 
                    type="file" 
                    id="file-upload" 
                    accept="audio/*,video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    disabled={youtubeLink !== ''}
                    style={{
                      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                      opacity: 0, cursor: youtubeLink ? 'not-allowed' : 'pointer'
                    }}
                  />
                  <div style={{ pointerEvents: 'none' }}>
                    <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>📁</span>
                    {file ? (
                      <span style={{ color: 'var(--gold-light)' }}>{file.name}</span>
                    ) : (
                      <span style={{ color: 'var(--muted)' }}>Drag & drop or tap to choose a file</span>
                    )}
                  </div>
                </div>
              </div>

              {status && (
                <div style={{ 
                  color: status.includes('Success') ? '#4caf50' : '#f44336', 
                  marginBottom: '20px', fontSize: '0.95rem', textAlign: 'center',
                  background: status.includes('Success') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                  padding: '12px', borderRadius: '8px'
                }}>
                  {status}
                </div>
              )}

              <button type="submit" className="btn-primary auth-submit" style={{ marginTop: '10px' }}>
                <span>Submit Performance</span>
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
