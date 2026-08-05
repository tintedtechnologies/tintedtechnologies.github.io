import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';
import { CONTACT_LIMITS, validateContactForm } from '../utils/contactValidation';

const Contact = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Tinted Technologies. Schedule a consultation for tech training, or workshops.',
    path: '/contact'
  });

  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in the ${service}.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n`
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (validation.error) {
      setValidationError(validation.error);
      return;
    }
    
    const subject = `Tinted Technologies: ${validation.values.name} would like to get in touch`;
    const body = `Name: ${validation.values.name}
Email: ${validation.values.email}

Message:
${validation.values.message}`;

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
          gap: '2rem',
          maxWidth: '600px'
        }}>
          {/* Contact Us Title */}
          <h1 style={{ 
            fontSize: 'var(--font-title)', 
            fontWeight: '800', 
            margin: 0,
            color: 'var(--color-text)',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            Contact <span style={{ color: 'var(--color-accent)' }}>Us</span>
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
                color: 'var(--color-text)', 
                fontWeight: '600',
                fontSize: 'var(--font-body)'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={CONTACT_LIMITS.name.min}
                maxLength={CONTACT_LIMITS.name.max}
                placeholder="Your name"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-input)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-card-translucent)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--font-body)'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{ 
                color: 'var(--color-text)', 
                fontWeight: '600',
                fontSize: 'var(--font-body)'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={CONTACT_LIMITS.email.max}
                placeholder="your.email@example.com"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-input)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-card-translucent)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--font-body)'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <label style={{ 
                color: 'var(--color-text)', 
                fontWeight: '600',
                fontSize: 'var(--font-body)'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={CONTACT_LIMITS.message.min}
                maxLength={CONTACT_LIMITS.message.max}
                placeholder="Tell us how we can help..."
                rows="5"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-input)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-card-translucent)',
                  color: 'var(--color-text)',
                  fontSize: 'var(--font-body)',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '16px 36px',
                borderRadius: 'var(--radius-button)',
                border: 'none',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent) 100%)',
                color: 'var(--color-text)',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '1rem',
                boxShadow: 'var(--shadow-glow)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 30px rgba(var(--color-accent-rgb), 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              Send Message →
            </button>
            <div
              role="status"
              aria-live="polite"
              style={{
                minHeight: '1.5rem',
                color: '#b42318',
                fontWeight: '600',
                textAlign: 'center'
              }}
            >
              {validationError}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
