import { useLanguage } from '../i18n/LanguageContext.jsx';
import { commonText } from '../data/pageText.js';

const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'English' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className={`language-switcher ${className}`.trim()} role="group" aria-label={t(commonText.language)}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
