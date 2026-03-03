import { createContext, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();

  // دالة تبديل اللغة
  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  // مراقبة اللغة لتغيير اتجاه الموقع (Direction)
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ toggleLang, currentLang: i18n.language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);