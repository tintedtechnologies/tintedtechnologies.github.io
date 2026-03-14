import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const OurWork = () => {
  useSEO({
    title: 'Our Work',
    description: 'See how Tinted Technologies helps individuals build with confidence through cloud training, AI education, and hands-on projects.',
    path: '/our-work'
  });

  return (
    <div className={styles.appContainer}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100dvh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem var(--space-section-x) 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <h1 style={{
            fontSize: 'var(--font-title)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em'
          }}>
            Tech That <span style={{ color: 'var(--color-accent)' }}>Teaches</span>. Tools That <span style={{ color: 'var(--color-accent-light)' }}>Include</span>.
          </h1>
          <p style={{
            fontSize: 'var(--font-subtitle)',
            color: 'var(--color-text-muted)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Everything we build is meant to teach, support, or empower.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '2rem var(--space-section-x) var(--space-section-y)',
        background: 'linear-gradient(180deg, var(--color-panel) 0%, var(--color-bg) 100%)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <a 
            href="https://blackendpoints.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-card-translucent) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '2rem',
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 177, 64, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '200px', 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src="https://placehold.co/300x200/1a1a1a/00B140?text=BlackEndpoints" 
                alt="BlackEndpoints" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-body)', margin: 0 }}>API resources and developer tools</p>
          </a>

          <a 
            href="https://github.com/tintedtechnologies" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-card-translucent) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '2rem',
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 177, 64, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '200px', 
              backgroundColor: '#1a1a1a', 
              borderRadius: '8px', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src="https://placehold.co/300x200/1a1a1a/4CD964?text=GitHub" 
                alt="GitHub" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-body)', margin: 0 }}>Code repositories and collaboration</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'var(--space-section-y) var(--space-section-x)',
        textAlign: 'center',
        background: 'var(--color-bg)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'var(--font-heading)',
            fontWeight: '800',
            color: 'var(--color-text)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Ready to Collaborate?
          </h2>
          <p style={{
            fontSize: 'var(--font-subtitle)',
            color: 'var(--color-text-muted)',
            marginBottom: '2rem',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Let&apos;s talk about how we can help you build with confidence — whether you&apos;re learning, shipping, or scaling.
          </p>
          <Link to="/contact" style={{
            padding: '18px 48px',
            borderRadius: 'var(--radius-button)',
            border: 'none',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
            color: 'var(--color-text)',
            fontSize: '1.15rem',
            fontWeight: '700',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: 'var(--shadow-glow)'
          }}>
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
