import Navigation from '../components/Navigation';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const About = () => {
  useSEO({
    title: 'About',
    description: 'Learn about Tinted Technologies and our founder. We help individuals build real cloud and AI skills through practitioner-led training.',
    path: '/about'
  });

  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page About Content */}
      <section style={{
        minHeight: 'calc(100dvh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem var(--space-section-x) 2rem'
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
            fontSize: 'var(--font-title)', 
            fontWeight: '800', 
            margin: 0,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em'
          }}>
            Our <span style={{ color: 'var(--color-accent)' }}>Story</span>
          </h1>
          
          {/* Our Story Statement */}
          <p style={{ 
            fontSize: 'var(--font-subtitle)', 
            margin: 0,
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--line-height-relaxed)',
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
