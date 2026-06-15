import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';
import HomeHeroSection from './home/HomeHeroSection';
import HomeMissionSection from './home/HomeMissionSection';
import HomeServicesSection from './home/HomeServicesSection';
import HomeWhySection from './home/HomeWhySection';
import HomeContactSection from './home/HomeContactSection';
import EngagementModal from './home/EngagementModal';
import PricingModal from './home/PricingModal';

function Home() {
  useSEO({
    title: null,
    description: 'Tinted Technologies helps individuals build real skills and make smart technology decisions. Cloud & AI training and workshops.',
    path: '/'
  });
  const [engagementOpen, setEngagementOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    setTimeout(() => {
      scrollToSection('contact');
    }, 100);
  };

  const prefillMessage = (message) => {
    setFormData((prev) => ({ ...prev, message }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Tinted Technologies: ${formData.name} would like to get in touch`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoLink = `mailto:jay@tintedtechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleHeroRequestTraining = (e) => {
    e.preventDefault();
    prefillMessage('I\'m interested in training.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n');
    scrollToSection('contact');
  };

  const handleScheduleDiscovery = () => {
    setEngagementOpen(false);
    scrollToContact();
  };

  const handleExplorePricing = () => {
    setEngagementOpen(false);
    setPricingOpen(true);
  };

  return (
    <div className={styles.appContainer}>
      <Navigation />
      <HomeHeroSection onRequestTraining={handleHeroRequestTraining} />
      <HomeMissionSection />
      <HomeServicesSection />
      <HomeWhySection onOpenEngagement={() => setEngagementOpen(true)} onOpenPricing={() => setPricingOpen(true)} />
      <HomeContactSection formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <Footer />

      <EngagementModal
        isOpen={engagementOpen}
        onClose={() => setEngagementOpen(false)}
        onExplorePricing={handleExplorePricing}
        onScheduleDiscovery={handleScheduleDiscovery}
      />
      <PricingModal
        isOpen={pricingOpen}
        onClose={() => setPricingOpen(false)}
        onPrefillMessage={prefillMessage}
        onScrollToContact={scrollToContact}
      />
    </div>
  );
}

export default Home;
