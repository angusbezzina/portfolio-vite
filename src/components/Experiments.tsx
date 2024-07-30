import { Cylinder } from "@components/scenes";
import { buttonVariants } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useLanguage } from "@context/language";
import { EXPERIMENTS } from "@data/information";
import { GithubLogo, Globe } from "@phosphor-icons/react";
import { separateFirst } from "@utils/words";

export function Experiments() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = EXPERIMENTS[language].title;
  const experiments = EXPERIMENTS.experimentList;

  return (
    <div
      id="experiments"
      className="relative w-full md:h-full flex flex-col items-start justify-center"
    >
      <Carousel
        className="w-full cursor-grab"
        opts={{
          loop: true,
        }}
      >
        <div className="w-full flex justify-between items-end p-4 md:p-8">
          <div className="flex flex-col gap-3">
            <Cylinder className="h-16 w-16 shrink-0" />
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
        <div className="w-full max-w-full overflow-hidden">
          <CarouselContent>
            {experiments.map((experiment) => {
              const {
                featureImageSrc,
                url,
                repoUrl,
                slug,
                stack: { frontend, backend },
              } = experiment;
              const project = experiment[language];
              const { title, description, featureImageAlt, date } = project || {};
              const { first, remaining } = separateFirst(title);

              return (
                <CarouselItem
                  key={slug}
                  className="w-full h-full flex flex-col-reverse md:items-center md:grid md:grid-cols-2 gap-4 pb-4"
                >
                  <div className="w-full flex flex-col items-start justify-start gap-3 px-4 md:px-8">
                    <h4 className="text-h4">
                      {remaining.length > 0 ? (
                        <>
                          <span className="text-brand italic font-normal">{first}</span> {remaining}
                        </>
                      ) : (
                        first
                      )}
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
                          {language === "english" ? "Experiment" : "Experimento"}
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
                  <div className="w-full gap-3 flex items-center justify-center px-4 md:px-8">
                    {featureImageSrc ? (
                      <img
                        src={featureImageSrc}
                        alt={featureImageAlt}
                        className="h-52 md:h-72 w-full max-w-full object-cover object-top bg-white/80 rounded-lg overflow-hidden shadow-lg"
                      />
                    ) : (
                      <div className="h-52 md:h-72 w-full flex items-center justify-center bg-foreground rounded-lg shadow-lg">
                        <h2 className="text-background text-h2">
                          Coming Soon<span className="text-brand">.</span>
                        </h2>
                      </div>
                    )}
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
