import Navigation from '../components/Navigation';
import styles from '../App.module.css';

const About = () => {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page About Content */}
      <section style={{
        height: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
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
            fontSize: '3rem', 
            fontWeight: 'bold', 
            margin: 0,
            color: 'var(--foreground)'
          }}>
            Our <span style={{ color: '#FFD700' }}>Story</span>
          </h1>
          
          {/* Our Story Statement */}
          <p style={{ 
            fontSize: '1.5rem', 
            margin: 0,
            color: 'var(--muted)',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '800px'
          }}>
            Building technology that's <span style={{ color: '#9B59B6' }}>inclusive</span> and <span style={{ color: '#FFD700' }}>accessible</span>, empowering everyone to learn, create, and shape the future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
