import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = ({ onToggleMobile }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [activeHash, setActiveHash] = useState('');
  const isLoggedIn = !!localStorage.getItem('khazanaUser');

  const handleLogout = () => {
    localStorage.removeItem('khazanaUser');
    window.location.href = '/';
  };

  useEffect(() => {
    setActiveHash(location.hash);
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isActive = (path, hash = '') => {
    if (hash) return activeHash === hash;
    if (path === '/') return location.pathname === '/' && !activeHash;
    return location.pathname === path;
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <img src={logoImg} alt="Khazana Logo" className="nav-main-logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link></li>
        {isHome ? (
          <>
            <li className="hide-on-scroll"><a href="#theme-song" className={isActive('/', '#theme-song') ? 'active-link' : ''}>Theme Song</a></li>
            <li className="hide-on-scroll"><a href="#about" className={isActive('/', '#about') ? 'active-link' : ''}>About</a></li>
            <li className="hide-on-scroll"><a href="#jury" className={isActive('/', '#jury') ? 'active-link' : ''}>Jury</a></li>
          </>
        ) : (
          <>
            <li className="hide-on-scroll"><Link to="/#theme-song" className={isActive('/', '#theme-song') ? 'active-link' : ''}>Theme Song</Link></li>
            <li className="hide-on-scroll"><Link to="/#about" className={isActive('/', '#about') ? 'active-link' : ''}>About</Link></li>
            <li className="hide-on-scroll"><Link to="/#jury" className={isActive('/', '#jury') ? 'active-link' : ''}>Jury</Link></li>
          </>
        )}
        <li><Link to="/previous-editions" className={isActive('/previous-editions') ? 'active-link' : ''}>Previous Editions</Link></li>
        <li><Link to="/entries" className={isActive('/entries') ? 'active-link' : ''}>Entries</Link></li>
        {isHome ? (
          <li className="hide-on-scroll"><a href="#partners" className={isActive('/', '#partners') ? 'active-link' : ''}>Partners</a></li>
        ) : (
          <li className="hide-on-scroll"><Link to="/#partners" className={isActive('/', '#partners') ? 'active-link' : ''}>Partners</Link></li>
        )}
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard" className={isActive('/dashboard') ? 'active-link' : ''}>Dashboard</Link></li>
            <li><button onClick={handleLogout} className="nav-cta" style={{ background: 'transparent', border: '1px solid var(--gold)', cursor: 'pointer', fontFamily: 'inherit' }}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" className={`nav-cta ${isActive('/login') ? 'active-link' : ''}`}>Register / Login</Link></li>
        )}
      </ul>
      <div className="nav-hamburger" id="hamburger" onClick={onToggleMobile}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
