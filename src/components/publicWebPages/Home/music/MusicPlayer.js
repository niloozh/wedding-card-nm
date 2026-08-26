import cx from "classnames";
import Div from "@/baseComponents/Div";
import Icon from "@/baseComponents/Icon/Icon";

import { TRACK_TITLE } from "../constants";
import formatTime from "../utils/formatTime";
import styles from "./MusicPlayer.module.scss";

const MusicPlayer = ({
  isPlaying,
  currentTime,
  duration,
  progress,
  onToggle,
  onSeek,
  onOpenMap,
}) => {
  return (
    <Div className={styles.controls}>
      <Div className={styles.inner}>
        <button
          type="button"
          className={cx(styles.playBtn, isPlaying && styles.playBtnActive)}
          onClick={onToggle}
          aria-label={isPlaying ? "توقف موسیقی" : "پخش موسیقی"}
        >
          <Icon
            type={isPlaying ? "pause" : "play"}
            color="#ffffff"
            width="14px"
            height="14px"
          />
        </button>

        <Div className={styles.meta}>
          <Div className={styles.trackRow}>
            <span className={styles.trackTitle}>{TRACK_TITLE}</span>
            <span className={styles.trackTime}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </Div>
          <input
            className={styles.progress}
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={onSeek}
            aria-label="میزان پیشرفت موسیقی"
          />
        </Div>

        <button type="button" className={styles.mapBtn} onClick={onOpenMap}>
          نقشه
        </button>
      </Div>
    </Div>
  );
};

export default MusicPlayer;
