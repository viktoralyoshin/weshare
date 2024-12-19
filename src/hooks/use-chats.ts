import { chatService } from "@/services/chat.service";
import { useQuery } from "@tanstack/react-query";

export const useChats = () => {
  const { data } = useQuery({
    queryKey: ["getChats"],
    queryFn: () => chatService.getChatsByUserId(),
  });

  return data;
};
