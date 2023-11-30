import i18next from "i18next";

import faTranslation from "./locales/fa.json";

i18next.init({
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fa: {
      translation: faTranslation,
    },
  },
});

const t = i18next.t;

export { t };
