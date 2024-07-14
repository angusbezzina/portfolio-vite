import React from "react";
import { Language, getPreferredLanguage } from "@utils/language";

export interface LanguageState {
  language: Language;
}

interface LanguageContext {
  state: LanguageState;
  setLanguage(language: Language): void;
}

export const defaultState: LanguageState = { language: getPreferredLanguage() };

export const LanguageContext = React.createContext<LanguageContext>({
  state: defaultState,
  setLanguage() {},
});

export const useLanguage = () => React.useContext(LanguageContext);
