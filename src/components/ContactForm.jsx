import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { contactFormText, countries, phoneCountryCodes } from '../data/contactForm.js';
import { services, ongoingSupportOption } from '../data/services.js';
import { siteInfo } from '../data/siteInfo.js';
import Icon from './Icon.jsx';

/*
  Contact form with validation.
  Submissions are POSTed as JSON to Formspree (`contactFormEndpoint` in
  src/data/siteInfo.js). Formspree uses the `email` field as the reply-to address.
*/

const serviceOptions = [...services, ongoingSupportOption];
const emptyForm = {
  fullName: '',
  company: '',
  country: countries[0].value,
  email: '',
  countryCode: phoneCountryCodes[0],
  phone: '',
  service: '',
  message: '',
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'required';
  if (!values.email.trim()) errors.email = 'required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'email';
  const phoneDigits = values.phone.replace(/[\s-]/g, '');
  if (phoneDigits && !/^\d{7,15}$/.test(phoneDigits)) errors.phone = 'phone';
  if (!values.service) errors.service = 'required';
  return errors;
}

export default function ContactForm({ selectedServiceId }) {
  const { t } = useLanguage();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const isSending = status === 'sending';

  // Pre-select the service chosen from a service card's "Learn More" link
  useEffect(() => {
    if (selectedServiceId) setValues((current) => ({ ...current, service: selectedServiceId }));
  }, [selectedServiceId]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const foundErrors = validate(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) {
      // Move focus to the first field with a problem
      const firstInvalid = Object.keys(foundErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    const chosenService = serviceOptions.find((option) => option.id === values.service);
    const serviceName = chosenService ? chosenService.title.en : values.service;
    try {
      const response = await fetch(siteInfo.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.fullName.trim(),
          company: values.company.trim(),
          country: values.country,
          email: values.email.trim(),
          phone: values.phone.trim() ? `${values.countryCode} ${values.phone.trim()}` : '',
          service: serviceName,
          message: values.message.trim(),
          _subject: `New consultation request — ${serviceName}`,
        }),
      });
      if (!response.ok) {
        // Formspree explains rejections in `errors`; keep them in the console for debugging
        const data = await response.json().catch(() => null);
        throw new Error(data?.errors?.map((error) => error.message).join(', ') || `Formspree returned ${response.status}`);
      }
      setStatus('success');
      setValues(emptyForm);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
    }
  };

  // Shared props for each input: id, value, change handler and error wiring
  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: updateField,
    disabled: isSending,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  const errorMessage = (name) =>
    errors[name] ? (
      <span className="form-field__error" id={`contact-${name}-error`}>
        {t(contactFormText.errors[errors[name]])}
      </span>
    ) : null;

  const labels = contactFormText.fields;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={isSending}>
      <div className="contact-form__grid">
        <div className="form-field">
          <label htmlFor="contact-fullName">{t(labels.fullName)}</label>
          <input type="text" autoComplete="name" required {...fieldProps('fullName')} />
          {errorMessage('fullName')}
        </div>

        <div className="form-field">
          <label htmlFor="contact-company">
            {t(labels.company)} <span className="form-field__optional">{t(contactFormText.optional)}</span>
          </label>
          <input type="text" autoComplete="organization" {...fieldProps('company')} />
        </div>

        <div className="form-field">
          <label htmlFor="contact-country">{t(labels.country)}</label>
          <select {...fieldProps('country')}>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {t(country.label)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">{t(labels.email)}</label>
          <input type="email" autoComplete="email" dir="ltr" required {...fieldProps('email')} />
          {errorMessage('email')}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-phone">
            {t(labels.phone)} <span className="form-field__optional">{t(contactFormText.optional)}</span>
          </label>
          <div className="form-field__phone" dir="ltr">
            <select
              aria-label={t(labels.countryCode)}
              name="countryCode"
              value={values.countryCode}
              onChange={updateField}
              disabled={isSending}
            >
              {phoneCountryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input type="tel" inputMode="tel" autoComplete="tel-national" placeholder="1X XXXX XXXX" {...fieldProps('phone')} />
          </div>
          {errorMessage('phone')}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-service">{t(labels.service)}</label>
          <select required {...fieldProps('service')}>
            <option value="" disabled>
              {t(contactFormText.chooseService)}
            </option>
            {serviceOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {t(option.title)}
              </option>
            ))}
          </select>
          {errorMessage('service')}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="contact-message">
            {t(labels.message)} <span className="form-field__optional">{t(contactFormText.optional)}</span>
          </label>
          <textarea rows={5} maxLength={2000} {...fieldProps('message')} />
        </div>
      </div>

      <div className="contact-form__footer">
        <p>{t(contactFormText.privacyNote)}</p>
        <button className="button button--gold" type="submit" disabled={isSending}>
          {isSending && <span className="contact-form__spinner" aria-hidden="true" />}
          <span>{t(isSending ? contactFormText.sending : contactFormText.submit)}</span>
          {!isSending && <span className="button__arrow" aria-hidden="true">→</span>}
        </button>
      </div>

      <div role="status" aria-live="polite">
        {(status === 'success' || status === 'error') && (
          <p className={`contact-form__status contact-form__status--${status}`}>
            <Icon name={status === 'success' ? 'check' : 'info'} size={18} strokeWidth={2} />
            <span>{t(contactFormText.status[status])}</span>
          </p>
        )}
      </div>
    </form>
  );
}
