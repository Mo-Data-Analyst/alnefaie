import { useLanguage } from '../i18n/LanguageContext.jsx';
import { audiences } from '../data/audiences.js';
import { audiencesText } from '../data/pageText.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import AudienceIllustration from '../components/AudienceIllustration.jsx';
import '../styles/sections/audiences.css';

/* "Who We Serve" — the menu's "Industries" link points here. */
export default function Audiences() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="audiences" aria-labelledby="industries-title">
      <div className="container">
        <SectionHeading id="industries-title" kicker={audiencesText.kicker} title={audiencesText.title} centered />

        <div className="audiences__grid">
          {audiences.map((audience, index) => (
            <Reveal as="article" className="audience-card" key={audience.illustration} delay={(index % 4) * 70}>
              <div className="audience-card__art">
                <AudienceIllustration name={audience.illustration} />
              </div>
              <div className="audience-card__body">
                <h3>{t(audience.title)}</h3>
                <p>{t(audience.text)}</p>
                <div className="audience-card__tags">
                  {audience.tags.map((tag) => (
                    <span key={tag.en}>{t(tag)}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
