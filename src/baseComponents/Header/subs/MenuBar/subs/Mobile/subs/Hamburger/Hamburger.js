import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Div from "@/baseComponents/Div";

import { toggleMobNav } from "@/reducer/subs/isMobNavVisible";

import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const dispatch = useDispatch();
  const isMobNavVisible = useSelector((state) => state.isMobNavVisible);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        vAlign="center"
        className={cx("mouse-hand", styles.container)}
        onClick={() => dispatch(toggleMobNav())}
      >
        <Div
          className={cx(isMobNavVisible ? styles.lineClosed : styles.line)}
        />
      </Div>
    </>
  );
};

export default Hamburger;
