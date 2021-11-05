import {UserInfo} from './auth';
import {CategoryInfo} from './domain';

export interface CreateGroupData {
  [key: string]: any;
  name: string;
  introduction: string;
  maxPerson: string;
  category: string;
  imageUrls: string[];
}

export interface GroupInfo {
  persons: {
    president: string;
    managers: string[];
    members: string[];
    tutors: string[];
    waiting: string[];
  };
  _id: string;
  name: string;
  introduction: string;
  imageUrls: string[];
  category: CategoryInfo;
  posts: string[];
  quests: string[];
  maxPerson: number;
  isRecruiting: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  personsCount: number;
  id: string;
}

export interface SpecificGroupInfo {
  persons: {
    president: UserInfo;
    managers: UserInfo[];
    members: UserInfo[];
    tutors: UserInfo[];
    waiting: UserInfo[];
  };
  _id: string;
  name: string;
  introduction: string;
  imageUrls: string[];
  category: CategoryInfo;
  posts: string[];
  quests: string[];
  maxPerson: number;
  isRecruiting: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  personsCount: number;
  id: string;
}
