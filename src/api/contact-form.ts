import { API_PROD_URI, API_DEV_URI, IS_PROD } from "@utils/constants";

export type ContactInquiry = {
  name: string;
  email: string;
  message: string;
  language: string;
};

function getApiUrl() {
  return IS_PROD ? API_PROD_URI : API_DEV_URI;
}

export async function submitContactForm(data: ContactInquiry) {
  const response = await fetch(getApiUrl(), {
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
