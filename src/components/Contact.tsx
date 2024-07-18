import { ContactForm } from "@components/forms/ContactForm";
import { useLanguage } from "@context/language";
import { CONTACT_DETAILS } from "@data/information";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export function Contact() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const preTitle = CONTACT_DETAILS[language].preTitle;
  const title = CONTACT_DETAILS[language].title;
  const email = CONTACT_DETAILS.email;
  const phone = CONTACT_DETAILS.phone;

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-start justify-center gap-8 p-8 text-foreground/80">
      <div className="w-full md:w-1/3 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <PaperPlaneTilt size={64} />
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
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-3">
        <ContactForm />
      </div>
    </div>
  );
}
