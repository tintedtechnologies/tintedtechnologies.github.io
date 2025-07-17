import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

// Single Page Home Component
const Home = () => {
  return (
    <div className="startup-layout">
      {/* Hero Section */}
      <section id="home" className="hero-modern">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building <span className="gradient-text">Inclusive</span> Technology<br/>
              for <span className="gradient-text-blue">Everyone</span>
            </h1>
            <p className="hero-subtitle">
              We uplift underrepresented voices in tech through inclusive tools, 
              open knowledge, and hands-on AI & cloud education.
            </p>
            <div className="hero-actions">
              <Link to="/contact">
                <button className="btn-primary">Start a Project</button>
              </Link>
              <Link to="/services">
                <button className="btn-secondary">View Services</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="services-modern">
        <div className="container">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Three pillars of our mission to democratize technology</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Original Products</h3>
              <p>
                Building innovative tools that prioritize accessibility, 
                inclusion, and user empowerment.
              </p>
            </div>
            <div className="service-card featured">
              <div className="service-icon">🌟</div>
              <h3>Open Source</h3>
              <p>
                Contributing to community knowledge with projects that 
                support learning and collaboration.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>AI & Cloud Training</h3>
              <p>
                Hands-on education helping individuals and organizations 
                thrive in the AI era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="mission-modern">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Who We Are</h2>
              <p className="mission-statement">
                Tinted Technologies is a tech studio dedicated to building inclusive 
                technology and empowering underrepresented voices in the industry. 
                We believe technology should work for everyone.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about">
                  <button className="btn-secondary">Learn More About Us</button>
                </Link>
              </div>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-number">🔥</div>
                <div>
                  <h4>Inclusive by Design</h4>
                  <p>Technology that welcomes and empowers everyone</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-number">🌟</div>
                <div>
                  <h4>Open Knowledge</h4>
                  <p>Contributing to community growth through open source</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-number">🎓</div>
                <div>
                  <h4>Hands-On Education</h4>
                  <p>Practical skills for the AI and cloud era</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="cta-modern">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build the Future Together?</h2>
            <p>
              Join us in creating technology that works for everyone. 
              Let's discuss your next project or learning journey.
            </p>
            <div className="cta-actions">
              <Link to="/contact">
                <button className="btn-primary">Start a Conversation</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
