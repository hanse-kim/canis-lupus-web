export interface UserData {
  _id: string;
  name: string;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  [key: string]: any;
  name: string;
  email: string;
  password: string;
  introduce: string;
  categories: string[];
  image: any;
}

export interface UserToken {
  token: string;
}
