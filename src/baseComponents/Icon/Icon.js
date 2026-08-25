import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";

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
          icon={faPlayCircle}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
      {type === "pause" ? (
        <FontAwesomeIcon
          icon={faPauseCircle}
          style={{ color, width, height, transform: `scale(${scale})` }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Icon;
