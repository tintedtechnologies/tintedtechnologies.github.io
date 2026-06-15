import ui from './HomeSections.module.css';

function HomeHeroSection({ onRequestTraining }) {
  return (
    <section id="hero" className={ui.heroSection}>
      <div className={ui.heroInner}>
        <p className={ui.heroBadge}>Training for Organizations. Growth for Individuals.</p>
        <h1 className={`${ui.heroTitle} ${ui.sectionTitle}`}>
          Tinted <span className={ui.accent}>Technologies</span>
        </h1>
        <p className={ui.heroSubtitle}>
          Develop High-Performing Teams. Build Future-Ready Skills.
        </p>
        <a
          href="#contact"
          onClick={onRequestTraining}
          className={`${ui.gradientButton} ${ui.heroCta}`}
        >
          Request Training →
        </a>
      </div>
    </section>
  );
}

export default HomeHeroSection;
