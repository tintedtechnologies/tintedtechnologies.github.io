import ui from './HomeSections.module.css';

function HomeContactSection({ formData, onChange, onSubmit }) {
  return (
    <section id="contact" className={`${ui.sectionBase} ${ui.contactSection}`}>
      <div className={ui.contactInner}>
        <div className={ui.textCenter}>
          <h2 className={`${ui.sectionTitle} ${ui.contactTitle}`}>
            Let&apos;s <span className={ui.accent}>Build</span> Your <span className={ui.accent}>Capability</span>
          </h2>
          <p className={ui.contactIntro}>
            Tell us about your team’s training goals.
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
              placeholder="Tell us a bit about your goals or challenges…"
              rows="6"
              className={ui.formTextarea}
            />
          </div>

          <button type="submit" className={`${ui.gradientButton} ${ui.submitButton}`}>
            Request Training →
          </button>
        </form>
      </div>
    </section>
  );
}

export default HomeContactSection;
