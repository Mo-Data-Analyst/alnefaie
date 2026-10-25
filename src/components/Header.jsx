import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useIsScrolled } from '../hooks/useScrollPosition.js';
import { navigationLinks } from '../data/navigation.js';
import { commonText } from '../data/pageText.js';
import Brand from './Brand.jsx';
import Button from './Button.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import '../styles/header.css';

export default function Header() {
  const { t } = useLanguage();
  const isScrolled = useIsScrolled(40);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => event.key === 'Escape' && closeMenu();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__bar">
          <Brand />

          <nav aria-label="Main" className="site-header__nav">
            <ul>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher className="site-header__language" />
          <Button href="#contact" className="site-header__cta">
            {t(commonText.requestConsultation)}
          </Button>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            aria-label={t(commonText.menu)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile / tablet menu (hidden on wide screens by CSS) */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''} ${isScrolled ? 'is-below-small-header' : ''}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen ? true : undefined}
      >
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
            {t(link.label)}
          </a>
        ))}
        <div className="mobile-menu__actions">
          <LanguageSwitcher />
          <Button href="#contact" onClick={closeMenu}>
            {t(commonText.requestConsultation)}
          </Button>
        </div>
      </div>
    </>
  );
}
