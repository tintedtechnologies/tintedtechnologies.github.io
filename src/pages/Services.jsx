import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';

const Services = () => {
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
            We Create <span style={{ color: '#00B140' }}>Tools</span> and <span style={{ color: '#4CD964' }}>Training</span> That Make Tech More Equitable.
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

      {/* Services Stack */}
      <section style={{
        padding: '2rem 1.5rem 4rem',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          {[
            { title: 'Tech Foundations & Career Enablement', color: '#00B140', description: 'Train individuals to break into tech: cloud basics, AI literacy, real-world tooling, and career-ready skills. We make complex concepts accessible through project-based learning and real-world examples. Whether you\'re starting out or leveling up, our training covers everything from cloud fundamentals and AI literacy to hands-on tooling and career preparation.' },
            { title: 'Small Business Cloud & AI Advisory', color: '#4CD964', description: 'Practical consulting to help small businesses get online, modernize operations, and use cloud + AI responsibly. We offer hands-on guidance for getting your business into the cloud, improving workflows, and adopting AI tools that actually make sense for your size and budget, without the enterprise complexity.' },
            { title: 'Applied AI & Automation', color: '#00B140', description: 'Identify where AI actually helps. Process automation, internal tools, and efficiency, without overengineering. We work with teams to find practical AI opportunities, build automation that saves real time, and implement solutions that are maintainable and cost-effective.' },
            { title: 'Workshops & Enablement', color: '#4CD964', description: 'Hands-on learning or internal upskilling on modern cloud + AI. We run focused workshops for teams and organizations looking to build practical skills in cloud infrastructure, AI tooling, and modern development practices.' }
          ].map((service, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}>
              <h3 style={{ color: service.color, fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#bbbbbb', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section style={{
        padding: '4rem 1.5rem',
        background: '#000000'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Our Approach
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#4CD964', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Inclusive by Design</h3>
              <p style={{ color: '#bbbbbb', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                Every program we create prioritizes accessibility, diverse learning styles, 
                and real-world application. We believe technology education should be 
                welcoming and empowering for everyone.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#00B140', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Hands-On Learning</h3>
              <p style={{ color: '#bbbbbb', lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
                Theory is important, but practice makes perfect. Our training emphasizes 
                project-based learning, giving participants the confidence to apply their 
                new skills immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Who We Serve
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#4CD964', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Individuals & Students</h3>
              <ul style={{ color: '#bbbbbb', lineHeight: '2', fontSize: '1.05rem', margin: 0, paddingLeft: '1.25rem' }}>
                <li>Career changers entering tech</li>
                <li>Students and bootcamp graduates</li>
                <li>Professionals upskilling in AI/cloud</li>
                <li>Underrepresented groups in tech</li>
              </ul>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{ color: '#00B140', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Organizations & Teams</h3>
              <ul style={{ color: '#bbbbbb', lineHeight: '2', fontSize: '1.05rem', margin: 0, paddingLeft: '1.25rem' }}>
                <li>Startups implementing AI solutions</li>
                <li>Non-profits leveraging technology</li>
                <li>Companies building inclusive practices</li>
                <li>Educational institutions</li>
              </ul>
            </div>
          </div>
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
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            color: '#888888',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Let&apos;s discuss how we can help you or your organization build 
            the skills needed for the future of technology.
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
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
