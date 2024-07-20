import { Briefcase } from "@phosphor-icons/react";

import { buttonVariants } from "@components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@components/ui/carousel";
import { useLanguage } from "@context/language";
import { PROJECTS } from "@data/information";
import { separateFirst } from "@utils/words";

export function Projects() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = PROJECTS[language].title;
  const caseStudies = PROJECTS.projects;

  return (
    <div className="relative w-full md:h-full flex flex-col items-start justify-center gap-8 text-foreground/80">
      <div className="flex flex-col gap-3 p-4 md:p-8">
        <Briefcase size={64} />
        <h3 className="text-h2">
          {title}
          <span className="text-brand">.</span>
        </h3>
      </div>
      <div className="w-full max-w-full overflow-hidden">
        <Carousel
          className="cursor-grab"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {caseStudies.map((caseStudy) => {
              const {
                featureImageSrc,
                url,
                slug,
                stack: { frontend, backend },
              } = caseStudy;
              const project = caseStudy[language];
              const { title, description, featureImageAlt, date } = project || {};
              const { first, remaining } = separateFirst(title);

              return (
                <CarouselItem key={slug}>
                  <div className="flex flex-col md:flex-row gap-8 items-center p-4 md:p-8">
                    <div className="w-full md:w-1/2 gap-3 flex items-center justify-center">
                      {featureImageSrc ? (
                        <img
                          src={featureImageSrc}
                          alt={featureImageAlt}
                          className="h-full w-full min-h-52 md:min-h-[33svh] object-cover object-center bg-white/80 rounded-lg overflow-hidden shadow-lg"
                        />
                      ) : (
                        <div className="flex justify-center items-center h-full w-full min-h-52 md:min-h-[33svh] rounded-lg overflow-hidden shadow-lg bg-white/80">
                          <h2 className="text-h2">
                            Coming Soon<span className="text-brand">.</span>
                          </h2>
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-3">
                      <h4 className="text-h4">
                        <span className="text-brand italic font-normal">{first}</span> {remaining}
                        <span className="text-brand">.</span>
                      </h4>
                      <p>
                        {date}
                        <span className="text-brand">.</span>
                      </p>
                      <p className="text-subtle">
                        Stack:{" "}
                        <span className="text-brand font-normal italic">
                          {frontend} + {backend}
                        </span>
                      </p>
                      <p className="text-foreground/80 leading-8">{description}</p>
                      <a
                        href={url}
                        className={buttonVariants()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === "english" ? "See the project" : "Ver el proyecto"}
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
