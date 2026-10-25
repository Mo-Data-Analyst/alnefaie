import { useLanguage } from '../i18n/LanguageContext.jsx';
import { navigationLinks } from '../data/navigation.js';
import { services } from '../data/services.js';
import { siteInfo } from '../data/siteInfo.js';
import { footerText, contactText, commonText } from '../data/pageText.js';
import Brand from './Brand.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { getContactMethods } from './contactMethods.js';
import '../styles/footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const footerServices = services.filter((service) => service.showInFooter);
  const footerLinks = navigationLinks.filter((link) => link.href !== '#services');
  const contactMethods = getContactMethods(siteInfo.contact);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <Brand decorativeLogo className="site-footer__brand" />
            <p>{t(footerText.about)}</p>
            <p className="site-footer__slogan">{t(siteInfo.slogan)}</p>
          </div>

          <div>
            <h3 className="site-footer__title">{t(footerText.navigationTitle)}</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__title">{t(footerText.servicesTitle)}</h3>
            <ul>
              {footerServices.map((service) => (
                <li key={service.id}>
                  <a href="#services">{t(service.footerTitle || service.title)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="site-footer__title">{t(footerText.contactTitle)}</h3>
            <ul>
              {contactMethods.map((method) => (
                <li key={method.key}>
                  {method.href ? (
                    <a href={method.href} dir={method.isLtr ? 'ltr' : undefined} target={method.newTab ? '_blank' : undefined} rel={method.newTab ? 'noopener noreferrer' : undefined}>
                      {method.value ? t(method.value) : t(contactText.labels[method.key])}
                    </a>
                  ) : method.value ? (
                    <span>{t(method.value)}</span>
                  ) : (
                    <span className="placeholder-text">
                      [ {t(contactText.labels[method.key])} — {t(commonText.toBeConfirmed)} ]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} {t(footerText.rights)}
            {' · '}
            {siteInfo.privacyPolicyUrl ? (
              <a href={siteInfo.privacyPolicyUrl}>{t(footerText.privacy)}</a>
            ) : (
              <span className="placeholder-text">
                {t(footerText.privacy)} — {t(commonText.toBeConfirmed)}
              </span>
            )}
          </span>
          <LanguageSwitcher className="language-switcher--footer" />
        </div>
      </div>
    </footer>
  );
}
