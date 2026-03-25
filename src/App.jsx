import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Cursor from './components/Cursor';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';
import Home from './pages/Home';
import PreviousEditions from './pages/PreviousEditions';
import Entries from './pages/Entries';
import Login from './pages/Login';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import ScrollUpButton from './components/ScrollUpButton';
import './index.css';

/* Scroll to top on route change + handle hash anchors */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <RevealObserver />
      <Cursor />
      <Navbar onToggleMobile={() => setMobileOpen(!mobileOpen)} />
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Routes>
        <Route path="/" element={<Home onOpenModal={() => setModalOpen(true)} />} />
        <Route path="/previous-editions" element={<PreviousEditions />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ScrollUpButton />
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Router>
  );
}

export default App;
