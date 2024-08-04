import { CHATBOT_API } from "@utils/constants";

export async function callAssistant(prompt: string) {
  const response = await fetch(CHATBOT_API, {
    method: "POST",
    body: JSON.stringify({
      prompt,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const body = await response.json();

  if (!body || !response.ok) {
    throw new Error("Something went wrong");
  }

  const { messages } = body;

  return messages;
}
