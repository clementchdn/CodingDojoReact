import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { TAvailableLanguages, translations } from "./i18n/translations";

type TLanguageContext = {
  language: TAvailableLanguages;
  setLanguage: Dispatch<SetStateAction<TAvailableLanguages>>;
  getText: (key: string) => string;
};

export const LanguageContext = createContext<TLanguageContext>({
  language: "fr",
  setLanguage: () => undefined,
  getText: (key: string) => `${key} not found.`,
});

const getFlagEmoji = (countryCode: string | undefined): string => {
  if (!countryCode) return "";
  const baseEmojiCodePoint = 127_397;
  const codePoints = [...countryCode.toUpperCase()].map(
    (char) => baseEmojiCodePoint + (char.codePointAt(0) as number),
  );
  return String.fromCodePoint(...codePoints);
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<TAvailableLanguages>("fr");

  const getText = (key: string) => translations[language][key] ?? key;

  const options = Object.keys(translations).map((lang) => (
    <option value={lang} key={lang}>
      {getFlagEmoji(lang)}
    </option>
  ));

  return (
    <LanguageContext.Provider value={{ language, getText, setLanguage }}>
      <div
        style={{
          display: "inline-flex",
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: "9999999",
        }}
      >
        <div className="select-wrapper">
          <select
            name="lang"
            id="lang-select"
            style={{ color: "white" }}
            onChange={(e) => setLanguage(e.target.value as TAvailableLanguages)}
          >
            {options}
          </select>
        </div>
      </div>
      {children}
    </LanguageContext.Provider>
  );
}
