import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "LV" | "RU";

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("demontaza_lang");
    return (saved as Language) || "LV";
  });

  const setCurrentLang = (lang: Language) => {
    setCurrentLangState(lang);
    localStorage.setItem("demontaza_lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
