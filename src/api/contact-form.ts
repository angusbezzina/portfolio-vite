import { CONTACT_FORM_API } from "@utils/constants";

export type ContactInquiry = {
  name: string;
  email: string;
  message: string;
  language: string;
};

export async function submitContactForm(data: ContactInquiry) {
  const response = await fetch(CONTACT_FORM_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();

  if (!body || !body.success) {
    throw new Error("Something went wrong");
  }
}
