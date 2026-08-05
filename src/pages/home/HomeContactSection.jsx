import ui from './HomeSections.module.css';
import { CONTACT_LIMITS } from '../../utils/contactValidation';

function HomeContactSection({ formData, isSubmitting, submitStatus, onChange, onSubmit }) {
  return (
    <section id="contact" className={`${ui.sectionBase} ${ui.contactSection} ${ui.onWhite}`}>
      <div className={ui.contactInner}>
        <div className={ui.textCenter}>
          <h2 className={`${ui.sectionTitle} ${ui.contactTitle}`}>
            Let&apos;s <span className={ui.accent}>Build</span> Your <span className={ui.accent}>Capability</span>
          </h2>
          <p className={ui.contactIntro}>
            Tell us about your training goals or consulting needs.
          </p>
        </div>

        <form onSubmit={onSubmit} className={ui.contactForm}>
          <div className={ui.formField}>
            <label className={ui.formLabel}>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              minLength={CONTACT_LIMITS.name.min}
              maxLength={CONTACT_LIMITS.name.max}
              placeholder="Your name"
              className={ui.formInput}
            />
          </div>

          <div className={ui.formField}>
            <label className={ui.formLabel}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              maxLength={CONTACT_LIMITS.email.max}
              placeholder="your.email@example.com"
              className={ui.formInput}
            />
          </div>

          <div className={ui.formField}>
            <label className={ui.formLabel}>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onChange}
              required
              minLength={CONTACT_LIMITS.message.min}
              maxLength={CONTACT_LIMITS.message.max}
              placeholder="Tell us a bit about your goals or challenges…"
              rows="6"
              className={ui.formTextarea}
            />
          </div>

          <button
            type="submit"
            className={`${ui.gradientButton} ${ui.submitButton}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send Request →'}
          </button>

          <div
            className={`${ui.formStatus} ${submitStatus?.type === 'error' ? ui.formStatusError : ''}`}
            role="status"
            aria-live="polite"
          >
            {submitStatus?.message || ''}
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomeContactSection;
