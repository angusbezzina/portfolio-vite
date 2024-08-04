import React from "react";
import { ChatCircle, OpenAiLogo, X } from "@phosphor-icons/react";

import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import ChatbotForm from "@components/chatbot/Form";
import { Button } from "@components/ui/button";

import { ChatbotMessages } from "./Messages";
import { useLanguage } from "@context/language";
import { useAssistant } from "@utils/hooks/useAssistant";

export type Speaker = "user" | "ai";
export type Message = {
  type: Speaker;
  message: string;
};

export function ChatbotPopover({ className }: { className?: string }) {
  const {
    state: { language },
  } = useLanguage();
  const { loading, callAssistant } = useAssistant();
  const [chatOpen, setChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);

  function handleOpen(open: boolean) {
    if (!open) {
      setMessages([]);
    }

    setChatOpen(open);
  }

  async function handleMessage(message: string) {
    const newMessages: Message[] = [...messages, { type: "user", message }];

    setMessages(newMessages);

    const aiMessages = await callAssistant(message);
    const lastMessage = aiMessages[aiMessages.length - 1];

    setMessages([...newMessages, { type: "ai", message: lastMessage }]);
  }

  return (
    <div className={className}>
      <Popover onOpenChange={handleOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={chatOpen ? "secondary" : "default"}
            className="flex items-center justify-start gap-1.5"
          >
            {chatOpen ? (
              <>
                {language === "spanish" ? "Cerrar" : "Close"}
                <X size={20} />
              </>
            ) : (
              <>
                {language === "spanish" ? "Háblame" : "Talk to me"} <ChatCircle size={20} />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="w-72 md:w-96">
          <div className="w-full flex flex-col p-2 text-subtle">
            <div className="w-full border absolute rounded-t-lg top-0 left-0 flex items-center justify-start gap-2 p-2 bg-background z-10">
              <OpenAiLogo />
              <h4 className="text-heading font-medium">Let&#39;s talk</h4>
            </div>
            <ChatbotMessages loading={loading} messages={messages} />
            <ChatbotForm onSubmit={handleMessage} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
