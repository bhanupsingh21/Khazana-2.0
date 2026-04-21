import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [agreed, setAgreed] = useState(false);
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
        setMobile(user.phone || '');
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
    if (!userName || !title || !age || !gender || !city || !email || !mobile || !category || !state || !country || (!file && !youtubeLink)) {
      setStatus('Please fill in all required fields and provide either a media file or a YouTube link.');
      return;
    }
    if (!agreed) {
      setStatus('Please accept the Terms & Conditions.');
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
      setProfileImage(null);
      setTitle('');
      setAge('');
      setGender('');
      setCity('');
      setEmail('');
      setCategory('');
      setState('');
      setCountry('');
      setFile(null);
      setYoutubeLink('');
      setAgreed(false);
      
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
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
                {/* Left Side: Profile Image */}
                <div style={{ flex: '1 1 200px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(201, 168, 76, 0.4)', position: 'relative' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', overflow: 'hidden' }}>
                    {profileImage ? (
                      <img src={URL.createObjectURL(profileImage)} alt="Profile Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    )}
                  </div>
                  <span style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--cream)' }}>Upload Profile Image</span>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <label style={{ background: 'rgba(201, 168, 76, 0.2)', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      UPLOAD
                      <input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} style={{ display: 'none' }} />
                    </label>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {profileImage ? profileImage.name : 'No file selected'}
                    </span>
                  </div>
                </div>

                {/* Right Side: Name and Song Name */}
                <div style={{ flex: '2 1 300px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                  <div className="auth-field">
                    <label>Name <span style={{color: '#f44336'}}>*</span></label>
                    <input type="text" placeholder="Enter Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                  </div>
                  <div className="auth-field">
                    <label>Song Name / Poem Title <span style={{color: '#f44336'}}>*</span></label>
                    <input type="text" placeholder="Enter Your Song Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                </div>
              </div>

              {/* 2-Column Grid Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="auth-field" style={{ flex: 1 }}>
                    <label>Age <span style={{color: '#f44336'}}>*</span></label>
                    <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                  </div>
                  <div className="auth-field" style={{ flex: 2 }}>
                    <label>Gender <span style={{color: '#f44336'}}>*</span></label>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(201, 168, 76, 0.2)', borderRadius: '100px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--cream)' }}>
                        <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} style={{ accentColor: 'var(--gold)', width: 'auto' }} /> Male
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--cream)' }}>
                        <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} style={{ accentColor: 'var(--gold)', width: 'auto' }} /> Female
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--cream)' }}>
                        <input type="radio" name="gender" value="Others" checked={gender === 'Others'} onChange={(e) => setGender(e.target.value)} style={{ accentColor: 'var(--gold)', width: 'auto' }} /> Others
                      </label>
                    </div>
                  </div>
                </div>

                <div className="auth-field">
                  <label>City <span style={{color: '#f44336'}}>*</span></label>
                  <input type="text" placeholder="Enter Your City Name" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="auth-field">
                  <label>Email Id <span style={{color: '#f44336'}}>*</span></label>
                  <input type="email" placeholder="Enter Your Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="auth-field">
                  <label>Mobile No. <span style={{color: '#f44336'}}>*</span></label>
                  <input type="tel" placeholder="Enter Your Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className="auth-field">
                  <label>Category <span style={{color: '#f44336'}}>*</span></label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(201, 168, 76, 0.2)', borderRadius: '100px', color: category ? 'var(--cream)' : 'rgba(255,255,255,0.5)', fontSize: '1rem', fontFamily: 'var(--font-body)', appearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled style={{color: '#000'}}>Select Category</option>
                    <option value="Adult" style={{color: '#000'}}>Adult Category</option>
                    <option value="Kids" style={{color: '#000'}}>Kids Category</option>
                    <option value="Poetry" style={{color: '#000'}}>Poetry / Spoken Word</option>
                  </select>
                </div>

                <div className="auth-field">
                  <label>State <span style={{color: '#f44336'}}>*</span></label>
                  <input type="text" placeholder="Enter Your State Name" value={state} onChange={(e) => setState(e.target.value)} />
                </div>

                <div className="auth-field">
                  <label>Country <span style={{color: '#f44336'}}>*</span></label>
                  <input type="text" placeholder="Enter Your Country Name" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>

                <div className="auth-field">
                  <label>Upload Video <span style={{color: '#f44336'}}>*</span></label>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(201, 168, 76, 0.2)', borderRadius: '100px' }}>
                    <span style={{ fontSize: '1rem', color: file ? 'var(--cream)' : 'rgba(255,255,255,0.4)', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '150px' }}>
                      {file ? file.name : 'Video File Name'}
                    </span>
                    <label style={{ background: 'rgba(201, 168, 76, 0.2)', padding: '4px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      UPLOAD
                      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} disabled={youtubeLink !== ''} style={{ display: 'none' }} />
                    </label>
                  </div>
                  <small style={{ display: 'block', marginTop: '6px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>File Size Not More Than 200 MB</small>
                </div>

                <div className="auth-field">
                  <label>Youtube Link <span style={{color: '#f44336'}}>*</span></label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontWeight: 'bold', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>OR</span>
                    <input type="url" placeholder="Paste The Link Here" value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} disabled={file !== null} />
                  </div>
                </div>

              </div>

              <div className="auth-checkbox" style={{ marginTop: '35px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" id="terms-agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ accentColor: 'var(--gold)' }} />
                <label htmlFor="terms-agree" style={{ color: 'var(--cream)' }}>I accept the Terms & Conditions</label>
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

              <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                <button type="submit" className="btn-primary auth-submit" style={{ margin: '0 auto', display: 'block', maxWidth: '200px' }}>
                  <span>SUBMIT</span>
                </button>
              </div>
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
