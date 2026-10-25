import { createContext, useContext, useEffect, useState } from 'react';
import { pageMeta } from '../data/pageText.js';

/*
  Language handling for the whole site.
  - Every piece of text in /src/data is written as { ar: '...', en: '...' }.
  - t(text) returns the version for the current language.
  - The chosen language is kept in the address bar (?lang=en) so links and
    refreshes keep the same language, and in localStorage as a fallback.
*/

const LanguageContext = createContext(null);
const SUPPORTED = ['ar', 'en'];
const STORAGE_KEY = 'site-language';

function getInitialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (SUPPORTED.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    /* storage can be blocked (private mode) — ignore */
  }
  return 'ar';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = direction;
    document.title = pageMeta.title[language];
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.description[language]);

    // Keep ?lang= in the URL without reloading (keeps the current #section)
    const url = new URL(window.location.href);
    if (language === 'ar') url.searchParams.delete('lang');
    else url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language, direction]);

  const t = (text) => (text && typeof text === 'object' ? text[language] ?? text.ar : text);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
