import React, { useEffect, useRef } from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) videoRef.current.play();
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} id="modal" onClick={(e) => {
      if (e.target.id === 'modal') onClose();
    }}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕ &nbsp; Close</button>
        <video id="modalVideo" ref={videoRef} controls preload="auto" playsInline>
          <source src="https://legacy.hungamaartistaloud.com/khazana2025/images/Khazana-Theme-Song-2025.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
