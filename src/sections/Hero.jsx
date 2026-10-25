import { useLanguage } from '../i18n/LanguageContext.jsx';
import { heroText, commonText } from '../data/pageText.js';
import { siteInfo } from '../data/siteInfo.js';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import logo from '../assets/images/logo-al-nefaie.webp';
import '../styles/sections/hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="container hero__layout">
        <div>
          <span className="hero__eyebrow">{t(heroText.eyebrow)}</span>
          <h1 id="hero-title">
            {t(heroText.titleStart)}
            <em>{t(heroText.titleHighlight)}</em>
            {t(heroText.titleEnd)}
          </h1>
          <p className="hero__lead">{t(heroText.lead)}</p>

          <div className="hero__actions">
            <Button href="#contact" withArrow>
              {t(commonText.requestConsultation)}
            </Button>
            <Button href="#services" variant="ghost">
              {t(heroText.secondaryButton)}
            </Button>
          </div>

          <ul className="hero__highlights">
            {heroText.highlights.map((item) => (
              <li key={item.icon}>
                <Icon name={item.icon} size={18} />
                <span>{t(item.text)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative card on the side (hidden from screen readers) */}
        <div className="hero-card" aria-hidden="true">
          <div className="hero-card__panel hero-card__tag">{t(heroText.cardTag)}</div>
          <div className="hero-card__panel hero-card__main">
            <img className="hero-card__logo" src={logo} alt="" width="400" height="381" />
            <div className="hero-card__slogan">{t(siteInfo.slogan)}</div>
            <div className="hero-card__rows">
              {heroText.cardItems.map((item) => (
                <div className="hero-card__row" key={item.en}>
                  <Icon name="check" size={15} strokeWidth={2.2} />
                  <span>{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
