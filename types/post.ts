export interface PostData {
  meeting: string;
  author?: string;
  title: string;
  contents: string;
  imageUrls: string[];
}

export interface PostInfo {
  meeting: string;
  author: string;
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

export interface CommentInfo {}
