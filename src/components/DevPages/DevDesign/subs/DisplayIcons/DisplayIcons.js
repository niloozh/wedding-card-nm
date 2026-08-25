import Div from "@/baseComponents/Div";
import Icon from "@/baseComponents/Icon/Icon";

import { ICON_TYPES } from "./constants";

const DisplayIcons = () => {
  return (
    <>
      <Div className="width-per-100 p-x-temp-4 m-y-temp-8">
        <Icon type="close" />
        {/* {ICON_TYPES?.map((item, idx) => (
          <Div
            type="flex"
            vAlign="center"
            className="width-per-100 bg-theme-one p-x-temp-4"
            key={idx}
          >
            <Div className="f-b">{item}:</Div>
            <Icon type={item} width={40} height={40} />
          </Div>
        ))} */}
      </Div>
    </>
  );
};

export default DisplayIcons;
