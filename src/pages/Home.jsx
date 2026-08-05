import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { useSEO } from '../utils/useSEO';
import HomeHeroSection from './home/HomeHeroSection';
import HomeMissionSection from './home/HomeMissionSection';
import HomeTrainingSection from './home/HomeTrainingSection';
import HomeConsultingSection from './home/HomeConsultingSection';
import HomeWhySection from './home/HomeWhySection';
import HomeContactSection from './home/HomeContactSection';
import EngagementModal from './home/EngagementModal';
import PricingModal from './home/PricingModal';
import { validateContactForm } from '../utils/contactValidation';

const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLScCMAq3tRyxuu97GMmPlJv2RwvODpCGa0pZbiDyWG-MDrBMnA/formResponse';

function Home() {
  useSEO({
    title: null,
    description: 'Tinted Technologies provides Azure PaaS architecture consulting, implementation support, cloud cost and governance guidance, Microsoft Foundry AI solutions, technical training, workshops, and mentorship for organizations and professionals.',
    path: '/'
  });
  const [engagementOpen, setEngagementOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    setSubmitStatus(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validation = validateContactForm(formData);
    if (validation.error) {
      setSubmitStatus({ type: 'error', message: validation.error });
      return;
    }

    const payload = new URLSearchParams({
      'entry.1207403898': validation.values.name,
      'entry.1186975992': validation.values.email,
      'entry.2090133804': validation.values.message,
    });

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({ type: 'success', message: 'Your request was sent. We’ll follow up by email.' });
    } catch {
      setSubmitStatus({ type: 'error', message: 'We couldn’t send your request. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleHeroRequestTraining = (e) => {
    e.preventDefault();
    prefillMessage('I\'m interested in training.\n\nCurrent technical level:\nTarget outcome:\nBiggest challenge right now:\nTimeline (if any):\n');
    scrollToSection('contact');
  };

  const handleBookScopingCall = () => {
    prefillMessage('I\'d like to book a free consulting scoping call.\n\n- Organization:\n\n- Services needed (PaaS architecture, implementation, cost and governance, or AI via Microsoft Foundry):\n\n- Tell us about your environment, goals, and timeline:\n');
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
      <HomeHeroSection
        onRequestTraining={handleHeroRequestTraining}
        onBookScopingCall={handleBookScopingCall}
      />
      <HomeMissionSection />
      <HomeTrainingSection />
      <HomeWhySection onOpenEngagement={() => setEngagementOpen(true)} onOpenPricing={() => setPricingOpen(true)} />
      <HomeConsultingSection onBookScopingCall={handleBookScopingCall} />
      <HomeContactSection
        formData={formData}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
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
