import { useState } from "react";
import cx from "classnames";

import Div from "@/baseComponents/Div/Div";
import Icon from "@/baseComponents/Icon/Icon";

import DisplayColors from "./subs/DisplayColors";
import DisplayButton from "./subs/DisplayButton";
import DisplayIcons from "./subs/DisplayIcons";
import DisplayAnchor from "./subs/DisplayAnchor";

import { DESIGN_ITEMS } from "./constants";

const DevDesign = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [chosenItem, setChosenItem] = useState("");
  return (
    <>
      {showMenu ? (
        <Div className="width-px-200 height-vh-full pos-fix pos-fix--lt of-y-auto bg-theme-one">
          {DESIGN_ITEMS?.map((item, idx) => (
            <Div
              key={idx}
              className={cx(
                "p-y-8 p-x-16 text-center m-b-8 text-white mouse-hand",
                chosenItem === item?.identifier
                  ? "bg-theme-two"
                  : "bg-theme-three"
              )}
              onClick={() => {
                setShowMenu(false);
                setChosenItem(item?.identifier);
              }}
            >
              {item?.title}
            </Div>
          ))}
        </Div>
      ) : (
        <Div
          type="flex"
          direction="vertical"
          hAlign="center"
          className="width-per-100"
        >
          <Div
            type="flex"
            hAlign="center"
            vAlign="center"
            className="pos-abs bg-theme-two br-rad-per-50 width-px-20 height-px-20 mouse-hand"
            style={{ top: "8px", right: "8px" }}
            onClick={() => {
              setChosenItem("");
              setShowMenu(true);
            }}
          >
            <Icon type="close" scale={2} color="white" />
          </Div>
          {chosenItem === "colors" ? <DisplayColors /> : ""}
          {chosenItem === "buttons" ? <DisplayButton /> : ""}
          {chosenItem === "icons" ? <DisplayIcons /> : ""}
          {chosenItem === "anchors" ? <DisplayAnchor /> : ""}
        </Div>
      )}
    </>
  );
};

export default DevDesign;
