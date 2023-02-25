import { i18n } from '../translations';

export const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};
