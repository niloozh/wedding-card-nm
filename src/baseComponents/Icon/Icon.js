import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

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
    </>
  );
};

export default Icon;
