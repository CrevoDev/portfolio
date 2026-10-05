import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import pt from './pt';
import en from './en';

const CONTENT = { pt, en };
const KEY = 'lang';

const readStored = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

const initialLang = () => {
  const stored = readStored();
  if (stored === 'pt' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

const LangContext = createContext({ lang: 'pt', t: pt, toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [t]);

  const toggle = useCallback(() => {
    setLang((current) => {
      const next = current === 'pt' ? 'en' : 'pt';
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* sem armazenamento: o idioma vale só para esta visita */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
