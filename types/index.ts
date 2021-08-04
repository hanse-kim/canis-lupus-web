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
