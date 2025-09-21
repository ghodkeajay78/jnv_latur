import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'mr';

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Import translation files
import enTranslations from '../locales/en.json';
import mrTranslations from '../locales/mr.json';

const translations = {
  en: enTranslations,
  mr: mrTranslations
};

// Helper function to get nested value from object using dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
};

// Helper function to replace parameters in translation strings
const replaceParams = (text: string, params?: Record<string, string>): string => {
  if (!params) return text;
  
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{${key}}`, 'g'), value);
  }, text);
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string>): string => {
    const translation = getNestedValue(translations[language], key);
    return replaceParams(translation, params);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};