export interface BannerRecord {
  id: string;
  fields: BannerInfo;
  createdTime: string;
}

export interface BannerInfo {
  'url': string;
  'img_url': string;
}

export interface ProductProps {
  id: string;
  title: string;
  desc: string;
  memberCount: number;
  url: string;
  imageUrl: string;
  tags: string[]
}

export interface TosRecord {
  id: string;
  fields: TosInfo;
  createdTime: string;
}

export interface TosInfo {
  'name': string;
  'content': string;
  'is_required': boolean;
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
  update: (newData: {[key: string]: any}) => void;
  onSubmit: () => void;
}
