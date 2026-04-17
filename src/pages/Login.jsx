import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState('register'); // 'register' | 'otp'
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError('Please enter your name.'); return; }
    if (!phone.trim() || phone.length < 10) { setError('Please enter a valid mobile number.'); return; }
    if (!agreed) { setError('Please accept the Terms and Conditions.'); return; }
    setStep('otp');
  };

  const handleOtp = (e) => {
    e.preventDefault();
    setError('');
    if (!otp.trim() || otp.length < 4) { setError('Please enter a valid OTP.'); return; }
    // In production, this would verify OTP via API
    localStorage.setItem('khazanaUser', JSON.stringify({ name, phone }));
    navigate('/dashboard');
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero" style={{ minHeight: '40vh' }}>
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-eyebrow">Welcome</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Register / <em>Login</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="section-inner login-layout">
          
          <div className="login-text-side reveal">
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '3.5rem', color: 'var(--gold)', marginBottom: '24px', lineHeight: '1.1' }}>
              <em>Join the</em><br /> Khazana Legacy
            </h2>
            <p style={{ color: 'rgba(240,232,216,0.7)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px', maxWidth: '400px' }}>
              Register with your mobile number to participate in the Khazana 2026 Ghazal Talent Hunt. 
              Be a part of a movement that celebrates the timeless art of Ghazal and supports a noble cause.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--cream)', fontSize: '0.95rem' }}>
              <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '16px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>✦</span>
                Perform at the 9th Edition of Khazana
              </li>
              <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '16px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>✦</span>
                Get recognized by Ghazal legends
              </li>
              <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '16px' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>✦</span>
                Support the Khazana charity initiative
              </li>
            </ul>
          </div>

          <div className="login-form-side">
            {step === 'register' ? (
              <div className="auth-card reveal" style={{ transitionDelay: '0.15s' }}>
                <h2 className="auth-title">Register / Login</h2>
                <form onSubmit={handleRegister} className="auth-form">
                  <div className="auth-field">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="Enter your full name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                  <div className="auth-field">
                    <label htmlFor="phone">Mobile Number</label>
                    <input 
                      id="phone"
                      type="tel" 
                      placeholder="Enter your mobile number" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                    />
                  </div>
                  <div className="auth-checkbox">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      checked={agreed} 
                      onChange={(e) => setAgreed(e.target.checked)} 
                    />
                    <label htmlFor="terms">
                      By clicking on Register/Login, I agree to the{' '}
                      <Link to="/terms">Terms and Conditions</Link>
                    </label>
                  </div>
                  {error && <div className="auth-error">{error}</div>}
                  <button type="submit" className="btn-primary auth-submit">
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="auth-card reveal" style={{ transitionDelay: '0.15s' }}>
                <h2 className="auth-title">Verify OTP</h2>
                <p className="auth-subtitle">
                  We&apos;ve sent a verification code to <strong>{phone}</strong>
                </p>
                <form onSubmit={handleOtp} className="auth-form">
                  <div className="auth-field">
                    <label htmlFor="otp">Enter OTP</label>
                    <input 
                      id="otp"
                      type="text" 
                      placeholder="Enter OTP" 
                      value={otp} 
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                    />
                  </div>
                  <button type="button" className="auth-resend" onClick={() => alert('OTP resent!')}>
                    Resend OTP
                  </button>
                  {error && <div className="auth-error">{error}</div>}
                  <button type="submit" className="btn-primary auth-submit">
                    <span>Verify & Continue</span>
                  </button>
                </form>
                <button className="auth-back" onClick={() => { setStep('register'); setOtp(''); }}>
                  ← Back to Register
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Login;
