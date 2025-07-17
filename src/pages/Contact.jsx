import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const services = [
    'General Inquiry',
    'AI Training & Workshops',
    'Cloud Architecture Consulting',
    'Open Source Collaboration',
    'Custom Software Development',
    'Technology Audits',
    'Speaking Engagements',
    'Other'
  ];

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value || value.trim().length === 0) {
          error = 'Name is required';
        } else if (value.trim().length < 3) {
          error = 'Name must be at least 3 characters long';
        }
        break;
      case 'email':
        if (!value || value.trim().length === 0) {
          error = 'Email is required';
        } else if (!value.includes('@')) {
          error = 'Email must contain @ symbol';
        }
        break;
      case 'phone':
        if (value && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)) {
          error = 'Please enter a valid US phone number (e.g., 555-123-4567)';
        }
        break;
      case 'message':
        if (!value || value.trim().length === 0) {
          error = 'Message is required';
        } else if (value.length > 160) {
          error = 'Message cannot exceed 160 characters';
        }
        break;
      case 'service':
        if (!value || value.trim().length === 0) {
          error = 'Please select a service';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate required fields
    if (!formData.name) newErrors.name = 'Name is required';
    else newErrors.name = validateField('name', formData.name);
    
    if (!formData.email) newErrors.email = 'Email is required';
    else newErrors.email = validateField('email', formData.email);
    
    if (!formData.service) newErrors.service = 'Service selection is required';
    else newErrors.service = validateField('service', formData.service);
    
    if (!formData.message) newErrors.message = 'Message is required';
    else newErrors.message = validateField('message', formData.message);
    
    // Validate optional phone field only if provided
    if (formData.phone) {
      newErrors.phone = validateField('phone', formData.phone);
    }

    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    return newErrors;
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      return false;
    }

    // Check if there are any validation errors
    const currentErrors = validateForm();
    return Object.keys(currentErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation for all fields
    const fieldError = validateField(name, value);
    
    // Update errors state
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: fieldError
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Create mailto link with form data
    const subject = `New ${formData.service || 'General'} Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service}

Message:
${formData.message}

---
This message was sent from the Tinted Technologies contact form.`;

    const mailtoLink = `mailto:technology.tinted@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Reset form after sending
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <div style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1>Let's <span className="text-gold">Connect</span></h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to collaborate, learn, or explore how we can work together? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="text-blue mb-3">Get In Touch</h2>
              <p className="mb-3">
                Whether you're interested in our training programs, consulting services, 
                or want to collaborate on open source projects, we're here to help.
              </p>
              
              <div className="card">
                <h3>What to Expect</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    ✓ Response within 24-48 hours
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    ✓ Free initial consultation
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    ✓ Customized solutions for your needs
                  </li>
                  <li>
                    ✓ Inclusive and welcoming approach
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="text-gold mb-3">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={errors.service ? 'error' : ''}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="error-message">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message * 
                    <span className={`character-count ${formData.message.length > 160 ? 'over-limit' : ''}`}>
                      ({formData.message.length}/160)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, questions, or how we can help..."
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`btn-primary ${!isFormValid() ? 'disabled' : ''}`}
                  style={{ width: '100%' }}
                  disabled={!isFormValid()}
                >
                  {isFormValid() ? 'Send Message' : 'Please Complete All Fields'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4 className="text-gold">What types of training do you offer?</h4>
              <p>
                We specialize in AI and cloud computing education, from beginner-friendly 
                workshops to advanced technical training. All programs emphasize hands-on 
                learning and inclusive practices.
              </p>
            </div>

            <div className="card">
              <h4 className="text-blue">Do you work with individuals or just organizations?</h4>
              <p>
                Both! We provide services for individuals looking to upskill, as well as 
                organizations wanting to train their teams or implement inclusive 
                technology practices.
              </p>
            </div>

            <div className="card">
              <h4 className="text-gold">What makes your approach different?</h4>
              <p>
                We center accessibility, representation, and practical application. Our 
                programs are designed to be welcoming for underrepresented groups and 
                focus on real-world skills.
              </p>
            </div>

            <div className="card">
              <h4 className="text-blue">How can I stay updated on your work?</h4>
              <p>
                Follow us on social media, join our community waitlist, or check out our 
                open source contributions on GitHub for the latest updates and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
