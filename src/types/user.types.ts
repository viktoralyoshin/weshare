import { IPost } from "./post.types";

export enum EnumUserRole {
  user = "USER",
  admin = "ADMIN",
}

export interface IProfile {
  user: IUser;
  statistics: {
    label: string;
    value: string;
  }[];
}

export interface IUser {
  id: string;
  username: string;
  displayName: string;
  role: EnumUserRole;
  createdAt: string;
  updatedAt: string;
  posts: IPost[];
}

export interface IUserResponse {
  id: string;
  username: string;
  displayName: string;
  role: EnumUserRole;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUserResponse;
}

export interface IAuthForm {
  username: string;
  password: string;
}
