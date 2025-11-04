import Navigation from '../components/Navigation';
import styles from '../App.module.css';

const Mission = () => {
  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page Mission Content */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 80px)',
        minHeight: 'calc(100vh - 80px)',
        textAlign: 'center',
        padding: '2rem'
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
            fontSize: '3rem', 
            fontWeight: 'bold', 
            margin: 0,
            color: 'var(--foreground)'
          }}>
            Our <span style={{ color: '#FFD700' }}>Mission</span>
          </h1>
          
          {/* Mission Statement */}
          <p style={{ 
            fontSize: '1.5rem', 
            margin: 0,
            color: 'var(--muted)',
            lineHeight: '1.6',
            textAlign: 'center',
            maxWidth: '800px'
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