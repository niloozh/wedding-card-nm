import cx from "classnames";

import styles from "./Envelope.module.scss";

const Envelope = ({ isOpening, onOpen }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={cx(styles.envelope, isOpening && styles.envelopeOpening)}
      onClick={() => {
        if (!isOpening) onOpen();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      aria-label="باز کردن پاکت دعوتنامه"
      aria-disabled={isOpening}
    >
      <div className={styles.body} />

      <div className={styles.card}>
        <div className={styles.cardInner}>
          <span className={styles.cardLabel}>دعوتنامه</span>
          <span className={styles.cardNames}>نازنین و محمد</span>
        </div>
      </div>

      <div className={styles.pocketLayer}>
        <div className={styles.pocketSideLeft} />
        <div className={styles.pocketSideRight} />
        <div className={styles.pocket} />
      </div>

      <div className={cx(styles.flap, isOpening && styles.flapOpening)}>
        <div className={styles.flapPanel}>
          <div className={styles.flapFront} />
          <div className={styles.flapBack} />
        </div>
      </div>

      <div className={styles.seal} aria-hidden="true" />
    </div>
  );
};

export default Envelope;
