import { Button } from "@components/ui/button";
import { useLanguage } from "@context/language";
import { LINKS, SOCIAL_DETAILS } from "@data/information";
import { ArrowUp, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export function Footer() {
  const {
    state: { language },
  } = useLanguage();

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative w-full flex items-center justify-center gap-4 md:gap-6 py-4 bg-primary text-background">
      <a
        href={SOCIAL_DETAILS.twitter}
        className="hover:text-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterLogo size={24} />
      </a>
      <a
        href={SOCIAL_DETAILS.gitHub}
        className="hover:text-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubLogo size={24} />
      </a>
      <a
        href={SOCIAL_DETAILS.linkedIn}
        className="hover:text-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={24} />
      </a>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleScrollToTop}
        className="absolute bottom-auto top-auto right-4 gap-2"
      >
        {LINKS[language].returnToTop}
        <ArrowUp weight="bold" className="animate-bounce" size={16} />
      </Button>
    </div>
  );
}
