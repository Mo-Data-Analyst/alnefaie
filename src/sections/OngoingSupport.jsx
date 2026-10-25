import { useLanguage } from '../i18n/LanguageContext.jsx';
import { ongoingSupportItems } from '../data/ongoingSupport.js';
import { ongoingText } from '../data/pageText.js';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import '../styles/sections/ongoing-support.css';

export default function OngoingSupport() {
  const { t } = useLanguage();

  return (
    <section className="ongoing-support" aria-labelledby="ongoing-title">
      <Reveal className="container ongoing-support__box">
        <div className="ongoing-support__intro">
          <span className="section-heading__kicker">{t(ongoingText.kicker)}</span>
          <h2 id="ongoing-title">{t(ongoingText.title)}</h2>
          <p>{t(ongoingText.intro)}</p>
          <div className="ongoing-support__cadences">
            {ongoingText.cadences.map((cadence) => (
              <span key={cadence.en}>{t(cadence)}</span>
            ))}
          </div>
          <Button href="#contact" withArrow>
            {t(ongoingText.button)}
          </Button>
        </div>

        <div className="ongoing-support__list">
          {ongoingSupportItems.map((item) => (
            <div className="ongoing-support__item" key={item.title.en}>
              <div className="ongoing-support__icon">
                <Icon name={item.icon} size={22} />
              </div>
              <div>
                <h3>{t(item.title)}</h3>
                <p>{t(item.text)}</p>
                {item.showPricingNote && <p className="ongoing-support__note">{t(ongoingText.pricingNote)}</p>}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
