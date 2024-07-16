import { Flask } from "@phosphor-icons/react";

import { useLanguage } from "@context/language";
import { EXPERIMENTS } from "@data/information";

export function Experiments() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = EXPERIMENTS[language].title;
  const experiments = EXPERIMENTS.experimentList;

  return (
    <div className="relative w-full min-h-[75svh] h-full flex flex-col items-start justify-center gap-8 p-8 text-foreground/80">
      <div className="flex flex-col gap-3">
        <Flask size={64} />
        <h3 className="text-h2">
          {title}
          <span className="text-brand">.</span>
        </h3>
      </div>
      <div className="w-full max-w-full overflow-hidden"></div>
    </div>
  );
}
