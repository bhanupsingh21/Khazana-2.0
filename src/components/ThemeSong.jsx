import React from 'react';

const ThemeSong = ({ onOpenModal }) => {
  const waveStyles = [
    {'--d':'0.7s','--delay':'0s','--h':'8px'},
    {'--d':'0.9s','--delay':'0.15s','--h':'18px'},
    {'--d':'0.6s','--delay':'0.05s','--h':'12px'},
    {'--d':'1.1s','--delay':'0.2s','--h':'22px'},
    {'--d':'0.8s','--delay':'0.1s','--h':'14px'}
  ];

  return (
    <section id="theme-song">
      <div className="theme-song-strip">
        <div className="theme-song-label">
          <div className="music-wave">
            {waveStyles.map((style, i) => (
              <div key={i} className="wave-bar" style={style}></div>
            ))}
          </div>
          <div className="theme-song-info">
            <h3>Khazana Theme Song 2026</h3>
            <p>Official Anthem · Penned by Ajay Sahaab</p>
          </div>
        </div>
        <button className="btn-play-song" onClick={onOpenModal}>
          ▶ &nbsp; Play Now
        </button>
      </div>
    </section>
  );
};

export default ThemeSong;
