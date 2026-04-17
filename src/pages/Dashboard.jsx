import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('');
  
  // New States
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load User
    const userStr = localStorage.getItem('khazanaUser');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserName(user.name || '');
      } catch (e) {}
    }

    // Load Entries
    const savedEntries = localStorage.getItem('khazanaEntries');
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
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
      // Build Entry Object
      const newEntry = {
        id: Date.now(),
        title,
        category,
        description,
        media: file ? file.name : youtubeLink,
        status: 'Pending Verification',
        date: new Date().toLocaleDateString()
      };

      // Save to states and localStorage
      const updatedEntries = [newEntry, ...entries];
      setEntries(updatedEntries);
      localStorage.setItem('khazanaEntries', JSON.stringify(updatedEntries));

      // Reset form
      setStatus('');
      setTitle('');
      setCategory('');
      setDescription('');
      setFile(null);
      setYoutubeLink('');
      
      // Trigger Success Pop-up Modal
      setShowModal(true);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      
      {/* Success Pop-up Modal */}
      {showModal && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' 
        }}>
          <div className="auth-card" style={{ maxWidth: '440px', padding: '50px 40px', textAlign: 'center', border: '1px solid rgba(201, 168, 76, 0.5)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px', animation: 'scaleUp 0.4s ease' }}>🎉</div>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)' }}>Performance Submitted!</h3>
            <p style={{ color: 'rgba(240,232,216,0.8)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
              Your entry has been received and added to your dashboard. It is currently under review by our jury panel.
            </p>
            <button onClick={() => setShowModal(false)} className="btn-primary" style={{ padding: '14px 34px', margin: '0 auto' }}>
              <span>View My Entries</span>
            </button>
          </div>
        </div>
      )}

      <section className="page-hero" style={{ minHeight: '35vh' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-eyebrow">Participant Portal</div>
          <h1 className="section-title">Your <em>Dashboard</em></h1>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="section-inner" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Submission Form */}
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
                  <option value="Adult" style={{color: '#000'}}>Adult Category</option>
                  <option value="Kids" style={{color: '#000'}}>Kids Category</option>
                  <option value="Poetry" style={{color: '#000'}}>Poetry / Spoken Word</option>
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
                  color: status.includes('Uploading') ? '#2196f3' : '#f44336', 
                  marginBottom: '20px', fontSize: '0.95rem', textAlign: 'center',
                  background: status.includes('Uploading') ? 'rgba(33, 150, 243, 0.1)' : 'rgba(244, 67, 54, 0.1)',
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
          

          {/* Submitted Entries Section */}
          <div className="auth-card reveal" style={{ width: '100%', margin: '0 auto' }}>
            <h2 className="auth-title" style={{ marginBottom: '10px', fontSize: '1.8rem' }}>Your Submissions</h2>
            <p className="auth-subtitle" style={{ marginBottom: '30px' }}>
              Track the verification status of your uploaded ghazal performances below.
            </p>

            {entries.length === 0 ? (
              <div style={{ 
                textAlign: 'center', padding: '50px 20px', background: 'rgba(255,255,255,0.02)', 
                borderRadius: '12px', border: '1px dashed rgba(201,168,76,0.2)' 
              }}>
                <span style={{ display: 'block', fontSize: '3rem', opacity: 0.3, marginBottom: '15px' }}>🎤</span>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>You haven't submitted any performances yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {entries.map(entry => (
                  <div key={entry.id} style={{ 
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px',
                    transition: 'border-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        <h4 style={{ color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '6px', fontFamily: 'var(--font-title)' }}>{entry.title}</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: 'var(--gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{entry.category} Category</span>
                        </div>
                      </div>
                      
                      {/* Verification Status Badge */}
                      <div style={{ 
                        background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.3)', 
                        color: 'var(--gold-light)', padding: '8px 14px', borderRadius: '30px', 
                        fontSize: '0.85rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' 
                      }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--gold)', borderRadius: '50%', boxShadow: '0 0 8px var(--gold)' }}></span>
                        {entry.status}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div style={{ 
                      display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--muted)', 
                      marginTop: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' 
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ opacity: 0.7 }}>🎞 Media:</span> 
                        <span style={{ color: 'rgba(240,232,216,0.8)' }}>
                          {entry.media && entry.media.length > 40 ? entry.media.substring(0, 40) + '...' : entry.media}
                        </span>
                      </span>
                      <span>{entry.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
