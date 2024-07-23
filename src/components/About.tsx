import { useLanguage } from "@context/language";
import { BIO } from "@data/information";
import { separateLast } from "@utils/words";
import { TorusKnot } from "@components/scenes";
import { useIsDarkMode } from "@utils/hooks/useIsDarkMode";
import { ALT_COLOR_DARK, ALT_COLOR_LIGHT } from "@utils/constants";

export function About() {
  const isDark = useIsDarkMode();
  const {
    state: { language },
  } = useLanguage();

  const title = BIO[language].title;
  const subtitle = BIO[language].subtitle;
  const { last: subtitleKey, remaining: subtitleRest } = separateLast(subtitle);
  const text = BIO[language].text;
  const skills = BIO[language].skills;

  return (
    <div
      id="about"
      className="w-full h-full flex flex-col md:flex-row items-center justify-start gap-4 text-foreground/80"
    >
      <div className="w-full md:w-1/2 flex flex-col gap-3 p-4 md:p-8">
        <TorusKnot
          color={isDark ? ALT_COLOR_DARK : ALT_COLOR_LIGHT}
          className="w-16 h-16 shrink-0"
        />
        <h3 className="text-brand text-h2">
          {title}
          <span className="text-foreground">.</span>
        </h3>
        <h5 className="text-h3">
          {subtitleRest} <span className="italic text-brand font-normal">{subtitleKey}</span>
        </h5>
        <div className="leading-8">{text}</div>
      </div>
      {skills && (
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 text-background bg-foreground/90 p-4 md:p-16">
          {skills.map((skill) => (
            <div className="flex flex-col gap-2" key={skill.title}>
              <h4 className="text-large">{skill.title}</h4>
              <ul className="text-background/60">
                {skill.skillList.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
