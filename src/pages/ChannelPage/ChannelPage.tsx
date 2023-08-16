import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Api } from "../../services/piped.service";
import { VideoCard } from "../../components/business/VideoCard/VideoCard";
import styles from "./ChannelPage.module.scss";
import { Chip } from "../../components/ui/Chip/Chip";

export const ChannelPage: FC = () => {
  const { channelId } = useParams<string | string>();
  const {
    data: channel,
    isLoading,
    error,
    refetch,
  } = useQuery("get channel info", () => Api.getChannel(channelId), {
    enabled: false,
    keepPreviousData: false,
  });

  useEffect(() => {
    refetch();
  }, [channel, channelId]);

  if (isLoading) return "Loading...";
  if (error) return `Error: ${error.message}`;
  if (!channel) return "Data not found";

  return (
    <div className={styles.container}>
      <img src={channel.bannerUrl} className={styles.banner}></img>
      <div className={styles.channelcard}>
        <img
          className={styles.channelavatar}
          src={channel.avatarUrl}
          alt="channel avatar"
        />
        <div className={styles.channelinfo}>
          <div className={styles.channelstatistics}>
            <Chip fontSize="18px">{channel.name}</Chip>
            <Chip>{channel.subscriberCount} subs</Chip>
          </div>
          <Chip>{channel.description}</Chip>
        </div>
      </div>
      {/* <Border color="#5e81ac" />
      <div className={styles.tabs}>
        {data.tabs.map((tab) => {
          return (
            <Button
              onClick={() => tabClickHandler(tab)}
              style={{ width: "200px", backgroundColor: "#023e83" }}
              text={tab.name}
            />
          );
        })}
      </div>
      <div className={styles.videos}>
        {data.relatedStreams.map((relvideo) => {
          return (
            <VideoCard
              video={{ ...relvideo, uploaderAvatar: data.avatarUrl }}
            />
          );
        })}
      </div> */}
    </div>
  );
};
