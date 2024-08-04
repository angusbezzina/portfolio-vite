import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneRight } from "@phosphor-icons/react";

import { Form } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { ExpandableTextarea } from "@components/ui/expandable-textarea";

const ChatbotFormSchema = z.object({
  message: z.string(),
});

type ChatbotForm = z.output<typeof ChatbotFormSchema>;

type ChatbotFormProps = {
  onSubmit(message: string): Promise<void>;
};

export default function ChatbotForm({ onSubmit }: ChatbotFormProps) {
  const form = useForm<ChatbotForm>({
    mode: "onChange",
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(ChatbotFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  async function submit(data: ChatbotForm) {
    const { message } = data;

    await onSubmit(message);
    reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submit)} className="flex items-start justify-start gap-2 pt-2">
        <ExpandableTextarea
          {...register("message")}
          disabled={isSubmitting}
          rows={2}
          maxHeight={60}
          className="text-subtle resize-none min-h-10"
        />
        <Button type="submit" disabled={isSubmitting}>
          <PaperPlaneRight />
        </Button>
      </form>
    </Form>
  );
}
