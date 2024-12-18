export enum EnumUserRole {
  user = "USER",
  admin = "ADMIN",
}

export interface IUserResponse {
  id: string;
  username: string;
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
