import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center bg-gray-100 rounded-md p-0.5">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-0.5 text-xs font-medium transition-all ${
          language === 'en' 
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
        }`}
        onClick={() => setLanguage('en')}
        data-testid="language-english"
      >
        EN
      </Button>
      <Button
        variant={language === 'mr' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-0.5 text-xs font-medium transition-all ${
          language === 'mr' 
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
        }`}
        onClick={() => setLanguage('mr')}
        data-testid="language-marathi"
      >
        मर
      </Button>
    </div>
  );
}
