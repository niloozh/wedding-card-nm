import Div from "@/baseComponents/Div";
import AppImage from "@/baseComponents/AppImage";
import Icon from "@/baseComponents/Icon/Icon";

import { MAP_EMBED_URL } from "../constants";
import LocationPhoto from "../../../../assets/styles/Images/location.jpeg";
import styles from "./MapModal.module.scss";

const MapModal = ({ onClose }) => {
  return (
    <Div className={styles.overlay} onClick={onClose}>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <Div className={styles.header}>
          <Div>نقشه مکانی</Div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="بستن"
          >
            <Icon type="close" color="#680000" width="14px" height="14px" />
          </button>
        </Div>
        <iframe
          className={styles.mapFrame}
          src={MAP_EMBED_URL}
          width="100%"
          height="320"
          allowFullScreen=""
          loading="lazy"
          title="موقعیت باغ پارادایس"
        />
        <Div className="m-t-temp-3">کروکی آدرس</Div>
        <AppImage
          src={LocationPhoto}
          width={290}
          heightOverWidthAsprctRatio={0.5}
          className="br-rad-md of-hidden"
        />
      </Div>
    </Div>
  );
};

export default MapModal;
