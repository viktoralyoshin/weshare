import { chatService } from "@/services/chat.service";
import { useQuery } from "@tanstack/react-query";

export const useChat = (id: string | string[] | undefined) => {
  if (id != undefined) {
    const { data } = useQuery({
      queryKey: ["getChat"],
      queryFn: () => chatService.getChat(id),
      refetchInterval: 500,
    });

    return data;
  }
};
