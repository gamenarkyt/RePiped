import axios from "axios";
import { ITrendingVideo } from "../types/trendingvideo.interface";
import { IChannel } from "../types/channel.interface";

export const Api = {
  async getTrending(): Promise<ITrendingVideo[]> {
    const response = await axios.get<ITrendingVideo[]>(
      `https://pipedapi.kavin.rocks/trending?region=US`
    );
    return response.data;
  },
  async getChannel(channelId: string | undefined): Promise<IChannel> {
    if (typeof channelId == undefined) {
      channelId = "UCNPUUqi4kqjeaScWtsvfyvw";
    }
    const response = await axios.get<IChannel>(
      `https://pipedapi.kavin.rocks/channel/${channelId}`
    );
    return response.data;
  },
};
