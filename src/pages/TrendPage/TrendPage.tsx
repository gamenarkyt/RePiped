import { FC } from "react";
import { VideoCard } from "../../components/business/VideoCard/VideoCard";
import { Api } from "../../services/piped.service";
import styles from "./TrendPage.module.scss";

import { useQuery } from "react-query";

export const TrendPage: FC = ({}) => {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery("get trends", () => Api.getTrending());
  // const [data, setData] = useState<ITrendingVideo[]>();

  if (isLoading) return "loading...";
  if (error) return `Error: ${error.message}`;
  if (!videos) return "Data not found";

  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return (
          <VideoCard
            thumbnailUrl={video.thumbnail}
            videoName={video.title}
            videoDuration={video.duration}
            videoViews={video.views}
            dateAgo={video.uploadedDate}
            channelAvatar={video.uploaderAvatar}
            channelName={video.uploaderName}
            channelUrl={video.uploaderUrl}
            channelVerified={video.uploaderVerified}
          />
        );
      })}
    </div>
  );
};
