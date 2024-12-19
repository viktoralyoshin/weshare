import { IUserResponse } from "./user.types";

export interface IComment {
  id: number
  userId: string
  postId: string
  content: string
  createdAt: string
  updatedAt: string
}

export interface ILike {
  id: number
  userId: string
  postId: string
  createdAt: string
  user: IUserResponse
}

export interface IPost {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  Like: ILike[]
  Comment: IComment[]
  author: IUserResponse
}
