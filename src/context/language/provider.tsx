import React from "react";
import { defaultState, LanguageContext, LanguageState } from "./context";
import { Language, setPreferredLanguage } from "../../utils/language";

interface SetLanguageAction {
  type: "set";
  payload: Language;
}

type LanguageAction = SetLanguageAction;

function languageReducer(prevState: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case "set":
      return {
        ...prevState,
        language: action.payload,
      };
    default:
      return prevState;
  }
}

function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(languageReducer, defaultState);
  function setLanguage(language: Language) {
    dispatch({ type: "set", payload: language });
    setPreferredLanguage(language);
  }
  return (
    <LanguageContext.Provider value={{ state, setLanguage }}>{children}</LanguageContext.Provider>
  );
}

export { LanguageContextProvider };
