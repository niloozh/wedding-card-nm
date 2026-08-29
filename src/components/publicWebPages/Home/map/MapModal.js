import { useState } from "react";
import cx from "classnames";
import { Loader2, MapPin } from "lucide-react";
import Div from "@/baseComponents/Div";
import Icon from "@/baseComponents/Icon/Icon";

import {
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
  VENUE_ADDRESS,
} from "../constants";
import styles from "./MapModal.module.scss";

const MapModal = ({ onClose }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

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
          <Div className={styles.headerSpacer} aria-hidden />
          <Div className={styles.headerTitle}>نقشه مکانی</Div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="بستن"
          >
            <Icon type="close" color="#680000" width="14px" height="14px" />
          </button>
        </Div>

        <Div className={styles.mapWrap}>
          {!isMapLoaded && (
            <Div className={styles.mapLoading} aria-live="polite">
              <Loader2
                className={styles.mapSpinner}
                size={28}
                color="#680000"
                strokeWidth={1.75}
              />
              <span className={styles.mapLoadingText}>
                در حال بارگذاری نقشه...
              </span>
            </Div>
          )}
          <iframe
            className={cx(styles.mapFrame, isMapLoaded && styles.mapFrameLoaded)}
            src={MAP_EMBED_URL}
            width="100%"
            height="320"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="موقعیت باغ پارادایس"
            onLoad={() => setIsMapLoaded(true)}
          />
        </Div>

        <Div className={styles.addressBlock}>
          <Div className={styles.addressLabel}>آدرس</Div>
          <Div className={styles.addressText}>{VENUE_ADDRESS}</Div>
          <a
            className={styles.directionsBtn}
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} color="#fffaf5" strokeWidth={1.75} />
            <span>مسیریابی</span>
          </a>
        </Div>
      </Div>
    </Div>
  );
};

export default MapModal;
