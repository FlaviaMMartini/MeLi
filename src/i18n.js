import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          "Detalhes do produto": "Descripción del producto",
          "Nunca pare de procurar": "Nunca dejes de buscar",
          "Ops! algo deu errado, verifique sua conexão...":"¡Uy! algo salió mal, verifica tu conexión",
        }
      },
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, 
    interpolation: {
      escapeValue: false, 
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
export default i18n;