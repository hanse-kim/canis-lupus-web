/* eslint-disable camelcase */
import {ChangeEventHandler, FocusEventHandler, MouseEventHandler} from 'react';

export interface BannerRecord {
  id: string;
  fields: BannerInfo;
  createdTime: string;
}

export interface BannerInfo {
  url: string;
  img_url: string;
}

export interface ProductProps {
  id: string;
  title: string;
  desc: string;
  memberCount: number;
  url: string;
  imageUrl: string;
  tags: string[];
}

export interface TosRecord {
  id: string;
  fields: TosInfo;
  createdTime: string;
}

export interface TosInfo {
  name: string;
  content: string;
  is_required: boolean;
}

export interface RegisterData {
  [key: string]: any;
  tos: boolean[];
  email: string;
  password: string;
  mobile: string;
  nickname: string;
  description: string;
  category: string[];
}

export interface FormContentProps {
  onSubmit: () => void;
}

export interface FormProps {
  error: FormError;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocusOut?: FocusEventHandler<HTMLInputElement>;
  inputRef?: any;
}

export interface FormError {
  [key: string]: {isInvalid: boolean; message: string | null};
}

export interface ValidationResult {
  isInvalid: boolean;
  message: string | null;
}

export interface CategoryRecord {
  id: string;
  fields: CategoryInfo;
  createdTime: string;
}

export interface CategoryInfo {
  name: string;
}

export interface GroupRecord {
  id: string;
  fields: GroupInfo;
  createdTime: string;
}

export interface GroupInfo {
  category: string;
  name: string;
  description: string;
  member_count: number;
  member_count_max: number;
  image_url: string;
}

export interface FeedRecord {
  id: string;
  fields: FeedInfo;
  createdTime: string;
}

export interface FeedInfo {
  title: string;
  content: string;
  type: string;
  group_name: string;
  user_nickname: string;
  like: number;
  comment: number;
}
