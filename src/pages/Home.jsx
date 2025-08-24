import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';
import '../scroll.css';
import logo from '../assets/logo.png';
import founderImage from '../assets/founderceo.jpeg';

// Social icon SVGs (simple inline for demo)
const socialIcons = {
  github: (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
};

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
          <a href="#founder" onClick={(e) => handleNavClick(e, 'founder')} className={styles.navLink}>Founder</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={styles.navLink}>Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={styles.navLink}>Contact</a>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Tinted<br/>Technologies</h1>
          <div className={styles.heroDesc}>
            Apps, content, and education at the intersection of culture + tech.
          </div>
          <div className={styles.heroBtns}>
            <button className={styles.heroBtn} onClick={(e) => handleNavClick(e, 'contact')}>Contact</button>
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
        <div className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.sectionContent}>
            <p>Tinted Technologies is dedicated to creating digital solutions that bridge the gap between technology and culture. We believe that the most impactful innovations happen when diverse perspectives come together to solve real-world problems.</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className={styles.section} id="mission">
          <h2 className={styles.sectionTitle}>Mission</h2>
          <div className={styles.sectionContent}>
            <p>Our mission is to develop apps, content, and educational resources that empower underrepresented communities in tech while creating inclusive digital experiences for all users.</p>
          </div>
        </div>

        {/* Founder Section */}
        <div className={styles.section} id="founder">
          <h2 className={styles.sectionTitle}>Founder</h2>
          <div className={styles.founderProfile}>
            <div className={styles.founderImage}>
              <img src={founderImage} alt="Founder and CEO" />
            </div>
            <div className={styles.founderContent}>
              <h3>Jerron Allen</h3>
              <p className={styles.founderTitle}>Founder & CEO</p>
              <p>With a background in software engineering and a passion for social impact, Jerron founded Tinted Technologies to create technology that reflects and serves diverse communities.</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={styles.section} id="projects">
          <h2 className={styles.sectionTitle}>Our Work</h2>
          <div className={styles.sectionContent}>
            <p>We're currently working on several exciting projects that combine innovative technology with cultural relevance. Stay tuned for updates on our latest developments!</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.section} id="contact">
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <p>Ready to work together? Let's connect and discuss how we can bring your ideas to life.</p>
              <div className={styles.contactDetails}>
                <p><strong>Email:</strong> technology.tinted@gmail.com</p>
              </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleContactSubmit}>
              <input id="contactName" className={styles.input} type="text" placeholder="Name" required />
              <input id="contactEmail" className={styles.input} type="email" placeholder="Email" required />
              <textarea id="contactMessage" className={styles.input} placeholder="Message" rows={4} required />
              <button className={styles.sendBtn} type="submit">Send Message</button>
            </form>
            <div className={styles.contactSocials}>
              <a href="https://github.com/tintedtechnologies" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>{socialIcons.github}</a>
            </div>
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

export default Home;
