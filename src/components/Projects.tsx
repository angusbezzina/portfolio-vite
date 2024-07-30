import { buttonVariants } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useLanguage } from "@context/language";
import { PROJECTS } from "@data/information";
import { separateFirst } from "@utils/words";
import { Cube } from "@components/scenes";
import { GithubLogo, Globe } from "@phosphor-icons/react";

export function Projects() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = PROJECTS[language].title;
  const caseStudies = PROJECTS.projects;

  return (
    <div
      id="projects"
      className="w-full max-w-full overflow-hidden md:h-full flex items-start justify-start"
    >
      <Carousel
        className="w-full cursor-grab"
        opts={{
          loop: true,
        }}
      >
        <div id="projects" className="w-full md:h-full flex flex-col items-start justify-center">
          <div className="w-full flex justify-between items-end p-4 md:p-8">
            <div className="w-full flex flex-col gap-3">
              <Cube className="w-16 h-16 shrink-0" />
              <h3 className="text-h2">
                {title}
                <span className="text-brand">.</span>
              </h3>
            </div>
            <div className="w-auto flex items-stretch justify-start gap-2 z-30">
              <CarouselPrevious variant="secondary" />
              <CarouselNext variant="secondary" />
            </div>
          </div>
          <CarouselContent className="w-full">
            {caseStudies.map((caseStudy) => {
              const {
                featureImageSrc,
                url,
                repoUrl,
                slug,
                stack: { frontend, backend },
              } = caseStudy;
              const project = caseStudy[language];
              const { title, description, featureImageAlt, date } = project || {};
              const { first, remaining } = separateFirst(title);

              return (
                <CarouselItem
                  key={slug}
                  className="w-full h-full grid shrink-0 grid-cols-1 md:grid-cols-2 md:items-center gap-4 items-center pb-4"
                >
                  <div className="w-full gap-3 flex items-center justify-center pl-4 md:pl-8">
                    {featureImageSrc ? (
                      <img
                        src={featureImageSrc}
                        alt={featureImageAlt}
                        className="h-52 md:h-72 w-full object-cover object-top bg-white/80 rounded-lg overflow-hidden shadow-lg"
                      />
                    ) : (
                      <div className="flex justify-center items-center w-full h-52 md:h-72 rounded-lg overflow-hidden shadow-lg bg-foreground">
                        <h2 className="text-background text-h2">
                          Coming Soon<span className="text-brand">.</span>
                        </h2>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-col items-start justify-start gap-3 pl-4 md:pl-8">
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
                    <div className="flex justify-start items-stretch gap-4">
                      {url && (
                        <a
                          href={url}
                          className={buttonVariants()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe size={16} className="mr-2" />
                          {language === "english" ? "Project" : "Proyecto"}
                        </a>
                      )}
                      {repoUrl && (
                        <a
                          href={repoUrl}
                          className={buttonVariants({ variant: "secondary" })}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubLogo size={16} className="mr-2" />
                          {language === "english" ? "Repo" : "Repositorio"}
                        </a>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
