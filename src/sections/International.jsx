import { useLanguage } from '../i18n/LanguageContext.jsx';
import { internationalText } from '../data/pageText.js';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import DotWorldMap from '../components/DotWorldMap.jsx';
import '../styles/sections/international.css';

export default function International() {
  const { t } = useLanguage();

  return (
    <section className="international" aria-labelledby="international-title">
      <div className="container">
        <Reveal className="international__box">
          <DotWorldMap className="international__map" />

          <div className="international__content">
            <span className="section-heading__kicker">{t(internationalText.kicker)}</span>
            <h2 id="international-title">{t(internationalText.title)}</h2>
            <p>{t(internationalText.intro)}</p>
            <Button href="#contact" withArrow>
              {t(internationalText.button)}
            </Button>
            <p className="international__note">
              <Icon name="info" size={14} strokeWidth={2} />
              <span>{t(internationalText.note)}</span>
            </p>
          </div>

          <div className="international__panel">
            <div className="international__panel-title">{t(internationalText.listTitle)}</div>
            <ul>
              {internationalText.list.map((item) => (
                <li key={item.en}>
                  <Icon name="check" size={16} strokeWidth={2} />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
