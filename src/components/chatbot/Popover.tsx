import React from "react";
import { ChatCircle, OpenAiLogo, X } from "@phosphor-icons/react";

import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import ChatbotForm from "@components/chatbot/Form";
import { Button } from "@components/ui/button";

import { ChatbotMessages } from "./Messages";

export function ChatbotPopover({ className }: { className?: string }) {
  const [chatOpen, setChatOpen] = React.useState(false);

  function handleOpen(open: boolean) {
    setChatOpen(open);
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
                Close me
                <X size={20} />
              </>
            ) : (
              <>
                Talk to me <ChatCircle size={20} />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="w-full min-w-96">
          <div className="w-full flex flex-col p-2 text-subtle">
            <div className="w-full border absolute rounded-t-lg top-0 left-0 flex items-center justify-start gap-2 p-2 bg-background">
              <OpenAiLogo />
              <h4 className="text-heading font-medium">Let&#39;s talk</h4>
            </div>
            <ChatbotMessages />
            <ChatbotForm />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
