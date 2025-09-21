import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center bg-white/20 rounded-md p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-1 text-xs font-medium ${
          language === 'en' 
            ? 'bg-white text-primary hover:bg-white/90' 
            : 'text-white hover:bg-white/20'
        }`}
        onClick={() => setLanguage('en')}
        data-testid="language-english"
      >
        EN
      </Button>
      <Button
        variant={language === 'mr' ? 'default' : 'ghost'}
        size="sm"
        className={`px-2 py-1 text-xs font-medium ${
          language === 'mr' 
            ? 'bg-white text-primary hover:bg-white/90' 
            : 'text-white hover:bg-white/20'
        }`}
        onClick={() => setLanguage('mr')}
        data-testid="language-marathi"
      >
        मर
      </Button>
    </div>
  );
}
