import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/utils/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (path: string) => getTranslation(language, path);
  
  return { t, language };
} 