import { useLanguage } from "@context/language";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const {
    state: { language },
    setLanguage,
  } = useLanguage();

  console.log(language);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-background flex justify-between gap-4 p-2">
      <Button variant="ghost" asChild>
        <a href="/">
          Angus Bezzina<span className="text-brand">.</span>
        </a>
      </Button>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>{language === "spanish" ? "🇪🇸" : "🇺🇸"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="gap-2 cursor-pointer"
              onClick={() => setLanguage("spanish")}
            >
              <span className="text-2xl">🇪🇸</span> Espanol
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2 cursor-pointer"
              onClick={() => setLanguage("english")}
            >
              <span className="text-2xl">🇺🇸</span> English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
