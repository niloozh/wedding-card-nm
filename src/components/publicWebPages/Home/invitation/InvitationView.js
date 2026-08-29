import cx from "classnames";
import Div from "@/baseComponents/Div";

import CardContent from "./CardContent";
import MusicPlayer from "../music/MusicPlayer";
import styles from "./InvitationView.module.scss";

const InvitationView = ({
  guestSide = "m",
  isPlaying,
  currentTime,
  duration,
  progress,
  onToggleAudio,
  onSeek,
  onOpenMap,
}) => {
  return (
    <Div
      type="flex"
      direction="vertical"
      hAlign="center"
      className={cx("p-x-temp-8 text-black", styles.container)}
    >
      <CardContent guestSide={guestSide} />
      <MusicPlayer
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        progress={progress}
        onToggle={onToggleAudio}
        onSeek={onSeek}
        onOpenMap={onOpenMap}
      />
    </Div>
  );
};

export default InvitationView;
