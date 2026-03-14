import Navigation from '../components/Navigation';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const Mission = () => {
  useSEO({
    title: 'Our Mission',
    description: 'Our mission is to make technology human-centered, relevant, and empowering. Expert Cloud & AI training that helps individuals build skills with confidence.',
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
        minHeight: 'calc(100dvh - 80px)',
        textAlign: 'center',
        padding: '6rem var(--space-section-x) 2rem'
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
            fontSize: 'var(--font-title)', 
            fontWeight: '800', 
            margin: 0,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em'
          }}>
            Our <span style={{ color: 'var(--color-accent)' }}>Mission</span>
          </h1>
          
          {/* Mission Statement */}
          <p style={{ 
            fontSize: 'var(--font-subtitle)', 
            margin: 0,
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--line-height-relaxed)',
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