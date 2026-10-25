import { useLanguage } from '../i18n/LanguageContext.jsx';
import { contactText, commonText } from '../data/pageText.js';
import { siteInfo } from '../data/siteInfo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { getContactMethods } from '../components/contactMethods.js';
import '../styles/sections/contact.css';

export default function Contact({ selectedServiceId }) {
  const { t } = useLanguage();
  const contactMethods = getContactMethods(siteInfo.contact);

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact__layout">
        <SectionHeading id="contact-title" kicker={contactText.kicker} title={contactText.title} intro={contactText.intro}>
          <ul className="contact-details">
            {contactMethods.map((method) => {
              const isMissing = !method.value && !method.href;
              const label = t(contactText.labels[method.key]);
              let content;
              if (isMissing) content = `[ ${t(commonText.toBeConfirmed)} ]`;
              else if (method.key === 'whatsapp') content = t(contactText.labels.whatsappAction);
              else content = t(method.value);

              return (
                <li key={method.key} className={`contact-details__item ${isMissing ? 'is-placeholder' : ''}`}>
                  <div className="contact-details__icon">
                    <Icon name={method.icon} size={20} strokeWidth={1.7} />
                  </div>
                  <div>
                    <small>{label}</small>
                    {method.href ? (
                      <a href={method.href} dir={method.isLtr ? 'ltr' : undefined} target={method.newTab ? '_blank' : undefined} rel={method.newTab ? 'noopener noreferrer' : undefined}>
                        {content}
                      </a>
                    ) : (
                      <strong>{content}</strong>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionHeading>

        <Reveal>
          <ContactForm selectedServiceId={selectedServiceId} />
        </Reveal>
      </div>
    </section>
  );
}
