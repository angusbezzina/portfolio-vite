import React from "react";

import { cn } from "@lib/utils";
import { Message } from "@components/chatbot/Popover";

type ChatbotMessagesProps = {
  loading: boolean;
  messages: Message[];
};

function LoadingDots() {
  return (
    <div className="flex items-stretch gap-2 rounded-lg p-3 self-start bg-foreground/80">
      <div className="h-2 w-2 shrink-0 rounded-full bg-background animate-pulse" />
      <div className="h-2 w-2 shrink-0 rounded-full bg-background animate-pulse delay-150" />
      <div className="h-2 w-2 shrink-0 rounded-full bg-background animate-pulse delay-300" />
    </div>
  );
}

export function ChatbotMessages({ loading, messages = [] }: ChatbotMessagesProps) {
  const messagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesRef.current) {
      const height = messagesRef.current.scrollHeight;
      messagesRef.current.scrollTo({ top: height, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      ref={messagesRef}
      className="w-full flex flex-col gap-4 h-full max-h-64 overflow-y-auto pt-6 pb-4"
    >
      <div className="min-w-[55%] max-w-[80%] rounded-lg p-3 self-start bg-foreground text-background animate-fade-in">
        Hey there 👋, how can I help?
      </div>
      {messages.map(({ type, message }, index) => (
        <div
          key={index}
          className={cn(
            "min-w-[55%] max-w-[80%] rounded-lg p-3",
            type !== "user"
              ? "self-start bg-foreground text-background animate-fade-in"
              : "self-end bg-brand text-white animate-fade-in",
          )}
        >
          {message}
        </div>
      ))}
      {loading && <LoadingDots />}
    </div>
  );
}
