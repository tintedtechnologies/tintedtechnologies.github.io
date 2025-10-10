import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import './scroll.css';
import logo from './assets/logo.png';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Social icon SVGs (simple inline for demo)
const socialIcons = {
  github: (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
};

// Home component (the original landing page)
function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Effect to handle showing/hiding back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handles contact form submission by opening the user's mail client
  function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value || '';
    const email = document.getElementById('contactEmail').value || '';
    const message = document.getElementById('contactMessage').value || '';
    
    const subject = `Contact from ${name} | Tinted Technologies Website`;
    const body = `${message}`;
    
    window.location.href = `mailto:technology.tinted@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  
  // This function handles smooth scrolling when clicking on navigation links
  function handleNavClick(e, sectionId) {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.appContainer} id="top">
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <a href="#top" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'});}} className={styles.navLink}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={styles.navLink}>About</a>
          <a href="#mission" onClick={(e) => handleNavClick(e, 'mission')} className={styles.navLink}>Mission</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className={styles.navLink}>Testimonials</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={styles.navLink}>Contact</a>
          <Link to="/blog" className={styles.navLink}>Insights</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Tinted<br/>Technologies</h1>
          <div className={styles.heroDesc}>
            Mentoring the next generation of developers through personalized coaching at the intersection of culture + tech.
          </div>
          <div className={styles.heroBtns}>
            <button className={styles.heroBtn} onClick={(e) => handleNavClick(e, 'contact')}>Get Free Strategy Session</button>
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src={logo} alt="Tinted Technologies Logo" />
        </div>
        {/* Scroll indicator arrow */}
        <div className={styles.scrollIndicator} onClick={(e) => handleNavClick(e, 'about')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* About Section */}
        <div className={styles.aboutSection} id="about">
          <div className={styles.sectionTitle}>About</div>
          <div className={styles.sectionContent}>
            Tinted Technologies specializes in developer mentoring and technical consulting for the next generation of tech professionals. We help career changers, bootcamp graduates, and self-taught developers navigate their path into tech through personalized coaching, strategic guidance, and inclusive mentorship that addresses both technical skills and professional growth.
          </div>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Founded in 2025</span>
          </div>
          {/* Scroll indicator arrow */}
          <div className={styles.scrollIndicator} onClick={(e) => handleNavClick(e, 'mission')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className={styles.missionSection} id="mission">
          <div className={styles.sectionTitle}>Mission</div>
          <div className={styles.missionContent}>
            Tinted Technologies is on a mission to make technology <span className={styles.missionHighlight1}>simple, accessible, inclusive</span>, and <span className={styles.missionHighlight2}>culturally relevant, </span>creating experiences that <span className={styles.missionHighlight3}>spark learning, fuel creativity, and strengthen connection</span> in the digital age.
          </div>
          {/* Scroll indicator arrow */}
          <div className={styles.scrollIndicator} onClick={(e) => handleNavClick(e, 'testimonials')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={styles.aboutSection} id="testimonials">
          <div className={styles.sectionTitle}>Success Stories</div>
          <div style={{display: 'flex', flexDirection: 'row', gap: '30px', maxWidth: '1200px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <div style={{flex: '1', minWidth: '300px', maxWidth: '350px', background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
              <div style={{color: 'var(--muted)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic'}}>
                "Tinted Technologies understood my journey as a Black woman transitioning from healthcare. Their mentorship went beyond code and helped me navigate workplace dynamics and build confidence. I landed my first role as a Solution Engineer in 11 months."
              </div>
              <div>
                <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Keisha Williams</strong>
                <div style={{color: 'var(--muted)', fontSize: '0.95rem', marginTop: '5px'}}>Career Changer to Solution Engineer at Salesforce</div>
              </div>
            </div>
            <div style={{flex: '1', minWidth: '300px', maxWidth: '350px', background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
              <div style={{color: 'var(--muted)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic'}}>
                "As a self-taught developer, I was struggling with imposter syndrome. Working with Tinted Technologies helped me recognize my strengths and build a Python portfolio that showcased my unique perspective. Got hired within 4 months of our sessions."
              </div>
              <div>
                <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Marcus Thompson</strong>
                <div style={{color: 'var(--muted)', fontSize: '0.95rem', marginTop: '5px'}}>Self-Taught to Python Backend Developer at Spotify</div>
              </div>
            </div>
            <div style={{flex: '1', minWidth: '300px', maxWidth: '350px', background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
              <div style={{color: 'var(--muted)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic'}}>
                "Coming out of my CS program, I had the technical skills but lacked industry insight. The cultural guidance and interview prep from Tinted Technologies were invaluable. Started my internship at Netflix and got a full time offer after 3 months."
              </div>
              <div>
                <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Ashley Johnson</strong>
                <div style={{color: 'var(--muted)', fontSize: '0.95rem', marginTop: '5px'}}>CS Student Intern to Software Engineer at Netflix</div>
              </div>
            </div>
            <div style={{flex: '1', minWidth: '300px', maxWidth: '350px', background: 'var(--card-bg)', padding: '30px', borderRadius: 'var(--radius)', border: '1px solid var(--border)'}}>
              <div style={{color: 'var(--muted)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic'}}>
                "Switching careers at 42 felt impossible, but Tinted Technologies showed me how my teaching experience translated to technical communication. They helped me break into data engineering and land my first tech role in 14 months."
              </div>
              <div>
                <strong style={{color: 'var(--accent)', fontSize: '1.1rem'}}>Terrance Mitchell</strong>
                <div style={{color: 'var(--muted)', fontSize: '0.95rem', marginTop: '5px'}}>Former Teacher to Data Engineer at Slack</div>
              </div>
            </div>
          </div>
          {/* Scroll indicator arrow */}
          <div className={styles.scrollIndicator} onClick={(e) => handleNavClick(e, 'contact')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      
        {/* Contact Section */}
        <div className={styles.missionSection} id="contact">
          <div className={styles.sectionTitle}>Get Started</div>
          
          {/* Value Proposition */}
          <div className={styles.sectionContent} style={{maxWidth: '800px', margin: '0 auto 24px'}}>
            <h3>Ready to accelerate your tech career?</h3>
            <p>Get personalized guidance through a free 30-minute strategy session. We'll assess your current skills, clarify your goals, and create an actionable roadmap for landing your first (or next) developer role.</p>
          </div>
          
          <div className={styles.contactFormContainer}>
            <form className={styles.contactForm} onSubmit={handleContactSubmit}>
              <input id="contactName" className={styles.input} type="text" placeholder="Name" required />
              <input id="contactEmail" className={styles.input} type="email" placeholder="Email" required />
              <textarea id="contactMessage" className={styles.input} placeholder="Tell us about your goals and current situation" rows={4} required />
              <button className={styles.sendBtn} type="submit">Request Free Strategy Session</button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className={styles.backToTopBtn} 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}

// Main App component for Tinted Technologies
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

// Export the App component
export default App;
