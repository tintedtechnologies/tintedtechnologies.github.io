import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import founderImage from '../assets/founder.png';
import { useSEO } from '../utils/useSEO';

function Home() {
  useSEO({
    title: null,
    description: 'Tinted Technologies helps individuals and small businesses build real skills and make smart technology decisions. Cloud & AI consulting, training, and workshops.',
    path: '/'
  });
  const [engagementOpen, setEngagementOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
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
      
      {/* Hero Section */}
      <section id="hero" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '100px 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          textAlign: 'center',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: '800',
            margin: 0,
            lineHeight: '1.05',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap'
          }}>
            Tinted <span style={{ color: '#00B140' }}>Technologies</span>
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.35rem, 3vw, 2rem)',
            color: '#cccccc',
            margin: 0,
            maxWidth: '900px',
            lineHeight: '1.5',
            fontWeight: '400'
          }}>
            Develop Job-Ready Talent. Strengthen Technical Teams.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            style={{
              marginTop: '1.5rem',
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
              transition: 'all 0.3s ease',
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
            Request Training →
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '2rem',
            color: '#ffffff',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Our <span style={{ color: '#00B140' }}>Mission</span>
          </h2>
          <p style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
            color: '#cccccc',
            lineHeight: '1.7',
            maxWidth: '900px',
            margin: '0 auto',
            fontWeight: '400',
            textAlign: 'center'
          }}>
            We develop practical, job-ready cloud, AI, and programming skills for individuals and teams.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 177, 64, 0.05) 0%, rgba(76, 217, 100, 0.05) 100%)',
            borderRadius: '20px',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            border: '1px solid rgba(0, 177, 64, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 177, 64, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '900px',
            width: '100%'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 177, 64, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <h3 style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#00B140',
                letterSpacing: '-0.01em'
              }}>
                Practitioner-Led Training
              </h3>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <img 
                  src={founderImage} 
                  alt="Jay - Founder & CEO of Tinted Technologies" 
                  className={styles.founderImage}
                />
              </div>
              <p style={{
                fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
                color: '#cccccc',
                lineHeight: '1.8',
                margin: 0,
                fontWeight: '400'
              }}>
                Tinted Technologies was founded to bridge the gap between theory and real-world technical capability. Led by an experienced multi-cloud and AI practitioner, the company delivers structured, hands-on training designed to build operational skill, not just conceptual knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '1300px',
          width: '100%'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '800',
              marginBottom: '0.75rem',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Training  <span style={{ color: '#00B140' }}>&</span> Workforce Development
            </h2>
          </div>

          {/* For Individuals */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#00B140',
              marginBottom: '1rem'
            }}>
              For Individuals
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '1.75rem'
            }}>
            {/* Service Card 1 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(0, 177, 64, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 177, 64, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="#ffffff"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.01em'
              }}>
                Tech Foundations & Career Readiness
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#bbbbbb',
                lineHeight: '1.7',
                margin: 0
              }}>
                Structured training in Python, cloud fundamentals, and AI designed to build strong technical foundations and prepare individuals for modern technical roles.
              </p>
            </div>

            {/* Service Card - 1:1 Mentorship */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(0, 177, 64, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 177, 64, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#ffffff"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.01em'
              }}>
                1:1 Technical Mentorship & Career Strategy
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#bbbbbb',
                lineHeight: '1.7',
                margin: 0
              }}>
                Personalized guidance for individuals looking to transition into tech or level up their cloud and AI skills. Focused on structured learning plans, technical skill development, and career positioning aligned with real-world expectations.
              </p>
            </div>
            </div>
          </div>

          {/* For Organizations */}
          <div>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#00B140',
              marginBottom: '1rem'
            }}>
              For Organizations
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '1.75rem'
            }}>
            {/* Service Card 2 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(0, 177, 64, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 177, 64, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#ffffff"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.01em'
              }}>
                Corporate Technical Workshops
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#bbbbbb',
                lineHeight: '1.7',
                margin: 0
              }}>
                Hands-on workshops that upskill teams in cloud, automation, and AI. Focused on practical application, operational clarity, and measurable skill development.
              </p>
            </div>

            {/* Service Card 3 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(76, 217, 100, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(76, 217, 100, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #4CD964 0%, #00B140 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="#ffffff"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.01em'
              }}>
                AI & Cloud Capability Development
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#bbbbbb',
                lineHeight: '1.7',
                margin: 0
              }}>
                Structured training programs that build internal capability in modern cloud architecture, automation practices, and responsible AI integration. Designed to increase operational confidence,not create long-term dependency.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tinted Technologies Section */}
      <section id="why-us" style={{
        padding: '5rem 1.5rem',
        background: '#000000'
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '2.5rem',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center'
          }}>
            Why <span style={{ color: '#00B140' }}>Tinted Technologies</span>
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            {[
              'Real-world practitioner-led instruction',
              'Structured engagements with defined outcomes',
              'Cloud & AI skills aligned to business outcomes',
              'Practical training — not theory',
              'Clear scope, documentation, and delivery'
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  minWidth: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#ffffff"/>
                  </svg>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2.5rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setEngagementOpen(true)}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              How Engagement Works
            </button>
            <button
              onClick={() => setPricingOpen(true)}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '12px',
                background: 'transparent',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                border: '1px solid rgba(0, 177, 64, 0.6)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Training Packages & Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        overflow: 'auto'
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          maxWidth: '700px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
              fontWeight: '800', 
              margin: 0,
              marginBottom: '1.5rem',
              color: '#ffffff',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap'
            }}>
              Let&apos;s <span style={{ color: '#00B140' }}>Build</span> Your <span style={{ color: '#00B140' }}>Capability</span>
            </h2>
            
            <p style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
              color: '#888888',
              textAlign: 'center',
              margin: 0,
              lineHeight: '1.7'
            }}>
              Tell us about your team’s training goals.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            background: 'linear-gradient(135deg, rgba(0, 177, 64, 0.03) 0%, rgba(76, 217, 100, 0.03) 100%)',
            padding: 'clamp(2rem, 5vw, 3rem)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 177, 64, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <label style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                fontSize: '1.05rem',
                letterSpacing: '0.01em'
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
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(17, 17, 17, 0.8)',
                  color: '#ffffff',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00B140';
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 177, 64, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <label style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                fontSize: '1.05rem',
                letterSpacing: '0.01em'
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
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(17, 17, 17, 0.8)',
                  color: '#ffffff',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00B140';
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 177, 64, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <label style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                fontSize: '1.05rem',
                letterSpacing: '0.01em'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us a bit about your goals or challenges…"
                rows="6"
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(17, 17, 17, 0.8)',
                  color: '#ffffff',
                  fontSize: '1.05rem',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  lineHeight: '1.6',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00B140';
                  e.target.style.boxShadow = '0 0 0 3px rgba(0, 177, 64, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '18px 40px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                color: '#ffffff',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '0.5rem',
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
              Request Training →
            </button>
          </form>
        </div>
      </section>

      <Footer />

      {/* Engagement Modal */}
      {engagementOpen && (
        <div
          onClick={() => setEngagementOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              maxWidth: '860px',
              width: '100%',
              padding: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.01em'
              }}>
                How Engagement Works
              </h2>
              <button
                onClick={() => setEngagementOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>

            {[
              {
                step: '01',
                title: 'Discovery Call',
                desc: 'Clarify goals, audience, current capability, and business context.'
              },
              {
                step: '02',
                title: 'Scoped Proposal',
                desc: 'Defined objectives, delivery format (virtual or on-site), duration, and documented learning materials and outcomes.'
              },
              {
                step: '03',
                title: 'Structured Delivery',
                desc: 'Hands-on instruction, learning materials, practical exercises.'
              },
              {
                step: '04',
                title: 'Post-Training Support',
                desc: 'Dedicated Q&A window, resource access, and optional follow-up sessions to reinforce learning and clarify implementation questions.'
              }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                padding: '1.25rem 0',
                borderBottom: index < 3 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'
              }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#00B140',
                  fontFamily: 'monospace',
                  minWidth: '28px',
                  paddingTop: '2px'
                }}>
                  {item.step}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    margin: '0 0 0.35rem 0'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#999999',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <button
                onClick={() => {
                  setEngagementOpen(false);
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  padding: '0.9rem 2.5rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  maxWidth: '320px'
                }}
              >
                Schedule Discovery Call →
              </button>
              <button
                onClick={() => {
                  setEngagementOpen(false);
                  setPricingOpen(true);
                }}
                style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  background: 'none',
                  border: 'none'
                }}
                onMouseEnter={(e) => e.target.style.color = '#999999'}
                onMouseLeave={(e) => e.target.style.color = '#666666'}
              >
                Explore Packages & Pricing
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Pricing Modal */}
      {pricingOpen && (
        <div
          onClick={() => setPricingOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              maxWidth: '960px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.01em'
              }}>
                Training Packages & Pricing
              </h2>
              <button
                onClick={() => setPricingOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#888', margin: '0 0 2rem 0', lineHeight: '1.5' }}>
              Structured engagement models for individuals and organizations.<br />
              Custom scopes available upon request.
            </p>

            {/* For Individuals */}
            <p style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#00B140',
              marginBottom: '1rem'
            }}>
              For Individuals
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {/* 1:1 Mentorship */}
              <div style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 0.75rem 0' }}>1:1 Technical Mentorship</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', flex: 1 }}>
                  {['Personalized skill development sessions', 'Structured learning roadmap', 'Technical review and applied guidance'].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#999', padding: '0.25rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00B140', fontSize: '0.7rem', marginTop: '3px' }}>●</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: 0 }}>$200 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>per session</span></p>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: '0.15rem 0 0 0' }}>$1,000 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>for 6-session package</span></p>
                </div>
                <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the 1:1 Technical Mentorship.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500', alignSelf: 'flex-start' }}>Get Started</button>
              </div>

              {/* Career Strategy */}
              <div style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 0.75rem 0' }}>Career Strategy Intensive</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', flex: 1 }}>
                  {['Four structured sessions', 'Career roadmap and positioning', 'Portfolio and resume review', 'Interview strategy guidance'].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#999', padding: '0.25rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00B140', fontSize: '0.7rem', marginTop: '3px' }}>●</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: 0 }}>$1,200 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>flat rate</span></p>
                </div>
                <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the Career Strategy Intensive.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500', alignSelf: 'flex-start' }}>Get Started</button>
              </div>
            </div>

            {/* For Organizations */}
            <p style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#00B140',
              marginBottom: '1rem'
            }}>
              For Organizations
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {/* Half-Day */}
              <div style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 0.75rem 0' }}>Half-Day Technical Workshop</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', flex: 1 }}>
                  {['Up to 15 participants', 'Hands-on instruction aligned to your team\'s goals', 'Practical exercises and structured learning materials', 'Dedicated post-session Q&A window'].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#999', padding: '0.25rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00B140', fontSize: '0.7rem', marginTop: '3px' }}>●</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: 0 }}>Starting at $3,500 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>(virtual)</span></p>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: '0.15rem 0 0 0' }}>$4,500 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>(onsite)</span></p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the Half-Day Technical Workshop - Virtual.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500' }}>Virtual</button>
                  <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the Half-Day Technical Workshop - Onsite.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500' }}>Onsite</button>
                </div>
              </div>

              {/* Full-Day */}
              <div style={{
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: '0 0 0.75rem 0' }}>Full-Day Technical Workshop</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', flex: 1 }}>
                  {['Up to 20 participants', 'Deep technical instruction and applied exercises', 'Structured learning materials', 'Post-training support window'].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: '#999', padding: '0.25rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00B140', fontSize: '0.7rem', marginTop: '3px' }}>●</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginBottom: '0.75rem' }}>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: 0 }}>Starting at $6,500 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>(virtual)</span></p>
                  <p style={{ fontSize: '0.95rem', color: '#fff', fontWeight: '600', margin: '0.15rem 0 0 0' }}>$8,500 <span style={{ color: '#888', fontWeight: '400', fontSize: '0.85rem' }}>(onsite)</span></p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the Full-Day Technical Workshop - Virtual.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500' }}>Virtual</button>
                  <button onClick={() => { setPricingOpen(false); setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in the Full-Day Technical Workshop - Onsite.' })); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', borderRadius: '8px', background: 'rgba(0,177,64,0.15)', color: '#00B140', border: '1px solid rgba(0,177,64,0.3)', cursor: 'pointer', fontWeight: '500' }}>Onsite</button>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              {['50% deposit required to secure workshop dates', 'Travel billed separately for onsite engagements', 'Training materials licensed for internal team use', 'Custom scopes available for larger teams'].map((note, i) => (
                <p key={i} style={{ fontSize: '0.78rem', color: '#666', margin: '0.3rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#444' }}>•</span>{note}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setPricingOpen(false);
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                style={{
                  padding: '0.9rem 2.5rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00B140 0%, #4CD964 100%)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '320px'
                }}
              >
                Schedule Discovery Call →
              </button>
              <button
                onClick={() => {
                  setPricingOpen(false);
                  setFormData(prev => ({ ...prev, message: 'Hello,\n\nI\'m interested in a custom scope for my team. Here are some details:\n\n' }));
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#999999'}
                onMouseLeave={(e) => e.target.style.color = '#666666'}
              >
                Request Custom Scope
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
