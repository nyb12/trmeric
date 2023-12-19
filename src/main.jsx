import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './localization/english/translation.json';
import hiTranslation from './localization/hindi/translation.json';
import { createTheme, ThemeProvider } from '@mui/material';
import Colors from './constants/Colors.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      gradient: 'linear-gradient(to right, #FF8A00, #FFD700)',
    },
    secondary: {
      main: Colors.secondary,
      gradient: 'linear-gradient(to right, #FF8A00, #FFD700)',
    },
  },
});

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en', // Default language
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
