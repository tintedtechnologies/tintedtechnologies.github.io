import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
      borderTop: '1px solid rgba(0, 177, 64, 0.2)',
      padding: isMobile ? '2.5rem 1.25rem 1.25rem' : '4rem 2rem 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '2rem' : '3rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? '1rem' : '1.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.4rem' : '1.75rem',
            fontWeight: '700',
            color: '#ffffff',
            margin: 0
          }}>
            Tinted <span style={{ color: '#00B140' }}>Technologies</span>
          </h3>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: '#888888',
            margin: 0,
            maxWidth: '600px',
            lineHeight: '1.7',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>
            Modern cloud & AI consulting for inclusive, impactful solutions.
          </p>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: isMobile ? '1.5rem' : '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            color: '#666666',
            margin: 0
          }}>
            &copy; {new Date().getFullYear()} Tinted Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
