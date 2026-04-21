import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState('');
  const isLoggedIn = !!localStorage.getItem('khazanaUser');

  const handleLogout = () => {
    localStorage.removeItem('khazanaUser');
    window.location.href = '/';
  };

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  const isActive = (path, hash = '') => {
    if (hash) return activeHash === hash;
    if (path === '/') return location.pathname === '/' && !activeHash;
    return location.pathname === path;
  };

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobileNav">
      <Link to="/" onClick={onClose} className={isActive('/') ? 'active-link' : ''}>Home</Link>
      <a href="/#theme-song" onClick={onClose} className={isActive('/', '#theme-song') ? 'active-link' : ''}>Theme Song</a>
      <a href="/#about" onClick={onClose} className={isActive('/', '#about') ? 'active-link' : ''}>About Us</a>
      <a href="/#jury" onClick={onClose} className={isActive('/', '#jury') ? 'active-link' : ''}>Jury Members</a>
      <Link to="/previous-editions" onClick={onClose} className={isActive('/previous-editions') ? 'active-link' : ''}>Previous Editions</Link>
      <Link to="/entries" onClick={onClose} className={isActive('/entries') ? 'active-link' : ''}>Entries</Link>
      <a href="/#partners" onClick={onClose} className={isActive('/', '#partners') ? 'active-link' : ''}>Partners</a>
      {isLoggedIn ? (
        <>
          <Link to="/dashboard" onClick={onClose} className={isActive('/dashboard') ? 'active-link' : ''}>Dashboard</Link>
          <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); onClose(); }}>Logout</a>
        </>
      ) : (
        <Link to="/login" onClick={onClose} className={isActive('/login') ? 'active-link' : ''}>Register / Login</Link>
      )}
    </div>
  );
};

export default MobileNav;
