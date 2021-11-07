import {UserInfo} from './auth';
import {GroupInfo} from './group';

export interface QuestInfo {
  _id: string;
  meeting: GroupInfo;
  title: string;
  contents: string;
  users: {
    ongoing: UserInfo[];
    completion: UserInfo[];
  };
  usersCount: number;
  badges: string[];
  results: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface QuestData {
  meeting: string;
  title: string;
  contents: string;
  badges: string[];
}
