import Div from "@/baseComponents/Div";

import Desktop from "./subs/Desktop";
import Mobile from "./subs/Mobile";

const MenuBar = () => {
  return (
    <>
      <Div showIn={["xs", "sm"]}>
        <Mobile />
      </Div>
      <Div showIn={["md", "lg"]}>
        <Desktop />
      </Div>
    </>
  );
};

export default MenuBar;
