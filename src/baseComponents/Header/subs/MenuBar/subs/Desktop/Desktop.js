import cx from "classnames";
import { useSelector } from "react-redux";

import Div from "@/baseComponents/Div";
import Anchor from "@/baseComponents/Anchor";

import { MENU_ITEMS } from "../../constants";

const Desktop = () => {
  const activeMenu = useSelector((state) => state.activeMenu);
  return (
    <>
      <Div type="flex" vAlign="center">
        {MENU_ITEMS?.map((item, idx) => (
          <Anchor
            to={item?.url}
            anchorType="no-effect"
            className={cx(
              "m-l-temp-14 text-red text-theme-four-on-hover",
              activeMenu === item?.identifier
                ? "text-theme-four"
                : "text-theme-two"
            )}
            key={idx}
          >
            {item?.title}
          </Anchor>
        ))}
      </Div>
    </>
  );
};

export default Desktop;
