import ui from './HomeSections.module.css';

function HomeMissionSection() {
  return (
    <section id="mission" className={`${ui.sectionBase} ${ui.missionSection}`}>
      <div className={ui.missionInner}>
        <h2 className={`${ui.sectionTitle} ${ui.missionTitle}`}>
          Our <span className={ui.accent}>Mission</span>
        </h2>
        <p className={ui.missionText}>
          We help organizations and professionals build the technical capabilities needed to succeed in a rapidly evolving digital world.
        </p>
      </div>
    </section>
  );
}

export default HomeMissionSection;
