import { useLanguage } from "@context/language";
import { LINKS, WELCOME } from "@data/information";
import { ArrowDown } from "@phosphor-icons/react";
import useScrollPosition from "@utils/hooks/useScrollPosition";

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
        <h1 className="text-brand text-jumbo font-bold">
          {WELCOME[language].title}
          <span className="text-foreground">.</span>
        </h1>
      </div>
      {scrollPosition < 50 && (
        <button
          type="button"
          onClick={handleScroll}
          className="outline-none absolute font-bold text-brand bottom-4 flex flex-col items-center justify-center gap-2 left-auto right-auto"
        >
          {LINKS[language].explore}
          <ArrowDown weight="bold" className="animate-bounce infinite" />
        </button>
      )}
    </div>
  );
}
