import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useLanguage } from "@context/language";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@api/contact-form";
import { z } from "zod";
import { CONTACT_DETAILS } from "@data/information";

const ContactFormSchema = z.object({
  name: z.string().min(3, "Please enter a real name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Don't be shy, say something!"),
  language: z.enum(["english", "spanish"]),
});

type ContactFormFields = z.output<typeof ContactFormSchema>;

export function ContactForm() {
  const [response, setResponse] = React.useState("");
  const {
    state: { language },
  } = useLanguage();
  const form = useForm<ContactFormFields>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      language,
    },
    resolver: zodResolver(ContactFormSchema),
  });

  const {
    reset,
    watch,
    formState: { isValid, isDirty },
  } = form;

  const { name } = watch();

  async function onSubmit(values: ContactFormFields) {
    try {
      console.log("VALUES", values);
      reset();
      await submitContactForm(values);

      setResponse(CONTACT_DETAILS[language].labels.responseSuccess.replace("{{name}}", name));
    } catch (err) {
      console.log(err);
      setResponse(CONTACT_DETAILS[language].labels.responseFailure.replace("{{name}}", name));
    }
  }

  return (
    <Form {...form}>
      <form
        noValidate
        className="w-full flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_DETAILS[language].labels.name}</FormLabel>
              <FormControl>
                <Input placeholder={CONTACT_DETAILS[language].placeholders.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_DETAILS[language].labels.email}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={CONTACT_DETAILS[language].placeholders.email}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_DETAILS[language].labels.message}</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="resize-none"
                  placeholder={CONTACT_DETAILS[language].placeholders.message}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={!isValid || !isDirty} type="submit">
          {CONTACT_DETAILS[language].labels.submit}
        </Button>
        {response && <p className="text-subtle">{response}</p>}
      </form>
    </Form>
  );
}
