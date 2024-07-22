import { ArrowDown } from "@phosphor-icons/react";

import { FloatingLaptop } from "@components/scenes";
import { useLanguage } from "@context/language";
import { LINKS, WELCOME } from "@data/information";
import useScrollPosition from "@hooks/useScrollPosition";
import { cn } from "@lib/utils";

const HEADER_HEIGHT = 46;

export function Hero() {
  const {
    state: { language },
  } = useLanguage();
  const scrollPosition = useScrollPosition();
  function handleScroll() {
    window.scrollTo({
      top: window.innerHeight - HEADER_HEIGHT,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative h-[100svh] w-full flex flex-row justify-center items-center p-4 md:p-8">
      <div className="w-full flex flex-col text-center justify-center items-center">
        <h1 className="text-jumbo text-heading">
          {WELCOME[language].title}
          <span className="text-brand">.</span>
        </h1>
        <FloatingLaptop />
      </div>
      <button
        type="button"
        onClick={handleScroll}
        className={cn(
          "outline-none absolute font-bold text-brand bottom-4 flex flex-col items-center justify-center gap-2 left-auto right-auto transition-opacity",
          scrollPosition < 50 ? "opacity-100" : "opacity-0",
        )}
      >
        {LINKS[language].explore}
        <ArrowDown weight="bold" className="animate-bounce infinite text-foreground" />
      </button>
    </div>
  );
}
