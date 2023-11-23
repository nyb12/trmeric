import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./localization/english/translation.json";
import hiTranslation from "./localization/hindi/translation.json";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en", // Default language
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
