import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import zh from "@/locales/zh.json";

export const LanguageResources = {
  en: { translation: en },
  es: { translation: es },
  zh: { translation: zh },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: LanguageResources,
  debug: false,
});

export default i18next;
