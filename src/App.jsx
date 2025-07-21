import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import OurWork from './pages/OurWork';
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
              We Build <span className="gradient-text">Tools</span> & <span className="gradient-text-blue">Content</span>
            </h1>
            <p className="hero-subtitle">
              We’re a creative studio building developer-first tools, open-source projects, and approachable tech education for all skill levels.
            </p>
            <div className="hero-actions">
              <Link to="/our-work">
                <button className="btn-primary">Explore Our Projects</button>
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
            <p>We build digital tools and educational content to democratize modern tech.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Original Products</h3>
              <p>
                Clean, focused apps built to make technology more accessible, intuitive, and useful — especially for learners, creators, and community-driven builders.
              </p>
            </div>
            <div className="service-card featured">
              <div className="service-icon">🌟</div>
              <h3>Open Source</h3>
              <p>
                We contribute openly to grow community knowledge and provide starter kits, templates, and public experiments for developers.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Developer Education</h3>
              <p>
                Through YouTube, workshops, and blog content, we break down modern tech for self-taught devs, beginners, and lifelong learners.
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
                We’re a tech studio focused on building tools that reflect the communities and voices too often left out of tech.
                We believe technology should be transparent, accessible, and culturally grounded.
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
                  <p>Technology built for everyone — not just the insiders.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-number">🌟</div>
                <div>
                  <h4>Open Knowledge</h4>
                  <p>We publish, share, and document our work freely.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-number">🎓</div>
                <div>
                  <h4>Project-Based Learning</h4>
                  <p>We teach by building real things — and showing how it’s done.</p>
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
            <h2>Ready to Learn, Build, or Create with Us?</h2>
            <p>
              Whether you're here to explore our tools, dive into tutorials, or be part of a more inclusive tech movement — you're in the right place.
            </p>
            <div className="cta-actions">
              <Link to="/contact">
                <button className="btn-primary">Get in Touch</button>
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
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
