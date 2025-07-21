import { Link } from 'react-router-dom';

const OurWork = () => {
  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>Tech That <span className="text-gold">Teaches</span>. Tools That <span className="text-blue">Include</span>.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Everything we build is meant to teach, support, or empower.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>

            <a 
              href="https://blackendpoints.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.2)';
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
                  src="https://placehold.co/300x200/1a1a1a/FFD700?text=BlackEndpoints" 
                  alt="BlackEndpoints" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <p>API resources and developer tools</p>
            </a>

            <a 
              href="https://github.com/tintedtechnologies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(64, 169, 243, 0.2)';
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
                  src="https://placehold.co/300x200/1a1a1a/40A9F3?text=GitHub" 
                  alt="GitHub" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <p>Code repositories and collaboration</p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Collaborate?</h2>
          <p className="mb-3">
            Let's talk about how we can help you, your team, or your community build with confidence — whether you're learning, shipping, or scaling.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn-primary">Get in Touch</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
