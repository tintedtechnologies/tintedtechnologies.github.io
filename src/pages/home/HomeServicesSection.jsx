import ui from './HomeSections.module.css';

function HomeServicesSection() {
  return (
    <section id="services" className={`${ui.sectionBase} ${ui.servicesSection}`}>
      <div className={ui.servicesInner}>
        <div className={ui.centerHeading}>
          <h2 className={`${ui.sectionTitle} ${ui.servicesTitle}`}>
            Training <span className={ui.accent}>&</span> Skill Development
          </h2>
        </div>

        <div className={ui.mbLarge}>
          <p className={ui.groupLabel}>For Organizations</p>
          <div className={ui.servicesGrid}>
            <div className={ui.serviceCard}>
              <div className={ui.iconTile}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
              </div>
              <h3 className={ui.serviceCardTitle}>Corporate Technical Workshops</h3>
              <p className={ui.serviceCardText}>
                Hands-on workshops that upskill teams in cloud, automation, and AI. Focused on practical application, operational clarity, and measurable skill development.
              </p>
            </div>

            <div className={ui.serviceCard}>
              <div className={ui.iconTile}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
              </div>
              <h3 className={ui.serviceCardTitle}>AI & Cloud Capability Development</h3>
              <p className={ui.serviceCardText}>
                Structured training programs that build internal capability in modern cloud architecture, automation practices, and responsible AI integration. Designed to increase operational confidence, not create long-term dependency.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className={ui.groupLabel}>For Individuals</p>
          <div className={ui.servicesGrid}>
            <div className={ui.serviceCard}>
              <div className={ui.iconTile}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <h3 className={ui.serviceCardTitle}>Tech Foundations & Career Readiness</h3>
              <p className={ui.serviceCardText}>
                Structured training in Python, cloud fundamentals, and AI designed to build strong technical foundations and prepare individuals for modern technical roles.
              </p>
            </div>

            <div className={ui.serviceCard}>
              <div className={ui.iconTile}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className={ui.serviceCardTitle}>1:1 Technical Mentorship & Career Strategy</h3>
              <p className={ui.serviceCardText}>
                Personalized guidance for individuals looking to transition into tech or level up their cloud and AI skills. Focused on structured learning plans, technical skill development, and career positioning aligned with real-world expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeServicesSection;
