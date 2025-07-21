import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>We Create <span className="text-gold">Tools</span> and <span className="text-blue">Training</span> That Make Tech More Equitable.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Everything we build is meant to teach, support, or empower.
          </p>
        </div>
      </section>

      {/* Services Stack */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 className="text-gold">Modern Tech Training</h3>
              <p>
                Hands-on learning in web development, AI, and cloud—powered by Python and JavaScript. 
                We make complex concepts accessible through project-based learning and real-world examples. 
                Whether you're starting out or leveling up, our training covers everything from full-stack 
                web development and machine learning to cloud deployments and automation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-blue">Mentoring & Tech Guidance</h3>
              <p>
                Personalized support to help you break into or grow within tech. We offer 1:1 mentoring, 
                technical advising, and strategic consulting for individuals and teams. Whether you're 
                building your first project, refining your career path, or scaling a product, we're here 
                to guide you with code reviews, architectural insight, and actionable next steps.
              </p>
            </div>

            <div className="card">
              <h3 className="text-gold">Talks & Workshops</h3>
              <p>
                Dynamic sessions for companies, conferences, and communities. Book us for engaging talks 
                and custom workshops focused on AI, cloud, and modern web development. We tailor content 
                for audiences ranging from beginners to professionals, delivering real value through 
                practical examples and interactive learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Our Approach</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="text-blue">Inclusive by Design</h3>
              <p>
                Every program we create prioritizes accessibility, diverse learning styles, 
                and real-world application. We believe technology education should be 
                welcoming and empowering for everyone.
              </p>
            </div>
            <div className="card">
              <h3 className="text-gold">Hands-On Learning</h3>
              <p>
                Theory is important, but practice makes perfect. Our training emphasizes 
                project-based learning, giving participants the confidence to apply their 
                new skills immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Who We Serve</h2>
          <div className="serve-grid">
            <div className="serve-category">
              <h3 className="text-blue mb-2">Individuals & Students</h3>
              <ul className="serve-list">
                <li>Career changers entering tech</li>
                <li>Students and bootcamp graduates</li>
                <li>Professionals upskilling in AI/cloud</li>
                <li>Underrepresented groups in tech</li>
              </ul>
            </div>
            <div className="serve-category">
              <h3 className="text-gold mb-2">Organizations & Teams</h3>
              <ul className="serve-list">
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
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="mb-3">
            Let's discuss how we can help you or your organization build 
            the skills needed for the future of technology.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn-primary">Schedule a Consultation</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
