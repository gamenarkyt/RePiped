"use client";
import { FC, MouseEvent } from "react";
import styles from "./VideoCard.module.scss";
import { AiFillEye } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { secondsToTime } from "../../../utils/secondToTime";
import { roundViews } from "../../../utils/roundViews";
import { Chip } from "../../ui/Chip/Chip";
import { useNavigate } from "react-router-dom";

interface IProps {
  thumbnailUrl: string;
  videoName: string;
  videoDuration: number;
  videoViews: number;
  dateAgo: string;
  channelAvatar: string;
  channelName: string;
  channelUrl: string;
  channelVerified: boolean;
}

export const VideoCard: FC<IProps> = ({
  thumbnailUrl,
  videoName,
  videoDuration,
  videoViews,
  dateAgo,
  channelAvatar,
  channelName,
  channelUrl,
  channelVerified,
}) => {
  const navigate = useNavigate();
  const onVideoClickHandler = () => {
    alert("video clicked");
  };
  const onChannelClickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(channelUrl);
  };

  return (
    <div className={styles.videocard} onClick={onVideoClickHandler}>
      <div className={styles.thumbnailcontainer}>
        <img className={styles.thumbnail} src={thumbnailUrl} alt="thumbnail" />
      </div>
      <span className={styles.videoname}>{videoName}</span>
      <div className={styles.videoinfo}>
        <Chip>{secondsToTime(videoDuration)}</Chip>
        <Chip>
          <AiFillEye />
          {roundViews(videoViews)}
        </Chip>
        <Chip>{dateAgo}</Chip>
      </div>
      <div className={styles.channelinfo} onClick={onChannelClickHandler}>
        <img
          className={styles.avatar}
          src={channelAvatar}
          alt="channel avatar"
        />
        <Chip fontSize="18px">
          {channelName} {channelVerified && <BiCheck />}
        </Chip>
      </div>
    </div>
  );
};
