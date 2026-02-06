import Navigation from '../components/Navigation';
import styles from '../App.module.css';

const About = () => {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page About Content */}
      <section style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 2rem'
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Our Story Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '800', 
            margin: 0,
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Our <span style={{ color: '#00B140' }}>Story</span>
          </h1>
          
          {/* Our Story Statement */}
          <p style={{ 
            fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', 
            margin: 0,
            color: '#cccccc',
            lineHeight: '1.7',
            textAlign: 'center',
            maxWidth: '800px',
            fontWeight: '400'
          }}>
            Building technology that's <span style={{ color: '#9B59B6' }}>inclusive</span> and <span style={{ color: '#FFD700' }}>accessible</span>, empowering everyone to learn, create, and shape the future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
