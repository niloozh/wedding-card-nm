import cx from "classnames";
import { useSelector } from "react-redux";

import Div from "@/baseComponents/Div";
import Anchor from "@/baseComponents/Anchor";

import { MENU_ITEMS } from "../../constants";
import Hamburger from "./subs/Hamburger";
import styles from "./Mobile.module.scss";

const Mobile = () => {
  const isMobNavVisible = useSelector((state) => state.isMobNavVisible);
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <>
      <Hamburger />
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        className={cx(
          "bg-theme-six",
          styles.navContainer,
          isMobNavVisible
            ? styles.navContainerVisible
            : styles.navContainerHidden
        )}
      >
        {MENU_ITEMS?.map((item, idx) => (
          <Div
            type="flex"
            hAlign="center"
            className="width-per-100 p-all-temp-4"
            key={idx}
          >
            <Anchor
              to={item?.url}
              anchorType="no-effect"
              key={idx}
              className={cx(
                "text-theme-one-on-hover",
                activeMenu === item?.identifier
                  ? "text-theme-one"
                  : "text-white"
              )}
            >
              {item?.title}
            </Anchor>
          </Div>
        ))}
      </Div>
    </>
  );
};

export default Mobile;
