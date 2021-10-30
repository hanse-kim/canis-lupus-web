export interface UserData {
  _id: string;
  name: string;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserToken {
  token: string;
}
