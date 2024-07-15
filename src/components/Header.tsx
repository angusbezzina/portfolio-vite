import { useLanguage } from "@context/language";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { cn } from "@lib/utils";
import useScrollPosition from "@utils/hooks/useScrollPosition";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const scrollPosition = useScrollPosition();
  const {
    state: { language },
    setLanguage,
  } = useLanguage();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-30 bg-background flex justify-between gap-4 p-2",
        scrollPosition > 10 && "shadow-md",
      )}
    >
      <Button variant="ghost" asChild>
        <a href="/" className="font-extrabold">
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
              className="gap-2 cursor-pointer font-semibold"
              onClick={() => setLanguage("spanish")}
            >
              <span className="text-2xl">🇪🇸</span> Español
            </DropdownMenuItem>
            <DropdownMenuItem
              className="gap-2 cursor-pointer font-[600]"
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
