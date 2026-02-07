import { useState } from 'react';
import Navigation from '../components/Navigation';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Tinted Technologies. Schedule a consultation for cloud consulting, AI advisory, tech training, or workshops.',
    path: '/contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Tinted Technologies: ${formData.name} would like to get in touch`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoLink = `mailto:jay@tintedtechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.appContainer}>
      <Navigation />
      
      {/* Single Page Contact Content */}
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
          gap: '2rem',
          maxWidth: '600px'
        }}>
          {/* Contact Us Title */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '800', 
            margin: 0,
            color: '#ffffff',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Contact <span style={{ color: '#00B140' }}>Us</span>
          </h1>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{ 
                color: 'var(--text)', 
                fontWeight: '600',
                fontSize: '1.05rem'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                  fontSize: '1.05rem'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{ 
                color: 'var(--text)', 
                fontWeight: '600',
                fontSize: '1.05rem'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                  fontSize: '1.05rem'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{ 
                color: 'var(--text)', 
                fontWeight: '600',
                fontSize: '1.05rem'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help..."
                rows="5"
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text)',
                  fontSize: '1.05rem',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '16px 36px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                color: '#fff',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '1rem',
                boxShadow: '0 4px 20px rgba(0, 177, 64, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 30px rgba(0, 177, 64, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 177, 64, 0.3)';
              }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
