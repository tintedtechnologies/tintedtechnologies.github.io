import Navigation from '../components/Navigation';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const Mission = () => {
  useSEO({
    title: 'Our Mission',
    description: 'Our mission is to make technology human-centered, relevant, and empowering. Expert Cloud & AI architecture that helps organizations innovate with confidence.',
    path: '/mission'
  });

  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page Mission Content */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 80px)',
        textAlign: 'center',
        padding: '6rem 1.5rem 2rem'
      }}>
        <div style={{ 
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Mission Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '800', 
            margin: 0,
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Our <span style={{ color: '#00B140' }}>Mission</span>
          </h1>
          
          {/* Mission Statement */}
          <p style={{ 
            fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', 
            margin: 0,
            color: '#cccccc',
            lineHeight: '1.7',
            textAlign: 'center',
            maxWidth: '800px',
            fontWeight: '400'
          }}>
            Making technology <span style={{ color: '#4A90E2' }}>simple</span>, <span style={{ color: '#FFD700' }}>accessible</span>, and{' '}
            <span style={{ color: '#9B59B6' }}>inclusive</span>, creating experiences that{' '}
            spark learning, fuel creativity, and strengthen connection in the digital age.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mission;