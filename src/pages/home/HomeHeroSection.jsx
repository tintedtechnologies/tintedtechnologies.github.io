import ui from './HomeSections.module.css';

function HomeHeroSection({ onRequestTraining, onBookScopingCall }) {
  return (
    <section id="hero" className={`${ui.heroSection} ${ui.onBlue}`}>
      <div className={ui.heroInner}>
        <p className={ui.heroBadge}>Training and Consulting for Modern Teams.</p>
        <h1 className={`${ui.heroTitle} ${ui.sectionTitle}`}>
          Tinted <span className={ui.accent}>Technologies</span>
        </h1>
        <p className={ui.heroSubtitle}>
          Develop High-Performing Teams. Build Future-Ready Systems.
        </p>
        <div className={ui.heroActions}>
          <a
            href="#contact"
            onClick={onRequestTraining}
            className={`${ui.gradientButton} ${ui.heroCta}`}
          >
            Request Training →
          </a>
          <a href="#contact" onClick={onBookScopingCall} className={ui.heroSecondaryCta}>
            Or book a consulting call
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
