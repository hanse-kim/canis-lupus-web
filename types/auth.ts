import {CategoryInfo} from './domain';
import {GroupInfo} from './group';

export interface UserData {
  _id: string;
  name: string;
  token: string;
}

export interface UserInfo {
  meetings: {
    joining: GroupInfo[];
    waiting: GroupInfo[];
  };
  _id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  introduce: string;
  categories: CategoryInfo[];
  quests: any[];
  plan: number;
  isTutor: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
