import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="startup-layout">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🚀 Tech Studio Empowering Underrepresented Voices</span>
            </div>
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
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="floating-card card-1">AI Training</div>
            <div className="floating-card card-2">Open Source</div>
            <div className="floating-card card-3">Consulting</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-modern">
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
              <Link to="/services" className="service-link">Learn more →</Link>
            </div>
            <div className="service-card featured">
              <div className="service-icon">🌟</div>
              <h3>Open Source</h3>
              <p>
                Contributing to community knowledge with projects that 
                support learning and collaboration.
              </p>
              <Link to="/services" className="service-link">Explore projects →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>AI & Cloud Training</h3>
              <p>
                Hands-on education helping individuals and organizations 
                thrive in the AI era.
              </p>
              <Link to="/services" className="service-link">Start learning →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-modern">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p className="mission-statement">
                "To create a thriving ecosystem of inclusive digital products, 
                open-source solutions, and hands-on education that expands who 
                builds and benefits from technology."
              </p>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-number">01</div>
                <h4>Open Contribution</h4>
                <p>Community investment through accessible code and knowledge</p>
              </div>
              <div className="value-item">
                <div className="value-number">02</div>
                <h4>Inviting Technology</h4>
                <p>Making tech understandable and empowering for everyone</p>
              </div>
              <div className="value-item">
                <div className="value-number">03</div>
                <h4>Representation Drives Innovation</h4>
                <p>Centering historically excluded voices in tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="stats-modern">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Open Source Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Inclusive Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-modern">
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
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="btn-outline">Schedule a Call</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
