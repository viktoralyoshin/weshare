import { axiosWithAuth } from "@/api/interceptors";
import { IChat } from "@/types/chat.types";

class ChatService {
  private BASE_URL = "/chat";

  async createChat(userId: string) {
    const response = await axiosWithAuth.post<IChat>(this.BASE_URL, {
      userId: userId,
    });
    return response.data;
  }

  async getChat(id: string | string[]){
    const response = await axiosWithAuth<IChat>(`${this.BASE_URL}/${id}`)
    return response.data
  };

  async getChatsByUserId() {
    const response = await axiosWithAuth<IChat[]>(
      `${this.BASE_URL}/user/chats`
    );
    return response.data;
  }
}

export const chatService = new ChatService();
