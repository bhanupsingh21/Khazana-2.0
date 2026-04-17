import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const editions = [
  { 
    year: 2025, 
    label: 'Khazana 2025', 
    status: '8th Edition',
    winners: [
      { name: "Hetvi Sethia", location: "Winner", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&auto=format&fit=crop" },
      { name: "Saleem Raja", location: "Winner", img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=400&auto=format&fit=crop" },
      { name: "Fareed Ahmed Khan", location: "Winner", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop" },
      { name: "Manaswi Pandey", location: "Kids Category", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=400&auto=format&fit=crop" },
      { name: "Uday Divakar Pandey", location: "Poet Category", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&auto=format&fit=crop" },
      { name: "Vipul Kumar Ruhela", location: "Special Mention", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop" },
      { name: "Minatullah Khan", location: "Special Mention", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" }
    ],
    performers: ["Anup Jalota", "Talat Aziz", "Rekha Bhardwaj", "Sudeep Banerji", "Osman Mir & Aamir Mir", "Pt. Ajay Pohankar & Abhijit Pohankar", "Mahalaxmi Iyer", "Pratibha Singh Baghel", "Kalpana Gandharv", "Himanshu Sharma", "Barnali Chattopadhyay", "Rakesh Chaurasia", "Ojas Adhiya", "Sanjoy Das", "Shikhar Naad Qureshi"]
  },
  { 
    year: 2024, 
    label: 'Khazana 2024', 
    status: '7th Edition',
    winners: [
      { name: "Atri Kotal", location: "Mumbai, Maharashtra", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&auto=format&fit=crop" },
      { name: "Amir Hussain", location: "Jodhpur, Rajasthan", img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=400&auto=format&fit=crop" },
      { name: "Shruti Raviprakash Bhande", location: "Akola, Maharashtra", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop" },
      { name: "Anshika Rajotaia", location: "Chhatarpur, MP", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=400&auto=format&fit=crop" }
    ],
    performers: ["Anup Jalota", "Atri Kotal", "Hariharan", "Javed Ali", "Kavita Seth", "Papon", "Rekha Bhardwaj", "Sadhana Jejurikar", "Shruti Raviprakash Bhande", "Sudeep Banerji", "Talat Aziz", "Vishal Bhardwaj", "Anshika Rajotia"]
  },
  { 
    year: 2023, 
    label: 'Khazana 2023', 
    status: '6th Edition',
    winners: [
      { name: "Dr. Sunil Rahi", location: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&auto=format&fit=crop" },
      { name: "Jyothi Sharma", location: "Hyderabad, Telangana", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop" }
    ],
    performers: ["Hargun Kaur", "Papon", "Jazim", "Himani Kapoor", "Pankaj Udhas", "Richa Sharma"]
  },
  { 
    year: 2022, 
    label: 'Khazana 2022', 
    status: '5th Edition',
    winners: [
      { name: "Surendra Kumar Rawal", location: "Kota, Rajasthan", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" },
      { name: "Aparajita Lahiri", location: "Ranchi, Jharkhand", img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&auto=format&fit=crop" }
    ],
    performers: ["Talat Aziz", "Himangi", "Sneha Astunkar", "Pooja Gaitonde", "Sudeep Banerji", "Priyanka Barve", "Pratibha Singh Baghel"]
  },
  { 
    year: 2021, 
    label: 'Khazana 2021', 
    status: '4th Edition',
    winners: [
      { name: "Prajakta Savarkar Shinde", location: "Jabalpur, MP", img: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=400&auto=format&fit=crop" },
      { name: "Bhavik Rathod", location: "Pune, Maharashtra", img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&auto=format&fit=crop" }
    ],
    performers: ["Talat Aziz", "Rekha Bhardwaj", "Anup Jalota", "Pankaj Udhas", "Sudeep Banerjee", "Osman Mir", "Jazim Sharma"]
  },
  { 
    year: 2020, 
    label: 'Khazana 2020', 
    status: '3rd Edition',
    winners: [
      { name: "Atul Rao", location: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&auto=format&fit=crop" },
      { name: "Ritwika Mukherjee", location: "Chakradharpur, Jharkhand", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop" }
    ],
    performers: ["Pt. Ajay Pohankar", "Talat Aziz", "Anup Jalota", "Pankaj Udhas", "Sudeep Banerji", "Mahalakshmi Iyer"]
  },
  { 
    year: 2019, 
    label: 'Khazana 2019', 
    status: '2nd Edition',
    winners: [
      { name: "Joydeepta Bandyopadhyay", location: "Kolkata, WB", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop" },
      { name: "Sohini Singha Mojumdar", location: "Kolkata, WB", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&auto=format&fit=crop" }
    ],
    performers: ["Anup Jalota", "Pankaj Udhas", "Rekha Bhardwaj", "Sudeep Banerji", "Javed Ali", "Harshdeep Kaur"]
  },
  { 
    year: 2018, 
    label: 'Khazana 2018', 
    status: '1st Edition',
    winners: [
      { name: "Aditya Langeh", location: "Jammu, J&K", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop" },
      { name: "Oshin Bhatia", location: "Delhi", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400&auto=format&fit=crop" }
    ],
    performers: ["Pankaj Udhas", "Talat Aziz", "Anup Jalota", "Rekha Bhardwaj", "Sudeep Banerji"]
  },
  { 
    year: 2017, 
    label: 'Khazana 2017', 
    status: 'Inaugural',
    winners: [],
    performers: ["Pankaj Udhas", "Talat Aziz", "Anup Jalota", "Hariharan", "Rekha Bhardwaj", "Hussain Brothers", "Kaushiki Chakraborty"]
  },
];

const PreviousEditions = () => {
  const [activeYear, setActiveYear] = useState(null);

  const toggleYear = (year) => {
    setActiveYear(prev => prev === year ? null : year);
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-content">
          <div className="section-eyebrow">Legacy</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Previous <em>Editions</em>
          </h1>
          <p className="section-desc">
            A journey through the years — celebrating the art of Ghazal since 2017.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="section-inner" style={{ maxWidth: '900px' }}>
          <div className="editions-timeline">
            {editions.map((ed, idx) => {
              const isActive = activeYear === ed.year;
              
              return (
                <div 
                  key={ed.year} 
                  className={`edition-card-container reveal`}
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div 
                    className={`edition-card ${isActive ? 'edition-card-active' : ''}`}
                    onClick={() => toggleYear(ed.year)}
                    style={{ gridTemplateColumns: '100px 1fr auto' }}
                  >
                    <div className="edition-year">{ed.year}</div>
                    <div className="edition-info">
                      <h3 className="edition-label">{ed.label}</h3>
                      <span className="edition-status">{ed.status}</span>
                    </div>
                    <div className="edition-arrow" style={{ transform: isActive ? 'rotate(90deg)' : 'none', transition: 'transform 0.4s ease' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {isActive && (
                    <div className="edition-details" style={{
                      backgroundColor: 'rgba(26,20,16,0.5)',
                      padding: '30px 40px',
                      borderBottom: '1px solid rgba(201,168,76,0.1)',
                      borderRight: '1px solid rgba(201,168,76,0.1)',
                      borderLeft: '1px solid rgba(201,168,76,0.1)',
                      borderBottomLeftRadius: '4px',
                      borderBottomRightRadius: '4px',
                      marginTop: '-2px',
                      animation: 'fadeIn 0.5s ease',
                    }}>
                      
                      {ed.winners && ed.winners.length > 0 && (
                        <div style={{ marginBottom: '32px' }}>
                          <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-title)', fontSize: '1.8rem', marginBottom: '20px' }}>
                            <em>Winners</em>
                          </h4>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                            {ed.winners.map((winner, i) => (
                              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--glass)', padding: '16px', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--gold-light)' }}>
                                  <img src={winner.img} alt={winner.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                </div>
                                <div>
                                  <div style={{ color: 'var(--cream)', fontWeight: '500', fontSize: '1.05rem', fontFamily: 'var(--font-title)' }}>{winner.name}</div>
                                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{winner.location}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {ed.performers && ed.performers.length > 0 && (
                        <div>
                          <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-title)', fontSize: '1.8rem', marginBottom: '16px' }}>
                            <em>Performances by</em>
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {ed.performers.map((performer, i) => (
                              <span key={i} style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', fontSize: '0.85rem', color: 'rgba(240,232,216,0.8)' }}>
                                {performer}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="editions-cta reveal" style={{ textAlign: 'center', marginTop: '80px' }}>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              The 9th Edition is here. Be part of the legacy.
            </p>
            <Link to={localStorage.getItem('khazanaUser') ? '/dashboard' : '/login'} className="btn-primary" style={{ display: 'inline-block' }}>
              <span>Submit Your Entry for 2026</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousEditions;
