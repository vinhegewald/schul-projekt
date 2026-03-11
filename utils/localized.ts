export type Locale = 'de' | 'en';

export type LocalizedText = Record<Locale, string>;
export type LocalizedTextArray = Record<Locale, string[]>;

export const getLocalizedText = (
  value: string | LocalizedText,
  locale: Locale,
) => {
  if (typeof value === 'string') {
    return value;
  }

  return value[locale] ?? value.de;
};

export const getLocalizedArray = (
  value: string[] | LocalizedTextArray,
  locale: Locale,
) => {
  if (Array.isArray(value)) {
    return value;
  }

  return value[locale] ?? value.de;
};