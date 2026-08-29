import cx from "classnames";
import Div from "@/baseComponents/Div";
import Icon from "@/baseComponents/Icon/Icon";

import { TRACK_TITLE } from "../constants";
import formatTime from "../utils/formatTime";
import styles from "./MusicPlayer.module.scss";

const EQ_BARS = [0, 1, 2, 3];

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
      <Div className={cx(styles.stack, isPlaying && styles.stackPlaying)}>
        <button type="button" className={styles.mapBtn} onClick={onOpenMap}>
          <span className={styles.mapBtnIcon}>
            <Icon type="location" color="#680000" width="16px" height="16px" />
          </span>
          <span className={styles.mapBtnText}>نقشه  و آدرس </span>
        </button>

        <Div className={styles.inner}>
          <Div className={styles.playBtnWrap}>
            {isPlaying && <span className={styles.playBtnRing} aria-hidden />}
            <button
              type="button"
              className={cx(styles.playBtn, isPlaying && styles.playBtnActive)}
              onClick={onToggle}
              aria-label={isPlaying ? "توقف موسیقی" : "پخش موسیقی"}
            >
              <Icon
                type={isPlaying ? "pause" : "play"}
                color="#ffffff"
                width="12px"
                height="12px"
              />
            </button>
          </Div>

          <Div className={styles.meta}>
            <Div className={styles.trackRow}>
              <Div
                className={cx(
                  styles.equalizer,
                  isPlaying && styles.equalizerActive,
                )}
                aria-hidden
              >
                {EQ_BARS.map((bar) => (
                  <span key={bar} className={styles.eqBar} />
                ))}
              </Div>
              <span className={styles.trackTitle}>{TRACK_TITLE}</span>
              <span className={styles.trackTime}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </Div>

            <Div className={styles.progressWrap}>
              <Div
                className={cx(
                  styles.progressFill,
                  isPlaying && styles.progressFillActive,
                )}
                style={{ width: `${progress}%` }}
                aria-hidden
              />
              <input
                className={styles.progress}
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={onSeek}
                aria-label="میزان پیشرفت موسیقی"
                style={{ "--progress": `${progress}%` }}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default MusicPlayer;
