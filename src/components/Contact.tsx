import { ContactForm } from "@components/forms/ContactForm";
import { Torus } from "@components/scenes";
import { Button } from "@components/ui/button";
import { useLanguage } from "@context/language";
import { CONTACT_DETAILS } from "@data/information";
import { ALT_COLOR_DARK, ALT_COLOR_LIGHT } from "@utils/constants";
import { downloadPdf } from "@utils/download";
import { useIsDarkMode } from "@utils/hooks/useIsDarkMode";

export function Contact() {
  const isDark = useIsDarkMode();
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = CONTACT_DETAILS[language].title;
  const email = CONTACT_DETAILS.email;
  const phone = CONTACT_DETAILS.phone;
  const cvPath = CONTACT_DETAILS.cv;

  async function handleDownloadPdf() {
    await downloadPdf(cvPath, CONTACT_DETAILS[language].download.fileName);
  }

  return (
    <div
      id="contact"
      className="relative w-full h-full flex flex-col md:flex-row items-start justify-center gap-10 p-4 md:p-8"
    >
      <div className="w-full md:w-5/12 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Torus color={isDark ? ALT_COLOR_DARK : ALT_COLOR_LIGHT} className="h-16 w-16 shrink-0" />
          <h3 className="text-h2 text-brand">
            {title}
            <span className="text-foreground">.</span>
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${email}`}
            className="transition-colors underline decoration-transparent underline-offset-2 hover:text-brand hover:decoration-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            className="transition-colors underline decoration-transparent underline-offset-2 hover:text-brand hover:decoration-foreground"
          >
            {phone}
          </a>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start">
          <h5 className="text-h4 text-brand">{CONTACT_DETAILS[language].download.title}</h5>
          <Button onClick={handleDownloadPdf}>
            {CONTACT_DETAILS[language].download.buttonText}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-7/12 flex flex-col gap-3">
        <ContactForm />
      </div>
    </div>
  );
}
