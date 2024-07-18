import { SOCIAL_DETAILS } from "@data/information";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <div className="w-full flex items-center justify-center gap-4 md:gap-6 py-4 bg-primary text-background">
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
    </div>
  );
}
