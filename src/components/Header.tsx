import { Button } from "./ui/button";
import { useLanguage } from "../context/language";
import { cn } from "../lib/utils";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const {
    state: { language },
    setLanguage,
  } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-background flex justify-between gap-4 p-2">
      <Button variant="ghost" asChild>
        <a href="/">
          Angus Bezzina<span className="text-brand">.</span>
        </a>
      </Button>
      <div className="flex items-center gap-2">
        <Button
          data-testid="spanish-language-button"
          variant="ghost"
          className={cn("languageButton", language === "spanish" && "")}
          onClick={() => setLanguage("spanish")}
        >
          Es<span>.</span>
        </Button>
        |
        <Button
          data-testid="english-language-button"
          // variant="ghost"
          // className={cn("languageButton", language === "english" && "")}
          onClick={() => setLanguage("spanish")}
        >
          En<span>.</span>
        </Button>
      </div>
    </header>
  );
}

export { Header };
