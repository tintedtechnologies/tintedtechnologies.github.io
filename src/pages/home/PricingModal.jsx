import ui from './HomeSections.module.css';

function PricingModal({ isOpen, onClose, onPrefillMessage, onScrollToContact }) {
  if (!isOpen) {
    return null;
  }

  const handlePrefillAndContact = (message) => {
    onClose();
    onPrefillMessage(message);
    onScrollToContact();
  };

  return (
    <div onClick={onClose} className={ui.modalOverlay}>
      <div onClick={(e) => e.stopPropagation()} className={`${ui.modalPanel} ${ui.pricingPanel}`}>
        <div className={`${ui.modalHeader} ${ui.mbSmall}`}>
          <h2 className={ui.modalTitle}>
            Training Packages & Pricing
          </h2>
          <button onClick={onClose} className={ui.closeButton}>
            ✕
          </button>
        </div>
        <p className={ui.pricingIntro}>
          Structured engagement models for organizations and individuals.
          <br />
          Custom scopes available upon request.
        </p>

        <p className={`${ui.pricingLabel} ${ui.mbMedium}`}>For Organizations</p>
        <div className={ui.orgCardsGrid}>
          <div className={`${ui.pricingCard} ${ui.orgPricingCard}`}>
            <h3 className={ui.pricingTitle}>Half-Day Technical Workshop</h3>
            <p className={`${ui.pricingText} ${ui.orgPricingText}`}>
              Focused team training on cloud, AI, or automation foundations with practical exercises and role-aligned outcomes.
            </p>
            <button
              onClick={() => {
                handlePrefillAndContact(
                  'I am interested in the Half-Day Technical Workshop for my organization.\n\nTeam size:\nPrimary focus area:\nDesired outcomes:\nTimeline:\nBudget range:\n\nPlease email me more details and next steps.'
                );
              }}
              className={ui.smallAction}
            >
              Email for Details
            </button>
          </div>
          <div className={`${ui.pricingCard} ${ui.orgPricingCard}`}>
            <h3 className={ui.pricingTitle}>Full-Day Technical Workshop</h3>
            <p className={`${ui.pricingText} ${ui.orgPricingText}`}>
              End-to-end capability sessions for teams, including strategy, implementation guidance, and hands-on delivery plans.
            </p>
            <button
              onClick={() => {
                handlePrefillAndContact(
                  'I am interested in the Full-Day Technical Workshop for my organization.\n\nTeam size:\nPrimary focus area:\nDesired outcomes:\nTimeline:\nBudget range:\n\nPlease email me more details and next steps.'
                );
              }}
              className={ui.smallAction}
            >
              Email for Details
            </button>
          </div>
        </div>

        <p className={ui.pricingLabel}>For Individuals</p>
        <div className={ui.modalCardsGrid}>
          <div className={ui.pricingCard}>
            <h3 className={ui.pricingTitle}>1:1 Technical Mentorship</h3>
            <p className={ui.pricingText}>
              Focused guidance to help you get unstuck, level up a specific skill, or work through a technical challenge with an experienced practitioner.
            </p>
            <ul className={ui.pricingList}>
              {[
                'One-on-one sessions tailored to your exact goals',
                'A clear learning roadmap you can follow between sessions',
                'Flexible scheduling — book as needed or commit to a package'
              ].map((item, i) => (
                <li key={i} className={ui.pricingListItem}>
                  <span className={ui.bullet}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className={ui.priceRow}>
              <p className={ui.priceText}>
                $200 <span className={ui.priceSuffix}>per session</span>
              </p>
            </div>
            <button
              onClick={() => {
                handlePrefillAndContact('I\'m interested in the 1:1 Technical Mentorship.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n');
              }}
              className={ui.smallAction}
            >
              Get Started
            </button>
          </div>

          <div className={ui.pricingCard}>
            <h3 className={ui.pricingTitle}>Skill Builder Package</h3>
            <p className={ui.pricingText}>
              A structured 4-session program to build real, demonstrable skills in cloud or AI — with hands-on projects you can add to your portfolio.
            </p>
            <ul className={ui.pricingList}>
              {[
                'Four deep-dive sessions on a focused topic (Python, cloud, or AI)',
                'Hands-on projects you complete and keep as portfolio pieces',
                'A personalized learning plan with milestones and checkpoints'
              ].map((item, i) => (
                <li key={i} className={ui.pricingListItem}>
                  <span className={ui.bullet}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className={ui.priceRow}>
              <p className={ui.priceText}>
                $700 <span className={ui.priceSuffix}>flat rate</span>
              </p>
            </div>
            <button
              onClick={() => {
                handlePrefillAndContact('I\'m interested in the Skill Builder Package.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n');
              }}
              className={ui.smallAction}
            >
              Get Started
            </button>
          </div>

          <div className={ui.pricingCard}>
            <h3 className={ui.pricingTitle}>Career Strategy Intensive</h3>
            <p className={ui.pricingText}>
              The full package for career changers and job seekers — technical skill building plus the strategy, positioning, and preparation to land the role.
            </p>
            <ul className={ui.pricingList}>
              {[
                'Four structured sessions covering skills, positioning, and interview prep',
                'A personalized career roadmap aligned to your target roles',
                'Portfolio, resume, and LinkedIn review with actionable feedback'
              ].map((item, i) => (
                <li key={i} className={ui.pricingListItem}>
                  <span className={ui.bullet}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className={ui.priceRow}>
              <p className={ui.priceText}>
                $1,200 <span className={ui.priceSuffix}>flat rate</span>
              </p>
            </div>
            <button
              onClick={() => {
                handlePrefillAndContact('I\'m interested in the Career Strategy Intensive.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n');
              }}
              className={ui.smallAction}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className={ui.ctaRowCenter}>
          <button
            onClick={() => {
              onClose();
              onScrollToContact();
            }}
            className={`${ui.gradientButton} ${ui.wideAction}`}
          >
            Schedule Discovery Call →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingModal;
