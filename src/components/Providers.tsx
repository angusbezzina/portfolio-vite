import { LanguageContextProvider } from "@context/language";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageContextProvider>{children}</LanguageContextProvider>;
}
