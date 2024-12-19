import { IUserResponse } from "./user.types";

export interface IChat {
  id: string;
  users: IUserResponse[];
  messages?: IMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface IMessage {
  id: string;
  senderId: string;
  chatId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
