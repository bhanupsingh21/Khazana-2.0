import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>
      <div className="section-eyebrow reveal" style={{ marginBottom: '16px' }}>404 Error</div>
      <h1 className="section-title reveal" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '24px' }}>
        <em>Lost</em> in the Music?
      </h1>
      <p className="section-desc reveal" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
        It seems you've wandered off the festival grounds. The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary reveal">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
