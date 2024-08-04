import React from "react";
import { callAssistant as apiAssistantCall } from "@api/call-assistant";

type AssistantOutput = {
  loading: boolean;
  callAssistant(prompt: string): Promise<string[]>;
};

export function useAssistant(): AssistantOutput {
  const [loading, setLoading] = React.useState(false);

  async function callAssistant(input: string) {
    try {
      setLoading(true);

      const output: any[] = await apiAssistantCall(input);
      const aiMessages = output.filter(
        (message) => !Array.isArray(message) && message.kwargs.content.length > 0,
      );
      setLoading(false);
      return aiMessages.map((message) => message.kwargs.content);
    } catch (error) {
      console.error(error);
      setLoading(false);

      throw new Error("Failed to call Assistant");
    }
  }

  return {
    callAssistant,
    loading,
  };
}
