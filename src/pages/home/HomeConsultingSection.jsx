import ui from './HomeSections.module.css';

const consultingServices = [
  'Azure PaaS architecture design and service selection',
  'Cost optimization and governance recommendations',
  'Implementation support where needed, from planning through delivery',
  'AI solution design and integration using Microsoft Foundry',
];

function HomeConsultingSection({ onBookScopingCall }) {
  return (
    <section id="consulting" className={`${ui.sectionBase} ${ui.consultingSection} ${ui.onBlue}`}>
      <div className={ui.consultingInner}>
        <div className={ui.consultingCopy}>
          <p className={ui.groupLabel}>Consulting Services</p>
          <h2 className={`${ui.sectionTitle} ${ui.consultingTitle}`}>Consulting</h2>
          <p className={ui.consultingIntro}>
            Practical architecture, implementation, and AI guidance scoped to what your team actually needs.
          </p>

          <h3 className={ui.consultingServicesTitle}>What We Offer</h3>
          <ul className={ui.consultingList}>
            {consultingServices.map((service) => (
              <li key={service} className={ui.consultingListItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z" fill="currentColor" />
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={ui.consultingFooter}>
          <p>Pricing discussed on your scoping call.</p>
          <button type="button" className={ui.consultingButton} onClick={onBookScopingCall}>
            Book free scoping call
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeConsultingSection;