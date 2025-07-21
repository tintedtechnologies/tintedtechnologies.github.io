import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="about-hero-content">
            <h1>About <span className="text-gold">Tinted Technologies</span></h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              A tech studio dedicated to building inclusive technology and empowering 
              underrepresented voices in the industry.
            </p>
            <img 
              src="/logo.png" 
              alt="Tinted Technologies Logo" 
              className="about-logo"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="text-blue">Leadership</h2>
              <h3>Jay - Founder</h3>
              <p>
                Jay brings over a decade of experience in technology and a 
                passion for creating inclusive spaces in tech. With expertise in 
                AI, cloud computing, and community building, he founded Tinted 
                Technologies to bridge the gap between cutting-edge technology and 
                equitable access.
              </p>
              <p>
                <em>
                  "Technology has the power to transform lives, but only when it's 
                  built by and for diverse communities. That's the future we're 
                  working toward."
                </em>
              </p>
            </div>
            <div className="card text-center">
              <div className="founder-image-container">
                <img 
                  src="/founderceo.JPG" 
                  alt="Jay - Founder" 
                  className="founder-image"
                />
              </div>
              <h4>Jay</h4>
              <p className="text-gold">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2 className="text-gold">Our Mission</h2>
              <p>
                Tinted Technologies exists to uplift underrepresented voices in tech by 
                building inclusive tools, contributing to open knowledge, and equipping 
                people with the skills to lead in AI and cloud.
              </p>
            </div>
            <div className="card">
              <h2 className="text-blue">Our Vision</h2>
              <p>
                To create a thriving ecosystem of inclusive digital products, open-source 
                solutions, and hands-on education that expands who builds and benefits 
                from technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Core Values</h2>
          <div className="values-stack">
            <div className="value-card">
              <div className="value-item">
                <div className="value-number">01</div>
                <div>
                  <h3 className="text-gold">Open Contribution is Community Investment</h3>
                  <p>
                    We contribute openly to empower others to learn, remix, and grow. 
                    Our code isn't just functional — it's a form of community investment 
                    that supports equity, creativity, and access.
                  </p>
                </div>
              </div>
            </div>
            <div className="value-card">
              <div className="value-item">
                <div className="value-number">02</div>
                <div>
                  <h3 className="text-blue">Technology Should Be Inviting, Not Exclusive</h3>
                  <p>
                    Tech should be understandable, accessible, and empowering — for everyone. 
                    We design tools that welcome others in, not shut them out, and we share 
                    knowledge freely to level the field.
                  </p>
                </div>
              </div>
            </div>
            <div className="value-card">
              <div className="value-item">
                <div className="value-number">03</div>
                <div>
                  <h3 className="text-gold">Representation Drives Innovation</h3>
                  <p>
                    We center the voices, cultures, and communities that have historically 
                    been excluded from tech. Because who builds the future shapes the future — 
                    and we're here to change the equation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-3">Ready to Build the Future Together?</h2>
          <p className="mb-4" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Join us in creating technology that works for everyone. Let's discuss 
            your next project or learning journey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/our-work">
              <button className="btn-primary">View Our Work</button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">Start a Conversation</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
