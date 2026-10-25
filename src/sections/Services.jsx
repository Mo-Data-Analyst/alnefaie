import { useLanguage } from '../i18n/LanguageContext.jsx';
import { services } from '../data/services.js';
import { servicesText, commonText } from '../data/pageText.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import '../styles/sections/services.css';

export default function Services({ onSelectService }) {
  const { t } = useLanguage();

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" kicker={servicesText.kicker} title={servicesText.title} intro={servicesText.intro} />

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-card" key={service.id} delay={(index % 3) * 70}>
              <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="service-card__icon">
                <Icon name={service.icon} />
              </div>
              <h3>{t(service.title)}</h3>
              <p>{t(service.summary)}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point.en}>{t(point)}</li>
                ))}
              </ul>
              {/* Opens the contact form with this service already selected */}
              <a href="#contact" className="service-card__link" onClick={() => onSelectService(service.id)}>
                <span>{t(commonText.learnMore)}</span>
                <span className="button__arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
