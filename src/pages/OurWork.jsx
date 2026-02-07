import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const OurWork = () => {
  useSEO({
    title: 'Our Work',
    description: 'See how Tinted Technologies helps teams and individuals build with confidence through cloud consulting, AI integration, and tech education.',
    path: '/our-work'
  });

  return (
    <div className={styles.appContainer}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Tech That <span style={{ color: '#00B140' }}>Teaches</span>. Tools That <span style={{ color: '#4CD964' }}>Include</span>.
          </h1>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            color: '#888888',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Everything we build is meant to teach, support, or empower.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '2rem 1.5rem 4rem',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)'
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
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
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
            <p style={{ color: '#bbbbbb', fontSize: '1.05rem', margin: 0 }}>API resources and developer tools</p>
          </a>

          <a 
            href="https://github.com/tintedtechnologies" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
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
            <p style={{ color: '#bbbbbb', fontSize: '1.05rem', margin: 0 }}>Code repositories and collaboration</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
        background: '#000000'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Ready to Collaborate?
          </h2>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            color: '#888888',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Let&apos;s talk about how we can help you, your team, or your community build with confidence — whether you&apos;re learning, shipping, or scaling.
          </p>
          <Link to="/contact" style={{
            padding: '18px 48px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
            color: '#ffffff',
            fontSize: '1.15rem',
            fontWeight: '700',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 20px rgba(0, 177, 64, 0.3)'
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
