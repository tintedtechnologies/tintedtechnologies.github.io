import ui from './HomeSections.module.css';

const STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'Clarify goals, audience, current capability, and business context.'
  },
  {
    step: '02',
    title: 'Scoped Proposal',
    desc: 'Defined objectives, delivery format (virtual or on-site), duration, and documented learning materials and outcomes.'
  },
  {
    step: '03',
    title: 'Structured Delivery',
    desc: 'Hands-on instruction, learning materials, practical exercises.'
  },
  {
    step: '04',
    title: 'Post-Training Support',
    desc: 'Dedicated Q&A window, resource access, and optional follow-up sessions to reinforce learning and clarify implementation questions.'
  }
];

function EngagementModal({ isOpen, onClose, onExplorePricing, onScheduleDiscovery }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className={ui.modalOverlay}>
      <div onClick={(e) => e.stopPropagation()} className={`${ui.modalPanel} ${ui.engagementPanel}`}>
        <div className={`${ui.modalHeader} ${ui.engagementHeader}`}>
          <h2 className={ui.modalTitle}>How Engagement Works</h2>
          <button onClick={onClose} className={ui.closeButton}>✕</button>
        </div>

        {STEPS.map((item, index) => (
          <div key={index} className={ui.engagementStep}>
            <span className={ui.stepNumber}>{item.step}</span>
            <div>
              <h3 className={ui.stepTitle}>{item.title}</h3>
              <p className={ui.stepDesc}>{item.desc}</p>
            </div>
          </div>
        ))}

        <div className={ui.modalActions}>
          <button onClick={onScheduleDiscovery} className={`${ui.gradientButton} ${ui.wideAction}`}>
            Schedule Discovery Call →
          </button>
          <button onClick={onExplorePricing} className={ui.textActionButton}>
            Explore Packages & Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

export default EngagementModal;
