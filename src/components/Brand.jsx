import { useLanguage } from '../i18n/LanguageContext.jsx';
import { siteInfo } from '../data/siteInfo.js';
import { commonText } from '../data/pageText.js';
import logo from '../assets/images/logo-al-nefaie.webp';

/** Logo + office name, used in the header and the footer. */
export default function Brand({ href = '#home', className = '', decorativeLogo = false }) {
  const { t } = useLanguage();
  return (
    <a href={href} className={`brand ${className}`.trim()}>
      <img src={logo} alt={decorativeLogo ? '' : t(commonText.logoAlt)} width="400" height="381" />
      <span className="brand__text">
        <span className="brand__name">{t(siteInfo.officeName)}</span>
        <span className="brand__tagline">{t(siteInfo.tagline)}</span>
      </span>
    </a>
  );
}
