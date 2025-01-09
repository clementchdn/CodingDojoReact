export type TAvailableLanguages = "en" | "fr";

/**
    Dictionnary containing the text values to display in one language
 */
export type TDict = { [key: string]: string };

/**
    Dictionnary containing all text values for each language
 */
export type TTranslationsDict = Record<TAvailableLanguages, TDict>;

import english from "./en";
import french from "./fr";

export const translations: TTranslationsDict = {
  en: english,
  fr: french,
};
