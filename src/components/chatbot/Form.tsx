import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";

const ChatbotFormSchema = z.object({
  message: z.string(),
});

type ChatbotForm = z.output<typeof ChatbotFormSchema>;

export default function ChatbotForm() {
  const form = useForm<ChatbotForm>({
    mode: "onChange",
    defaultValues: {
      message: "",
    },
    resolver: zodResolver(ChatbotFormSchema),
  });

  const { register } = form;

  return (
    <Form {...form}>
      <form>
        <Textarea {...register("message")} rows={1} className="text-subtle resize-none" />
      </form>
    </Form>
  );
}
