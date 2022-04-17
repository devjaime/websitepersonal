
   
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'es',
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  },
  resources: {
    es: {
        global:global_es
    },
    en: {
        global:global_en
    }
 }
})

export default i18n