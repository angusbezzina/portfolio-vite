import { ContactForm } from "@components/forms/ContactForm";
import { Torus } from "@components/scenes";
import { useLanguage } from "@context/language";
import { CONTACT_DETAILS } from "@data/information";

export function Contact() {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const preTitle = CONTACT_DETAILS[language].preTitle;
  const title = CONTACT_DETAILS[language].title;
  const email = CONTACT_DETAILS.email;
  const phone = CONTACT_DETAILS.phone;

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-start justify-center gap-8 p-4 md:p-8 text-foreground/80">
      <div className="w-full md:w-5/12 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Torus className="h-16 w-16 shrink-0" />
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
      <div className="w-full md:w-7/12 flex flex-col gap-3">
        <ContactForm />
      </div>
    </div>
  );
}
