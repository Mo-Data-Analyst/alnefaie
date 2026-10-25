import { useLanguage } from '../i18n/LanguageContext.jsx';
import { whyUsPoints } from '../data/whyUs.js';
import { whyUsText } from '../data/pageText.js';
import { siteInfo } from '../data/siteInfo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import '../styles/sections/why-us.css';

/* "About Us / Why Al Nefaie" section — the menu's "About Us" link points here. */
export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="why-us" aria-labelledby="about-title">
      <div className="container why-us__layout">
        <SectionHeading id="about-title" kicker={whyUsText.kicker} title={whyUsText.title} intro={whyUsText.intro} className="why-us__heading">
          <div className="why-us__quote">
            <strong>{t(siteInfo.slogan)}</strong>
            <span>{t(whyUsText.quoteNote)}</span>
          </div>
        </SectionHeading>

        <div className="why-us__list">
          {whyUsPoints.map((point) => (
            <Reveal className="why-us__item" key={point.icon}>
              <Icon name={point.icon} size={26} strokeWidth={1.5} className="why-us__icon" />
              <h3>{t(point.title)}</h3>
              <p>{t(point.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
