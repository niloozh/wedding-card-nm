import cx from "classnames";
import Div from "@/baseComponents/Div";

import Envelope from "./Envelope";
import styles from "./EnvelopeScene.module.scss";

const EnvelopeScene = ({ guest, isOpening, onOpen }) => {
  return (
    <Div
      type="flex"
      hAlign="center"
      vAlign="center"
      className={cx(
        "width-per-100 min-height-vh-full",
        styles.container,
        isOpening && styles.containerOpening
      )}
    >
      <Div
        className={cx(styles.scene, isOpening && styles.sceneOpening)}
      >
        <div className={styles.stage}>
          <Envelope guest={guest} isOpening={isOpening} onOpen={onOpen} />
        </div>

        {!isOpening && (
          <Div className={styles.hint}>برای باز کردن پاکت لمس کنید</Div>
        )}
      </Div>
    </Div>
  );
};

export default EnvelopeScene;
