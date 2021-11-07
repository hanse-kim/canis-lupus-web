import {UserInfo} from './auth';
import {GroupInfo} from './group';

export interface PostData {
  meeting: string;
  author?: string;
  title: string;
  contents: string;
  imageUrls: string[];
}

export interface PostInfo {
  meeting: GroupInfo;
  author: UserInfo;
  title: string;
  contents: string;
  imageUrls: string[];
  comments: CommentInfo[];
  likes: string[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  commentsCount: number;
  likesCount: number;
  id: string;
}

export interface CommentInfo {
  _id: string;
  parent: PostInfo;
  author: UserInfo;
  contents: string;
  comments: any[];
  likes: string[];
  commentsCount: number;
  likesCount: number;
  createdAt: string;
  updatedAt: string;
}
