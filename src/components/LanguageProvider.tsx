"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "zh" | "en";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "lf-labs-lang";

export function LanguageProvider({
  children,
  defaultLang = "zh",
}: {
  children: React.ReactNode;
  defaultLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(defaultLang);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }, [lang]);

  const setLang = (next: Language) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "zh" ? "en" : "zh"));

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
