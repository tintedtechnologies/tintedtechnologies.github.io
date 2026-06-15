import ui from './HomeSections.module.css';

function HomeWhySection({ onOpenEngagement, onOpenPricing }) {
  return (
    <section id="why-us" className={`${ui.sectionBase} ${ui.whySection}`}>
      <div className={ui.whyInner}>
        <h2 className={`${ui.sectionTitle} ${ui.whyTitle}`}>
          Why <span className={ui.accent}>Tinted Technologies</span>
        </h2>
        <div className={ui.whyList}>
          {[
            'Real-world practitioner-led instruction',
            'Structured engagements with defined outcomes',
            'Cloud & AI skills aligned to career outcomes',
            'Practical training — not theory',
            'Clear scope, documentation, and delivery'
          ].map((item, index) => (
            <div key={index} className={ui.whyItem}>
              <div className={ui.whyCheck}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#ffffff" />
                </svg>
              </div>
              <p className={ui.whyText}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className={ui.whyCtas}>
          <button
            onClick={onOpenEngagement}
            className={`${ui.gradientButton} ${ui.primaryButton}`}
          >
            How Engagement Works
          </button>
          <button
            onClick={onOpenPricing}
            className={ui.secondaryButton}
          >
            Training Packages & Pricing
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeWhySection;
