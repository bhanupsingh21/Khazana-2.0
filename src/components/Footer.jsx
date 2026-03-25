import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Khazana 2026</div>
          <div className="footer-tagline">A Festival of Ghazals · Est. 2002</div>
        </div>
        <div className="footer-center">
          <div className="footer-ornament">❧</div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#jury">Jury</a></li>
            <li><Link to="/entries">Entries</Link></li>
            <li><Link to="/previous-editions">Archive</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">Powered by ArtistAloud &amp; Hungama<br />
          © 2025–2026 Hungama Digital Media Ent. Pvt. Ltd.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Crafted with devotion for the art of Ghazal</p>
      </div>
    </footer>
  );
};

export default Footer;
