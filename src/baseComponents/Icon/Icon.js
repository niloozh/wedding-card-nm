import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faPlay,
  faPause,
  faLocationDot,
  faHeart,
  faCalendar,
  faClock,
  faMusic,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({
  type = "close",
  color = "black",
  width = "16px",
  height = "16px",
  scale = 1,
}) => {
  return (
    <>
      {type === "close" ? (
        <FontAwesomeIcon
          icon={faClose}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "play" ? (
        <FontAwesomeIcon
          icon={faPlay}
          style={{
            color,
            width,
            height,
            transform: `scale(${scale}) translateX(1px)`,
          }}
        />
      ) : (
        ""
      )}
      {type === "pause" ? (
        <FontAwesomeIcon
          icon={faPause}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "location" ? (
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "heart" ? (
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "calendar" ? (
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "clock" ? (
        <FontAwesomeIcon
          icon={faClock}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "music" ? (
        <FontAwesomeIcon
          icon={faMusic}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "volumeMute" ? (
        <FontAwesomeIcon
          icon={faVolumeMute}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Icon;
