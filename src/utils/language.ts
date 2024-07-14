export type Language = "english" | "spanish";

function getDefaultBrowserLanguage(): Language {
  const navigatorLanguage = window.navigator.language;
  const browserLanguage = navigatorLanguage.includes("es") ? "spanish" : "english";

  return browserLanguage;
}
// Get Language
export function getPreferredLanguage(): Language {
  const storedLanguage = localStorage.getItem("user_language");
  let language;

  if (!storedLanguage) {
    language = getDefaultBrowserLanguage();
    setPreferredLanguage(language);
  } else {
    language = storedLanguage;
  }

  if (language === "spanish") {
    return "spanish";
  }
  return "english";
}
// Set Language
export function setPreferredLanguage(language: Language) {
  localStorage.setItem("user_language", language);
}
