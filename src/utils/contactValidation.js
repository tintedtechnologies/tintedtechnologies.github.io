export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 20, max: 2000 },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(formData) {
  const values = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  if (values.name.length < CONTACT_LIMITS.name.min) {
    return { error: 'Please enter a name with at least 2 characters.' };
  }

  if (values.name.length > CONTACT_LIMITS.name.max) {
    return { error: 'Name must be 100 characters or fewer.' };
  }

  if (values.email.length > CONTACT_LIMITS.email.max || !EMAIL_PATTERN.test(values.email)) {
    return { error: 'Please enter a valid email address.' };
  }

  if (values.message.length < CONTACT_LIMITS.message.min) {
    return { error: 'Please enter a message with at least 20 characters.' };
  }

  if (values.message.length > CONTACT_LIMITS.message.max) {
    return { error: 'Message must be 2,000 characters or fewer.' };
  }

  return { values };
}