import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>Training. Consulting. <span className="text-gold">Empowering</span> others through AI & cloud.</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            We help individuals and organizations thrive in the AI and cloud era through 
            hands-on training, expert consulting, and custom educational programs.
          </p>
        </div>
      </section>

      {/* Services Stack */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 className="text-gold">AI & Cloud Training</h3>
              <p>
                Comprehensive training programs designed to build practical skills in 
                artificial intelligence and cloud computing. From fundamentals to advanced 
                implementations, we make complex technologies accessible. Our programs cover 
                machine learning fundamentals, cloud architecture & deployment, AI ethics & 
                responsible development, and hands-on project experience.
              </p>
            </div>

            <div className="card">
              <h3 className="text-blue">Technical Consulting</h3>
              <p>
                Strategic guidance for organizations looking to implement AI and cloud 
                solutions. We help you navigate technology decisions, build inclusive 
                practices, and create sustainable technical strategies. Our consulting includes 
                AI strategy & implementation, cloud migration planning, inclusive technology 
                practices, and technical architecture review.
              </p>
            </div>

            <div className="card">
              <h3 className="text-gold">Custom Workshops</h3>
              <p>
                Tailored educational experiences for teams, communities, and organizations. 
                We design workshops that meet your specific needs and focus on practical, 
                applicable skills. We offer community tech workshops, corporate training 
                programs, student & bootcamp support, and accessibility-focused sessions.
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
