import { createContext, useContext } from 'react';

export type Language = 'en' | 'mr';

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academics': 'Academics',
    'nav.campus': 'Campus',
    'nav.admissions': 'Admissions',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'nav.faculty': 'Faculty',
    'nav.news': 'News & Events',
    'nav.hostel': 'Hostel Life',
    'nav.alumni': 'Alumni',
    'nav.gallery': 'Gallery',
    'nav.activities': 'Activities',
    'nav.resources': 'Resources',
    'nav.policies': 'Policies',
    'nav.management': 'Management',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    'common.apply': 'Apply Now',
    'common.contact': 'Contact Us',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    
    // School Info
    'school.name': 'Jankalyan Nivasi Vidyalay',
    'school.location': 'Latur, Maharashtra',
    'school.tagline': 'Excellence in Education Since 1986',
    'school.mission': 'To provide quality modern education including a strong component of culture, inculcation of values, awareness of the environment, adventure activities and physical education.',
    'school.vision': 'To develop students as responsible citizens who can contribute meaningfully to the society while maintaining the highest standards of academic excellence.',
  },
  mr: {
    // Navigation (Marathi)
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.academics': 'शैक्षणिक',
    'nav.campus': 'कॅम्पस',
    'nav.admissions': 'प्रवेश',
    'nav.achievements': 'यश',
    'nav.contact': 'संपर्क',
    'nav.faculty': 'शिक्षक',
    'nav.news': 'बातम्या आणि कार्यक्रम',
    'nav.hostel': 'वसतिगृह जीवन',
    'nav.alumni': 'माजी विद्यार्थी',
    'nav.gallery': 'चित्रशाला',
    'nav.activities': 'उपक्रम',
    'nav.resources': 'संसाधने',
    'nav.policies': 'धोरणे',
    'nav.management': 'व्यवस्थापन',

    // Common (Marathi)
    'common.learnMore': 'अधिक जाणून घ्या',
    'common.viewAll': 'सर्व पहा',
    'common.readMore': 'अधिक वाचा',
    'common.apply': 'आता अर्ज करा',
    'common.contact': 'आमच्याशी संपर्क साधा',
    'common.phone': 'दूरध्वनी',
    'common.email': 'ईमेल',
    'common.address': 'पत्ता',
    
    // School Info (Marathi)
    'school.name': 'जनकल्याण निवासी विद्यालय',
    'school.location': 'लातूर, महाराष्ट्र',
    'school.tagline': '१९८६ पासून शिक्षणातील उत्कृष्टता',
    'school.mission': 'संस्कृतीचा मजबूत घटक, मूल्यांचे स्थापन, पर्यावरणाविषयी जागरूकता, साहसी उपक्रम आणि शारीरिक शिक्षण यासह दर्जेदार आधुनिक शिक्षण प्रदान करणे.',
    'school.vision': 'विद्यार्थ्यांना जबाबदार नागरिक म्हणून विकसित करणे जे शैक्षणिक उत्कृष्टतेचे सर्वोच्च मानदंड राखून समाजात अर्थपूर्ण योगदान देऊ शकतील.',
  },
};
