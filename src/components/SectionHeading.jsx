import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

/** Small gold label + main heading + optional intro paragraph. */
export default function SectionHeading({ id, kicker, title, intro, centered = false, className = '', children }) {
  const { t } = useLanguage();
  return (
    <Reveal className={`section-heading ${centered ? 'section-heading--centered' : ''} ${className}`.trim()}>
      <span className="section-heading__kicker">{t(kicker)}</span>
      <h2 id={id}>{t(title)}</h2>
      {intro && <p className="section-heading__intro">{t(intro)}</p>}
      {children}
    </Reveal>
  );
}
