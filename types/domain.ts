/* eslint-disable camelcase */

export interface NextResponse<T> {
  data?: T;
  error?: string;
}

export interface BannerRecord {
  id: string;
  fields: BannerInfo;
  createdTime: string;
}

export interface BannerInfo {
  url: string;
  img_url: string;
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

export interface CategoryRecord {
  id: string;
  fields: CategoryInfo;
  createdTime: string;
}

export interface CategoryInfo {
  _id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
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
