export interface IChannel {
  id: string;
  name: string;
  avatarUrl: string;
  bannerUrl: string;
  description: string;
  nextpage: string;
  subscriberCount: number;
  verified: boolean;
  relatedStreams?: any;
  tabs?: any;
}
