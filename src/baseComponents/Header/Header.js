import cx from "classnames";

import Div from "@/baseComponents/Div";
import AppImage from "@/baseComponents/AppImage";
import Anchor from "@/baseComponents/Anchor";

import MenuBar from "./subs/MenuBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <Div className="bg-theme-one">
        <Div
          className={cx(styles.container, "p-x-temp-8 global-container")}
          type="flex"
          vAlign="center"
          distributedBetween
        >
          <Anchor
            to="/"
            anchorType="no-effect"
            className="width-px-80 height-px-80"
            ariaLabel="Go to Home"
          >
            <Div className="width-px-80 height-px-80">
              <AppImage
                src="/images/Logo.png"
                width={80}
                // layout="fill"
                alt="Logo of Tech Tips By Moh brand"
              />
            </Div>
          </Anchor>

          <MenuBar />
        </Div>
      </Div>
    </>
  );
};

export default Header;
